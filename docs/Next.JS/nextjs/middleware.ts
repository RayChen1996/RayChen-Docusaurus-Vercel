import {
  NextResponse,
  type MiddlewareConfig,
  type NextRequest,
} from "next/server";

import { deleteSession, updateSession, getSession } from "./lib";
import isPathnameMatch from "./utils/middleware/isPathnameMatch";
import isExpired from "./utils/middleware/isExpired";
import patterns from "./utils/middleware/patterns";

export default async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  function _predicate(item: string) {
    return isPathnameMatch(pathname, item);
  }

  /** - 未登入時不能進入的路徑 */
  const isProtectedRoute = patterns.protected.some(_predicate);
  /** - 已登入後不能進入的路徑 */
  const isRestrictedRoute = patterns.restricted.some(_predicate);

  const session = await getSession();
  const token = session?.token;
  const expires = session?.expires;

  function _redirect(params: string) {
    return NextResponse.redirect(new URL(params, request.nextUrl));
  }

  if (token) {
    if (isRestrictedRoute) {
      // 已登入跳轉
      return _redirect("/");
    }

    if (isExpired(expires)) {
      // 過期的時候自動登出
      await deleteSession();
      return _redirect("/sign-in");
    }
  } else {
    if (isProtectedRoute) {
      // 未登入跳轉
      return _redirect("/sign-in");
    }
  }

  await updateSession();

  return NextResponse.next();
}

// 只接受靜態寫法
export const config: MiddlewareConfig = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};

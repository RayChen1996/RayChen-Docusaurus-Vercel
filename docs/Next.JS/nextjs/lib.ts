"use server";

import { JWTPayload, SignJWT, jwtVerify } from "jose";
import { cookies } from "next/headers";
import { addDays } from "date-fns/addDays";

/** - 密鑰 */
const jwt = process.env.SESSION_SECRET;
/** - 解碼密鑰 */
const encodedKey = new TextEncoder().encode(jwt);
/** - cookie名稱 */
const cookieName = "session";

/** - 登入資料物件 */
export interface Credentials {
  /** - 憑證 */
  token: string;
}

/** - 會話物件 */
export interface SessionObject extends Credentials {
  /** - 到期時間 */
  expires: Date;
}

/** - 加密 */
export async function encrypt(payload: JWTPayload) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7days")
    .sign(encodedKey);
}

/** - 解密 */
export async function decrypt(input: string | undefined = "") {
  try {
    const { payload } = await jwtVerify<SessionObject>(input, encodedKey, {
      algorithms: ["HS256"],
    });

    return payload;
  } catch (error) {
    console.log("Failed to verify session");
  }
}

/** - 延長日期 */
function _extendedDate() {
  return addDays(new Date(), 7);
}

/** - 建立會話 */
export async function createSession(credentials: Credentials) {
  const token = credentials?.token;

  if (!token) {
    return Promise.reject();
  }

  const cookieStore = await cookies();
  const expires = _extendedDate();
  const session = await encrypt({ token, expires });

  cookieStore.set(cookieName, session, {
    expires,
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
  });
}

/** - 登出 */
export async function deleteSession() {
  const cookieStore = await cookies();
  cookieStore.delete(cookieName);
}

/** - 取得session */
export async function getSession() {
  const cookieStore = await cookies();
  const session = cookieStore.get(cookieName)?.value;

  if (!session) {
    return null;
  }

  return await decrypt(session);
}

/** - 更新session */
export async function updateSession() {
  const cookieStore = await cookies();
  const session = cookieStore.get(cookieName)?.value;
  const payload = await decrypt(session);

  if (!session || !payload) {
    return;
  }

  const expires = _extendedDate();
  cookieStore.set(cookieName, session, {
    expires,
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
  });
}

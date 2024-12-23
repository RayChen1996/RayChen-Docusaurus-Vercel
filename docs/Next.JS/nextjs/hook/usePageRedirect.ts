import { usePathname, redirect } from "next/navigation";
import { useCallback, useMemo } from "react";
import { match, compile } from "path-to-regexp";

/**
 * - 頁面跳轉處理
 *
 * 優先放在`layout.tsx`或者`templete.tsx`，需要指定固定`pathname`，因為換頁會被替換`pathname`
 *
 * [path-to-regexp](https://github.com/pillarjs/path-to-regexp) 詳情請見此函式庫正則表達式規則
 *
 * @param source 要判斷跳轉的路徑
 * @param target 要跳轉到的位置
 * */
export default function usePageRedirect(source: string, target: string) {
  const pathname = usePathname();
  /** - 要判斷跳轉的路徑跟當前路徑相同時跳轉 */
  const matchResult = useCallback(
    (path: string) => (source ? match(source)(path) : undefined),
    [source],
  );
  /** - 組合路徑 */
  const compileTarget = useCallback(
    (params: Partial<Record<string, string | string[]>>) =>
      target ? compile(target)(params) : undefined,
    [target],
  );

  const result = useMemo(() => {
    const matchedResult = matchResult(pathname);

    if (matchedResult) {
      return compileTarget(matchedResult.params);
    }
  }, [pathname, matchResult, compileTarget]);

  if (result) {
    redirect(result);
  }
}

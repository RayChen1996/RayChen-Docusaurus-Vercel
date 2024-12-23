import { match } from "path-to-regexp";

/**
 * - 判斷路徑是否符合格式
 *
 * [path-to-regexp](https://github.com/pillarjs/path-to-regexp) 詳情請見此函式庫正則表達式規則
 *
 */
export default function isPathnameMatch(
  /** - 路徑名稱 */
  pathname: string,
  /** - 比較的字串模板 */
  template: string,
) {
  if (!pathname || !template) {
    return false;
  }

  if (pathname === template) {
    return true;
  }

  const result = match(template, { strict: true })(pathname);

  return typeof result === "object";
}

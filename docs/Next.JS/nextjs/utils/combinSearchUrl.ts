import { isNil, omit, omitBy } from "es-toolkit";
import qs from "qs";

/**
 *  - 組合搜尋網址
 * @param pathname 網址
 * @param newParams 要建立的新搜尋物件
 * @param currentSearchString 網址搜尋關鍵字字串
 * @param omitKeys 要忽略的key
 * @returns string
 */
export default function combinSearchUrl(
  pathname: string,
  newParams: Record<string, any> = {},
  /** 如果有給值就會自動合併原始值 */
  currentSearchString: string = "",
  omitKeys: string[] = [],
) {
  if (!newParams || Object.keys(newParams).length === 0) {
    return pathname;
  }

  /** - 當前搜尋參數 */
  const currentParams = currentSearchString
    ? qs.parse(currentSearchString)
    : {};

  const combinedParams = omitBy({ ...currentParams, ...newParams }, isNil);

  const finalParams = omit(combinedParams, omitKeys as any);

  const queryString = qs.stringify(finalParams);

  return `${pathname}?${queryString}`;
}

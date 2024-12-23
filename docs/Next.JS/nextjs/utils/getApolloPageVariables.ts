export interface ApolloPageVariableParams {
  /** - 第幾頁 */
  page?: number | string | null;
  /** - 共有幾筆資料 */
  count?: number | null;
  /**
   *  - 一頁多少筆資料
   *
   * @default Infinity
   * */
  limit?: number;
}

/** - 處理網址回傳`apollo`需要的頁數資訊 */
export default function getApolloPageVariables(
  params: ApolloPageVariableParams = {},
) {
  const { page, count, limit } = params;
  /** - 每頁多少筆 */
  const _limit = _toNumber(limit) || DEFAULT_VALUES.limit;
  /** - 總頁數 */
  const _count = Math.ceil(_toNumber(count) / _limit) || DEFAULT_VALUES.count;
  /** - 當前頁面 */
  const _page = Math.min(_toNumber(page), _count) || DEFAULT_VALUES.page;

  return {
    /** - 一頁多少筆資料 */
    limit: _limit,
    /** - 偏移位置 */
    offset: _limit * (_page - 1),
    /** - 總頁數 */
    count: _count,
    /** - 當前頁數 */
    page: _page,
  };
}

/** - 預設值 */
const DEFAULT_VALUES = {
  limit: Infinity,
  count: 1,
  page: 1,
};

function _toNumber(params: unknown) {
  switch (typeof params) {
    case "string":
      return parseInt(params, 10);
    case "number":
      return Math.max(0, params);
    default:
      return NaN;
  }
}

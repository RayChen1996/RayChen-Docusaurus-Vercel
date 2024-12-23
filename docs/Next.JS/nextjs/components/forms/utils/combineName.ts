/** - 組合欄位名稱 */
export default function combineName(
  names: (string | number | null | undefined)[],
) {
  return names.filter(_filter).join(".");
}

function _filter(params: any) {
  switch (typeof params) {
    case "string":
      return Boolean(params);
    case "number":
      return Number.isInteger(params);
    default:
      return false;
  }
}

import { format } from "date-fns";

type FormatType = "date" | "date-time";

/**
 * - 統一日期格式
 * @param value 日期參數
 * @param type 格式化類型
 */
export default function dateFormat(
  value?: number | string | Date | null,
  type?: FormatType,
) {
  if (!value) {
    return undefined;
  }

  return format(value, _switchFormatStr(type));
}

function _switchFormatStr(params?: FormatType) {
  switch (params) {
    case "date-time":
      return "LL/dd/yyyy hh:mm:ss a";
    case "date":
    default:
      return "LL/dd/yyyy";
  }
}

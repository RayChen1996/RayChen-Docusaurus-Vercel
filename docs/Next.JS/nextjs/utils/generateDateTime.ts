import { formatISO } from "date-fns";

/** - 產生時間標籤的`dateTime`屬性值 */
export default function generateDateTime(
  value?: number | string | Date | null,
) {
  if (!value) {
    return undefined;
  }

  return formatISO(value);
}

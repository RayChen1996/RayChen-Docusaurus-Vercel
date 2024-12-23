import { isPlainObject } from "es-toolkit";

/** - 物件key依據 */
const properties: string[] = ["key", "id"];
/** - 取得物件key */
export default function getItemKey(item: unknown) {
  if (!isPlainObject(item)) {
    return;
  }

  for (const property of properties) {
    const element = item[property];
    if (element) {
      return element;
    }
  }
}

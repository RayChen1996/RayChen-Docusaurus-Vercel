import type { AlertButton } from "./type";

/** - 簡易生成物件`ID` */
export function generateUUID() {
  const e = 21;
  const a = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";
  const r = crypto.getRandomValues(new Uint8Array(e));
  let t = "";

  for (let n = 0; n < e; n++) {
    t += a[63 & r[n]];
  }
  return t;
}

/** - 預設值 */
export const initial = {
  /** - 預設按鈕 */
  button: {
    id: "initial",
    onClick: () => {},
    style: "cancel",
    text: "close",
  } as AlertButton,
};

export function buttonClasses(params: AlertButton["style"]) {
  switch (params) {
    case "destructive":
      return "btn-outline btn-error";
    case "default":
      return "btn-primary";
    case "cancel":
    default:
      return "btn-ghost";
  }
}

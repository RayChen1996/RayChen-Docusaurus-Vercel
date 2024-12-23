import React from "react";

/** - 解析file input回傳 */
export default function fileInputOnChange(onChange?: (file: File) => void) {
  return function (event: React.ChangeEvent<HTMLInputElement>) {
    if (typeof onChange !== "function") return;

    const { files } = event.target;

    if (!files) return;

    for (const file of files) {
      onChange(file);
    }

    event.target.value = "";
  };
}

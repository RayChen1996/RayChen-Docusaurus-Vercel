import React from "react";

/** - 在`input`的`onChange`檔案格式轉`url` */
export function onChangeInputFileToURL(onChange: (value: string) => void) {
  return function (event: React.ChangeEvent<HTMLInputElement>) {
    const files = event.target.files;
    if (files && files[0]) {
      inputFileToURL(files[0], onChange);
    }
  };
}
/** - `input`檔案格式轉`url` */
export function inputFileToURL(file: Blob, onChange: (value: string) => void) {
  const reader = new FileReader();
  reader.onload = () => {
    const result = reader.result;
    if (typeof result === "string") {
      onChange?.(result);
    }
  };
  reader.readAsDataURL(file);
}

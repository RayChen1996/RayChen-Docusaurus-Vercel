import clsx from "clsx";
import React, { forwardRef } from "react";

import type { BaseInputProps } from "./types";

import { getFileInputVariantClassName } from "./utils/variantClassName";

export type FileInputProps = BaseInputProps;

export default forwardRef<HTMLInputElement, FileInputProps>(function FileInput(
  { error, variant, className, ...props },
  ref,
) {
  return (
    <input
      {...props}
      ref={ref}
      type="file"
      className={clsx(
        "file-input font-mono focus:file-input-primary",
        getFileInputVariantClassName(variant),
        error ? "file-input-error" : null,
        className,
      )}
    />
  );
});

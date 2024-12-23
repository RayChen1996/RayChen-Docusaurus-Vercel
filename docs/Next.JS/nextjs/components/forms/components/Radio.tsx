import clsx from "clsx";
import React, { forwardRef } from "react";

import type { BaseInputProps } from "./types";

export type RadioProps = BaseInputProps;

export default forwardRef<HTMLInputElement, RadioProps>(function Radio(
  { error, className, ...props },
  ref,
) {
  return (
    <input
      {...props}
      ref={ref}
      type="radio"
      className={clsx(
        "radio-primary radio",
        error ? "radio-error" : null,
        className,
      )}
    />
  );
});

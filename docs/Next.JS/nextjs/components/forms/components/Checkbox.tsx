import clsx from "clsx";
import React, { forwardRef } from "react";

import type { BaseInputProps } from "./types";

export type CheckboxProps = BaseInputProps;

export default forwardRef<HTMLInputElement, CheckboxProps>(function Checkbox(
  { error, className, ...props },
  ref,
) {
  return (
    <input
      {...props}
      ref={ref}
      type="checkbox"
      className={clsx(
        "checkbox-primary checkbox",
        error ? "checkbox-error" : null,
        className,
      )}
    />
  );
});

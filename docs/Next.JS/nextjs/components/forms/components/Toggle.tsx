import clsx from "clsx";
import React, { forwardRef } from "react";

import type { BaseInputProps } from "./types";

export type ToggleProps = BaseInputProps;

export default forwardRef<HTMLInputElement, ToggleProps>(function Toggle(
  { error, className, ...props },
  ref,
) {
  return (
    <input
      {...props}
      ref={ref}
      type="checkbox"
      className={clsx(
        "toggle toggle-primary",
        error ? "toggle-error" : null,
        className,
      )}
    />
  );
});

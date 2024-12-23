import clsx from "clsx";
import React, { forwardRef } from "react";

import type { BaseInputProps } from "./types";

export type RangeProps = BaseInputProps;

export default forwardRef<HTMLInputElement, RangeProps>(function Range(
  { error, className, ...props },
  ref,
) {
  return (
    <input
      {...props}
      ref={ref}
      type="range"
      className={clsx("range", error ? "range-error" : null, className)}
    />
  );
});

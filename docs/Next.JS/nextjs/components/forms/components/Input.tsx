import clsx from "clsx";
import React, { forwardRef } from "react";

import type { BaseInputProps } from "./types";

import { getInputVariantClassName } from "./utils/variantClassName";
import {
  getMonoInputInputModeClassName,
  getMonoInputTypeClassName,
} from "./utils/inputMonoClassName";

export type InputProps = BaseInputProps;

export default forwardRef<HTMLInputElement, InputProps>(function Input(
  { error, variant, className, ...props },
  ref,
) {
  return (
    <input
      {...props}
      ref={ref}
      className={clsx(
        "input focus:input-primary",
        getInputVariantClassName(variant),
        getMonoInputInputModeClassName(props.inputMode) ||
          getMonoInputTypeClassName(props.type),
        error ? "input-error" : null,
        className,
      )}
    />
  );
});

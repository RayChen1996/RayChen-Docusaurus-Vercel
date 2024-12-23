import clsx from "clsx";
import React, { forwardRef } from "react";
import { NumericFormat, type NumericFormatProps } from "react-number-format";

import type { InputStateProps, InputVariantProps } from "./types";

import { getInputVariantClassName } from "./utils/variantClassName";

export interface NumberInputProps
  extends NumericFormatProps,
    InputStateProps,
    InputVariantProps {}

export default forwardRef<HTMLInputElement, NumberInputProps>(
  function NumberInput({ error, className, variant, ...props }, ref) {
    return (
      <NumericFormat
        {...props}
        getInputRef={props.getInputRef ?? ref}
        className={clsx(
          "input font-mono focus:input-primary",
          getInputVariantClassName(variant),
          error ? "input-error" : null,
          className,
        )}
      />
    );
  },
);

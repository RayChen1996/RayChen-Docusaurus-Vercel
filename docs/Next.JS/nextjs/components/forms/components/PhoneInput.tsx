import clsx from "clsx";
import React, { forwardRef } from "react";
import { PatternFormat, type PatternFormatProps } from "react-number-format";

import type { InputStateProps, InputVariantProps } from "./types";

import { getInputVariantClassName } from "./utils/variantClassName";

export interface PhoneInputProps
  extends Omit<PatternFormatProps, "format">,
    InputStateProps,
    InputVariantProps {
  format?: PatternFormatProps["format"];
}

export default forwardRef<HTMLInputElement, PhoneInputProps>(
  function PhoneInput({ error, className, variant, ...props }, ref) {
    return (
      <PatternFormat
        {...props}
        allowEmptyFormatting={props.allowEmptyFormatting ?? true}
        format={props.format ?? "###-###-####"}
        patternChar={props.patternChar ?? "#"}
        mask={props.mask ?? "_"}
        getInputRef={props.getInputRef ?? ref}
        valueIsNumericString
        className={clsx(
          "input font-mono focus:input-primary",
          getInputVariantClassName(variant),
          error ? "input-error" : null,
          className,
        )}
        inputMode="tel"
      />
    );
  },
);

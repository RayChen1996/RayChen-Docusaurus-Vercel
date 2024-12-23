import clsx from "clsx";
import React, { forwardRef, useCallback, useRef } from "react";
import { NumericFormat, type NumericFormatProps } from "react-number-format";

import type { InputStateProps, InputVariantProps } from "./types";

import { getInputVariantClassName } from "./utils/variantClassName";

export interface NumberInputProps
  extends NumericFormatProps,
    InputStateProps,
    InputVariantProps {
  /** - 最大百分比 */
  maxPercent?: number;
}

export default forwardRef<HTMLInputElement, NumberInputProps>(
  function NumberInput(
    { error, className, variant, maxPercent, value, onValueChange, ...props },
    ref,
  ) {
    const propsRef = useRef({ onValueChange });
    propsRef.current.onValueChange = onValueChange;

    const _isAllowed: NonNullable<NumberInputProps["isAllowed"]> = useCallback(
      ({ floatValue }) => {
        return (
          floatValue === undefined ||
          (typeof maxPercent === "number" ? floatValue <= maxPercent : true)
        );
      },
      [maxPercent],
    );

    const _onValueChange: NonNullable<NumberInputProps["onValueChange"]> =
      useCallback((values, sourceInfo) => {
        const { floatValue, formattedValue } = values;
        propsRef.current.onValueChange?.(
          {
            ...formatPercentageValue(floatValue),
            formattedValue,
          },
          sourceInfo,
        );
      }, []);

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
        value={typeof value === "number" ? value * denominator : value}
        onValueChange={_onValueChange}
        isAllowed={_isAllowed}
        suffix={"\u00A0%"}
      />
    );
  },
);

/** - 分母 */
const denominator = 100;

/** - 轉換成分數小數點 */
function toFloat(value: number) {
  return value / denominator;
}

/** - 轉換輸入值 */
function formatPercentageValue(floatValue: number | undefined) {
  if (floatValue === undefined) {
    return {
      floatValue: undefined,
      value: "",
    };
  } else {
    const normalizedValue = toFloat(floatValue);
    return {
      floatValue: normalizedValue,
      value: String(normalizedValue),
    };
  }
}

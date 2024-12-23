import clsx from "clsx";
import React, { forwardRef } from "react";

import type { BaseInputProps } from "./types";

import { getInputVariantClassName } from "./utils/variantClassName";

export interface IconInputProps extends BaseInputProps {
  /** - 前綴 */
  renderPrefix?: React.ReactNode;
  /** - 後綴 */
  renderSuffix?: React.ReactNode;
}

export default forwardRef<HTMLInputElement, IconInputProps>(function IconInput(
  { error, variant, renderPrefix, renderSuffix, className, ...props },
  ref,
) {
  return (
    <label
      className={clsx(
        "input focus-within:input-primary",
        "flex items-center gap-2",
        getInputVariantClassName(variant),
        className,
      )}
    >
      {renderPrefix}
      <input
        {...props}
        ref={ref}
        type="text"
        className={clsx(
          "grow",
          monoInputMode.includes(props.inputMode) ||
            monoInputType.includes(props.type)
            ? "font-mono"
            : null,
          error ? "input-error" : null,
        )}
      />
      {renderSuffix}
    </label>
  );
});

const monoInputMode: Array<
  React.HTMLAttributes<HTMLInputElement>["inputMode"]
> = ["email", "numeric", "decimal", "tel", "url"];

const monoInputType: Array<React.HTMLInputTypeAttribute | undefined> = [
  "date",
  "datetime-local",
  "email",
  "number",
  "password",
  "time",
  "week",
  "month",
  "url",
];

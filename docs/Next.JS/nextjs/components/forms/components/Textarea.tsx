import clsx from "clsx";
import React, { forwardRef } from "react";

import type { BaseTextAreaProps } from "./types";

import { getTextareaVariantClassName } from "./utils/variantClassName";
import { getMonoInputInputModeClassName } from "./utils/inputMonoClassName";

export type TextareaProps = BaseTextAreaProps;

export default forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  { error, variant, className, ...props },
  ref,
) {
  return (
    <textarea
      {...props}
      ref={ref}
      className={clsx(
        "textarea focus:textarea-primary",
        getTextareaVariantClassName(variant),
        getMonoInputInputModeClassName(props.inputMode),
        error ? "textarea-error" : null,
        className,
      )}
    />
  );
});

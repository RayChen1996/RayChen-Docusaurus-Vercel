import React from "react";

import type { BaseInputProps } from "./types";

export interface CheckboxChipProps extends Omit<BaseInputProps, "value"> {
  label?: string;
}

export default function CheckboxChip({
  label,
  className,
  ...props
}: CheckboxChipProps) {
  return (
    <label className={className}>
      <input {...props} type="checkbox" className="peer hidden" />
      <span className="btn btn-sm h-auto select-none rounded-full py-2 peer-checked:btn-primary">
        {label}
      </span>
    </label>
  );
}

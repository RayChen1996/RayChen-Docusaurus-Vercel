import React from "react";
import RequiredMark from "./RequiredMark";

export interface FieldLabelProps
  extends Pick<
    React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    "required"
  > {
  label?: string;
  labelAlt?: string;
}

export default function FieldLabel({
  label,
  labelAlt,
  required,
}: FieldLabelProps) {
  return (
    <div className="label">
      <div className="label-text flex items-center gap-1">
        {label ? <span>{label}</span> : null}
        {required ? <RequiredMark /> : null}
      </div>
      {labelAlt ? <span className="label-text-alt">{labelAlt}</span> : null}
    </div>
  );
}

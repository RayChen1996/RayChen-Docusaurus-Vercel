import clsx from "clsx";
import React from "react";

export interface InfoChipProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  > {
  label?: string | null;
  mono?: boolean;
}

export default function InfoChip({
  label,
  mono,
  className,
  ...props
}: InfoChipProps) {
  return (
    <span
      {...props}
      className={clsx("badge badge-lg", mono ? "font-mono" : null, className)}
    >
      {label}
    </span>
  );
}

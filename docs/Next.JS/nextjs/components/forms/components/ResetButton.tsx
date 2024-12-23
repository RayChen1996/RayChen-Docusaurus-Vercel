import clsx from "clsx";
import React, { memo } from "react";

export interface ResetButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  label?: string;
  loading?: boolean;
  disabled?: boolean;
}

export default memo(function ResetButton({
  loading,
  label,
  ...props
}: ResetButtonProps) {
  const _disabled = loading || props.disabled;

  return (
    <button
      {...props}
      type="reset"
      className={clsx("btn", props.className)}
      disabled={_disabled}
    >
      {loading ? <span className="loading" /> : null}
      {label ?? "Reset"}
    </button>
  );
});

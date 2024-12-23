import clsx from "clsx";
import React, { memo } from "react";

export interface SubmitButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  label?: string;
  loading?: boolean;
  disabled?: boolean;
}

export default memo(function SubmitButton({
  loading,
  label,
  ...props
}: SubmitButtonProps) {
  const _disabled = loading || props.disabled;

  return (
    <button
      {...props}
      type="submit"
      className={clsx("btn btn-primary", props.className)}
      disabled={_disabled}
    >
      {loading ? <span className="loading" /> : null}
      {label ?? "Submit"}
    </button>
  );
});

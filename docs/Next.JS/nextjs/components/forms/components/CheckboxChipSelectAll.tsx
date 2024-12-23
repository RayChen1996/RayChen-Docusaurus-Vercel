import React, { useEffect, useRef } from "react";

export interface CheckboxChipSelectAllProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  /** - 已選擇的數量 */
  count?: number;
  /** - 總數 */
  total?: number;
}

export default function CheckboxChipSelectAll({
  count = 0,
  total = 0,
  ...props
}: CheckboxChipSelectAllProps) {
  const checkboxRef = useRef<HTMLInputElement>(null);
  const indeterminate = count > 0 && count < total;

  useEffect(() => {
    if (checkboxRef.current) {
      checkboxRef.current.indeterminate = indeterminate;
    }
  }, [indeterminate]);

  return (
    <label className="label cursor-pointer justify-start gap-2 self-start">
      <input
        {...props}
        ref={checkboxRef}
        checked={count === total}
        type="checkbox"
        className="checkbox-primary checkbox"
      />
      <span className="label-text">All</span>
    </label>
  );
}

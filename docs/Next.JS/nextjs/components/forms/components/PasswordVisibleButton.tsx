import React from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";
import clsx from "clsx";

export interface PasswordVisibleProps
  extends Pick<React.DOMAttributes<HTMLButtonElement>, "onClick"> {
  visible: boolean;
}

/** - 密碼輸入框控制狀態按鈕 */
export default function PasswordVisibleButton({
  visible,
  onClick,
}: PasswordVisibleProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx("swap swap-rotate", visible ? "swap-active" : null)}
    >
      <EyeIcon className="swap-on" />
      <EyeOffIcon className="swap-off" />
    </button>
  );
}

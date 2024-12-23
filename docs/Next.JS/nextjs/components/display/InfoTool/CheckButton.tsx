import { CheckIcon } from "lucide-react";

import { ICON_SIZE } from "./config";
import type { CommonButtonProps } from "./types";

export interface CheckButtonProps extends CommonButtonProps {
  onCheck?: () => void;
}

export default function CheckButton({ onCheck, disabled }: CheckButtonProps) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onCheck}
      className="btn btn-circle btn-success btn-sm"
    >
      <CheckIcon size={ICON_SIZE} />
    </button>
  );
}

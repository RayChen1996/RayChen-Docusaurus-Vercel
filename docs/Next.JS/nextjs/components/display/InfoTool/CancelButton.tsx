import { XIcon } from "lucide-react";

import { ICON_SIZE } from "./config";
import type { CommonButtonProps } from "./types";

export interface CancelButtonProps extends CommonButtonProps {
  onCancel?: () => void;
}

export default function CancelButton({
  onCancel,
  disabled,
}: CancelButtonProps) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onCancel}
      className="btn btn-circle btn-error btn-sm"
    >
      <XIcon size={ICON_SIZE} />
    </button>
  );
}

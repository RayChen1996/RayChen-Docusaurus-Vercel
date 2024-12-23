import { TrashIcon } from "lucide-react";

import { ICON_SIZE } from "./config";
import type { CommonButtonProps } from "./types";

export interface RemoveButtonProps extends CommonButtonProps {
  onRemove?: () => void;
}

export default function RemoveButton({
  onRemove,
  disabled,
}: RemoveButtonProps) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onRemove}
      className="btn btn-circle btn-error btn-sm"
    >
      <TrashIcon size={ICON_SIZE} />
    </button>
  );
}

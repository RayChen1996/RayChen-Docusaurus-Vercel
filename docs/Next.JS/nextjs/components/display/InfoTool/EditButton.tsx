import { PencilIcon } from "lucide-react";

import { ICON_SIZE } from "./config";
import type { CommonButtonProps } from "./types";

export interface EditButtonProps extends CommonButtonProps {
  onEdit?: () => void;
}

export default function EditButton({ onEdit, disabled }: EditButtonProps) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onEdit}
      className="btn btn-circle btn-info btn-sm"
    >
      <PencilIcon size={ICON_SIZE} />
    </button>
  );
}

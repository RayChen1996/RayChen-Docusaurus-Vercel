import clsx from "clsx";
import { CircleAlertIcon } from "lucide-react";
import React from "react";
import { type FieldError } from "react-hook-form";

export interface FieldMessageProps {
  fieldError?: FieldError;
  error?: boolean;
  message?: string;
}

/** - 欄位訊息 */
export default function FieldMessage({
  fieldError,
  error,
  message,
}: FieldMessageProps) {
  const text = fieldError?.message || message;
  const _error = error || Boolean(fieldError);

  if (!text) {
    return null;
  }

  return (
    <div className="label">
      <div
        className={clsx(
          "label-text-alt flex gap-1",
          _error ? "text-error" : null,
        )}
      >
        {_error ? <CircleAlertIcon size={16} /> : null}
        <p>{text}</p>
      </div>
    </div>
  );
}

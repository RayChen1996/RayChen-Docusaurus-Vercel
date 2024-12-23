import clsx from "clsx";
import React, { forwardRef, memo } from "react";
import { EyeIcon, TrashIcon, UploadCloudIcon } from "lucide-react";

import type { BaseInputProps } from "./types";
import UploadFile from "@/firebase/components/storage/UploadFile";
import fileInputOnChange from "../utils/fileInputOnChange";

import FilePicker from "./FilePicker";
import RadialProgress from "@/components/ui/RadialProgress";

export interface FirebaseFileInputProps
  extends Omit<BaseInputProps, "onChange"> {
  uploadUrl?: string | (() => string);
  onChange?: (...event: unknown[]) => void;
  /** - 按下刪除扭的功能 */
  onRemove?: () => void;
}

export default forwardRef<HTMLInputElement, FirebaseFileInputProps>(
  function FirebaseFileInput(
    {
      onRemove,
      error,
      uploadUrl,
      value,
      onChange,
      disabled,
      className,
      readOnly,
      ...props
    },
    ref,
  ) {
    return (
      <UploadFile
        render={([upload, { loading, progress }]) => {
          const _disabled = disabled || loading || readOnly;

          function _renderTool() {
            if (progress > 0 && progress < 1) {
              return <ProgressBar progress={progress} />;
            } else if (value) {
              return <PreviewButton value={value} />;
            }
            return null;
          }

          return (
            <div className={clsx("join", className)}>
              {_renderTool()}
              <FilePicker
                {...props}
                ref={ref}
                onChange={fileInputOnChange((file) => {
                  upload(
                    file,
                    (function () {
                      switch (typeof uploadUrl) {
                        case "string":
                          return uploadUrl;
                        case "function":
                          return uploadUrl();
                        default:
                          return undefined;
                      }
                    })(),
                    {
                      contentType: file.type,
                    },
                  );
                })}
                disabled={_disabled}
                className={clsx(
                  "btn join-item grow",
                  error ? "btn-error" : "btn-ghost bg-base-100",
                  _disabled ? "btn-disabled" : "border-base-content/20",
                )}
              >
                <UploadCloudIcon size={ICON_SIZE} />
              </FilePicker>
              {typeof onRemove === "function" ? (
                <RemoveButton onRemove={onRemove} disabled={_disabled} />
              ) : null}
            </div>
          );
        }}
        onChangeDownloadURL={onChange}
      />
    );
  },
);

function ProgressBar({ progress }: { progress: number }) {
  return (
    <div className="btn btn-square btn-info join-item">
      <RadialProgress
        value={progress}
        size="2rem"
        thickness="2px"
        className="text-xs"
      />
    </div>
  );
}

const PreviewButton = memo(function PreviewButton({
  value,
}: Pick<BaseInputProps, "value">) {
  function _preview() {
    if (value && typeof value === "string") {
      window.open(value, "_blank");
    }
  }

  return (
    <button
      onClick={_preview}
      type="button"
      disabled={!value}
      className="btn btn-square btn-primary join-item"
    >
      <EyeIcon size={ICON_SIZE} />
    </button>
  );
});

function RemoveButton({
  onRemove,
  disabled,
}: Pick<FirebaseFileInputProps, "onRemove" | "disabled">) {
  return (
    <button
      onClick={onRemove}
      type="button"
      disabled={disabled}
      className="btn btn-square btn-error join-item"
    >
      <TrashIcon size={ICON_SIZE} />
    </button>
  );
}

const ICON_SIZE = 24;

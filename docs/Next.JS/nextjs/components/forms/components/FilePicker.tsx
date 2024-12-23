import React, { forwardRef } from "react";

import type { BaseInputProps } from "./types";

export type FilePickerProps = BaseInputProps;

export default forwardRef<HTMLInputElement, FilePickerProps>(
  function FilePicker({ className, children, ...props }, ref) {
    return (
      <label className={className}>
        <input {...props} ref={ref} type="file" className="sr-only" />
        {children}
      </label>
    );
  },
);

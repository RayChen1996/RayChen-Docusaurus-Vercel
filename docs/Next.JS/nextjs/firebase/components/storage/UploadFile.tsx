import React from "react";

import useUploadFlie, {
  type UploadFileParams,
  type UploadFileReturn,
} from "../../hook/storage/useUploadFlie";

interface UploadFileProps extends UploadFileParams {
  render?: (cb: UploadFileReturn) => React.ReactNode;
}

export default function UploadFile({ render, ...props }: UploadFileProps) {
  const result = useUploadFlie(props);
  return render?.(result);
}

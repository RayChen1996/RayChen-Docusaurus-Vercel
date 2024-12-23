import clsx from "clsx";
import { AsteriskIcon } from "lucide-react";
import React from "react";

export interface RequiredMarkProps {
  size?: number;
  className?: string;
}

/** - 必填標籤 */
export default function RequiredMark({
  size = 14,
  className,
}: RequiredMarkProps) {
  return <AsteriskIcon size={size} className={clsx("text-error", className)} />;
}

import clsx from "clsx";
import numbro from "numbro";
import React from "react";

export interface RadialProgressProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  /**
   * - 進度條參數
   *
   * @min `0`
   * @max `1`
   *  */
  value?: number;
  size?: string;
  thickness?: string;
}

interface RadialProgressStyle {
  "--value": number;
  "--size": string;
  "--thickness": string;
}

export default function RadialProgress({
  value = 0,
  size,
  thickness,
  style,
  className,
  ...props
}: RadialProgressProps) {
  const _progressStyle = {
    "--value": value * 100,
    "--size": size,
    "--thickness": thickness,
  } as RadialProgressStyle;

  return (
    <div
      {...props}
      className={clsx("radial-progress font-mono", className)}
      style={{ ..._progressStyle, ...style }}
      role="progressbar"
    >
      {numbro(value).format({ output: "percent" })}
    </div>
  );
}

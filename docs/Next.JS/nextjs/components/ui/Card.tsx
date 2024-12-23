import clsx from "clsx";
import React from "react";

export interface CardProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  compact?: boolean;
  /** - 渲染`figure`標籤元素 */
  renderFigure?: React.ReactNode;
}

export default function Card({
  compact,
  children,
  className,
  renderFigure,
  ...props
}: React.PropsWithChildren<CardProps>) {
  return (
    <div
      {...props}
      className={clsx(
        "card bg-base-100 shadow",
        compact ? "card-compact" : null,
        className,
      )}
    >
      {renderFigure}
      <div className="card-body">{children}</div>
    </div>
  );
}

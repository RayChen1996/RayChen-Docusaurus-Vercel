import clsx from "clsx";
import React from "react";

export interface CardTitleProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
  title?: string;
  titleClassName?: string;
  /** - 前綴 */
  renderPrefix?: React.ReactNode;
  /** - 後綴 */
  renderSuffix?: React.ReactNode;
}

export default function CardTitle({
  title,
  titleClassName,
  renderPrefix,
  renderSuffix,
  className,
  ...props
}: CardTitleProps) {
  return (
    <div {...props} className={clsx("card-title", className)}>
      {renderPrefix}
      {title ? (
        <h2 className={clsx("flex-1 font-bold", titleClassName)}>{title}</h2>
      ) : null}
      {renderSuffix}
    </div>
  );
}

import clsx from "clsx";
import React from "react";

export type InfoSectionHeaderContainerProps = Pick<
  React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
  "className" | "style" | "children"
>;

export default function InfoSectionHeaderContainer({
  className,
  ...props
}: InfoSectionHeaderContainerProps) {
  return (
    <div
      {...props}
      className={clsx(
        "col-span-full w-full rounded bg-primary px-2 py-1 text-center text-base font-bold text-primary-content",
        className,
      )}
    />
  );
}

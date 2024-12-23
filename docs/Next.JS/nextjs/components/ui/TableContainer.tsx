import clsx from "clsx";
import React from "react";

export default function TableContainer(
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >,
) {
  return (
    <div {...props} className={clsx("overflow-x-auto", props?.className)} />
  );
}

import { createElement } from "react";

import type { TableCellProps } from "./types";

export default function TableCell({
  tag,
  value,
  children,
  ...props
}: TableCellProps) {
  return createElement(tag || "td", props, value ?? children);
}

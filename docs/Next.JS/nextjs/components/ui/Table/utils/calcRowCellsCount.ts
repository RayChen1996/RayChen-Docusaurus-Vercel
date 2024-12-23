import { TableRowProps } from "../types";

export default function calcRowCellsCount(array?: TableRowProps[]) {
  return array?.flatMap(callback).length;
}

function callback(row: TableRowProps) {
  return row.cells ?? [];
}

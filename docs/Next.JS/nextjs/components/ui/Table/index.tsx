import React from "react";
import clsx from "clsx";
import { isString } from "es-toolkit";

import type {
  TableProps,
  TableSectionProps,
  TableCellProps,
  TableRowProps,
} from "./types";
export type { TableProps } from "./types";

import getItemKey from "./utils/getItemKey";
import calcRowCellsCount from "./utils/calcRowCellsCount";

import TableCell from "./TableCell";
import TableEmpty from "./TableEmpty";

export default function Table<T>({
  zebra,
  pinRows,
  pinCols,
  size,
  hover,
  loading,
  // 資料
  data,
  renderItem,
  keyExtractor,
  head,
  body,
  foot,
  placeholder,
  className,
  ...props
}: TableProps<T>) {
  function _renderTr(item: T, index: number) {
    const tableRow = renderItem?.({ item, index });
    if (tableRow) {
      const { className, cells, ...last } = tableRow;
      const key =
        [keyExtractor?.(item, index), getItemKey(item)].find(isString) || index;

      return (
        <tr
          {...last}
          key={key}
          className={clsx(
            "transition-['background']",
            hover && "hover",
            className,
          )}
        >
          {cells?.map(_renderCell)}
        </tr>
      );
    }
    return null;
  }

  function _renderTbody() {
    const colSpan = calcRowCellsCount(head?.rows);

    if (loading) {
      return (
        <TableEmpty colSpan={colSpan}>
          <span className="loading loading-dots" />
        </TableEmpty>
      );
    }

    if (Array.isArray(data) && data.length > 0) {
      return data.map(_renderTr);
    }

    return (
      <TableEmpty colSpan={colSpan}>
        {placeholder ?? <span className="text-base font-bold">No data.</span>}
      </TableEmpty>
    );
  }

  return (
    <table
      {...props}
      className={clsx(
        "table",
        zebra && "table-zebra",
        pinRows && "table-pin-rows",
        pinCols && "table-pin-cols",
        (function () {
          switch (size) {
            case "xs":
              return "table-xs";
            case "sm":
              return "table-sm";
            case "md":
              return "table-md";
            case "lg":
              return "table-lg";
            default:
              break;
          }
        })(),
        className,
      )}
    >
      {head ? <TableHead {...head} /> : null}
      <tbody {...body}>{_renderTbody()}</tbody>
      {foot ? <TableFoot {...foot} /> : null}
    </table>
  );
}

function TableHead({ rows, ...props }: TableSectionProps) {
  return <thead {...props}>{rows?.map(_renderRow)}</thead>;
}

function TableFoot({ rows, ...props }: TableSectionProps) {
  return <tfoot {...props}>{rows?.map(_renderRow)}</tfoot>;
}

function _renderRow(item: TableRowProps, index: number) {
  return (
    <tr key={getItemKey(item) || index}>{item.cells?.map(_renderCell)}</tr>
  );
}

function _renderCell(item: TableCellProps, index: number) {
  return <TableCell {...item} key={getItemKey(item) || index} />;
}

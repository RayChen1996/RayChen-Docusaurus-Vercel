import { ReactNode } from "react";

export interface TableSectionProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLTableSectionElement>,
    HTMLTableSectionElement
  > {
  rows?: TableRowProps[];
}

export interface TableRowProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLTableRowElement>,
    HTMLTableRowElement
  > {
  cells?: TableCellProps[];
}

export interface TableCellProps
  extends React.DetailedHTMLProps<
    React.TdHTMLAttributes<HTMLTableCellElement>,
    HTMLTableCellElement
  > {
  tag?: "td" | "th";
  value?: ReactNode;
}

export type TableSize = "xs" | "sm" | "md" | "lg";

export interface TableProps<ItemT = unknown>
  extends React.DetailedHTMLProps<
      React.TableHTMLAttributes<HTMLTableElement>,
      HTMLTableElement
    >,
    TableListRenderProps<ItemT> {
  head?: TableSectionProps;
  body?: TableSectionProps;
  foot?: TableSectionProps;
  placeholder?: React.ReactNode;
  loading?: boolean;
  // 樣式
  /** - 表格隔行顯示深色條紋 */
  zebra?: boolean;
  /** - 黏著 `<thead>` 、 `<tfoot>` 標籤 */
  pinRows?: boolean;
  /** - 黏著 `<th>` 標籤 */
  pinCols?: boolean;
  /** - 表單尺寸 */
  size?: TableSize;
  /** - `<tr>` 懸停會高亮該項目 */
  hover?: boolean;
}

export interface TableListRenderItemInfo<ItemT = unknown> {
  item: ItemT;
  index: number;
}

export type TableListRenderItem<ItemT = unknown> = (
  info: TableListRenderItemInfo<ItemT>,
) => TableRowProps | null | undefined;

export interface TableListRenderProps<ItemT = unknown> {
  data: ItemT[];
  renderItem: TableListRenderItem<ItemT> | null | undefined;
  keyExtractor?: (item: ItemT, index: number) => string;
}

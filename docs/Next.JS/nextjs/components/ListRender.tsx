import { isPlainObject } from "es-toolkit";
import React, { Fragment, createElement } from "react";

export interface ListRenderItemInfo<ItemT = unknown> {
  item: ItemT;
  index: number;
}

export type ListRenderItem<ItemT> = (
  info: ListRenderItemInfo<ItemT>,
) => React.ReactElement | null;

type PropsComponent =
  | React.ComponentType<unknown>
  | React.ReactElement
  | null
  | undefined;

export interface ListRenderProps<ItemT = unknown> {
  data: ItemT[];
  renderItem: ListRenderItem<ItemT> | null | undefined;
  keyExtractor?: (item: ItemT, index: number) => string;
  ListEmptyComponent?: PropsComponent;
  ItemSeparatorComponent?: PropsComponent;
}

export default function ListRender<TData>({
  data,
  renderItem,
  keyExtractor,
  ListEmptyComponent,
  ItemSeparatorComponent,
}: ListRenderProps<TData>) {
  function _renderItem(item: TData, index: number) {
    const key =
      keyExtractor?.(item, index) || _getItemKey(item) || String(index);

    return (
      <Fragment key={key}>
        {index !== 0 && _renderPropsComponent(ItemSeparatorComponent)}
        {renderItem?.({ item, index }) ?? null}
      </Fragment>
    );
  }

  if (data?.length > 0) {
    return data.map(_renderItem);
  } else if (ListEmptyComponent) {
    return _renderPropsComponent(ListEmptyComponent);
  }

  return null;
}

/** - 渲染props物件 */
function _renderPropsComponent(component: PropsComponent): React.ReactNode {
  if (!component) {
    return null;
  }

  return React.isValidElement(component)
    ? component
    : createElement(component as React.ComponentType<unknown>);
}

/** - 物件key依據 */
const properties = ["key", "id"] as const;

/** - 取得物件key */
function _getItemKey(item: unknown) {
  if (!isPlainObject(item)) {
    return;
  }

  for (const property of properties) {
    const element = item[property];
    if (element) {
      return element;
    }
  }
}

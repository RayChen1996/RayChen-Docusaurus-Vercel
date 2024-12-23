import {ViewStyle, StyleSheet} from 'react-native';
import {useMemo} from 'react';

import useLayout from './useLayout';

export interface GridPropsParams {
  /**
   * - 間距
   *
   * @default 0
   * */
  spacing?: number;
  /**
   * - 每個項目的最小寬度或高度，單位為像素。
   *
   * @default 120
   * */
  itemDimension?: number;
  /**
   * - 如果為`true`，則將使用確切的`itemDimension`，並且不會進行調整以適合螢幕。
   *
   * @default false
   * */
  fixed?: boolean;
  /** - 指定容器的靜態寬度或高度。如果未傳遞，將使用 `maxDimension`。 */
  staticDimension?: number;
  /** - 指定容器的最大寬度或高度。如果未傳遞，將使用螢幕的全寬/高度。 */
  maxDimension?: number;
  /** - 指定每行渲染的最大項目數。 */
  maxItemsPerRow?: number;
}

type PartRequired<T extends keyof GridPropsParams> = Omit<GridPropsParams, T> &
  Required<Pick<GridPropsParams, T>>;

type RequiredKeys = 'spacing' | 'itemDimension' | 'fixed';

/** - 網格屬性 */
export default function useGridProps(params?: GridPropsParams) {
  const {spacing, itemDimension, staticDimension, maxItemsPerRow, fixed} = {
    ...initialParams,
    ...params,
  };
  const {onLayout, layout, effective} = useLayout();
  /** - 視窗寬度 */
  const totalDimension = layout.width;

  const {itemsPerRow, fixedSpacing} = useMemo(
    () =>
      calculateDimensions({
        itemDimension,
        staticDimension,
        totalDimension,
        spacing,
        fixed,
        maxItemsPerRow,
      }),
    [
      itemDimension,
      staticDimension,
      totalDimension,
      spacing,
      fixed,
      maxItemsPerRow,
    ],
  );

  /** - 計算後的邊距 */
  const calcSpacing = fixed ? fixedSpacing : spacing;

  /** - 渲染物件樣式 */
  const renderItemStyle = useMemo(
    () =>
      StyleSheet.compose(styles.cell_container, {
        paddingTop: calcSpacing,
        paddingLeft: calcSpacing,
      }),
    [calcSpacing],
  );

  /** - 容器樣式 */
  const contentContainerStyle = useMemo((): ViewStyle => {
    return {
      paddingRight: calcSpacing,
      paddingBottom: calcSpacing,
    };
  }, [calcSpacing]);

  return {
    key: `list-${itemsPerRow}-numColumns`,
    /** - 有效的 */
    effective: effective && itemsPerRow > 0,
    /** - 佈局參數 */
    layout,
    /** - 執行計算佈局 */
    onLayout,
    /** - 一行多少個 */
    numColumns: itemsPerRow,
    /** - 容器樣式 */
    containerStyle: styles.container,
    /** - 渲染物件樣式 */
    renderItemStyle,
    /** - 列表容器樣式 */
    contentContainerStyle,
  };
}

function calculateDimensions({
  itemDimension = initialParams.itemDimension,
  staticDimension,
  totalDimension,
  fixed,
  spacing = initialParams.spacing,
  maxItemsPerRow,
}: Pick<
  GridPropsParams,
  'itemDimension' | 'staticDimension' | 'fixed' | 'spacing' | 'maxItemsPerRow'
> & {
  totalDimension: number;
}) {
  const usableTotalDimension = staticDimension || totalDimension;
  const availableDimension = usableTotalDimension - spacing; // One spacing extra
  const itemTotalDimension = Math.min(
    itemDimension + spacing,
    availableDimension,
  ); // itemTotalDimension should not exceed availableDimension
  const itemsPerRow = Math.min(
    Math.floor(availableDimension / itemTotalDimension),
    maxItemsPerRow || Infinity,
  );
  const containerDimension = availableDimension / itemsPerRow;

  return {
    itemTotalDimension,
    availableDimension,
    itemsPerRow,
    containerDimension,
    fixedSpacing: fixed
      ? (totalDimension - itemDimension * itemsPerRow) / (itemsPerRow + 1)
      : 0,
  };
}

/** - 預設參數 */
const initialParams: PartRequired<RequiredKeys> = {
  spacing: 0,
  itemDimension: 120,
  fixed: false,
};

/** - 樣式 */
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cell_container: {
    width: '100%',
  },
});

import type {LayoutChangeEvent, LayoutRectangle} from 'react-native';
import {useCallback, useRef, useState} from 'react';
import {deepEqual} from 'fast-equals';

/** - 測量佈局 */
export default function useLayout(onEvent?: (event: LayoutRectangle) => void) {
  const [layout, setLayout] = useState<LayoutRectangle>(initialLayout);
  const eventRef = useRef(onEvent);
  eventRef.current = onEvent;

  /** - 執行計算佈局 */
  const onLayout = useCallback((event: LayoutChangeEvent) => {
    const rectangle = event.nativeEvent.layout;
    setLayout(v => {
      const result = deepEqual(v, rectangle) ? v : rectangle;
      eventRef.current?.(result);
      return result;
    });
  }, []);

  return {
    /** - 測量佈局 */
    onLayout,
    /** - 佈局參數 */
    layout,
    /** - 有效的佈局 */
    effective: Boolean(layout.width && layout.height),
  };
}

/** - 預設佈局 */
export const initialLayout: LayoutRectangle = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
};

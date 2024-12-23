import {useFocusEffect} from '@react-navigation/native';
import {useCallback, useRef, type DependencyList} from 'react';

import useDependencyUpdate from './useDependencyUpdate';

/** - 第二次聚焦路由後執行函式 */
export default function useAfterFocusEffect(
  callback?: () => any,
  deps?: DependencyList,
) {
  const firstRenderRef = useRef(true);
  const update = useDependencyUpdate(deps);
  const eventRef = useRef(callback);
  eventRef.current = callback;

  useFocusEffect(
    useCallback(() => {
      if (firstRenderRef.current) {
        firstRenderRef.current = false;
      } else if (update) {
        return eventRef.current?.();
      }
    }, [update]),
  );
}

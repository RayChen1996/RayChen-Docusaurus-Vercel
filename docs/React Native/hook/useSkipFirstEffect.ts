import {type DependencyList, useEffect, useRef} from 'react';

import useDependencyUpdate from './useDependencyUpdate';

/** - 跳過第一次useEffect */
export default function useSkipFirstEffect(
  callback?: () => any,
  deps?: DependencyList,
) {
  const firstRenderRef = useRef(true);
  const update = useDependencyUpdate(deps);
  const eventRef = useRef(callback);
  eventRef.current = callback;

  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
    } else if (update) {
      return eventRef.current?.();
    }
  }, [update]);
}

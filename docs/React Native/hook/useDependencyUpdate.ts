import { useEffect, useRef, type DependencyList } from "react";

/** - 判斷依賴項是否變更 */
export default function useDependencyUpdate(deps?: DependencyList) {
  const prevDepsRef = useRef<DependencyList>();

  useEffect(
    () =>
      function () {
        prevDepsRef.current = deps;
      },
  );

  if (!Array.isArray(deps)) {
    return true;
  }

  if (deps.length === 0) {
    return false;
  }

  for (let index = 0, length = deps.length; index < length; index++) {
    const dep = deps[index];
    if (!Object.is(dep, prevDepsRef.current?.[index])) {
      return true;
    }
  }

  return false;
}

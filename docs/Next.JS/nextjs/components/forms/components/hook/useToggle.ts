import { useCallback, useState } from "react";

export default function useToggle(initial: boolean = false) {
  const [value, setValue] = useState(initial);

  const _setValue = useCallback((newValue?: boolean | unknown) => {
    setValue(typeof newValue === "boolean" ? newValue : (current) => !current);
  }, []);

  return [value, _setValue] as const;
}

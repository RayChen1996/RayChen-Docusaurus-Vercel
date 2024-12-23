import clsx from "clsx";
import { useMemo } from "react";
import { getDefaultClassNames, type PropsBase } from "react-day-picker";

export default function useDayPickerClassNames(): NonNullable<
  PropsBase["classNames"]
> {
  const defaultClassNames = getDefaultClassNames();
  return useMemo(
    () => ({
      ...defaultClassNames,
      month_caption: clsx(defaultClassNames.month_caption, "ml-4"),
    }),
    [defaultClassNames],
  );
}

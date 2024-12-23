import React, { useMemo } from "react";
import {
  type UseFieldArrayReturn,
  type FieldValues,
  type FieldArray,
} from "react-hook-form";

import type { Option } from "@/options/types";

import CheckboxChip, { CheckboxChipProps } from "./CheckboxChip";
import CheckboxChipSelectAll from "./CheckboxChipSelectAll";

export interface CheckboxChipFieldArrayGroupProps<
  TFieldValues extends FieldValues,
> extends Partial<UseFieldArrayReturn<TFieldValues>>,
    Pick<CheckboxChipProps, "disabled" | "readOnly"> {
  options?: Option[];
  /** - 啟用開啟所有欄位 */
  enableAll?: boolean;
}

export default function CheckboxChipFieldArrayGroup<
  TFieldValues extends FieldValues,
>({
  options = [],
  fields = [],
  enableAll,
  replace,
  append,
  remove,
  ...props
}: CheckboxChipFieldArrayGroupProps<TFieldValues>) {
  const fieldValuesMap = useMemo(() => {
    const result = new Map();

    for (let index = 0, length = fields.length; index < length; index++) {
      const element = fields[index];
      if ("value" in element) {
        result.set(element.value, index);
      }
    }

    return result;
  }, [fields]);

  const allOptions = useMemo(
    () => options.map(_mapCallbackfn) as FieldArray<TFieldValues>[],
    [options],
  );

  function _map(item: Option) {
    const index = fieldValuesMap.get(item.value) ?? -1;

    return (
      <CheckboxChip
        {...item}
        {...props}
        key={item.value}
        onChange={(event) => {
          if (event.target.checked) {
            append?.({ value: item.value } as FieldArray<TFieldValues>);
          } else {
            remove?.(index);
          }
        }}
        checked={index !== -1}
      />
    );
  }

  return (
    <div className="flex flex-col gap-2">
      {enableAll ? (
        <CheckboxChipSelectAll
          count={fields.length}
          total={options.length}
          onChange={(event) => {
            if (event.target.checked) {
              replace?.(allOptions);
            } else {
              remove?.();
            }
          }}
        />
      ) : null}
      <div className="flex flex-wrap gap-2">{options?.map(_map)}</div>
    </div>
  );
}

function _mapCallbackfn<TFieldValues extends FieldValues>(field: TFieldValues) {
  return { value: field.value } as FieldArray<TFieldValues>;
}

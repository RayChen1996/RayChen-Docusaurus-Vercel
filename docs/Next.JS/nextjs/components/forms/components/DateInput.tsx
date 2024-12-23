import React, {
  forwardRef,
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import clsx from "clsx";
import { CalendarIcon, XIcon } from "lucide-react";
import { isValid } from "date-fns";
import { type ControllerRenderProps } from "react-hook-form";
// picker
import { DayPicker, type PropsBase } from "react-day-picker";
import "react-day-picker/style.css";
import dayPickerCss from "./css/day-picker.module.css";
// date input
import { type CalendarDate, parseDate } from "@internationalized/date";
import {
  DateField,
  DateInput,
  DateSegment,
  type DateSegmentProps,
} from "react-aria-components";

import type { InputStateProps, InputVariantProps } from "./types";

import useDialog from "./hook/useDialog";
import useDeepCompare from "./hook/useDeepCompare";
import useDayPickerClassNames from "./hook/useDayPickerClassNames";
import { getInputVariantClassName } from "./utils/variantClassName";

export interface DateInputProps
  extends InputStateProps,
    InputVariantProps,
    Omit<PropsBase, "disabled">,
    Partial<Omit<ControllerRenderProps, "ref">> {
  disabledDate?: PropsBase["disabled"];
  isClearable?: boolean;
}

export default forwardRef<HTMLInputElement, DateInputProps>(
  function DateInputComponent(
    {
      value,
      onChange,
      error,
      variant,
      className,
      isClearable,
      disabledDate,
      ...props
    },
    ref,
  ) {
    // picker
    const classNames = useDayPickerClassNames();
    const { actions, visible, dialogProps } = useDialog();
    const [month, setMonth] = useState(new Date());
    // input
    const dateInputId = useId();
    const [inputValue, setInputValue] = useState<
      CalendarDate | null | undefined
    >(null);
    // props
    const propsRef = useRef({ onChange });
    propsRef.current.onChange = onChange;
    const _value = useDeepCompare(value);

    useEffect(() => {
      setInputValue(_toCalendarDate(_value));
    }, [_value]);

    const handleReset = useCallback(() => {
      propsRef.current.onChange?.(null);
      setInputValue(null);
    }, []);

    const handleDayPickerSelect = useCallback(
      (date: Date) => {
        setInputValue(_toCalendarDate(date));
        propsRef.current.onChange?.(date);
        actions.close();
      },
      [actions],
    );

    const onChangeDateField = useCallback((newValue: CalendarDate | null) => {
      setInputValue(newValue);

      if (newValue) {
        const { year, month, day } = newValue;
        // 合法日期才寫入
        const result = new Date(year, month - 1, day);
        if (isValid(result)) {
          propsRef.current.onChange?.(result);
        }
      }
    }, []);

    return (
      <div className={className}>
        <div
          className={clsx(
            "input focus-within:input-primary",
            "flex items-center gap-2 font-mono",
            getInputVariantClassName(variant),
            error ? "input-error" : null,
            props.disabled ? "input-disabled" : null,
          )}
        >
          <DateField
            aria-labelledby={dateInputId}
            className="min-w-0 grow"
            value={inputValue}
            onChange={onChangeDateField}
            isDisabled={props.disabled}
          >
            <DateInput className="flex" ref={ref}>
              {_renderDateSegment}
            </DateInput>
          </DateField>
          {isClearable && (
            <button
              type="button"
              className="btn btn-circle btn-error btn-sm"
              onClick={handleReset}
              disabled={props.disabled}
            >
              <XIcon size={14} />
            </button>
          )}
          <button
            type="button"
            onClick={actions.toggle}
            disabled={props.disabled}
            aria-controls="dialog"
            aria-haspopup="dialog"
            aria-expanded={visible}
            aria-label="Open calendar"
            className="btn btn-circle btn-primary btn-sm"
          >
            <CalendarIcon size={16} />
          </button>
        </div>
        <dialog {...dialogProps} className="modal backdrop:bg-black/20">
          <div className="modal-backdrop" onClick={actions.close} />
          <div className="modal-box w-auto p-1">
            <DayPicker
              {...props}
              disabled={disabledDate}
              required
              month={month}
              onMonthChange={setMonth}
              autoFocus
              mode="single"
              selected={value || undefined}
              onSelect={handleDayPickerSelect}
              className={dayPickerCss["rdp-root"]}
              classNames={classNames}
            />
          </div>
        </dialog>
      </div>
    );
  },
);

function _renderDateSegment(segment: DateSegmentProps["segment"]) {
  return (
    <DateSegment
      segment={segment}
      className={clsx(
        "px-0.5 py-0 text-end caret-transparent",
        "data-[focused]:bg-primary data-[focused]:!text-primary-content",
        "data-[focused]:rounded-md data-[focused]:tabular-nums data-[focused]:outline-none",
        "data-[placeholder]:text-base-content/40",
        "data-[type=literal]:p-0",
      )}
    />
  );
}

function _toCalendarDate(value: Date) {
  if (isValid(value)) {
    return parseDate(
      [
        value.getFullYear(),
        String(value.getMonth() + 1).padStart(2, "0"),
        String(value.getDate()).padStart(2, "0"),
      ].join("-"),
    );
  } else {
    return null;
  }
}

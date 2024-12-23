"use client";

import React, {
  forwardRef,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import clsx from "clsx";
import { ChevronDownIcon, XIcon } from "lucide-react";
import type { ControllerRenderProps } from "react-hook-form";

import type { Option } from "@/options/types";
import type { InputVariantProps, InputStateProps } from "./types";

import { getInputVariantClassName } from "./utils/variantClassName";
import useDialog from "./hook/useDialog";

export type OptionType = Option;

export interface SelectProps
  extends Pick<
      React.DetailedHTMLProps<
        React.InputHTMLAttributes<HTMLInputElement>,
        HTMLInputElement
      >,
      "className" | "placeholder" | "readOnly"
    >,
    Partial<Omit<ControllerRenderProps, "ref">>,
    InputVariantProps,
    InputStateProps {
  options?: OptionType[];
  isLoading?: boolean;
  isClearable?: boolean;
}

export type SelectRef = HTMLButtonElement;

export default forwardRef<SelectRef, SelectProps>(function Select(
  {
    error,
    variant,
    onChange,
    onBlur,
    value,
    disabled,
    name,
    className,
    readOnly,
    placeholder,
    isLoading,
    isClearable,
    options = [],
  },
  ref,
) {
  const propsRef = useRef({ onChange, onBlur });
  propsRef.current.onChange = onChange;
  propsRef.current.onBlur = onBlur;
  const selectedItem = value
    ? options.find((item) => item.value === value)
    : null;
  const _disabled = disabled || isLoading;
  const { actions, visible, dialogProps } = useDialog();
  const visibleItems = useTransitionDelay(visible, 200);

  const _reset = useCallback(() => {
    propsRef.current.onChange?.(null);
  }, []);

  const _onChange = useCallback((itemValue: string) => {
    propsRef.current.onChange?.(itemValue);
  }, []);

  function _renderItem(item: Option) {
    return (
      <li
        onClick={() => {
          _onChange(item.value);
          actions.close();
        }}
        key={item.value}
      >
        <a className={clsx(selectedItem === item && "active")}>{item.label}</a>
      </li>
    );
  }

  function _renderItems() {
    if (Array.isArray(options) && options.length > 0) {
      return options.map(_renderItem);
    } else {
      return (
        <li className="disabled">
          <a>{placeholder || "N/A"}</a>
        </li>
      );
    }
  }

  return (
    <div className={className}>
      <button
        name={name}
        type="button"
        disabled={_disabled}
        className={clsx(
          "input focus-within:input-primary",
          "relative flex w-full items-center justify-between gap-2",
          error && "input-error",
          getInputVariantClassName(variant),
        )}
        ref={ref}
      >
        {!_disabled && !readOnly && (
          <div className="absolute inset-0" onClick={actions.open} />
        )}
        <div className="flex grow">
          {isLoading ? (
            <span className="loading loading-dots loading-sm" />
          ) : (
            <span className={clsx(!selectedItem && "text-base-content/40")}>
              {selectedItem ? selectedItem?.label : placeholder}
            </span>
          )}
        </div>
        {Boolean(isClearable && selectedItem && !_disabled && !readOnly) && (
          <ClearButton onClick={_reset} />
        )}
        <ChevronDownIcon
          size={20}
          className={clsx("transition-transform", visible && "rotate-180")}
        />
      </button>
      <dialog {...dialogProps} className="modal">
        <button
          type="button"
          onClick={actions.close}
          className="modal-backdrop"
        />
        <div className="modal-box bg-transparent p-0 shadow-none">
          <ul
            className={clsx(
              "menu menu-vertical flex-nowrap rounded-box bg-base-100 shadow",
              "max-h-80 w-full max-w-screen-sm overflow-y-scroll",
            )}
          >
            {visibleItems ? _renderItems() : null}
          </ul>
        </div>
      </dialog>
    </div>
  );
});

function ClearButton({ onClick }: { onClick?: () => void }) {
  return (
    <div
      role="button"
      onClick={(event) => {
        event.stopPropagation();
        onClick?.();
      }}
      className="btn btn-circle btn-error btn-sm relative"
    >
      <XIcon size={14} />
    </div>
  );
}

function useTransitionDelay(value: boolean, ms: number = 200) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    if (value) {
      setVisible(true);
    } else {
      timeoutId = setTimeout(() => {
        setVisible(false);
      }, ms);
    }

    return () => {
      clearTimeout(timeoutId);
    };
  }, [value, ms]);

  return value || visible;
}

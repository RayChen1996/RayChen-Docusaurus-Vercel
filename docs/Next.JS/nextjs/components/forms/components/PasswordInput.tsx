import React, { forwardRef, useImperativeHandle, useRef } from "react";
import clsx from "clsx";

import type { BaseInputProps } from "./types";

import { getInputVariantClassName } from "./utils/variantClassName";
import useToggle from "./hook/useToggle";

import PasswordVisibleButton from "./PasswordVisibleButton";
import PasswordRandomButton, {
  type RandomPasswordProps,
} from "./PasswordRandomButton";

export interface PasswordInputProps extends BaseInputProps {
  /** - 啟用隨機密碼按鈕 */
  enableRandom?: boolean;
}

export default forwardRef<HTMLInputElement, PasswordInputProps>(
  function PasswordInput(
    { enableRandom, error, variant, className, ...props },
    ref,
  ) {
    /** - 內部input ref */
    const inputRef = useRef<HTMLInputElement>(null);
    const [visible, setVisible] = useToggle();
    const type = visible ? "text" : "password";

    useImperativeHandle(ref, () => inputRef.current!);

    const _onRandom: NonNullable<RandomPasswordProps["onRandom"]> = (
      newValue,
    ) => {
      if (inputRef.current) {
        inputRef.current.value = newValue;

        props.onChange?.(
          Object.defineProperty(
            new Event("input", {
              bubbles: true,
            }) as unknown as React.ChangeEvent<HTMLInputElement>,
            "target",
            {
              value: inputRef.current,
              writable: false,
            },
          ),
        );
      }
    };

    return (
      <div
        className={clsx(
          "flex items-center gap-4",
          "input font-mono focus-within:input-primary",
          getInputVariantClassName(variant),
          error ? "input-error" : null,
          className,
        )}
      >
        <input {...props} ref={inputRef} className="min-w-0 grow" type={type} />
        <PasswordVisibleButton visible={visible} onClick={setVisible} />
        {enableRandom ? <PasswordRandomButton onRandom={_onRandom} /> : null}
      </div>
    );
  },
);

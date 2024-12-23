import { omit } from "es-toolkit";
import type {
  ControllerRenderProps,
  FieldPath,
  FieldValues,
} from "react-hook-form";
import type {
  NumberFormatValues,
  NumberFormatBaseProps,
} from "react-number-format";

type HTMLInputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;
type HTMLTextAreaProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>;

/**
 * 組合一般輸入框屬性
 * @param controllerRenderProps 表單控制組件`field`屬性
 * @param params 原生輸入框屬性
 * @returns 複合輸入框屬性
 */
export function extendInputProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>(
  controllerRenderProps: ControllerRenderProps<TFieldValues, TName>,
  params: Pick<HTMLInputProps, "disabled" | "readOnly">,
): HTMLInputProps {
  return {
    ...controllerRenderProps,
    disabled: params?.disabled || controllerRenderProps.disabled,
    readOnly: params?.readOnly,
  };
}

/**
 * 組合選取框屬性
 * @param controllerRenderProps 表單控制組件`field`屬性
 * @param params 原生輸入框屬性
 * @returns 複合輸入框屬性
 */
export function extendCheckboxProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>(
  controllerRenderProps: ControllerRenderProps<TFieldValues, TName>,
  params: Pick<HTMLInputProps, "disabled" | "readOnly">,
): HTMLInputProps {
  return {
    ...omit(controllerRenderProps, ["value", "onChange"]),
    checked: controllerRenderProps.value,
    onChange(event) {
      controllerRenderProps.onChange(event.target.checked);
    },
    disabled: params?.disabled || controllerRenderProps.disabled,
    readOnly: params?.readOnly,
  };
}

/**
 * 組合多行輸入框屬性
 * @param controllerRenderProps 表單控制組件`field`屬性
 * @param params 原生輸入框屬性
 * @returns 複合輸入框屬性
 */
export function extendTextareaProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>(
  controllerRenderProps: ControllerRenderProps<TFieldValues, TName>,
  params: Pick<HTMLTextAreaProps, "disabled" | "readOnly">,
): HTMLTextAreaProps {
  return {
    ...controllerRenderProps,
    disabled: params?.disabled || controllerRenderProps.disabled,
    readOnly: params?.readOnly,
  };
}

/**
 * 組合單選組屬性
 * @param controllerRenderProps 表單控制組件`field`屬性
 * @param params 原生輸入框屬性
 * @returns 複合輸入框屬性
 */
export function extendRadioProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>(
  value: string | number | readonly string[] | undefined,
  controllerRenderProps: ControllerRenderProps<TFieldValues, TName>,
  params: Pick<HTMLInputProps, "disabled" | "readOnly">,
): HTMLInputProps {
  return {
    ...omit(controllerRenderProps, ["value"]),
    value,
    checked: value === controllerRenderProps.value,
    disabled: params?.disabled || controllerRenderProps.disabled,
    readOnly: params?.readOnly,
  };
}

/**
 * 組合數字格式輸入框屬性
 * @param controllerRenderProps 表單控制組件`field`屬性
 * @param params 原生輸入框屬性
 * @returns 複合輸入框屬性
 */
export function extendNumberFormatInputProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
>(
  controllerRenderProps: ControllerRenderProps<TFieldValues, TName>,
  params: Pick<NumberFormatBaseProps, "disabled" | "readOnly">,
  /**
   * - 取值類型
   *
   * @default "floatValue"
   * */
  type?: keyof NumberFormatValues,
): Pick<
  NumberFormatBaseProps,
  | "disabled"
  | "readOnly"
  | "onValueChange"
  | "value"
  | "name"
  | "onBlur"
  | "getInputRef"
> {
  return {
    ...omit(controllerRenderProps, ["onChange"]),
    disabled: params?.disabled || controllerRenderProps.disabled,
    readOnly: params?.readOnly,
    onValueChange(values) {
      let result;

      switch (type) {
        case "formattedValue":
          result = values.formattedValue;
          break;
        case "value":
          result = values.value;
          break;
        case "floatValue":
        default:
          result = values.floatValue;
          break;
      }

      controllerRenderProps.onChange(result);
    },
  };
}

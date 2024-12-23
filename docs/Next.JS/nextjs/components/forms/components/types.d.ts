export type InputVariant = "bordered" | "ghost";

export interface InputVariantProps {
  /** - 輸入框樣式變體 */
  variant?: InputVariant;
}

export interface InputStateProps {
  error?: boolean;
}

export interface BaseInputProps
  extends React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    InputStateProps,
    InputVariantProps {}

export interface BaseTextAreaProps
  extends React.DetailedHTMLProps<
      React.TextareaHTMLAttributes<HTMLTextAreaElement>,
      HTMLTextAreaElement
    >,
    InputStateProps,
    InputVariantProps {}

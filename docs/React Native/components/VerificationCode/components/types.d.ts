import type {TextInputProps} from 'react-native';

export interface FieldComponentProps extends TextInputProps {
  isInvalid?: boolean;
  isDisabled?: boolean;
  isRequired?: boolean;
  message?: string;
  label?: string;
}

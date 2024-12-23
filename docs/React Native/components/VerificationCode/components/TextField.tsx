import React, {forwardRef} from 'react';
import {
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  Input,
  InputField,
} from '@gluestack-ui/themed';

import type {FieldComponentProps} from './types';

import FormControlErrorMessage from '@/components/UI/FormControlErrorMessage';

export default forwardRef<undefined, FieldComponentProps>(function TextField(
  {isDisabled, isInvalid, isRequired, message, label, ...props},
  _,
) {
  return (
    <FormControl isInvalid={isInvalid} isRequired={isRequired}>
      <FormControlLabel>
        <FormControlLabelText>{label}</FormControlLabelText>
      </FormControlLabel>
      <Input isDisabled={isDisabled}>
        <InputField {...props} />
      </Input>
      <FormControlErrorMessage message={message} />
    </FormControl>
  );
});

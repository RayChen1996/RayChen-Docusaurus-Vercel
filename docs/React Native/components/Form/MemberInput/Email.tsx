import React, {memo} from 'react';
import {Controller} from 'react-hook-form';
import {
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  Input,
  InputField,
} from '@gluestack-ui/themed';

import fieldToTextInputProps from '@/form/lib/fieldToTextInputProps';
import {initial} from './config';

import FormControlErrorMessage from '@/components/UI/FormControlErrorMessage';

/** - 電子信箱 */
export default memo(function Email() {
  return (
    <Controller
      control={initial.control}
      name="memberInput.email"
      render={({field, fieldState: {error}}) => (
        <FormControl isRequired isInvalid={Boolean(error)}>
          <FormControlLabel>
            <FormControlLabelText>E-mail</FormControlLabelText>
          </FormControlLabel>
          <Input>
            <InputField inputMode="email" {...fieldToTextInputProps(field)} />
          </Input>
          <FormControlErrorMessage message={error?.message} />
        </FormControl>
      )}
    />
  );
});

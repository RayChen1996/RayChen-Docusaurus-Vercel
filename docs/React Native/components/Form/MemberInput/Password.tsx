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

/** - 名字 */
export default memo(function Password() {
  return (
    <Controller
      control={initial.control}
      name="memberInput.password"
      render={({field, fieldState: {error}}) => (
        <FormControl isRequired isInvalid={Boolean(error)}>
          <FormControlLabel>
            <FormControlLabelText>密碼</FormControlLabelText>
          </FormControlLabel>
          <Input>
            <InputField
              type="password"
              {...fieldToTextInputProps(field)}
              textContentType="oneTimeCode"
            />
          </Input>
          <FormControlErrorMessage message={error?.message} />
        </FormControl>
      )}
    />
  );
});

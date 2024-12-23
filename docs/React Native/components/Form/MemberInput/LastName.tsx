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

/** - 姓氏 */
export default memo(function LastName() {
  return (
    <Controller
      control={initial.control}
      name="memberInput.lastName"
      render={({field, fieldState: {error}}) => (
        <FormControl isRequired isInvalid={Boolean(error)}>
          <FormControlLabel>
            <FormControlLabelText>姓氏</FormControlLabelText>
          </FormControlLabel>
          <Input>
            <InputField {...fieldToTextInputProps(field)} />
          </Input>
          <FormControlErrorMessage message={error?.message} />
        </FormControl>
      )}
    />
  );
});

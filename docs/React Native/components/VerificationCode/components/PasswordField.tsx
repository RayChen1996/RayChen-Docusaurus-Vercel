import React, {forwardRef, useCallback, useState} from 'react';
import {
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  Input,
  InputField,
  InputIcon,
  InputSlot,
} from '@gluestack-ui/themed';
import {EyeIcon, EyeOffIcon} from 'lucide-react-native';

import type {FieldComponentProps} from './types';

import FormControlErrorMessage from '@/components/UI/FormControlErrorMessage';
export default forwardRef<undefined, FieldComponentProps>(
  function PasswordField(
    {isDisabled, isInvalid, isRequired, message, label, ...props},
    _,
  ) {
    const [visible, setVisible] = useState(false);
    const _toggle = useCallback(() => {
      setVisible(e => !e);
    }, []);

    return (
      <FormControl isInvalid={isInvalid} isRequired={isRequired}>
        <FormControlLabel>
          <FormControlLabelText>{label}</FormControlLabelText>
        </FormControlLabel>
        <Input isDisabled={isDisabled}>
          <InputField
            secureTextEntry={!visible}
            textContentType="oneTimeCode"
            {...props}
          />
          <InputSlot pr="$3" onPress={_toggle}>
            <InputIcon
              as={visible ? EyeIcon : EyeOffIcon}
              color="$primary500"
            />
          </InputSlot>
        </Input>
        <FormControlErrorMessage message={message} />
      </FormControl>
    );
  },
);

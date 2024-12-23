import React, {useCallback} from 'react';
import {useAtomValue} from 'jotai';
import {Button, ButtonSpinner, ButtonText, VStack} from '@gluestack-ui/themed';
import {
  type SubmitHandler,
  useForm,
  Controller,
  DefaultValues,
} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';

import passwordSchema from '@/form/schema/password';
import {resetPasswordFormValuesAtom} from './jotai';
import {submitErrorMessage} from './lib';
import {
  type SchemaType,
  schema,
  defaultValues as resetPasswordDefaultValues,
} from '@/form/members/resetPassword';
import fieldToTextInputProps from '@/form/lib/fieldToTextInputProps';
import notice from '@/utils/notice';
import useMutationResetPassword from '@/apollo/hook/members/useMutationResetPassword';

import PasswordField from './components/PasswordField';

export interface ChangePasswordProps {
  /** - 修改密碼成功 */
  onChangeSuccess?: () => void;
  /** - 修改密碼失敗 */
  onChangeFailed?: (message: string) => void;
}

/** - 修改密碼欄位型別 */
interface ChangePasswordSchemaType extends SchemaType {
  _repeatPassword: string;
}

/** - 修改密碼zod解析 */
const resolver = zodResolver(
  schema
    .extend({
      _repeatPassword: passwordSchema,
    })
    .required({oldPassword: true, _repeatPassword: true})
    .refine(v => Boolean(v.password) && v.password === v._repeatPassword, {
      message: '密碼不一致',
      path: ['_repeatPassword'],
    }),
);

/** - 修改密碼預設值 */
const defaultValues: DefaultValues<ChangePasswordSchemaType> = {
  ...resetPasswordDefaultValues,
  _repeatPassword: '',
};

export default function ChangePassword({
  onChangeFailed,
  onChangeSuccess,
}: ChangePasswordProps) {
  const values = useAtomValue(resetPasswordFormValuesAtom);

  const {control, handleSubmit} = useForm<ChangePasswordSchemaType>({
    resolver,
    defaultValues,
    values,
  });

  const [resetPasswordFn, {loading}] = useMutationResetPassword({
    onCompleted(params) {
      if (params?.resetPassword) {
        const {success, message} = params?.resetPassword;
        if (success) {
          notice('更新密碼成功');
          onChangeSuccess?.();
        } else if (message) {
          notice(message);
        }
      }
    },
    onError(err) {
      onChangeFailed?.(err.message);
      console.log('resetPassword error', err);
      return null;
    },
  });

  const _resetPassword: SubmitHandler<ChangePasswordSchemaType> = useCallback(
    ({username, password, verificationCode}) => {
      resetPasswordFn({variables: {username, password, verificationCode}});
    },
    [resetPasswordFn],
  );

  return (
    <VStack gap="$4">
      <Controller
        control={control}
        name="oldPassword"
        render={({field, fieldState: {error}}) => (
          <PasswordField
            label="舊密碼"
            isInvalid={Boolean(error)}
            isRequired
            message={error?.message}
            {...fieldToTextInputProps(field)}
          />
        )}
      />
      <Controller
        control={control}
        name="password"
        render={({field, fieldState: {error}}) => (
          <PasswordField
            label="新密碼"
            isInvalid={Boolean(error)}
            isRequired
            message={error?.message}
            {...fieldToTextInputProps(field)}
          />
        )}
      />
      <Controller
        control={control}
        name="_repeatPassword"
        render={({field, fieldState: {error}}) => (
          <PasswordField
            label="再次輸入密碼"
            isInvalid={Boolean(error)}
            isRequired
            message={error?.message}
            {...fieldToTextInputProps(field)}
          />
        )}
      />
      <Button
        isDisabled={loading}
        onPress={handleSubmit(
          _resetPassword,
          submitErrorMessage(onChangeFailed),
        )}>
        {loading && <ButtonSpinner mr="$1" />}
        <ButtonText>設定密碼</ButtonText>
      </Button>
    </VStack>
  );
}

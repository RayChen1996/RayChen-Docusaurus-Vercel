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

export interface ResetPasswordProps {
  /** - 重設密碼成功 */
  onResetSuccess?: () => void;
  /** - 重設密碼失敗 */
  onResetFailed?: (message: string) => void;
}

/** - 重設密碼欄位型別 */
interface ResetPasswordSchemaType extends SchemaType {
  _repeatPassword: string;
}

/** - 重設密碼zod解析 */
const resolver = zodResolver(
  schema
    .extend({
      _repeatPassword: passwordSchema,
    })
    .required({_repeatPassword: true})
    .refine(v => Boolean(v.password) && v.password === v._repeatPassword, {
      message: '密碼不一致',
      path: ['_repeatPassword'],
    }),
);

/** - 重設密碼預設值 */
const defaultValues: DefaultValues<ResetPasswordSchemaType> = {
  ...resetPasswordDefaultValues,
  _repeatPassword: '',
};

/** - 重設密碼 */
export default function ResetPassword({
  onResetFailed,
  onResetSuccess,
}: ResetPasswordProps) {
  const values = useAtomValue(resetPasswordFormValuesAtom);

  const {control, handleSubmit} = useForm<ResetPasswordSchemaType>({
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
          onResetSuccess?.();
        } else if (message) {
          notice(message);
        }
      }
    },
    onError(err) {
      onResetFailed?.(err.message);
      console.log('resetPassword error', err);
      return null;
    },
  });

  const _resetPassword: SubmitHandler<ResetPasswordSchemaType> = useCallback(
    ({username, password, verificationCode}) => {
      resetPasswordFn({variables: {username, password, verificationCode}});
    },
    [resetPasswordFn],
  );

  return (
    <VStack gap="$4">
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
          submitErrorMessage(onResetFailed),
        )}>
        {loading && <ButtonSpinner mr="$1" />}
        <ButtonText>設定密碼</ButtonText>
      </Button>
    </VStack>
  );
}

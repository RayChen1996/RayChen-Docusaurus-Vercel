import React, {memo, useCallback} from 'react';
import {Button, ButtonSpinner, ButtonText, VStack} from '@gluestack-ui/themed';
import {Controller, useForm, type SubmitHandler} from 'react-hook-form';
import {useAtom, useAtomValue, useSetAtom} from 'jotai';
import {zodResolver} from '@hookform/resolvers/zod';

import {
  type SchemaType,
  schema,
  defaultValues,
} from '@/form/members/checkVerificationCode';
import {
  checkVerificationFormValuesAtom,
  verifiedAtom,
  checkVerificationAtom,
} from './jotai';
import {submitErrorMessage} from './lib';
import fieldToTextInputProps from '@/form/lib/fieldToTextInputProps';
import notice from '@/utils/notice';
import useMutationCheckVerificationCode from '@/apollo/hook/members/useMutationCheckVerificationCode';

import TextField from './components/TextField';

/** - 確認驗證碼zod解析 */
const resolver = zodResolver(
  schema.required({countryCode: true, mobile: true}),
);

export interface CheckVerificationCodeProps {
  /** - 驗證成功 */
  onVerifySuccess?: (cb: SchemaType) => void;
  /** - 驗證失敗 */
  onVerifyFailed?: (message: string) => void;
  /**
   * - 驗證類型
   *    - `SignUp`: 註冊
   *    - `ResetPassword`: 重設密碼
   *    - `ChangePassword`: 修改密碼
   * @default 'ResetPassword'
   */
  type?: 'SignUp' | 'ResetPassword' | 'ChangePassword';
}

/** - 檢查驗證碼 */
export default memo(function CheckVerificationCode({
  onVerifySuccess,
  onVerifyFailed,
  type = 'ResetPassword',
}: CheckVerificationCodeProps) {
  const values = useAtomValue(checkVerificationFormValuesAtom);
  const setCheckVerification = useSetAtom(checkVerificationAtom);
  const [verified, setVerified] = useAtom(verifiedAtom);
  const {control, handleSubmit, resetField, getValues} = useForm<SchemaType>({
    resolver,
    defaultValues,
    values,
  });

  const [checkVerificationCodeFn, {loading}] = useMutationCheckVerificationCode(
    {
      onCompleted(params) {
        if (params?.checkVerificationCode) {
          const {success, message, existingMember} =
            params.checkVerificationCode;
          if (success) {
            switch (type) {
              // 註冊情況要判斷是否存在會員
              case 'SignUp':
                const _message = message || '手機號碼已註冊';
                if (existingMember) {
                  notice(_message);
                  resetField('verificationCode');
                  onVerifyFailed?.(_message);
                  return;
                }
                break;
              case 'ResetPassword':
              case 'ChangePassword':
              default:
                break;
            }
            const formValues = getValues();
            setCheckVerification(formValues);
            onVerifySuccess?.(formValues);
            setVerified(true);
          } else if (message) {
            notice(message);
            onVerifyFailed?.(message);
            resetField('verificationCode');
          }
        }
      },
      onError(err) {
        onVerifyFailed?.(err.message);
        console.log('checkVerificationCode', err);
        return null;
      },
    },
  );

  const _checkVerificationCode: SubmitHandler<SchemaType> = useCallback(
    ({mobile, verificationCode, countryCode}) => {
      checkVerificationCodeFn({
        variables: {mobile, verificationCode, countryCode: '+' + countryCode},
      });
    },
    [checkVerificationCodeFn],
  );

  return (
    <VStack gap="$4">
      <Controller
        control={control}
        name="verificationCode"
        render={({field, fieldState: {error}}) => (
          <TextField
            label="驗證碼"
            isInvalid={Boolean(error)}
            isDisabled={verified}
            isRequired
            message={error?.message}
            inputMode="numeric"
            {...fieldToTextInputProps(field)}
          />
        )}
      />
      {verified ? null : (
        <Button
          isDisabled={loading}
          onPress={handleSubmit(
            _checkVerificationCode,
            submitErrorMessage(onVerifyFailed),
          )}>
          {loading && <ButtonSpinner mr="$1" />}
          <ButtonText>驗證</ButtonText>
        </Button>
      )}
    </VStack>
  );
});

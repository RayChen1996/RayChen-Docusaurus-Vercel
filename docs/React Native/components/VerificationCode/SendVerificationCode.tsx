import React, {useCallback, useState} from 'react';
import {VStack} from '@gluestack-ui/themed';
import {type SubmitHandler, Controller, useForm} from 'react-hook-form';
import {addMilliseconds} from 'date-fns';
import {useAtomValue, useSetAtom} from 'jotai';
import {zodResolver} from '@hookform/resolvers/zod';

import {sendVerificationAtom, sentAtom, verifiedAtom} from './jotai';
import {submitErrorMessage} from './lib';
import {
  type SchemaType,
  schema,
  defaultValues,
} from '@/form/members/sendVerificationCode';
import fieldToTextInputProps from '@/form/lib/fieldToTextInputProps';
import useMutationSendVerificationCode from '@/apollo/hook/members/useMutationSendVerificationCode';

import SentButton from './components/SentButton';
import TextField from './components/TextField';

export interface SendVerificationCodeProps {
  /** - 發送成功 */
  onSentSuccess?: (cb: SchemaType) => void;
  /** - 發送失敗 */
  onSentFailed?: (message: string) => void;
}

/** - 發送間隔`ms` */
const sendInterval = 1000 * 30;

/** - 發送驗證碼zod解析 */
const resolver = zodResolver(
  schema.required({mobile: true, countryCode: true}),
);

/** - 發送驗證碼 */
export default function SendVerificationCode({
  onSentSuccess,
  onSentFailed,
}: SendVerificationCodeProps) {
  const setSendVerification = useSetAtom(sendVerificationAtom);
  const setSent = useSetAtom(sentAtom);
  const verified = useAtomValue(verifiedAtom);
  const [timeLimitISO, setTimeLimitISO] = useState<null | string>(null);

  const {control, handleSubmit, getValues} = useForm<SchemaType>({
    resolver,
    defaultValues,
  });

  const _sendVerificationCode: SubmitHandler<SchemaType> = ({
    mobile,
    countryCode,
  }) => {
    sendVerificationCodeFn({
      variables: {mobile, countryCode: '+' + countryCode},
    });
  };
  const [sendVerificationCodeFn, {loading}] = useMutationSendVerificationCode({
    onCompleted(params) {
      if (params?.sendVerificationCode) {
        const {success} = params.sendVerificationCode;
        if (success) {
          const values = getValues();
          setTimeLimitISO(
            addMilliseconds(new Date(), sendInterval).toISOString(),
          );
          onSentSuccess?.(values);
          setSendVerification(values);
          setSent(true);
        }
      }
    },
    onError(err) {
      onSentFailed?.(err.message);
      console.log('sendVerificationCode error', err);
      return null;
    },
  });

  const _resetTimeLimitISO = useCallback(() => {
    setTimeLimitISO(null);
  }, []);

  return (
    <VStack gap="$4">
      <Controller
        control={control}
        name="mobile"
        render={({field, fieldState: {error}}) => (
          <TextField
            label="手機號碼"
            isInvalid={Boolean(error)}
            isDisabled={verified}
            message={error?.message}
            inputMode="tel"
            {...fieldToTextInputProps(field)}
          />
        )}
      />
      {verified ? null : (
        <SentButton
          loading={loading}
          onPress={handleSubmit(
            _sendVerificationCode,
            submitErrorMessage(onSentFailed),
          )}
          timeLimitISO={timeLimitISO}
          onTimeUp={_resetTimeLimitISO}
        />
      )}
    </VStack>
  );
}

import React from 'react';
import {VStack} from '@gluestack-ui/themed';
import {useAtomValue} from 'jotai';

import SendVerificationCode, {
  type SendVerificationCodeProps,
} from './SendVerificationCode';
import ResetPassword, {type ResetPasswordProps} from './ResetPassword';
import CheckVerificationCode, {
  type CheckVerificationCodeProps,
} from './CheckVerificationCode';
import ChangePassword, {type ChangePasswordProps} from './ChangePassword';
import withJotaiHOC from './withJotaiHOC';
import {sentAtom, verifiedAtom} from './jotai';

export interface VerificationCodeProps
  extends SendVerificationCodeProps,
    ResetPasswordProps,
    CheckVerificationCodeProps,
    ChangePasswordProps {}

/** - 驗證碼組件 */
export default withJotaiHOC(function VerificationCodeComponent({
  onSentSuccess,
  onSentFailed,
  onResetSuccess,
  onResetFailed,
  onVerifySuccess,
  onVerifyFailed,
  onChangeSuccess,
  onChangeFailed,
  type,
}: VerificationCodeProps) {
  const sent = useAtomValue(sentAtom);
  const verified = useAtomValue(verifiedAtom);

  function _switch() {
    if (verified) {
      switch (type) {
        case 'ChangePassword':
          return (
            <ChangePassword
              onChangeSuccess={onChangeSuccess}
              onChangeFailed={onChangeFailed}
            />
          );
        case 'ResetPassword':
          return (
            <ResetPassword
              onResetFailed={onResetFailed}
              onResetSuccess={onResetSuccess}
            />
          );
        case 'SignUp':
        default:
          break;
      }
    }
    return null;
  }

  return (
    <VStack gap="$4">
      <SendVerificationCode
        onSentSuccess={onSentSuccess}
        onSentFailed={onSentFailed}
      />
      {sent ? (
        <CheckVerificationCode
          onVerifySuccess={onVerifySuccess}
          onVerifyFailed={onVerifyFailed}
          type={type}
        />
      ) : null}
      {_switch()}
    </VStack>
  );
});

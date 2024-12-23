import {atom} from 'jotai';
import type {SchemaType as SendVerificationCodeSchemaType} from '@/form/members/sendVerificationCode';
import type {SchemaType as CheckVerificationCodeSchemaType} from '@/form/members/checkVerificationCode';
import type {SchemaType as ResetPasswordSchemaType} from '@/form/members/resetPassword';

export const sendVerificationAtom = atom<SendVerificationCodeSchemaType>({
  countryCode: '886',
  mobile: '',
});

export const checkVerificationAtom = atom<CheckVerificationCodeSchemaType>({
  countryCode: '886',
  mobile: '',
  verificationCode: '',
});

/** - 已送出 */
export const sentAtom = atom(false);

/** - 已驗證 */
export const verifiedAtom = atom(false);

/** - 檢查驗證values */
export const checkVerificationFormValuesAtom =
  atom<CheckVerificationCodeSchemaType>(get => {
    const result = get(sendVerificationAtom);
    return {
      verificationCode: '',
      countryCode: result.countryCode,
      mobile: result.mobile,
    };
  });

/** - 重設密碼values */
export const resetPasswordFormValuesAtom = atom<
  ResetPasswordSchemaType & {_repeatPassword: string}
>(get => {
  const result = get(checkVerificationAtom);
  return {
    verificationCode: result.verificationCode,
    username: result.mobile || '',
    oldPassword: '',
    password: '',
    _repeatPassword: '',
  };
});

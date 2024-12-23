import type {FieldValues, FieldErrors} from 'react-hook-form';

/** - 回傳欄位送出第一個錯誤訊息 */
export const submitErrorMessage = <TFieldValues extends FieldValues>(
  callback?: (message: string) => void,
) => {
  /** - 回傳的參數 */
  type CallbackParams = FieldErrors<TFieldValues>;
  return (params: CallbackParams) => {
    for (const key in params) {
      const element = params[key as keyof CallbackParams];
      const message = element?.message;
      if (typeof message === 'string') {
        // console.log(message);
        callback?.(message);
        break;
      }
    }
  };
};

import type { Response } from "@/schema/appbase/response";

interface SignInResponse extends Response {
  token?: string;
}

interface CallbackParams<TData = unknown> {
  /** - 執行成功且有獲得對應資料 */
  onSuccess?: (cb: Required<TData>) => void | Promise<void>;
  successLabel?: string;
  /** - 執行成功，回傳結果不成功 */
  onUnsuccess?: (cb: TData) => void | Promise<void>;
  unsuccessLabel?: string;
  /** - 執行成功，沒有獲得回傳結果 */
  onFailure?: () => void | Promise<void>;
  failLabel?: string;
}

/** - 核心處理 */
async function processResponse<TData extends SignInResponse>(
  result: TData | undefined,
  params: CallbackParams<TData>,
  tokenCheck: boolean = false,
) {
  let label = "";

  if (result) {
    const tokenVerify = tokenCheck ? Boolean(result?.token) : true;
    if (result.success && tokenVerify) {
      await params?.onSuccess?.(result as Required<TData>);
      label = params?.successLabel || "";
    } else {
      await params?.onUnsuccess?.(result);
      label = result?.message || params?.unsuccessLabel || "";
    }
  } else {
    await params?.onFailure?.();
    label = params?.failLabel || "";
  }

  return label;
}

/** - 解析回傳 */
export async function parseApiResponse<TData extends Response>(
  result: TData | undefined,
  params: CallbackParams<TData>,
) {
  return await processResponse(result, params);
}

/** - 解析註冊回傳 */
export async function parseSignInApiResponse<TData extends SignInResponse>(
  result: TData | undefined,
  params: CallbackParams<TData>,
) {
  return await processResponse(result, params, true);
}

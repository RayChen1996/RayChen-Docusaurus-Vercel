import { isFunction, isNil, isString } from "es-toolkit";
import {
  toast,
  type ToastOptions,
  type ToastPromiseParams,
  type Id,
  TypeOptions,
  UpdateOptions,
} from "react-toastify";
import type { Response } from "@/schema/appbase/response";

const resetParams = {
  isLoading: null,
  autoClose: null,
  closeOnClick: null,
  closeButton: null,
  draggable: null,
};

export default function mutationToast<
  TData = unknown,
  TError = unknown,
  TPending = unknown,
>(
  promise: Promise<TData> | (() => Promise<TData>),
  { pending, error, success }: ToastPromiseParams<TData, TError, TPending>,
  options?: ToastOptions<TData>,
) {
  let id: Id;

  if (pending) {
    id = isString(pending)
      ? toast.loading(pending, options)
      : toast.loading(pending.render, {
          ...options,
          ...(pending as ToastOptions),
        } as ToastOptions<TPending>);
  }

  function resolver<T>(
    type: TypeOptions,
    input: string | UpdateOptions<T> | undefined,
    result: T,
  ) {
    if (isNil(input)) {
      toast.dismiss(id);
      return;
    }

    const baseParams: UpdateOptions<T> = {
      type,
      ...resetParams,
      ...options,
      data: result,
    };
    const params = isString(input) ? { render: input } : input;

    if (id) {
      toast.update(id, {
        ...baseParams,
        ...params,
      } as UpdateOptions);
    } else {
      toast(params!.render, {
        ...baseParams,
        ...params,
      } as ToastOptions<T>);
    }

    return result;
  }

  const p = isFunction(promise) ? promise() : promise;

  p.then((result) =>
    resolver(checkAllSuccess(result) ? "success" : "warning", success, result),
  ).catch((err) => resolver("error", error, err));

  return p;
}

/** - 檢查回傳 */
function checkAllSuccess<TData = unknown>(data: TData): boolean {
  const _data = data as { data: { [apiName: string]: Response } };
  const result = _data.data;

  if (result) {
    for (const key in result) {
      if (Object.prototype.hasOwnProperty.call(result, key)) {
        const element = result[key];
        const success = element.success;
        if (!success) {
          return false;
        }
      }
    }
  }

  return true;
}

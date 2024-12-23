import {
  type FieldFunctionOptions,
  type FieldPolicy,
  type FieldReadFunction,
} from "@apollo/client";
import { offsetLimitPagination } from "@apollo/client/utilities";

type Options = Record<"offset" | "limit", number>;

/**
 *  - 建立基礎頁數偏移欄位
 * > 自動包含`latest`
 * */
export default function generateOffsetLimitPagination(
  params: Record<string, string[]>,
) {
  const result: Record<string, FieldPolicy> = {};

  for (const key in params) {
    if (Object.prototype.hasOwnProperty.call(params, key)) {
      const element = params[key];
      result[key] = {
        ...offsetLimitPagination([...element, "latest"].filter(Boolean)),
        read,
      };
    }
  }

  return result;
}

const read: FieldReadFunction = (existing, options) => {
  const { args } = options as FieldFunctionOptions<Options, Options>;
  const offset = args?.offset ?? 0;
  const limit = args?.limit ?? existing?.length ?? 0;
  return existing?.slice(offset, offset + limit);
};

```

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import type { DefaultValues } from "react-hook-form";

import passwordSchema from "../schema/password";

/** - 登入`schema` */
export const schema = z.object({
  username: z
    .string({ required_error: "請輸入手機號碼" })
    .trim()
    .min(1, { message: "請輸入手機號碼" }),
  password: passwordSchema,
});

/** - 登入`schema`型別 */
export type SchemaType = z.infer<typeof schema>;

/** - 登入預設值 */
export const defaultValues: DefaultValues<SchemaType> = {
  username: "",
  password: "",
};

/** - 登入解析器 */
export const resolver = zodResolver(schema);

```

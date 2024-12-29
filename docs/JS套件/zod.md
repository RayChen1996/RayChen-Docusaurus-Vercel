---
title: ZOD
---

假設 API 提供以下的資料結構：

```json
[
  {
    "id": 1,
    "memberId": 1,
    "items": [
      {
        "productId": 3,
        "quantity": 1
      }
    ]
  },
  {
    "id": 2,
    "memberId": 2,
    "items": [
      {
        "productId": 4,
        "quantity": 2
      },
      {
        "productId": 5,
        "quantity": 1
      }
    ]
  }
]
```

```tsx
import { useForm, Controller } from "react-hook-form";

const { control, handleSubmit } = useForm();

<Controller
  control={control}
  name={`items.${index}.quantity`} // 對應陣列的索引
  render={({ field }) => <input {...field} type="number" placeholder="數量" />}
/>;
```

# 使用 ZOD 驗證結構

定義 Schema

使用 ZOD 定義資料結構的驗證規則：

```ts
import { z } from "zod";

const itemSchema = z.object({
  productId: z.number(),
  quantity: z.number().min(1, "數量必須至少為 1"),
});

const formSchema = z.object({
  items: z.array(itemSchema),
});
```

# 結合 react-hook-form 和 ZOD

配合 `zodResolver` 與 `useForm`，將 Schema 應用到表單：

```ts
import { zodResolver } from "@hookform/resolvers/zod";

const { control, handleSubmit } = useForm({
  resolver: zodResolver(formSchema),
  defaultValues: {
    items: data[0].items, // 初始化第一筆資料
  },
});

const onSubmit = (values) => {
  console.log(values);
};
```

以下是整合 react-hook-form 與 ZOD 的完整程式碼：

```tsx
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const itemSchema = z.object({
  productId: z.number(),
  quantity: z.number().min(1, "數量必須至少為 1"),
});

const formSchema = z.object({
  items: z.array(itemSchema),
});

const App = () => {
  const { control, handleSubmit } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      items: [
        { productId: 3, quantity: 1 },
        { productId: 4, quantity: 2 },
      ],
    },
  });

  const onSubmit = (values) => {
    console.log(values);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {Array(2)
        .fill(0)
        .map((_, index) => (
          <Controller
            key={index}
            control={control}
            name={`items.${index}.quantity`}
            render={({ field }) => (
              <input
                {...field}
                type="number"
                placeholder={`數量 ${index + 1}`}
              />
            )}
          />
        ))}
      <button type="submit">提交</button>
    </form>
  );
};

export default App;
```

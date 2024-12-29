---
title: react-hook-form & ZOD 處理表單陣列型態使用
---

介紹一下關於如何透過 `react-hook-form` 來處理物件中陣列型態資料

假設API的Schema結構是

```json showLineNumbers {5-10}
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

我們要透過表單來讀寫 `items` 資料

```jsx
const data = [
  {
    id: 1,
    memberId: 1,
    items: [{ productId: 3, quantity: 1 }],
  },
  {
    id: 2,
    memberId: 2,
    items: [
      { productId: 4, quantity: 2 },
      { productId: 5, quantity: 1 },
    ],
  },
];
```

使用 `react-hook-form` 配合 `Controller`

要控制陣列型態的表單，需使用 `react-hook-form` 的 `Controller`，透過 `name` 屬性對應資料結構中的 `items` 欄位索引：

```jsx showLineNumbers {7}
import { useForm, Controller } from "react-hook-form";

const { control } = useForm();

<Controller
  control={control}
  name={`items.${index}.quantity`} // 對應陣列的索引
  render={({ field }) => <input {...field} type="number" placeholder="數量" />}
/>;
```

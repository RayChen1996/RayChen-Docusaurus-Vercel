---
title: Date-fns
---

在介紹 date-fns 的 format 方法時，這是一個非常方便的工具，可以讓你將 JavaScript 日期物件格式化為不同的字串。對於一些特定的日期格式要求，比如反轉的 ISO 格式（即 "YYYY-MM-DD" 轉換為 "DD-MM-YYYY"），date-fns 提供了一個非常簡單的方法來實現。

首先，你需要安裝 date-fns：

```bash

npm install date-fns

```

接著，在你的程式碼中引入 format 方法並使用它來處理日期格式。以下是一個反轉 ISO 格式的範例：

```js
import { format } from "date-fns";

// 假設我們有一個 ISO 格式的日期字串
const isoDate = "2024-12-22";

// 我們可以將其轉換為 Date 物件
const dateObj = new Date(isoDate);

// 使用 `format` 方法來反轉 ISO 格式
const reversedDate = format(dateObj, "dd-MM-yyyy");

console.log(reversedDate); // 輸出: 22-12-2024
```

在這段程式碼中：

new Date(isoDate) 將 ISO 格式的日期字串轉換為 JavaScript 日期物件。
format(dateObj, 'dd-MM-yyyy') 將日期物件轉換為 DD-MM-YYYY 格式。
這樣你就能夠輕鬆地將 ISO 格式的日期反轉為另一種格式，並根據需要進行更多的日期格式化。

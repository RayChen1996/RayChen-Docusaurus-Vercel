---
title: ClSX 處理樣式好幫手
---

當我們在開發 React 項目時，常常會需要動態組合 class 名稱。這時候，clsx 這個小工具就顯得特別有用。clsx 是一個輕量級的 JavaScript 函式庫，能夠幫助我們根據條件動態地合併 CSS 類名，從而避免寫出冗長的 if 判斷語句或複雜的字串拼接。
首先，安裝 clsx：

```bash
npm install clsx


```

使用方式如下：
可以幫助我們用來撰寫 jsx 根據不同邏輯要渲染不同條件的 UI

```js
import clsx from "clsx";

function Button({ primary, disabled }) {
  return (
    <button
      className={clsx("btn", {
        "btn-primary": primary,
        "btn-disabled": disabled,
      })}
    >
      點我
    </button>
  );
}
```

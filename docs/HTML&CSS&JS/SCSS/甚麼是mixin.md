---
title: SCSS Mixin 筆記
---

在撰寫 CSS 的時候，常常會遇到需要重複使用的樣式片段。  
如果單純複製貼上，不僅容易出錯，也會讓程式碼變得難以維護。

這時候我們可以使用 **SCSS 的 Mixin**，它的概念有點類似 JavaScript 的 `function`，  
可以將常用的 CSS 抽離出來，讓程式碼更簡潔、更好維護。

---

## 建立 Mixin

通常會在 `assets/helpers/` 資料夾中新增一個 `_mixin.scss` 檔案，  
並在裡面撰寫可重複使用的程式碼。

範例：

```scss
// _mixin.scss
@mixin size($w, $h) {
  width: $w;
  height: $h;
}
```

使用 Mixin

在需要的區塊或元素上，可以透過 @include 來呼叫：

```scss
.card {
  @include size(96px, 31px);
}
```

```css
.card {
  width: 96px;
  height: 31px;
}
```

Mixin 優點：

避免重複撰寫相同的 CSS

提高程式碼可讀性與維護性

可以像 function 一樣傳入參數，增加彈性

下次遇到需要重複使用的樣式片段時，就能透過 Mixin 來簡化程式碼 ✨

---

```scss
@mixin size($w, $h) {
  width: $w;
  height: $h;
}
// LOGO圖片取代文字
@mixin background-type {
  text-indent: -99999px;
  white-space: nowrap;
  overflow: hidden;
  background-repeat: no-repeat;
}
// 置中
@mixin center {
  margin: 0 auto;
}
// 斷點
@mixin large {
  @media only screen and (max-width: 992px) {
    @content;
  }
}
@mixin medium {
  @media only screen and (max-width: 768px) {
    @content;
  }
}
@mixin small {
  @media only screen and (max-width: 767px) {
    @content;
  }
}
```

---
title: 使用 Bootstrap 進行客製化切版筆記
---

在專案中使用 Bootstrap 時，常常會需要進行 **客製化切版**。  
為了方便管理，我們通常會將 SCSS 檔案依照功能模組化，並透過 `@import` 來統一引入。

---

## SCSS 結構規劃

以下是一個典型的專案 SCSS 架構：

```md
scss/
├── base/ # 全域 reset、基礎樣式
├── components/ # 元件 (button、card、swiper…)
├── config/ # 共用設定 (文字大小、utility、背景…)
├── helpers/ # 共用工具 (mixin、variables…)
├── layout/ # 版型 (navbar、footer…)
├── pages/ # 頁面樣式 (index、course…)
└── style.scss # 主入口檔案，統一 import
```

---

## style.scss 範例

```scss
// Bootstrap Functions
@import "../../../node_modules/bootstrap/scss/functions";

// Helpers
@import "./helpers/variables";

// Bootstrap Core
@import "../../../node_modules/bootstrap/scss/bootstrap";

// Base
@import "base/base";

// Helpers
@import "helpers/mixin";

// Config
@import "config/text-size";
@import "config/utility";
@import "config/background";

// Components
@import "components/button";
@import "components/swiper";

// Layout
@import "layout/header";
@import "layout/footer";

// Pages
@import "pages/index";
@import "pages/course";
@import "pages/surroundings";
```

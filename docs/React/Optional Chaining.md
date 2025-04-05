---
title: 在 React 取得 API 資料時使用 Optional Chaining
---

1. 什麼是 Optional Chaining（?.）？

在 JavaScript 或 TypeScript 開發中，當我們存取一個物件的巢狀屬性時，若某個屬性為 undefined 或 null，就會拋出錯誤。例如：

```jsx
const user = null;
console.log(user.name); // TypeError: Cannot read properties of null (reading 'name')
```

為了解決這個問題，ES2020 引入了 Optional Chaining（?.），它允許我們在存取巢狀屬性時，如果前一層為 undefined 或 null，則直接回傳 undefined，而不會拋出錯誤。

```jsx
const user = null;
console.log(user?.name); // undefined，不會拋出錯誤
```

2. 在 React 取得 API 資料時的應用

在 React 應用中，經常需要從 API 取得資料，而這些資料可能尚未返回（例如初始 state 為 null），這時候直接存取物件屬性就可能導致錯誤。

傳統方式

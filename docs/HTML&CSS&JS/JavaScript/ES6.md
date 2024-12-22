---
title: JavaScript ES6
---

# JavaScript ES6 筆記

## 1. 傳統操作陣列的方式

以往在操作陣列時，常會使用像是 `.concat` 的方法：

```javascript
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = arr1.concat(arr2);
console.log(combined); // [1, 2, 3, 4, 5, 6]
```

## 2. ES6 推出的展開運算符（Spread Operator）

ES6 為陣列操作提供了更簡潔的語法，稱為展開運算符（Spread Operator）：

基本語法
展開運算符用三個點 ... 表示，用於展開陣列中的元素。

```js
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4, 5, 6]
```

更多使用範例

1. 陣列複製
   使用展開運算符複製陣列，而不會影響原陣列。

```js
const original = [1, 2, 3];
const copy = [...original];
copy.push(4);
console.log(original); // [1, 2, 3]
console.log(copy); // [1, 2, 3, 4]
```

2. 與其他元素組合

```js
const arr = [2, 3];
const result = [1, ...arr, 4];
console.log(result); // [1, 2, 3, 4]
```

3. 傳遞參數給函數
   展開運算符可將陣列的每個元素作為參數傳遞給函數。

```js
function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];
console.log(sum(...numbers)); // 6
```

4. 合併物件（ES6+）

```js
const obj1 = { a: 1, b: 2 };
const obj2 = { b: 3, c: 4 };
const combined = { ...obj1, ...obj2 };
console.log(combined); // { a: 1, b: 3, c: 4 }
```

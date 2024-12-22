---
title: Vue emit
---

## 1. 基本概念

在 Vue 中，emit 是用來觸發自定義事件的。通常，這些事件會由父組件監聽並回應。

$emit：子組件通過 $emit 發送事件，讓父組件可以監聽並處理該事件。
v-on 或 @：父組件監聽子組件發出的事件，並執行相應的處理函數。

## 2. 基本語法

子組件：使用 $emit
在子組件中，我們可以通過 this.$emit('event-name', data) 來觸發自定義事件並傳遞數據給父組件。

```js
<template>
  <button @click="sendDataToParent">發送資料到父組件</button>
</template>

<script>
export default {
  methods: {
    sendDataToParent() {
      this.$emit("childEvent", "這是來自子組件的資料");
    },
  },
};
</script>
```

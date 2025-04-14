---
title: Apollo Client Cache 機制與 fetchPolicy
---

# 🚀 Apollo Client Cache 機制與 `fetchPolicy` 實戰筆記

## 📚 目錄

- [一、Apollo Client Cache 是什麼？](#一apollo-client-cache-是什麼)
- [二、常見的 `fetchPolicy` 解釋與使用場景](#二常見的-fetchpolicy-解釋與使用場景)
- [三、`network-only` 沒有效果的原因與解法](#三network-only-沒有效果的原因與解法)
- [四、如何在 DevTools 檢查特定 `operationName` 的請求](#四如何在-devtools-檢查特定-operationname-的請求)
- [五、最佳實務建議](#五最佳實務建議)
- [六、實戰練習：CodeSandbox 範例](#六實戰練習codesandbox-範例)
- [七、延伸閱讀](#七延伸閱讀)

---

## 一、Apollo Client Cache 是什麼？

Apollo Client 預設會將查詢過的資料快取（Cache）起來，避免每次都去打 API，提升效能與使用者體驗。這樣的機制可以減少不必要的網路請求，加快應用程式的反應速度。

---

## 二、常見的 `fetchPolicy` 解釋與使用場景

| fetchPolicy    | 說明                                          | 常見場景                                     |
| -------------- | --------------------------------------------- | -------------------------------------------- |
| `cache-first`  | 預設值。先從快取抓資料，沒有才發送請求。      | 一般頁面讀取初始資料。                       |
| `network-only` | 每次都強制打 API，完全不看 Cache。            | 需要即時性高的資料（如即時排行榜、抽獎等）。 |
| `cache-only`   | 只從快取拿資料，沒有就回 null，不發 request。 | 單純讀 cache、離線模式。                     |
| `no-cache`     | 每次都打 API，但不會存入快取中。              | 有些一次性資料（像登入驗證）                 |
| `standby`      | 等待被啟用，不會主動執行查詢。                | 很少用，一般用在 UI component init 階段。    |

---

## 三、`network-only` 沒有效果的原因與解法

### ❓ 問題來源：

即使在 `useQuery` 中設定了 `fetchPolicy: 'network-only'`，但在 Network Panel 中並未看到發出的請求。

### 🕵️ 真相：

可能是在初始化 Apollo Client 的 `client.ts` 中設定了 `InMemoryCache` 的 `typePolicies`，自訂了 cache 行為，導致 Apollo Client 優先使用自訂快取邏輯，而無視 `fetchPolicy` 的設定。

### 🧯 解法：

如果你有以下設定：

```ts
const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        lotteries: {
          keyArgs: false,
          merge(existing, incoming) {
            return incoming;
          },
        },
      },
    },
  },
});
```

## 七、延伸閱讀

- [Apollo 官方文件：fetchPolicy](https://www.apollographql.com/docs/react/data/queries/#setting-a-fetch-policy)
- [Apollo Cache typePolicies 教學](https://www.apollographql.com/docs/react/caching/cache-configuration/#typepolicy-fields)
- [Docusaurus 官方教學](https://docusaurus.io/docs)

👉 練習範例：[Apollo Client Cache 與 fetchPolicy 練習 CodeSandbox](https://codesandbox.io/s/apollo-client-cache-fetchpolicy-example)

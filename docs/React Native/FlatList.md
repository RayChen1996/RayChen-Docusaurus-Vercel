---
title: FlatList Props
---

1.ListEmptyComponent 用來顯示當列表沒有資料時的 UI

2.`FooterComponent` 用來顯示載入更多（infinite scroll）的 UI

```tsx
import React from "react";
import { View, Text, ActivityIndicator, FlatList, Button } from "react-native";
import { useQuery, gql } from "@apollo/client";

const GET_ITEMS = gql`
  query GetItems($offset: Int, $limit: Int) {
    items(offset: $offset, limit: $limit) {
      id
      name
    }
  }
`;

const PAGE_SIZE = 10;

const ItemList = () => {
  const { data, loading, error, fetchMore } = useQuery(GET_ITEMS, {
    variables: { offset: 0, limit: PAGE_SIZE },
    notifyOnNetworkStatusChange: true,
  });

  const loadMore = () => {
    if (data?.items.length % PAGE_SIZE !== 0) return;
    fetchMore({
      variables: {
        offset: data.items.length,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev;
        return {
          items: [...prev.items, ...fetchMoreResult.items],
        };
      },
    });
  };

  if (loading && !data) return <ActivityIndicator size="large" />;

  return (
    <FlatList
      data={data?.items || []}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <Text style={{ padding: 10 }}>{item.name}</Text>
      )}
      ListEmptyComponent={
        <View style={{ padding: 20, alignItems: "center" }}>
          <Text>暫無資料</Text>
        </View>
      }
      ListFooterComponent={
        data?.items.length % PAGE_SIZE === 0 ? (
          <View style={{ padding: 20, alignItems: "center" }}>
            <ActivityIndicator size="small" />
          </View>
        ) : null
      }
      onEndReached={loadMore}
      onEndReachedThreshold={0.5} // 滾動到 50% 時觸發載入
    />
  );
};

export default ItemList;
```

使用 useQuery(GET_ITEMS, { variables }) 來獲取數據
初始 offset 設為 0，每次請求 PAGE_SIZE = 10 筆數據
處理 FlatList 狀態

`ListEmptyComponent`: 如果 data?.items 為空，顯示「沒有數據可顯示」
`ListFooterComponent`: 當 data.items.length % PAGE_SIZE === 0 時，顯示 `ActivityIndicator` 代表載入中
滾動加載更多數據

`onEndReached` 觸發 `fetchMore`
`updateQuery` 將新數據合併到原數據

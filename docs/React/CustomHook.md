---
title: 撰寫封裝列表元件邏輯
---

在 Next.js 中封裝一個類似 React Native FlatList 的列表元件，可以遵循以下的步驟來處理 props 和自定義 JSX 內容，並實現頁數分頁渲染、placeholder 佔位資料等功能。這個列表元件會讓使用者能夠提供資料、頁數、以及自定義的渲染內容。

# 1. 建立基本的列表元件結構

首先，我們會建立一個 FlatList 元件，這個元件可以接受不同的 props，並且能夠顯示資料列表、佔位符、頁數等。

```tsx
import React, { useState, useEffect } from "react";

interface FlatListProps {
  data: any[]; // 列表資料
  renderItem: (item: any) => JSX.Element; // 渲染每一個項目的函數
  isLoading: boolean; // 是否正在加載資料
  placeholderData?: any[]; // 佔位符資料，用來顯示資料載入時的視覺效果
  page: number; // 當前頁數
  loadMore: () => void; // 載入更多資料的函數
}

const FlatList: React.FC<FlatListProps> = ({
  data,
  renderItem,
  isLoading,
  placeholderData = [],
  page,
  loadMore,
}) => {
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    // 假設資料已經載入完畢，沒有更多資料可載入
    if (data.length === 0 || page > 5) {
      // 假設最大頁數是 5
      setHasMore(false);
    }
  }, [data, page]);

  const handleLoadMore = () => {
    if (!isLoading && hasMore) {
      loadMore(); // 載入更多資料
    }
  };

  return (
    <div>
      <ul>
        {isLoading
          ? placeholderData.map((item, index) => (
              <li key={index} className="placeholder-item">
                {/* 這裡可以放一些預設的佔位符結構 */}
                Loading...
              </li>
            ))
          : data.map((item, index) => <li key={index}>{renderItem(item)}</li>)}
      </ul>

      {/* 如果有更多資料，顯示載入更多的按鈕 */}
      {hasMore && !isLoading && (
        <button onClick={handleLoadMore} className="load-more-btn">
          Load More
        </button>
      )}
    </div>
  );
};

export default FlatList;
```

# 2. 使用元件時的範例

這裡展示如何使用這個 FlatList 元件，並傳入適當的 props：

```tsx
import React, { useState } from "react";
import FlatList from "./FlatList";

const MyPage = () => {
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);

  const loadMore = async () => {
    setIsLoading(true);
    // 假設這裡會呼叫 API 載入資料
    setTimeout(() => {
      const newData = Array.from({ length: 10 }, (_, index) => ({
        id: page * 10 + index,
        name: `Item ${(page - 1) * 10 + index + 1}`,
      }));
      setData((prevData) => [...prevData, ...newData]);
      setPage((prevPage) => prevPage + 1);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div>
      <FlatList
        data={data}
        renderItem={(item) => <div>{item.name}</div>}
        isLoading={isLoading}
        placeholderData={new Array(5).fill(null)} // 預設的佔位符資料
        page={page}
        loadMore={loadMore}
      />
    </div>
  );
};

export default MyPage;
```

# 3. 說明與特點

- data: 傳入顯示的實際資料。
- renderItem: 每個列表項目會透過這個函數來渲染，可以傳入自定義的 JSX 來展示每個資料項目。
- isLoading: 用來判斷是否正在加載資料。如果正在加載，會顯示 placeholderData 中的項目。
- placeholderData: 這是用來顯示資料加載過程中的佔位符資料，可以傳入假的資料或空資料來展示載入狀態的效果。
- page: 當前頁數，用來控制分頁邏輯。
- loadMore: 用來載入更多資料的函數，通常會處理 API 請求的邏輯。

- `placeholderData` 可以傳入一個具有固定長度的陣列，讓使用者看到加載過程中的占位符視覺效果。
- `loadMore` 函數會在使用者滾動到列表底部或按下「Load More」按鈕時觸發，根據當前頁數載入更多資料。
- 當 `isLoading` 為 true 時，會顯示佔位符資料，當資料加載完成後，顯示真正的內容。
- 可以根據需要擴展更多功能，例如滾動到底部自動加載更多資料。

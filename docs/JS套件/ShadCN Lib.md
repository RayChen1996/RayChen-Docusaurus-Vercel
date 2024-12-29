---
title: shadcn UI Lib
---

當我們在串接API，頁面上需要等待API回應，會需要在頁面上處理等待效果，shadCN 有一個Compoents叫做 `Skeleton`

# 1.透過指令安裝到專案中

```bash
npx shadcn@latest add [Component]
```

可以透過鍵盤上下鍵選的方式安裝組件到專案中

# 2. import Component

```tsx
import { Skeleton } from "@/components/ui/skeleton";
```

```tsx
const { data, isLoading, refetch, isFetching } = useQuery<BibleResponse>({
  queryKey: ["bibleVerses", book, currentChapter],
  queryFn: () => fetchBibleVerses(decodeURI(book!), currentChapter.toString()),
});
```

準備20筆 LoadingData

```tsx showLineNumbers {1,9-13}
const loadingData = Array(20).fill(undefined);

 {isLoading || isFetching ? (
        <div className="container mx-auto p-4">
          <div className="mb-10 h-10">
            <Skeleton className="h-11 w-full rounded-xl" />
          </div>
          <div className="grid grid-cols-1 gap-4">
            {loadingData.map((_, index) => (
              <div key={index} className="h-5">
                <Skeleton className="h-5 w-full rounded-xl" />
              </div>
            ))}
          </div>
        </div>
      )...
```

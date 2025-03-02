---
title: 製作組件時，從共用 Schema 抽取所需型別 ── 使用 Pick
---

在開發前端應用時，我們經常會從 API 的回應資料中取出特定欄位來組建 UI 元件（Component）。然而，當 API 的資料結構較為複雜時，我們可能不需要所有的欄位，這時候可以使用 TypeScript 的 Pick 來擷取所需的型別，確保組件的類型定義更加精確。

假設的 API 資料結構
假設我們的 API 資料夾中有一個 posts，其結構如下：

```tsx
type Post = {
  id: string;
  name: string;
  body: string;
  createdAt: string;
  updatedAt: string;
};
```

如果我們要製作 PostItem 組件，但這個組件只需要 id、name 和 body，那麼可以使用 Pick 來擷取所需的型別：

```tsx showLineNumbers {1}
type PostItemProps = Pick<Post, "id" | "name" | "body">;

const PostItem: React.FC<PostItemProps> = ({ id, name, body }) => {
  return (
    <div>
      <h2>{name}</h2>
      <p>{body}</p>
    </div>
  );
};
```

這樣一來，我們的 PostItem 只會接收 id、name 和 body，而不需要關心 createdAt 和 updatedAt。這種方式能提高型別的可維護性，避免不必要的屬性干擾。

使用 Pick 可以讓我們從共用的 Schema 中擷取所需的型別，使組件更加清晰且易於維護。這不僅能減少不必要的屬性傳遞，還能提升開發效率和程式碼的可讀性。

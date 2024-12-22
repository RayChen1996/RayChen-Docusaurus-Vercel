---
title: Apollo Fragment
---

````js
# Apollo 的 Fragment 使用介紹

在 GraphQL 中，**Fragment** 是一種重用查詢或變更中的欄位的方式。它允許我們將複雜查詢中的欄位集合拆分成較小的片段，並且可以在不同的查詢中重複使用這些片段。這樣可以提高代碼的可維護性，減少重複，並確保資料的一致性。

## 1. 什麼是 Fragment？

Fragment 是 GraphQL 中的語法，允許我們定義一組欄位的選擇，然後在多個查詢中重複使用它。

### 優點：
- **代碼重用**：避免重複相同的欄位選擇。
- **增強可維護性**：更易於管理和修改查詢，當需要更新欄位時，只需更改 Fragment。

## 2. Fragment 的基本語法

```graphql
fragment FragmentName on TypeName {
  field1
  field2
  field3
}

````

- FragmentName 是片段的名稱。
- TypeName 是這個片段應用於的類型。
- field1, field2, field3 是這個片段會返回的欄位。

範例：
假設我們有一個 GraphQL 查詢，查詢用戶和他們的帖子：

```gql
query GetUserAndPosts {
  user {
    id
    name
    ...UserDetails
  }
  posts {
    id
    title
    ...PostDetails
  }
}

fragment UserDetails on User {
  email
  avatar
}

fragment PostDetails on Post {
  content
  createdAt
}
```

在這個例子中，UserDetails 和 PostDetails 都是 Fragment，用來重複使用對應類型的欄位。

3. 使用 Apollo Client 的 Fragment
   在 Apollo Client 中，使用 Fragment 的方式與原生 GraphQL 的使用方式相同。你可以將 Fragment 定義在查詢內部，然後將 Fragment 傳遞給 Apollo 查詢來執行。

範例：

```js
import { gql, useQuery } from "@apollo/client";

const GET_USER_AND_POSTS = gql`
  query GetUserAndPosts {
    user {
      id
      name
      ...UserDetails
    }
    posts {
      id
      title
      ...PostDetails
    }
  }

  fragment UserDetails on User {
    email
    avatar
  }

  fragment PostDetails on Post {
    content
    createdAt
  }
`;

const MyComponent = () => {
  const { loading, error, data } = useQuery(GET_USER_AND_POSTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>{data.user.name}</h1>
      <h2>{data.user.email}</h2>
      {data.posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};
```

在這裡，我們使用 useQuery Hook 發送 GET_USER_AND_POSTS 查詢，並且將 Fragment UserDetails 和 PostDetails 包含在查詢中，這樣 Apollo Client 就會自動處理 Fragment 的合併。

以下是介紹 Apollo 的 Fragment 使用的筆記，使用 Markdown 格式：

md
複製程式碼

# Apollo 的 Fragment 使用介紹

在 GraphQL 中，**Fragment** 是一種重用查詢或變更中的欄位的方式。它允許我們將複雜查詢中的欄位集合拆分成較小的片段，並且可以在不同的查詢中重複使用這些片段。這樣可以提高代碼的可維護性，減少重複，並確保資料的一致性。

## 1. 什麼是 Fragment？

Fragment 是 GraphQL 中的語法，允許我們定義一組欄位的選擇，然後在多個查詢中重複使用它。

### 優點：

- **代碼重用**：避免重複相同的欄位選擇。
- **增強可維護性**：更易於管理和修改查詢，當需要更新欄位時，只需更改 Fragment。

## 2. Fragment 的基本語法

````graphql
fragment FragmentName on TypeName {
  field1
  field2
  field3
}
FragmentName 是片段的名稱。
TypeName 是這個片段應用於的類型。
field1, field2, field3 是這個片段會返回的欄位。
範例：
假設我們有一個 GraphQL 查詢，查詢用戶和他們的帖子：

graphql

query GetUserAndPosts {
  user {
    id
    name
    ...UserDetails
  }
  posts {
    id
    title
    ...PostDetails
  }
}

fragment UserDetails on User {
  email
  avatar
}

fragment PostDetails on Post {
  content
  createdAt
}
在這個例子中，UserDetails 和 PostDetails 都是 Fragment，用來重複使用對應類型的欄位。

3. 使用 Apollo Client 的 Fragment
在 Apollo Client 中，使用 Fragment 的方式與原生 GraphQL 的使用方式相同。你可以將 Fragment 定義在查詢內部，然後將 Fragment 傳遞給 Apollo 查詢來執行。

範例：
javascript
複製程式碼
import { gql, useQuery } from '@apollo/client';

const GET_USER_AND_POSTS = gql`
  query GetUserAndPosts {
    user {
      id
      name
      ...UserDetails
    }
    posts {
      id
      title
      ...PostDetails
    }
  }

  fragment UserDetails on User {
    email
    avatar
  }

  fragment PostDetails on Post {
    content
    createdAt
  }
`;

const MyComponent = () => {
  const { loading, error, data } = useQuery(GET_USER_AND_POSTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>{data.user.name}</h1>
      <h2>{data.user.email}</h2>
      {data.posts.map(post => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};
在這裡，我們使用 useQuery Hook 發送 GET_USER_AND_POSTS 查詢，並且將 Fragment UserDetails 和 PostDetails 包含在查詢中，這樣 Apollo Client 就會自動處理 Fragment 的合併。

4. Fragment 的嵌套使用
Fragment 可以嵌套使用，這樣你可以將更小的片段組合成更大的片段，實現更靈活的查詢。

範例：

```gql

fragment UserDetails on User {
  id
  name
  ...UserContact
}

fragment UserContact on User {
  email
  phone
}


````

在這個例子中，UserDetails Fragment 包含了 UserContact Fragment，這樣你可以將多個層次的欄位進行組合和重用。

5. 使用 Fragment 的注意事項

   - Fragment 不能自定義變量：在 Fragment 中無法使用查詢變量，所有的欄位必須是靜態的。
   - Fragment 名稱唯一性：在同一查詢中，Fragment 名稱必須唯一，否則會發生衝突。

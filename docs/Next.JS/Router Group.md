---
title: Router Group
---

在 Next.js 中，Route Group 是用來對 URL 路由進行分組的一種方式，尤其是在 app 目錄中。這種機制允許你在同一層級的路由中將不同的路由集合進行邏輯分組，並且可以不直接影響頁面的結構。這對於多層結構的應用程式有很大的幫助，讓路由設計更加清晰並能夠更方便地進行重構。

# 什麼是 Route Group？

Route Group 允許開發者將路由進行邏輯分組，並且在路由 URL 中不會顯示出這個分組名稱。這樣可以在 URL 上保持清晰，同時保持內部結構的組織性。例如，你可以將相似功能的路由放在同一組中，方便管理。

# . 、.. 和 (.)(.) 的用法

在 Next.js 中，Route Group 的語法中使用了不同的符號來表示路由結構。這些符號允許你更靈活地設計路由，以下是一些常見的用法：

# 1. . - 當作路由分組的界定符號

. 用來建立一個空的 Route Group，這表示你在路由結構中進行了分組，但這個分組本身不會在最終的 URL 中顯示出來。它通常用來組織結構而不干擾 URL 的展示。

```planintext
/app
  /products
    /[id]
    /[slug]
  /dashboard

```

你可以用 Route Group 來讓 /products 和 /dashboard 成為同一層次的路由，但不會改變 URL。

```planintext
/app
  /(products)
    /[id]
    /[slug]
  /(dashboard)

```

這樣，最終的 URL 還是 `/products/[id]` 和 `/dashboard`，而不會在 URL 中顯示出 products 或 `dashboard`。

# 2. (.)(.) - 兩層分組結構

(.)(.) 是用來分組的方式，這表示有兩個路由組在同一層級進行邏輯上的分組。
範例：
你可以將 URL 中的部分路由放在不同的 Route Group 中：

```planintext

/app
  /(.)(products)
    /[id]
    /[slug]
  /(.)(dashboard)
```

這樣可以將 products 和 dashboard 路由進行不同的分組，以便進一步管理和控制，但 URL 還是保持簡單。

# 3. .. - 上層路由引用

`..` 用於引用上層路由，這樣可以在更高層的路由中共享相同的路由結構，而不需要重複定義相同的路由。

```planintext
/app
  /products
    /[id]
  /admin
    /dashboard

```

你可以使用 `..` 來讓 `admin` 路由共享 `products 路由的部分結構：

```planintext
/app
  /products
    /[id]
  /admin
    /..(products)

```

這樣可以讓 admin 路由繼承並共享 products 路由，而不必重複編寫相同的結構。

---
title: Next.js 設定網站Meta
---

```ts showLineNumber{4-12}
import React from "react";
import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Services",
};

export default function Layout({ children }: React.PropsWithChildren) {
  return children;
}
```

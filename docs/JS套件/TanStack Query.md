---
title: TanStack Query
---

這裡會介紹`Next.js`在介接API，可以用 TankStack Query來管理頁面上狀態

## 1. 建立`Provider`

```tsx title="/src/provider/TanStack.tsx"  showLineNumbers
"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { createContext, useContext, useState } from "react";
import { apiClient } from "@/lib/axios";
const AxiosContext = createContext(apiClient);
export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <AxiosContext.Provider value={apiClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </AxiosContext.Provider>
  );
}

export const useAxios = () => useContext(AxiosContext);
```

## 2. 從 Root Layout 整個包覆應用

```tsx title="/src/Layout.tsx" showLineNumbers {4,32}
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "@/provider/TanStack";
import { Toaster } from "@/components/ui/toaster";
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "聖經APP",
  description: "Bible App by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>{children}</Providers>
        <Toaster />
      </body>
    </html>
  );
}
```

可以從 `useQuery`這個hook，解構出 `data`、`isLoading`、`refetch`、`isFetching`

```tsx showLineNumbers {1}
const { data, isLoading, refetch, isFetching } = useQuery<BibleResponse>({
  queryKey: ["bibleVerses", book, currentChapter],
  queryFn: () => fetchXXXFn(decodeURI(book!), currentChapter.toString()),
});
```

```tsx
async function fetchXXXFn(
  book: string,
  chapter: string,
): Promise<BibleResponse> {
  const { data } = await axios.get(
    `https://bible-api.com/${book}+${chapter}?translation=cuv`,
  );
  return data;
}
```

當狀態為 `isLoading `或`isFetching `可以將按鈕`disabled`屬性禁用

```tsx
<button
  onClick={handlePrevious}
  disabled={currentChapter <= 1 || isLoading || isFetching}
>
  <ArrowBigLeft />
</button>
```

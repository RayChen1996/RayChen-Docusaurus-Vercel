---
title: Next.js 設定網站允許圖片網址
---

```ts showLineNumber{4-12}
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        pathname: "**",
      },
    ],
  },
  output: "standalone",
  env: {
    SESSION_SECRET: "fLoDUMqDPTO38cMkRxbNMovgH8270ep8jEcSAWv1WOQ=",
    GOOGLE_MAP_API_KEY: "AIzaSyAQ6vRAv9jMF_W5QDdJQdjt6h5QS1v7dBo",
  },
};

export default nextConfig;
```

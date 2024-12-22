---
title: Next.js 設定專案Env
---

```ts showLineNumber{14-17}
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

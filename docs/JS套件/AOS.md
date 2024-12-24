建立Provider

```jsx
"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      duration: 500,
    });
  }, []);
  return children;
}

```

```jsx
<AOSProvider>{children}</AOSProvider>
```

```jsx
<div className="relative aspect-[4/3] w-[280px]" data-aos="fade-up">
```

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

```tsx
<AOSProvider>{children}</AOSProvider>
```

```tsx
<div data-aos="fade-up" />
```

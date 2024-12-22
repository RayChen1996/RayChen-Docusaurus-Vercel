---
title: Jotai 常用的 hook
---

- useAtom

```js
import { useAtom } from "jotai";

const [step, setStep] = useAtom(SingUpIndexAtom);
```

```js
import { useSetAtom } from "jotai";
const setPostId = useSetAtom(postIndexAtom);
```

- useSetAtom

```js
import { useSetAtom } from "jotai";
const setPostId = useSetAtom(postIndexAtom);
```

- useAtomValue

```js
import { useAtomValue } from "jotai";

const getCartId = useAtomValue(cartIndexAtom);
```

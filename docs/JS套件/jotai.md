Jotai 常用的 hook

- useAtom

```
import { useAtom } from "jotai";

const [step, setStep] = useAtom(SingUpIndexAtom);
```

```
import { useSetAtom } from "jotai";
const setPostId = useSetAtom(postIndexAtom);
```

- useSetAtom

```
import { useSetAtom } from "jotai";
const setPostId = useSetAtom(postIndexAtom);
```

- useAtomValue

```
import { useAtomValue } from "jotai";

const getCartId = useAtomValue(cartIndexAtom);

```

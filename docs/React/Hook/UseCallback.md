---
title: 優化組件效能 - memo、UseMemo、UseCallback
---

在 React 中，每次組件重新渲染時，函式都會被重新創建，這可能會導致不必要的效能浪費，特別是當該函式被傳遞給 memo 化的子組件時，會導致子組件不必要的重新渲染。

useCallback 可以幫助我們記憶函式的引用，使它在依賴未改變時不會被重新創建，從而優化效能。

# 範例：沒有使用 useCallback

```tsx showLineNumbers{15-18}
import { memo, useState } from "react";

export default function App() {
  const [val, setVal] = useState(0);

  const changeValueFn = () => {
    console.log("enter chg valFn");
    setVal((e) => e + 1);
  };

  return (
    <div className="App">
      <TitleComponent onClick={changeValueFn} />
      <span>{val}</span>
      <button onClick={changeValueFn}>+1</button>
    </div>
  );
}

// memo 化的子組件
const TitleComponent = memo(({ onClick }) => {
  console.log("TitleComponent render");
  return <h1 onClick={onClick}>123</h1>;
});
```

問題：
雖然 TitleComponent 被 memo 化，但 onClick（也就是 changeValueFn）在每次 App 重新渲染時，函式的引用都不同，導致 TitleComponent 仍然重新渲染，這樣就失去了 memo 的效益。

改進：使用 useCallback

```tsx
import { memo, useState, useCallback } from "react";

export default function App() {
  const [val, setVal] = useState(0);

  // 使用 useCallback，確保函式在 val 未改變時不會重新創建
  const changeValueFn = useCallback(() => {
    console.log("enter chg valFn");
    setVal((e) => e + 1);
  }, []);

  return (
    <div className="App">
      <TitleComponent onClick={changeValueFn} />
      <span>{val}</span>
      <button onClick={changeValueFn}>+1</button>
    </div>
  );
}

// memo 化的子組件
const TitleComponent = memo(({ onClick }) => {
  console.log("TitleComponent render");
  return <h1 onClick={onClick}>123</h1>;
});
```

`group`
`group` 是 Tailwind CSS 的一個 utility class，用於指定某個元素為一個分組（group）的「父級元素」。子元素可以通過特殊的狀態類（例如 `group-hover`, `group-focus`）來響應該父元素的狀態。

用法：
在父元素上添加 `group`，然後在子元素上使用 `group-hover` 或其他狀態類來改變樣式。

`group-hover`
`group-hover` 是 Tailwind 提供的狀態類，用於在「父級 group 元素」被 hover 時改變子元素的樣式。

工作原理：
父元素：加上 group class。
子元素：使用 `group-hover:<style>`，當鼠標懸停在父元素上時，應用該樣式。

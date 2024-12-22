`inset-0` 是 Tailwind CSS 中的快捷屬性，用來設置元素的 上下左右的距離 (top, right, bottom, left) 為 0。

這等同於以下 CSS：

```
top: 0;
right: 0;
bottom: 0;
left: 0;
```

```
<div class="absolute inset-0 bg-white ...">
```

這個 inset-0 的作用是讓這個 `<div>`（內容區域）完全填滿父級容器（背景圖片的範圍）。它搭配 absolute 使用，意味著這個元素會相對於其最近的 relative 父容器進行定位。

應用場景：

覆蓋式的效果（例如：hover 顯示的遮罩）。
建立全覆蓋的背景層或浮動層。
替代方案（不使用 inset-0）：
你可以手動分別設定上下左右距離：

```
<div class="absolute top-0 right-0 bottom-0 left-0 bg-white ...">
```

但使用 inset-0 可以更簡潔、更直觀。

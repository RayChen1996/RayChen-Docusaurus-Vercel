---
title: Jetpack Compose Layout 筆記
---

這篇筆記整理我在練習 Jetpack Compose Layout 時的核心觀念與實作心得。

內容適合剛開始寫 Compose、想理解 Row / Column / Box 的使用方式、Modifier 行為、Scaffold 架構等主題的開發者。

---

## 1. Compose Layout 的基本概念

Compose 使用宣告式 UI，每個 Composable 代表畫面的一部分。  
UI 的結構是由多個 Composable 函數堆疊而成。

範例：

```kotlin
Column {
    Text("Hello")
    Text("World")
}
```

Column 會讓內容垂直排列。

2. Column、Row、Box 的使用方式

Jetpack Compose 的基礎布局大多由這三個組成。

Column（垂直排列）

```jsx
Column(
    modifier = Modifier.fillMaxWidth(),
    verticalArrangement = Arrangement.spacedBy(8.dp)
) {
    Text("Email")
    Text("Password")
}
```

常用設定：

- verticalArrangement：上下間距或垂直方向的對齊

- horizontalAlignment：水平對齊方式

###　Row（水平排列）

```jsx
Row(
    verticalAlignment = Alignment.CenterVertically,
    horizontalArrangement = Arrangement.SpaceBetween
) {
    Text("Left")
    Text("Right")
}
```

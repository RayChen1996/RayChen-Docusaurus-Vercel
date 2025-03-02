---
title: Expo 輸出 APK
---

方法 1：使用 EAS Build

```bash
npm install -g eas-cli
```

2. 初始化 EAS（只需做一次）
   進入你的專案目錄，然後執行：

```bash
eas login  # 登入 Expo 帳號（如果還沒有帳號，先去 https://expo.dev 註冊）
eas init   # 初始化 EAS

eas build -p android --profile preview
```

---

3.透過本機編譯

```bash
expo run:android --variant=release
```

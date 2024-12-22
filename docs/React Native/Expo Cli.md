需要安裝 expo-cli 套件 ，這邊是裝在全域環境

```bash
npm install -g expo-cli
```

透過 eas 可以將應用 Build 成 aab

```bash
npm install -g eas-cli
```

```bash
eas build -p android
```

由於從 eas 平台上下載來的是 `*.aab` ，所以需要用 jar 工具轉成 `apk`

```bash
 java -jar D:/bundletool-all-1.17.2.jar build-apks --bundle=D:/ --output=output.apks --mode=universal
```

---

參考資源

- [expo.dev](https://expo.dev/eas)
- [JAR 工具連結](https://github.com/google/bundletool/releases)

# 建立 controller

新增資料庫上下文（DbContext）

以下是透過 Visual Studio 2022 新增 Controller 並建立針對門禁歷史紀錄的 API 的完整步驟，假設你使用的是 ASP.NET Core Web API 專案。

---

### 1. **建立專案**

1. 開啟 Visual Studio 2022，選擇 **"建立新專案"**。
2. 搜尋 **"ASP.NET Core Web API"**，選擇該範本，然後按 **"下一步"**。
3. 設定專案名稱，例如 `AccessControlAPI`，然後選擇存放位置。
4. 在 **目標框架** 選擇 `.NET 8`（或最新版本），點選 **"建立"**。

---

### 2. **新增資料模型**

1. 在專案中新增一個資料夾，命名為 **Models**。
2. 右鍵 **Models** 資料夾，選擇 **"新增" → "類別"**，命名為 `History`.
3. 定義資料模型如下：

   ```csharp

   public class History
   {
       public int Id { get; set; } // 唯一識別碼
       public string AccessCardId { get; set; } // 門禁卡號
       public DateTime AccessTime { get; set; } // 通行時間
       public string Location { get; set; } // 地點
       public bool IsGranted { get; set; } // 是否通過驗證
   }

   ```

---

### 3. **新增資料庫上下文（DbContext）**

1. 在專案中新增資料夾，命名為 **Data**。
2. 在 **Data** 資料夾內新增類別，命名為 `AppDbContext`。
3. 定義資料庫上下文如下：

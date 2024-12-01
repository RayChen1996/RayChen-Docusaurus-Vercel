---
title: 學習筆記
description: 六角學院資料庫體驗營
keywords: [hexschool, postgresql]
---

# PostgreSQL 學習筆記

## 建立資料表

使用 `CREATE TABLE` 建立資料表：

```sql
CREATE TABLE USER (
  id SERIAL PRIMARY KEY,  -- 主鍵
  username VARCHAR(50) NOT NULL,  -- 使用者名稱
  email VARCHAR(100) UNIQUE NOT NULL -- 電子郵件
);
```

### 注意事項

- **命名規則**：表格名稱與欄位名稱建議使用小寫加底線命名。
- **Primary Key**：主鍵確保資料唯一性。
- **約束條件**：像 `NOT NULL` 和 `UNIQUE` 可以強化資料的完整性。

---

## 新增資料

使用 `INSERT INTO` 新增資料：

```sql
INSERT INTO USER (username, email)
VALUES ('JohnDoe', 'john.doe@example.com');
```

### 提示

- 確保提供的值與欄位定義一致。
- 避免手動指定主鍵，讓資料庫自動生成（如 `SERIAL` 或 `UUID`）。

---

## 外來鍵 (Foreign Key)

### 定義與使用

外來鍵用於建立資料表之間的關聯性：

```sql
CREATE TABLE Orders (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES USER(id), -- 外來鍵
  order_date TIMESTAMP NOT NULL
);
```

### 注意事項

- **資料完整性**：使用 `REFERENCES` 定義外來鍵，避免孤立資料。
- **刪除行為**：可選擇 `ON DELETE CASCADE` 或 `ON DELETE SET NULL`。

---

## Primary Key 與 Table 拆分 Tips

### 拆分表格的原則

- 把經常變動或冗長的資料抽出來，建立單獨的表格。
- 使用主表的 Primary Key 作為新表的 Foreign Key。

#### 範例

主表 `USER`：

```sql
CREATE TABLE USER (
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) NOT NULL
);
```

副表 `UserProfiles`：

```sql
CREATE TABLE UserProfiles (
  id SERIAL PRIMARY KEY,
  user_id INT REFERENCES USER(id), -- 外來鍵
  bio TEXT,
  profile_pic_url TEXT
);
```

---

## 刪除操作的風險提示

刪除資料時，務必加上 `WHERE` 條件，避免刪除所有資料。

```sql
DELETE FROM USER
WHERE id = 1;
```

:::danger
切記：**未加 `WHERE` 條件的 `DELETE` 或 `UPDATE` 可能導致資料遺失。**
:::

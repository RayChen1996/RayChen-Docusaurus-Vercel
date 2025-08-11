---
title: 從 JSON Server 到 Supabase：打造會員揪團系統的資料建模與 Next.js 整合實作紀錄
---

# 從 JSON Server 到 Supabase：打造會員揪團系統的資料建模與 Next.js 整合實作紀錄

## 📌 前言

在這次 Side Project 中，我的目標是打造一個「會員揪團系統」，初期我使用 JSON Server 快速建立假資料與 REST API，進行資料建模與畫面串接的驗證。後期為了建立更完整的後端資料管理與授權控制，我選擇將資料結構遷移至 Supabase 並透過 SQL 建立 schema，並用 Next.js 搭配 Supabase Client 實作前端資料串接。

這篇文章會分享我從假資料設計、資料表建立到實際前後端整合的過程。

---

## 🧱 一開始用 JSON Server 快速建模

我透過 `data.json` 描述了三張資料表：

- `members`：會員資料
- `groups`：揪團活動
- `groupMembers`：中介表，用來表示會員與活動的多對多關係

```json
{
  "members": [{ "id": 1, "name": "Alice", "email": "alice@example.com" }],
  "groups": [{ "id": 1, "title": "登山揪團", "hostId": 1 }],
  "groupMembers": [{ "id": 1, "groupId": 1, "memberId": 1, "role": "host" }]
}
```

```sql


-- 會員表
create table members (
id serial primary key,
name text not null,
email text unique not null
);

-- 活動表
create table groups (
id serial primary key,
title text not null,
description text,
host_id integer references members(id)
);

-- 中介表：記錄會員與活動的多對多關係
create table group_members (
id serial primary key,
group_id integer references groups(id),
member_id integer references members(id),
role text check (role in ('host', 'participant')),
unique (group_id, member_id)
);

```

透過這個關聯設計，我可以：

查詢某會員參加了哪些活動

查詢某活動有哪些參與者

檢查某會員在該活動的角色

import React from "react";
import Layout from "@theme/Layout";

export default function Home() {
  return (
    <Layout title="我的作品集" description="歡迎來到我的前端作品集">
      <main className="space-y-6 p-8 text-center">
        <h1 className="text-4xl font-bold text-primary">Hi，我是前端開發者</h1>
        <p className="text-lg">
          歡迎來到我的個人網站！這裡紀錄了我學習前端的過程與實作專案 🙌
        </p>
        <a href="/projects" className="btn btn-secondary">
          查看我的專案 →
        </a>
      </main>
    </Layout>
  );
}

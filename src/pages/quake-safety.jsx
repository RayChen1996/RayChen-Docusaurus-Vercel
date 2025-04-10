import React from "react";
import Layout from "@theme/Layout";

export default function QuakeSafetyProject() {
  return (
    <Layout
      title="地震安全預評估平台"
      description="由前端工程師製作的地震預防平台專案簡歷頁"
    >
      <main className="mx-auto max-w-4xl space-y-8 p-8">
        <h1 className="text-4xl font-bold text-primary">
          🏠 地震安全預評估平台
        </h1>

        <section className="space-y-2">
          <h2 className="text-2xl font-semibold text-secondary">📌 專案動機</h2>
          <p>
            台灣地震頻繁，過去災情慘重。希望透過此平台協助居民聯繫地震結構專家，進行房屋安全評估，將災害風險降到最低。
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-2xl font-semibold text-secondary">🛠 使用技術</h2>
          <ul className="list-inside list-disc">
            <li>前端：Vue 3 + Composition API + TypeScript</li>
            <li>狀態管理：Pinia</li>
            <li>後端：Node.js + Apollo Server + GraphQL</li>
            <li>資料庫：MongoDB Atlas</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-2xl font-semibold text-secondary">
            👥 使用者角色設計
          </h2>
          <ul className="list-inside list-disc">
            <li>訪客/會員：註冊登入、查詢專家、提出預約申請</li>
            <li>專家：登入後回覆預約、提供房屋評估意見</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-2xl font-semibold text-secondary">
            🚧 解決的技術挑戰
          </h2>
          <p>
            初次使用 GraphQL
            設計資料流與權限控管時遇到困難，後來透過閱讀官方文件、實際除錯，成功實作完整
            CRUD 功能，並完成角色串接。
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-2xl font-semibold text-secondary">📈 未來規劃</h2>
          <ul className="list-inside list-disc">
            <li>整合行銷與市調吸引潛在用戶</li>
            <li>加入管理員後台、權限控管</li>
            <li>畫面細節優化與正式部署</li>
          </ul>
        </section>

        <section className="space-y-2">
          <h2 className="text-2xl font-semibold text-secondary">🌟 專案收穫</h2>
          <p>
            學會從零開始建立專案架構，實作使用者流程與角色切換，更熟悉 Vue
            組件開發與 GraphQL 串接，並體驗從想法到開發的完整流程。
          </p>
        </section>

        <div className="mt-8">
          <a className="btn btn-primary" href="/">
            ← 返回所有專案
          </a>
        </div>
      </main>
    </Layout>
  );
}

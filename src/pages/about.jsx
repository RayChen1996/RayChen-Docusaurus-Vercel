import React from "react";
import Layout from "@theme/Layout";

export default function About() {
  return (
    <Layout>
      <div className="container">
        <h1>About Me</h1>
        <a
          href="https://github.com/RayChen1996"
          target="_blank"
          className="text-2xl text-blue-500 underline"
        >
          關於我 GitHub
        </a>
        <p>
          我是一名前端工程師，擁有一年的工作經驗，主要使用 React 和 React
          Native。下班後自學 Vue.js，持續提升自己的技能。
          這個地方會用來記錄一些有用的筆記和學習心得。很高興認識大家！
        </p>
        <p>
          I am a Front-end engineer with one year of experience, primarily
          working with React and React Native. In my free time, I self-learn
          Vue.js to expand my skill set. This space will be used to document
          useful notes and share my learning journey. Nice to meet you!
        </p>
        <a
          target="_blank"
          className="text-2xl text-blue-500 underline"
          href="https://drive.google.com/file/d/1JLVK4D3MPIVnvMFrYDJzVgk79Vo-PVSB/view"
        >
          履歷連結
        </a>
      </div>
    </Layout>
  );
}

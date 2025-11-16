import React from "react";
import Layout from "@theme/Layout";

export default function About() {
  return (
    <Layout>
      <div className="mx-auto max-w-3xl px-6 py-8 text-left">
        <h1 className="mb-4 text-3xl font-bold">About Me</h1>

        <p className="mb-4">
          嗨大家好，我是一名前端工程師，擁有六年以上工作經驗，主要使用 React 和
          React Native。平時利用下班時間自學
          Vue.js，持續精進前端技能。這裡將用來記錄實用的開發筆記與學習心得。
        </p>

        <p className="mb-6">
          Hi there! I’m a front-end engineer with one year of experience,
          primarily working with React and React Native. In my spare time, I’m
          learning Vue.js to further enhance my front-end skills. This space is
          where I’ll be sharing useful development notes and personal learning
          insights. Nice to meet you all!
        </p>
        <div className="mb-6 flex flex-col items-start gap-4">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-blue-600 underline"
            href="https://drive.google.com/file/d/1myTIdft-xWz7ygKBv4Q8z5ScKrxFMcK9/view?usp=sharing"
          >
            履歷連結
          </a>

          <a
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl text-blue-600 underline"
            href="https://drive.google.com/file/d/1H-Ka60rFqQGz1pdTeLWRrT5294xIJ6sp/view?usp=sharing"
          >
            履歷CV
          </a>
        </div>
      </div>
    </Layout>
  );
}

import React from "react";
import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import churchImageUrl from "@site/static/img/church.png";
import ticketOrderImageUrl from "@site/static/img/ticketOrder.png";
import habitImageUrl from "@site/static/img/habit.png";
import sportmageUrl from "@site/static/img/sport.png";
import nodetmageUrl from "@site/static/img/node.png";
import roomImageUrl from "@site/static/img/room.png";
import NFTImageUrl from "@site/static/img/NFT.png";
import glassImageUrl from "@site/static/img/glass.png";
import campImageUrl from "@site/static/img/camp.png";
import ecommImageUrl from "@site/static/img/ecomm.png";
import appImageUrl from "@site/static/img/app.png";
import accessImageUrl from "@site/static/img/access.png";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={[styles.buttons]}>
          <Link
            className="button button--secondary button--lg mt-10"
            to="/docs/intro"
          >
            技術筆記
          </Link>
        </div>
      </div>
    </header>
  );
}
function TitleCompoent() {
  return (
    <section className=" text-3xl font-bold my-7">
      個人作品 ( Side Projects ){" "}
    </section>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main className=" flex justify-center flex-col">
        {/* <HomepageFeatures /> */}

        <div className=" m-auto">
          <TitleCompoent />
        </div>
        <div className=" m-auto my-11">
          <div className="  mt-6  grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card bg-white  w-96 shadow-xl">
              <figure>
                <img src={sportmageUrl} alt="Shoes" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">框架練習 - 運動揪團網</h2>
                <p> 看到教會有架站需求 藉由 </p>
                {/* <div className="card-actions justify-end">
                  <button className="btn btn-primary">專案連結</button>
                </div> */}
              </div>
            </div>

            <div className="card bg-white w-96 shadow-xl">
              <figure>
                <img src={habitImageUrl} alt="habitImageUrl" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">切版專題 - Habit</h2>
                <p> 看到教會有架站需求 藉由 </p>
                {/* <div className="card-actions justify-end">
                  <button className="btn btn-primary">專案連結</button>
                </div> */}
              </div>
            </div>

            <div className="card bg-white w-96 shadow-xl">
              <figure>
                <img src={nodetmageUrl} alt=" nodetmageUrl" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">Node.js實戰專題 - 屋況評估專家網</h2>
                <p> 看到教會有架站需求 藉由 </p>
                {/* <div className="card-actions justify-end">
                  <button className="btn btn-primary">專案連結</button>
                </div> */}
              </div>
            </div>

            <div className="card bg-white w-96 shadow-xl">
              <figure>
                <img src={roomImageUrl} alt=" nodetmageUrl" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">練習切版&串API - 旅館訂房網</h2>
                <p>藉由 </p>
                {/* <div className="card-actions justify-end">
                  <button className="btn btn-primary">專案連結</button>
                </div> */}
              </div>
            </div>

            <div className="card bg-white w-96 shadow-xl">
              <figure>
                <img src={churchImageUrl} alt="" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">切版練習 - 教會形象網</h2>
                <p> 看到教會有架站需求，也透過此機會練習切版技術</p>
                {/* <div className="card-actions justify-end">
                  <button className="btn btn-primary">專案連結</button>
                </div> */}
              </div>
            </div>

            <div className="card bg-white w-96 shadow-xl">
              <figure>
                <img src={ticketOrderImageUrl} alt="" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">切版練習 - 大型訂票網</h2>
                <p> 看到教會有架站需求 藉由 </p>
                {/* <div className="card-actions justify-end">
                  <button className="btn btn-primary">專案連結</button>
                </div> */}
              </div>
            </div>

            <div className="card bg-white w-96 shadow-xl">
              <figure>
                <img src={NFTImageUrl} alt="NFTImageUrl" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">切版練習 - NFT藝術家交易平台</h2>
                <p> 看到教會有架站需求 藉由 </p>
                {/* <div className="card-actions justify-end">
                  <button className="btn btn-primary">專案連結</button>
                </div> */}
              </div>
            </div>

            <div className="card bg-white w-96 shadow-xl">
              <figure>
                <img src={ecommImageUrl} alt="ecomm" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">切版練習 - 甜點電商</h2>
                <p> 看到教會有架站需求 藉由 </p>
                {/* <div className="card-actions justify-end">
                  <button className="btn btn-primary">專案連結</button>
                </div> */}
              </div>
            </div>

            <div className="card bg-white w-96 shadow-xl">
              <figure>
                <img src={glassImageUrl} alt="glassImageUrl" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">切版練習 - 眼鏡形象官網</h2>
                <p> 看到教會有架站需求 藉由 </p>
                {/* <div className="card-actions justify-end">
                  <button className="btn btn-primary">專案連結</button>
                </div> */}
              </div>
            </div>
            <div className="card bg-white w-96 shadow-xl">
              <figure>
                <img src={campImageUrl} alt="ecomm" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">HexSchool Camp - 部落格網站</h2>
                <p> 藉由參與六角學院體驗營 下班後練習熟悉框架技術 </p>
                {/* <div className="card-actions justify-end">
                  <button className="btn btn-primary">專案連結</button>
                </div> */}
              </div>
            </div>
            <div className="card bg-white w-96 shadow-xl">
              <figure className=" max-h-56">
                <img src={appImageUrl} alt="app" className=" object-cover" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">切版練習 - 找餐店APP</h2>
                <p> 練習React Native技術 </p>
                {/* <div className="card-actions justify-end">
                  <button className="btn btn-primary">專案連結</button>
                </div> */}
              </div>
            </div>

            <div className="card bg-white w-96 shadow-xl">
              <figure className=" max-h-56">
                <img
                  src={accessImageUrl}
                  alt="accessImageUrl"
                  className=" object-cover"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">前後端練習 - 簡易門禁系統實作</h2>
                <p> 練習Laravel + Vue.js </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

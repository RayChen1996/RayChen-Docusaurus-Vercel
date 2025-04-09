import React, { memo, useEffect } from "react";
import clsx from "clsx";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import churchImageUrl from "@site/static/img/church.png";
import ticketOrderImageUrl from "@site/static/img/ticketOrder.png";
import habitImageUrl from "@site/static/img/habit.png";
import sportmageUrl from "@site/static/img/sport.png";
import musicmageUrl from "@site/static/img/music.png";

import architecture from "@site/static/img/architecture.png";
import docusur from "@site/static/img/docusur.png";

import foodzero from "@site/static/img/foodzero.png";

import nodetmageUrl from "@site/static/img/node.png";
import aimageUrl from "@site/static/img/ai.png";
import roomImageUrl from "@site/static/img/room.png";
import NFTImageUrl from "@site/static/img/NFT.png";
import glassImageUrl from "@site/static/img/glass.png";
import campImageUrl from "@site/static/img/camp.png";
import ecommImageUrl from "@site/static/img/ecomm.png";

import petImageUrl from "@site/static/img/pet.png";
import hotelImageUrl from "@site/static/img/hotel.png";
import mobileImageUrl from "@site/static/img/mobile.png";
import styles from "./index.module.css";
import "aos/dist/aos.css";
import Aos from "aos";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero--primary hero", styles.heroBanner)}>
      <div className="container">
        {/*<h1 className="hero__title">{siteConfig.title}</h1>*/}
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
    <section className="my-7 text-3xl font-bold">
      個人作品 ( Side Projects )
    </section>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  const projectList = [
    {
      title: "2024 Node.js實戰專題 - 屋況評估專家網",
      description: "",
      tags: ["React", "Next.js", "GraphQL"],
      imageUrl: nodetmageUrl,
      link: "https://homesecuritypro-web.vercel.app/",
      type: "Web",
      repolink: "https://github.com/RayChen1996/homesecuritypro-web",
    },
    {
      title: "旅館訂房網",
      description: "介接旅館訂房API，並使用Next.js 技術",
      imageUrl: hotelImageUrl,
      tags: ["React", "Next.js", "前/後台"],
      link: "https://hotel-web-three.vercel.app/",
      type: "Web",
      repolink: "https://github.com/RayChen1996/hotel-web",
    },

    {
      title: "2022 切版專題 - 習慣養成平台",
      description:
        "開始學習Next.js第一個專案，想要解決的問題是：如何養成習慣，從一本書：原子習慣中獲得靈感，期望透過平台來幫助使用者養成習慣",
      tags: ["React", "Next.js"],
      imageUrl: habitImageUrl,
      link: "https://habit-piggy-next-app.vercel.app/",
      type: "Web",
      repolink: "https://github.com/RayChen1996/habit_piggy_next_app",
    },

    {
      title: "Foodzero-Web",
      description: "",
      imageUrl: foodzero,
      link: "https://foodzero-web.vercel.app/",
      tags: ["Vue 3", "Nuxt"],
      type: "Web",
      repolink: "https://github.com/RayChen1996/FoodZero",
    },
    {
      title: "Architecture-studio-Web",
      description: "",
      imageUrl: architecture,
      link: "https://architecture-studio-nuxt.vercel.app/?vercelToolbarCode=cg8gUzAQHkMPLGf",
      tags: ["Vue 3", "Nuxt"],
      repolink: "https://github.com/RayChen1996/architecture_studio_nuxt",
      type: "Web",
    },
    {
      title: "大型寵物服務網",
      description: "",
      imageUrl: petImageUrl,
      tags: ["React", "Next.js"],
      link: "https://next-petpet-web.vercel.app/",
      repolink: "https://github.com/RayChen1996/next-petpet-web",
      type: "Web",
    },

    {
      title: "運動揪團網",
      description:
        "常常下班後想要運動卻找不到人一起運動，希望這個網站能幫助到您",
      tags: ["React", "Next.js"],
      imageUrl: sportmageUrl,
      link: "https://next-sport-web.vercel.app/",
      type: "Web",
      repolink: "https://github.com/RayChen1996/Next-sport-web",
    },

    {
      title: "台中種子教會網站",
      description: "想要藉由這個網站讓更多人認識我們的教會",
      imageUrl: churchImageUrl,
      link: "https://church-web-five.vercel.app/",
      type: "Web",
      repolink: "https://github.com/RayChen1996/church-web",
    },
    {
      title: "Bible APP",
      description: "幫教會製作的聖經APP，藉此機會練習React Native Expo架構",
      imageUrl: mobileImageUrl,
      tags: ["React", "Expo-Cli"],
      link: "https://github.com/RayChen1996/expo-bible-app",
      repolink: "https://github.com/RayChen1996/expo-bible-app",
      type: "APP",
    },
    {
      title: "大型訂票網",
      description: "",
      imageUrl: ticketOrderImageUrl,
      link: "https://ticket-booking-sigma.vercel.app/",
      type: "Web",
      repolink: "https://github.com/RayChen1996/TicketBooking",
    },
    {
      title: "甜點電商網站",
      description: "",
      tags: ["Vue", "Vite", "SPA"],
      imageUrl: ecommImageUrl,
      type: "Web",
      repolink: "https://github.com/RayChen1996/ReVue-EComm",
      link: "https://codingspace.raychen1996.us.kg/ReVue-EComm/",
    },
    {
      title: "眼鏡形象官網",
      description: "",
      tags: ["React", "Next.js"],
      imageUrl: glassImageUrl,
      repolink: "https://github.com/RayChen1996/glasses-offical-web",
      type: "Web",
      link: "",
    },
    {
      title: "HexSchool Camp - 部落格網站",
      description: "",
      imageUrl: campImageUrl,
      type: "Web",
      link: "",
      repolink: "",
    },
    {
      title: "旅館訂房網",
      description: "",
      imageUrl: roomImageUrl,
      type: "Web",
      link: "https://codingspace.raychen1996.us.kg/hexschool-TS-Hw/",
      repolink: "https://github.com/RayChen1996/RoomsOrder",
      tags: ["Vue", "TypeScript"],
    },
    {
      title: "切版練習 - NFT藝術家交易平台",
      description: "",
      imageUrl: NFTImageUrl,
      type: "Web",
      repolink: "",
      link: "",
    },
    {
      title: "AI虛擬陪伴",
      description: "",
      imageUrl: aimageUrl,
      link: "",
      tags: ["React", "Next.js"],
      type: "Web",
      repolink: "https://github.com/RayChen1996/ai_parner",
    },
    {
      title: "個人技術筆記部落格",
      description: "",
      imageUrl: docusur,
      link: "https://ray-chen-docusaurus-vercel.vercel.app/",
      tags: ["React", "Docusaurus"],
      type: "Web",
      repolink: "https://github.com/RayChen1996/RayChen-Docusaurus-Vercel",
    },
  ];

  useEffect(() => {
    Aos.init({
      duration: 1000, // 動畫持續時間
      easing: "ease-in-out", // 動畫效果
    });
  }, []);
  return (
    <Layout title={`Hello from ${siteConfig.title}`} description="">
      <HomepageHeader />
      <main className="flex flex-col justify-center">
        {/* <HomepageFeatures /> */}
        {/*<div className="mx-auto my-11">
          <div className="mockup-code">
            <pre data-prefix="$">
              <code>F2E</code>
            </pre>
            <pre data-prefix=">" className="text-warning">
              <code>持續學習...</code>
            </pre>
          </div>
        </div>*/}
        <div className="m-auto">
          <section className="my-7 text-3xl font-bold">
            工作經歷 ( Work Experience )
          </section>
        </div>
        <TimeLine />

        <div className="m-auto">
          <TitleCompoent />
        </div>

        <div className="m-auto my-11">
          <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-3">
            {projectList.map((project, index) => (
              <div
                data-aos={index % 3 === 0 ? "fade-up" : "fade-down"}
                key={index}
                className="card glass indicator relative w-96 shadow-xl"
              >
                <figure>
                  {project.type === "APP" ? (
                    <div className="mockup-phone">
                      <div className="camera"></div>
                      <div className="display">
                        <img
                          src={project.imageUrl}
                          alt="project"
                          className="aspect-video object-contain"
                        />
                      </div>
                    </div>
                  ) : (
                    <img
                      src={project.imageUrl}
                      alt="project"
                      className="aspect-video"
                    />
                  )}
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{project.title}</h2>
                  <p>{project.description}</p>
                  <div className="flex min-h-5 gap-2">
                    {project.tags &&
                      project.tags.map((tag, index) => (
                        <span
                          key={index}
                          className={
                            index === 1
                              ? "badge text-white"
                              : "badge badge-neutral"
                          }
                        >
                          {tag}
                        </span>
                      ))}
                  </div>
                  <div className="card-actions justify-between">
                    <a
                      href={project.repolink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline"
                    >
                      瀏覽專案
                    </a>

                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline"
                    >
                      觀看連結
                    </a>
                  </div>
                </div>
                {project.type === "APP" && (
                  <span className="badge badge-accent badge-lg absolute right-0 top-2 z-50 h-10 w-20 text-white">
                    APP
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}

const TimeLine = memo(function TimeLine() {
  return (
    <div className="m-auto mt-10">
      <ul className="timeline timeline-vertical timeline-snap-icon max-md:timeline-compact">
        <li data-aos="fade-right">
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic">2017/9~2018/5</time>
            <div className="text-lg font-black">SPON TECHNOLOGIES CO., LTD</div>
            全學年實習 - Struts, Java, JSP, Servlet, MySQL
          </div>
          <hr />
        </li>
        <li data-aos="fade-left">
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-end md:mb-10">
            <time className="font-mono italic">2018/07~2023/11</time>
            <div className="text-lg font-black">SOCA TECHNOLOGY CO., LTD.</div>
            全端工程師 - HTML/CSS/jQuery, Node.js, Delphi, php
          </div>
          <hr />
        </li>
        <li data-aos="fade-right">
          <hr />
          <div className="timeline-middle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="timeline-start mb-10 md:text-end">
            <time className="font-mono italic">2024~</time>
            <div className="text-lg font-black">接案公司</div>
          </div>
        </li>
      </ul>
    </div>
  );
});
/**LINK - 
 * 
 * 
 *   {projectList.map((project, index) => (
              <div key={index} className="card glass w-96 shadow-xl">
                <figure>
                  <img
                    src={project.imageUrl}
                    alt="project"
                    className="aspect-video"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{project.title}</h2>
                  <div>
                    {project.tags.map((tag, index) => (
                      <span key={index} className="badge">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="card-actions justify-end">
                    <a href={project.link} target="_blank">
                      觀看連結
                    </a>
                  </div>
                </div>
              </div>
            ))}
 * 
 */

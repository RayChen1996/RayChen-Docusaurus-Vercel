"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3573],{3905:(n,e,t)=>{t.d(e,{Zo:()=>p,kt:()=>d});var o=t(7294);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function r(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,o)}return t}function s(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function i(n,e){if(null==n)return{};var t,o,a=function(n,e){if(null==n)return{};var t,o,a={},r=Object.keys(n);for(o=0;o<r.length;o++)t=r[o],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(o=0;o<r.length;o++)t=r[o],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var l=o.createContext({}),c=function(n){var e=o.useContext(l),t=e;return n&&(t="function"==typeof n?n(e):s(s({},e),n)),t},p=function(n){var e=c(n.components);return o.createElement(l.Provider,{value:e},n.children)},u={inlineCode:"code",wrapper:function(n){var e=n.children;return o.createElement(o.Fragment,{},e)}},f=o.forwardRef((function(n,e){var t=n.components,a=n.mdxType,r=n.originalType,l=n.parentName,p=i(n,["components","mdxType","originalType","parentName"]),f=c(t),d=a,m=f["".concat(l,".").concat(d)]||f[d]||u[d]||r;return t?o.createElement(m,s(s({ref:e},p),{},{components:t})):o.createElement(m,s({ref:e},p))}));function d(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var r=t.length,s=new Array(r);s[0]=f;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=n,i.mdxType="string"==typeof n?n:a,s[1]=i;for(var c=2;c<r;c++)s[c]=t[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}f.displayName="MDXCreateElement"},4308:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var o=t(7462),a=(t(7294),t(3905));const r={title:"Next.js \u5982\u4f55\u5f15\u7528Google Font"},s=void 0,i={unversionedId:"Next.JS/\u5982\u4f55\u5f15\u7528google font",id:"Next.JS/\u5982\u4f55\u5f15\u7528google font",title:"Next.js \u5982\u4f55\u5f15\u7528Google Font",description:"\u5728\u5c08\u6848\u76ee\u9304\u4e0b\u5efa\u7acb\u4e00\u500bfonts\u8cc7\u6599\u593e",source:"@site/docs\\Next.JS\\\u5982\u4f55\u5f15\u7528google font.md",sourceDirName:"Next.JS",slug:"/Next.JS/\u5982\u4f55\u5f15\u7528google font",permalink:"/docs/Next.JS/\u5982\u4f55\u5f15\u7528google font",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Next.JS/\u5982\u4f55\u5f15\u7528google font.md",tags:[],version:"current",frontMatter:{title:"Next.js \u5982\u4f55\u5f15\u7528Google Font"},sidebar:"tutorialSidebar",previous:{title:"Next.js \u64b0\u5beb\u9078\u55ae\u6642\u53d6\u5f97\u5716\u7247\u578b\u5225",permalink:"/docs/Next.JS/\u5716\u7247\u578b\u5225"},next:{title:"Next.js \u8a2d\u5b9a\u7db2\u7ad9Meta",permalink:"/docs/Next.JS/\u8a2d\u5b9a\u6bcf\u4e00\u9801Meta"}},l={},c=[],p={toc:c};function u(n){let{components:e,...r}=n;return(0,a.kt)("wrapper",(0,o.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u5728\u5c08\u6848\u76ee\u9304\u4e0b\u5efa\u7acb\u4e00\u500b",(0,a.kt)("inlineCode",{parentName:"p"},"fonts"),"\u8cc7\u6599\u593e\n",(0,a.kt)("img",{alt:"alt text",src:t(6819).Z,width:"529",height:"227"}),"\n\u65b0\u589e ",(0,a.kt)("inlineCode",{parentName:"p"},"index.ts"),"\u6a94\u6848"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import {\n  Noto_Sans_TC,\n  Noto_Sans_Mono,\n  Noto_Serif_TC,\n  Ibarra_Real_Nova,\n  Archivo_Black,\n  Italianno,\n} from "next/font/google";\n\nexport const noto_sans_tc = Noto_Sans_TC({\n  subsets: ["latin"],\n  variable: "--font-noto-sans-tc",\n  display: "swap",\n});\n\nexport const archivo_black = Archivo_Black({\n  subsets: ["latin"],\n  weight: ["400"],\n  variable: "--font-archivo-black",\n  display: "swap",\n});\n\nexport const italianno = Italianno({\n  subsets: ["latin"],\n  weight: ["400"],\n  variable: "--font-italianno",\n  display: "swap",\n});\nexport const noto_serif_tc = Noto_Serif_TC({\n  subsets: ["latin"],\n  weight: ["200", "300", "400", "500", "600", "700", "900"],\n  variable: "--font-noto-serif-tc",\n  display: "swap",\n});\nexport const noto_sans_mono = Noto_Sans_Mono({\n  subsets: ["latin"],\n  variable: "--font-noto-sans-mono",\n  display: "swap",\n});\nexport const ibarra_real_nova = Ibarra_Real_Nova({\n  subsets: ["latin"],\n  variable: "--font-ibarra-real-nova",\n  display: "swap",\n});\n')),(0,a.kt)("p",null,"\u6253\u958b ",(0,a.kt)("inlineCode",{parentName:"p"},"/app/layout.tsx")," \uff0c\u4e26\u7de8\u8f2f\u4ee5\u4e0b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'import type { Metadata } from "next";\nimport "./globals.css";\nimport clsx from "clsx";\nimport {\n  noto_sans_tc,\n  // noto_sans_mono,\n  // noto_serif_tc,\n  // archivo_black,\n  // italianno,\n} from "@/fonts";\nexport const metadata: Metadata = {\n  title: "",\n  description: "",\n};\n\nexport default function RootLayout({\n  children,\n}: Readonly<{\n  children: React.ReactNode;\n}>) {\n  return (\n    <html lang="zh-Hant-TW" data-theme="light">\n      <body\n        suppressHydrationWarning\n        className={clsx(\n          "antialiased",\n\n          noto_sans_tc.variable,\n          // noto_serif_tc.variable,\n          // noto_sans_mono.variable,\n          // archivo_black.variable,\n          // italianno.variable,\n        )}\n      >\n        {children}\n      </body>\n    </html>\n  );\n}\n')))}u.isMDXComponent=!0},6819:(n,e,t)=>{t.d(e,{Z:()=>o});const o=t.p+"assets/images/image-347f74ae4ffbc087007ece74d2ec6bd3.png"}}]);
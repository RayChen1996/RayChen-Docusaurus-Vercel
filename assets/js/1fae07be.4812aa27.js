"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[802],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=o,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9630:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={title:"TanStack Query"},i=void 0,s={unversionedId:"JS\u5957\u4ef6/TanStack Query",id:"JS\u5957\u4ef6/TanStack Query",title:"TanStack Query",description:"\u9019\u88e1\u6703\u4ecb\u7d39Next.js\u5728\u4ecb\u63a5API\uff0c\u53ef\u4ee5\u7528 TankStack Query\u4f86\u7ba1\u7406\u9801\u9762\u4e0a\u72c0\u614b",source:"@site/docs\\JS\u5957\u4ef6\\TanStack Query.md",sourceDirName:"JS\u5957\u4ef6",slug:"/JS\u5957\u4ef6/TanStack Query",permalink:"/docs/JS\u5957\u4ef6/TanStack Query",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/JS\u5957\u4ef6/TanStack Query.md",tags:[],version:"current",frontMatter:{title:"TanStack Query"},sidebar:"tutorialSidebar",previous:{title:"shadcn UI Lib",permalink:"/docs/JS\u5957\u4ef6/ShadCN Lib"},next:{title:"ClSX \u8655\u7406\u6a23\u5f0f\u597d\u5e6b\u624b",permalink:"/docs/JS\u5957\u4ef6/clsx"}},c={},l=[{value:"1. \u5efa\u7acb<code>Provider</code>",id:"1-\u5efa\u7acbprovider",level:2},{value:"2. \u5f9e Root Layout \u6574\u500b\u5305\u8986\u61c9\u7528",id:"2-\u5f9e-root-layout-\u6574\u500b\u5305\u8986\u61c9\u7528",level:2}],u={toc:l};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u9019\u88e1\u6703\u4ecb\u7d39",(0,o.kt)("inlineCode",{parentName:"p"},"Next.js"),"\u5728\u4ecb\u63a5API\uff0c\u53ef\u4ee5\u7528 TankStack Query\u4f86\u7ba1\u7406\u9801\u9762\u4e0a\u72c0\u614b"),(0,o.kt)("h2",{id:"1-\u5efa\u7acbprovider"},"1. \u5efa\u7acb",(0,o.kt)("inlineCode",{parentName:"h2"},"Provider")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="/src/provider/TanStack.tsx"  showLineNumbers',title:'"/src/provider/TanStack.tsx"',"":!0,showLineNumbers:!0},'"use client";\n\nimport { QueryClient, QueryClientProvider } from "@tanstack/react-query";\n\nimport { createContext, useContext, useState } from "react";\nimport { apiClient } from "@/lib/axios";\nconst AxiosContext = createContext(apiClient);\nexport function Providers({ children }: { children: React.ReactNode }) {\n  const [queryClient] = useState(() => new QueryClient());\n\n  return (\n    <AxiosContext.Provider value={apiClient}>\n      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>\n    </AxiosContext.Provider>\n  );\n}\n\nexport const useAxios = () => useContext(AxiosContext);\n')),(0,o.kt)("h2",{id:"2-\u5f9e-root-layout-\u6574\u500b\u5305\u8986\u61c9\u7528"},"2. \u5f9e Root Layout \u6574\u500b\u5305\u8986\u61c9\u7528"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="/src/Layout.tsx" showLineNumbers {4,32}',title:'"/src/Layout.tsx"',showLineNumbers:!0,"{4,32}":!0},'import type { Metadata } from "next";\nimport localFont from "next/font/local";\nimport "./globals.css";\nimport { Providers } from "@/provider/TanStack";\nimport { Toaster } from "@/components/ui/toaster";\nconst geistSans = localFont({\n  src: "./fonts/GeistVF.woff",\n  variable: "--font-geist-sans",\n  weight: "100 900",\n});\nconst geistMono = localFont({\n  src: "./fonts/GeistMonoVF.woff",\n  variable: "--font-geist-mono",\n  weight: "100 900",\n});\n\nexport const metadata: Metadata = {\n  title: "\u8056\u7d93APP",\n  description: "Bible App by create next app",\n};\n\nexport default function RootLayout({\n  children,\n}: Readonly<{\n  children: React.ReactNode;\n}>) {\n  return (\n    <html lang="en">\n      <body\n        className={`${geistSans.variable} ${geistMono.variable} antialiased`}\n      >\n        <Providers>{children}</Providers>\n        <Toaster />\n      </body>\n    </html>\n  );\n}\n')),(0,o.kt)("p",null,"\u53ef\u4ee5\u5f9e ",(0,o.kt)("inlineCode",{parentName:"p"},"useQuery"),"\u9019\u500bhook\uff0c\u89e3\u69cb\u51fa ",(0,o.kt)("inlineCode",{parentName:"p"},"data"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"isLoading"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"refetch"),"\u3001",(0,o.kt)("inlineCode",{parentName:"p"},"isFetching")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:"showLineNumbers {1}",showLineNumbers:!0,"{1}":!0},'const { data, isLoading, refetch, isFetching } = useQuery<BibleResponse>({\n  queryKey: ["bibleVerses", book, currentChapter],\n  queryFn: () => fetchXXXFn(decodeURI(book!), currentChapter.toString()),\n});\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"async function fetchXXXFn(\n  book: string,\n  chapter: string,\n): Promise<BibleResponse> {\n  const { data } = await axios.get(\n    `https://bible-api.com/${book}+${chapter}?translation=cuv`,\n  );\n  return data;\n}\n")),(0,o.kt)("p",null,"\u7576\u72c0\u614b\u70ba ",(0,o.kt)("inlineCode",{parentName:"p"},"isLoading "),"\u6216",(0,o.kt)("inlineCode",{parentName:"p"},"isFetching "),"\u53ef\u4ee5\u5c07\u6309\u9215",(0,o.kt)("inlineCode",{parentName:"p"},"disabled"),"\u5c6c\u6027\u7981\u7528"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"<button\n  onClick={handlePrevious}\n  disabled={currentChapter <= 1 || isLoading || isFetching}\n>\n  <ArrowBigLeft />\n</button>\n")))}p.isMDXComponent=!0}}]);
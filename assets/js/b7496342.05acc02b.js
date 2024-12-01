"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8667],{3905:(e,r,t)=>{t.d(r,{Zo:()=>p,kt:()=>m});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=n.createContext({}),i=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):u(u({},r),e)),t},p=function(e){var r=i(e.components);return n.createElement(s.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=i(t),m=o,f=d["".concat(s,".").concat(m)]||d[m]||l[m]||a;return t?n.createElement(f,u(u({ref:r},p),{},{components:t})):n.createElement(f,u({ref:r},p))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,u=new Array(a);u[0]=d;var c={};for(var s in r)hasOwnProperty.call(r,s)&&(c[s]=r[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,u[1]=c;for(var i=2;i<a;i++)u[i]=t[i];return n.createElement.apply(null,u)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5212:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>u,default:()=>l,frontMatter:()=>a,metadata:()=>c,toc:()=>i});var n=t(7462),o=(t(7294),t(3905));const a={},u=void 0,c={unversionedId:"GraphQL/Hook/useQuery",id:"GraphQL/Hook/useQuery",title:"useQuery",description:"\u5c07\u67e5\u8a62\u7247\u6bb5\u88fd\u4f5c\u6210 Custom Hook \u4ee5\u4fbf\u6a21\u7d44\u5316",source:"@site/docs/GraphQL/Hook/useQuery.md",sourceDirName:"GraphQL/Hook",slug:"/GraphQL/Hook/useQuery",permalink:"/RayChen-Docusaurus-Vercel/docs/GraphQL/Hook/useQuery",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/GraphQL/Hook/useQuery.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"useMutation",permalink:"/RayChen-Docusaurus-Vercel/docs/GraphQL/Hook/useMutation"},next:{title:"ReactJS\u5c08\u6848\u5f15\u7528",permalink:"/RayChen-Docusaurus-Vercel/docs/GraphQL/ReactJS\u5c08\u6848\u5f15\u7528"}},s={},i=[],p={toc:i};function l(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u5c07\u67e5\u8a62\u7247\u6bb5\u88fd\u4f5c\u6210 ",(0,o.kt)("inlineCode",{parentName:"p"},"Custom Hook")," \u4ee5\u4fbf\u6a21\u7d44\u5316"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'import { useMemo } from "react";\nimport { gql, useQuery } from "@apollo/client";\nimport { produce } from "immer";\n\nimport type { UseQueryFunction } from "../apollo/hook/type";\n\nimport dateFieldTransformer from "../apollo/hook/utils/dateFieldTransformer";\nimport { Product } from "../schema/orders";\n\nconst QUERY = gql`\n  query Product($productId: ID!) {\n    product(id: $productId) {\n       ...\n    }\n  }\n`;\n\ninterface Data {\n  product: Product;\n}\n\ninterface Variables {\n  productId: string;\n}\n\n/** -    */\nconst useProduct: UseQueryFunction<Data, Variables> = (options) => {\n  const { data, ...result } = useQuery<Data, Variables>(QUERY, options);\n\n  const _data = useMemo(() => {\n    if (data?.product) {\n      return produce(data, (draft) => {\n        dateFieldTransformer(draft.product);\n      });\n    }\n    return data;\n  }, [data]);\n\n  return { data: _data, ...result };\n};\n\nexport default useProduct;\n\n')))}l.isMDXComponent=!0}}]);
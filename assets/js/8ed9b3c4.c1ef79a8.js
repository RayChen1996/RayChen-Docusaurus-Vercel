"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2918],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),s=p(n),d=o,f=s["".concat(l,".").concat(d)]||s[d]||u[d]||a;return n?r.createElement(f,i(i({ref:t},m),{},{components:n})):r.createElement(f,i({ref:t},m))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},9586:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={title:"react-hook-form & ZOD \u8655\u7406\u8868\u55ae\u9663\u5217\u578b\u614b\u4f7f\u7528"},i=void 0,c={unversionedId:"JS\u5957\u4ef6/react-hook-form&Zod\u5de2\u72c0\u7269\u4ef6\u9663\u5217\u4f7f\u7528",id:"JS\u5957\u4ef6/react-hook-form&Zod\u5de2\u72c0\u7269\u4ef6\u9663\u5217\u4f7f\u7528",title:"react-hook-form & ZOD \u8655\u7406\u8868\u55ae\u9663\u5217\u578b\u614b\u4f7f\u7528",description:"\u4ecb\u7d39\u4e00\u4e0b\u95dc\u65bc\u5982\u4f55\u900f\u904e react-hook-form \u4f86\u8655\u7406\u7269\u4ef6\u4e2d\u9663\u5217\u578b\u614b\u8cc7\u6599",source:"@site/docs\\JS\u5957\u4ef6\\react-hook-form&Zod\u5de2\u72c0\u7269\u4ef6\u9663\u5217\u4f7f\u7528.md",sourceDirName:"JS\u5957\u4ef6",slug:"/JS\u5957\u4ef6/react-hook-form&Zod\u5de2\u72c0\u7269\u4ef6\u9663\u5217\u4f7f\u7528",permalink:"/docs/JS\u5957\u4ef6/react-hook-form&Zod\u5de2\u72c0\u7269\u4ef6\u9663\u5217\u4f7f\u7528",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/JS\u5957\u4ef6/react-hook-form&Zod\u5de2\u72c0\u7269\u4ef6\u9663\u5217\u4f7f\u7528.md",tags:[],version:"current",frontMatter:{title:"react-hook-form & ZOD \u8655\u7406\u8868\u55ae\u9663\u5217\u578b\u614b\u4f7f\u7528"},sidebar:"tutorialSidebar",previous:{title:"qs",permalink:"/docs/JS\u5957\u4ef6/qs"},next:{title:"react-hook-form",permalink:"/docs/JS\u5957\u4ef6/react-hook-form"}},l={},p=[],m={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u4ecb\u7d39\u4e00\u4e0b\u95dc\u65bc\u5982\u4f55\u900f\u904e ",(0,o.kt)("inlineCode",{parentName:"p"},"react-hook-form")," \u4f86\u8655\u7406\u7269\u4ef6\u4e2d\u9663\u5217\u578b\u614b\u8cc7\u6599"),(0,o.kt)("p",null,"\u5047\u8a2dAPI\u7684Schema\u7d50\u69cb\u662f"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:"showLineNumbers {5-10}",showLineNumbers:!0,"{5-10}":!0},'[\n  {\n    "id": 1,\n    "memberId": 1,\n    "items": [\n      {\n        "productId": 3,\n        "quantity": 1\n      }\n    ]\n  },\n  {\n    "id": 2,\n    "memberId": 2,\n    "items": [\n      {\n        "productId": 4,\n        "quantity": 2\n      },\n      {\n        "productId": 5,\n        "quantity": 1\n      }\n    ]\n  }\n]\n')),(0,o.kt)("p",null,"\u6211\u5011\u8981\u900f\u904e\u8868\u55ae\u4f86\u8b80\u5beb ",(0,o.kt)("inlineCode",{parentName:"p"},"items")," \u8cc7\u6599"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"const data = [\n  {\n    id: 1,\n    memberId: 1,\n    items: [{ productId: 3, quantity: 1 }],\n  },\n  {\n    id: 2,\n    memberId: 2,\n    items: [\n      { productId: 4, quantity: 2 },\n      { productId: 5, quantity: 1 },\n    ],\n  },\n];\n")),(0,o.kt)("p",null,"\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"react-hook-form")," \u914d\u5408 ",(0,o.kt)("inlineCode",{parentName:"p"},"Controller")),(0,o.kt)("p",null,"\u8981\u63a7\u5236\u9663\u5217\u578b\u614b\u7684\u8868\u55ae\uff0c\u9700\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"react-hook-form")," \u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"Controller"),"\uff0c\u900f\u904e ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," \u5c6c\u6027\u5c0d\u61c9\u8cc7\u6599\u7d50\u69cb\u4e2d\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"items")," \u6b04\u4f4d\u7d22\u5f15\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"showLineNumbers {7}",showLineNumbers:!0,"{7}":!0},'import { useForm, Controller } from "react-hook-form";\n\nconst { control } = useForm();\n\n<Controller\n  control={control}\n  name={`items.${index}.quantity`} // \u5c0d\u61c9\u9663\u5217\u7684\u7d22\u5f15\n  render={({ field }) => <input {...field} type="number" placeholder="\u6578\u91cf" />}\n/>;\n')))}u.isMDXComponent=!0}}]);
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2566],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,f=m["".concat(i,".").concat(d)]||m[d]||s[d]||o;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},4252:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={},l=void 0,p={unversionedId:"React Native/Expo Cli",id:"React Native/Expo Cli",title:"Expo Cli",description:"\u9700\u8981\u5b89\u88dd expo-cli \u5957\u4ef6 \uff0c\u9019\u908a\u662f\u88dd\u5728\u5168\u57df\u74b0\u5883",source:"@site/docs/React Native/Expo Cli.md",sourceDirName:"React Native",slug:"/React Native/Expo Cli",permalink:"/docs/React Native/Expo Cli",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/React Native/Expo Cli.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Expo \u8f38\u51fa APK",permalink:"/docs/React Native/EAS"},next:{title:"Expo \u672c\u5730\u5132\u5b58\u65b9\u6848",permalink:"/docs/React Native/Expo SecureStore"}},i={},c=[],u={toc:c};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u9700\u8981\u5b89\u88dd expo-cli \u5957\u4ef6 \uff0c\u9019\u908a\u662f\u88dd\u5728\u5168\u57df\u74b0\u5883"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -g expo-cli\n")),(0,a.kt)("p",null,"\u900f\u904e eas \u53ef\u4ee5\u5c07\u61c9\u7528 Build \u6210 aab"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -g eas-cli\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"eas build -p android\n")),(0,a.kt)("p",null,"\u7531\u65bc\u5f9e eas \u5e73\u53f0\u4e0a\u4e0b\u8f09\u4f86\u7684\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"*.aab")," \uff0c\u6240\u4ee5\u9700\u8981\u7528 jar \u5de5\u5177\u8f49\u6210 ",(0,a.kt)("inlineCode",{parentName:"p"},"apk")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"}," java -jar D:/bundletool-all-1.17.2.jar build-apks --bundle=D:/ --output=output.apks --mode=universal\n")),(0,a.kt)("hr",null),(0,a.kt)("p",null,"\u53c3\u8003\u8cc7\u6e90"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://expo.dev/eas"},"expo.dev")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/google/bundletool/releases"},"JAR \u5de5\u5177\u9023\u7d50"))))}s.isMDXComponent=!0}}]);
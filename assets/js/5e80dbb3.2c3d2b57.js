"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6079],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var l=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=l.createContext({}),p=function(e){var t=l.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return l.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},h=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),h=p(n),m=a,k=h["".concat(c,".").concat(m)]||h[m]||d[m]||r;return n?l.createElement(k,o(o({ref:t},u),{},{components:n})):l.createElement(k,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=h;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<r;p++)o[p]=n[p];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}h.displayName="MDXCreateElement"},1573:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var l=n(7462),a=(n(7294),n(3905));const r={title:"Apollo Client Cache \u6a5f\u5236\u8207 fetchPolicy"},o="\ud83d\ude80 Apollo Client Cache \u6a5f\u5236\u8207 `fetchPolicy` \u5be6\u6230\u7b46\u8a18",i={unversionedId:"GraphQL/Apollo Client Cache \u6a5f\u5236\u8207 fetchPolicy \u5be6\u6230\u7b46\u8a18",id:"GraphQL/Apollo Client Cache \u6a5f\u5236\u8207 fetchPolicy \u5be6\u6230\u7b46\u8a18",title:"Apollo Client Cache \u6a5f\u5236\u8207 fetchPolicy",description:"\ud83d\udcda \u76ee\u9304",source:"@site/docs\\GraphQL\\Apollo Client Cache \u6a5f\u5236\u8207 fetchPolicy \u5be6\u6230\u7b46\u8a18.md",sourceDirName:"GraphQL",slug:"/GraphQL/Apollo Client Cache \u6a5f\u5236\u8207 fetchPolicy \u5be6\u6230\u7b46\u8a18",permalink:"/docs/GraphQL/Apollo Client Cache \u6a5f\u5236\u8207 fetchPolicy \u5be6\u6230\u7b46\u8a18",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/GraphQL/Apollo Client Cache \u6a5f\u5236\u8207 fetchPolicy \u5be6\u6230\u7b46\u8a18.md",tags:[],version:"current",frontMatter:{title:"Apollo Client Cache \u6a5f\u5236\u8207 fetchPolicy"},sidebar:"tutorialSidebar",previous:{title:"VPS\u4e3b\u6a5fClone\u5c08\u6848\u554f\u984c",permalink:"/docs/Git/VPS\u4e3b\u6a5fClone\u5c08\u6848\u554f\u984c"},next:{title:"useMutation",permalink:"/docs/GraphQL/Hook/useMutation"}},c={},p=[{value:"\ud83d\udcda \u76ee\u9304",id:"-\u76ee\u9304",level:2},{value:"\u4e00\u3001Apollo Client Cache \u662f\u4ec0\u9ebc\uff1f",id:"\u4e00apollo-client-cache-\u662f\u4ec0\u9ebc",level:2},{value:"\u4e8c\u3001\u5e38\u898b\u7684 <code>fetchPolicy</code> \u89e3\u91cb\u8207\u4f7f\u7528\u5834\u666f",id:"\u4e8c\u5e38\u898b\u7684-fetchpolicy-\u89e3\u91cb\u8207\u4f7f\u7528\u5834\u666f",level:2},{value:"\u4e09\u3001<code>network-only</code> \u6c92\u6709\u6548\u679c\u7684\u539f\u56e0\u8207\u89e3\u6cd5",id:"\u4e09network-only-\u6c92\u6709\u6548\u679c\u7684\u539f\u56e0\u8207\u89e3\u6cd5",level:2},{value:"\u2753 \u554f\u984c\u4f86\u6e90\uff1a",id:"-\u554f\u984c\u4f86\u6e90",level:3},{value:"\ud83d\udd75\ufe0f \u771f\u76f8\uff1a",id:"\ufe0f-\u771f\u76f8",level:3},{value:"\ud83e\uddef \u89e3\u6cd5\uff1a",id:"-\u89e3\u6cd5",level:3},{value:"\u4e03\u3001\u5ef6\u4f38\u95b1\u8b80",id:"\u4e03\u5ef6\u4f38\u95b1\u8b80",level:2}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,l.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"-apollo-client-cache-\u6a5f\u5236\u8207-fetchpolicy-\u5be6\u6230\u7b46\u8a18"},"\ud83d\ude80 Apollo Client Cache \u6a5f\u5236\u8207 ",(0,a.kt)("inlineCode",{parentName:"h1"},"fetchPolicy")," \u5be6\u6230\u7b46\u8a18"),(0,a.kt)("h2",{id:"-\u76ee\u9304"},"\ud83d\udcda \u76ee\u9304"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#%E4%B8%80apollo-client-cache-%E6%98%AF%E4%BB%80%E9%BA%BC"},"\u4e00\u3001Apollo Client Cache \u662f\u4ec0\u9ebc\uff1f")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#%E4%BA%8C%E5%B8%B8%E8%A6%8B%E7%9A%84-fetchpolicy-%E8%A7%A3%E9%87%8B%E8%88%87%E4%BD%BF%E7%94%A8%E5%A0%B4%E6%99%AF"},"\u4e8c\u3001\u5e38\u898b\u7684 ",(0,a.kt)("inlineCode",{parentName:"a"},"fetchPolicy")," \u89e3\u91cb\u8207\u4f7f\u7528\u5834\u666f")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#%E4%B8%89network-only-%E6%B2%92%E6%9C%89%E6%95%88%E6%9E%9C%E7%9A%84%E5%8E%9F%E5%9B%A0%E8%88%87%E8%A7%A3%E6%B3%95"},"\u4e09\u3001",(0,a.kt)("inlineCode",{parentName:"a"},"network-only")," \u6c92\u6709\u6548\u679c\u7684\u539f\u56e0\u8207\u89e3\u6cd5")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#%E5%9B%9B%E5%A6%82%E4%BD%95%E5%9C%A8-devtools-%E6%AA%A2%E6%9F%A5%E7%89%B9%E5%AE%9A-operationname-%E7%9A%84%E8%AB%8B%E6%B1%82"},"\u56db\u3001\u5982\u4f55\u5728 DevTools \u6aa2\u67e5\u7279\u5b9a ",(0,a.kt)("inlineCode",{parentName:"a"},"operationName")," \u7684\u8acb\u6c42")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#%E4%BA%94%E6%9C%80%E4%BD%B3%E5%AF%A6%E5%8B%99%E5%BB%BA%E8%AD%B0"},"\u4e94\u3001\u6700\u4f73\u5be6\u52d9\u5efa\u8b70")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#%E5%85%AD%E5%AF%A6%E6%88%B0%E7%B7%B4%E7%BF%92codesandbox-%E7%AF%84%E4%BE%8B"},"\u516d\u3001\u5be6\u6230\u7df4\u7fd2\uff1aCodeSandbox \u7bc4\u4f8b")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#%E4%B8%83%E5%BB%B6%E4%BC%B8%E9%96%B1%E8%AE%80"},"\u4e03\u3001\u5ef6\u4f38\u95b1\u8b80"))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"\u4e00apollo-client-cache-\u662f\u4ec0\u9ebc"},"\u4e00\u3001Apollo Client Cache \u662f\u4ec0\u9ebc\uff1f"),(0,a.kt)("p",null,"Apollo Client \u9810\u8a2d\u6703\u5c07\u67e5\u8a62\u904e\u7684\u8cc7\u6599\u5feb\u53d6\uff08Cache\uff09\u8d77\u4f86\uff0c\u907f\u514d\u6bcf\u6b21\u90fd\u53bb\u6253 API\uff0c\u63d0\u5347\u6548\u80fd\u8207\u4f7f\u7528\u8005\u9ad4\u9a57\u3002\u9019\u6a23\u7684\u6a5f\u5236\u53ef\u4ee5\u6e1b\u5c11\u4e0d\u5fc5\u8981\u7684\u7db2\u8def\u8acb\u6c42\uff0c\u52a0\u5feb\u61c9\u7528\u7a0b\u5f0f\u7684\u53cd\u61c9\u901f\u5ea6\u3002"),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"\u4e8c\u5e38\u898b\u7684-fetchpolicy-\u89e3\u91cb\u8207\u4f7f\u7528\u5834\u666f"},"\u4e8c\u3001\u5e38\u898b\u7684 ",(0,a.kt)("inlineCode",{parentName:"h2"},"fetchPolicy")," \u89e3\u91cb\u8207\u4f7f\u7528\u5834\u666f"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"fetchPolicy"),(0,a.kt)("th",{parentName:"tr",align:null},"\u8aaa\u660e"),(0,a.kt)("th",{parentName:"tr",align:null},"\u5e38\u898b\u5834\u666f"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"cache-first")),(0,a.kt)("td",{parentName:"tr",align:null},"\u9810\u8a2d\u503c\u3002\u5148\u5f9e\u5feb\u53d6\u6293\u8cc7\u6599\uff0c\u6c92\u6709\u624d\u767c\u9001\u8acb\u6c42\u3002"),(0,a.kt)("td",{parentName:"tr",align:null},"\u4e00\u822c\u9801\u9762\u8b80\u53d6\u521d\u59cb\u8cc7\u6599\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"network-only")),(0,a.kt)("td",{parentName:"tr",align:null},"\u6bcf\u6b21\u90fd\u5f37\u5236\u6253 API\uff0c\u5b8c\u5168\u4e0d\u770b Cache\u3002"),(0,a.kt)("td",{parentName:"tr",align:null},"\u9700\u8981\u5373\u6642\u6027\u9ad8\u7684\u8cc7\u6599\uff08\u5982\u5373\u6642\u6392\u884c\u699c\u3001\u62bd\u734e\u7b49\uff09\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"cache-only")),(0,a.kt)("td",{parentName:"tr",align:null},"\u53ea\u5f9e\u5feb\u53d6\u62ff\u8cc7\u6599\uff0c\u6c92\u6709\u5c31\u56de null\uff0c\u4e0d\u767c request\u3002"),(0,a.kt)("td",{parentName:"tr",align:null},"\u55ae\u7d14\u8b80 cache\u3001\u96e2\u7dda\u6a21\u5f0f\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"no-cache")),(0,a.kt)("td",{parentName:"tr",align:null},"\u6bcf\u6b21\u90fd\u6253 API\uff0c\u4f46\u4e0d\u6703\u5b58\u5165\u5feb\u53d6\u4e2d\u3002"),(0,a.kt)("td",{parentName:"tr",align:null},"\u6709\u4e9b\u4e00\u6b21\u6027\u8cc7\u6599\uff08\u50cf\u767b\u5165\u9a57\u8b49\uff09")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"standby")),(0,a.kt)("td",{parentName:"tr",align:null},"\u7b49\u5f85\u88ab\u555f\u7528\uff0c\u4e0d\u6703\u4e3b\u52d5\u57f7\u884c\u67e5\u8a62\u3002"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5f88\u5c11\u7528\uff0c\u4e00\u822c\u7528\u5728 UI component init \u968e\u6bb5\u3002")))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"\u4e09network-only-\u6c92\u6709\u6548\u679c\u7684\u539f\u56e0\u8207\u89e3\u6cd5"},"\u4e09\u3001",(0,a.kt)("inlineCode",{parentName:"h2"},"network-only")," \u6c92\u6709\u6548\u679c\u7684\u539f\u56e0\u8207\u89e3\u6cd5"),(0,a.kt)("h3",{id:"-\u554f\u984c\u4f86\u6e90"},"\u2753 \u554f\u984c\u4f86\u6e90\uff1a"),(0,a.kt)("p",null,"\u5373\u4f7f\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"useQuery")," \u4e2d\u8a2d\u5b9a\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"fetchPolicy: 'network-only'"),"\uff0c\u4f46\u5728 Network Panel \u4e2d\u4e26\u672a\u770b\u5230\u767c\u51fa\u7684\u8acb\u6c42\u3002"),(0,a.kt)("h3",{id:"\ufe0f-\u771f\u76f8"},"\ud83d\udd75\ufe0f \u771f\u76f8\uff1a"),(0,a.kt)("p",null,"\u53ef\u80fd\u662f\u5728\u521d\u59cb\u5316 Apollo Client \u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"client.ts")," \u4e2d\u8a2d\u5b9a\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"InMemoryCache")," \u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"typePolicies"),"\uff0c\u81ea\u8a02\u4e86 cache \u884c\u70ba\uff0c\u5c0e\u81f4 Apollo Client \u512a\u5148\u4f7f\u7528\u81ea\u8a02\u5feb\u53d6\u908f\u8f2f\uff0c\u800c\u7121\u8996 ",(0,a.kt)("inlineCode",{parentName:"p"},"fetchPolicy")," \u7684\u8a2d\u5b9a\u3002"),(0,a.kt)("h3",{id:"-\u89e3\u6cd5"},"\ud83e\uddef \u89e3\u6cd5\uff1a"),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u6709\u4ee5\u4e0b\u8a2d\u5b9a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const cache = new InMemoryCache({\n  typePolicies: {\n    Query: {\n      fields: {\n        lotteries: {\n          keyArgs: false,\n          merge(existing, incoming) {\n            return incoming;\n          },\n        },\n      },\n    },\n  },\n});\n")),(0,a.kt)("h2",{id:"\u4e03\u5ef6\u4f38\u95b1\u8b80"},"\u4e03\u3001\u5ef6\u4f38\u95b1\u8b80"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.apollographql.com/docs/react/data/queries/#setting-a-fetch-policy"},"Apollo \u5b98\u65b9\u6587\u4ef6\uff1afetchPolicy")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.apollographql.com/docs/react/caching/cache-configuration/#typepolicy-fields"},"Apollo Cache typePolicies \u6559\u5b78")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docusaurus.io/docs"},"Docusaurus \u5b98\u65b9\u6559\u5b78"))),(0,a.kt)("p",null,"\ud83d\udc49 \u7df4\u7fd2\u7bc4\u4f8b\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/apollo-client-cache-fetchpolicy-example"},"Apollo Client Cache \u8207 fetchPolicy \u7df4\u7fd2 CodeSandbox")))}d.isMDXComponent=!0}}]);
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2352],{3905:(n,e,t)=>{t.d(e,{Zo:()=>l,kt:()=>d});var i=t(7294);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function o(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,i)}return t}function s(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?o(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function a(n,e){if(null==n)return{};var t,i,r=function(n,e){if(null==n)return{};var t,i,r={},o=Object.keys(n);for(i=0;i<o.length;i++)t=o[i],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(n);for(i=0;i<o.length;i++)t=o[i],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var E=i.createContext({}),c=function(n){var e=i.useContext(E),t=e;return n&&(t="function"==typeof n?n(e):s(s({},e),n)),t},l=function(n){var e=c(n.components);return i.createElement(E.Provider,{value:e},n.children)},S={inlineCode:"code",wrapper:function(n){var e=n.children;return i.createElement(i.Fragment,{},e)}},R=i.forwardRef((function(n,e){var t=n.components,r=n.mdxType,o=n.originalType,E=n.parentName,l=a(n,["components","mdxType","originalType","parentName"]),R=c(t),d=r,p=R["".concat(E,".").concat(d)]||R[d]||S[d]||o;return t?i.createElement(p,s(s({ref:e},l),{},{components:t})):i.createElement(p,s({ref:e},l))}));function d(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var o=t.length,s=new Array(o);s[0]=R;var a={};for(var E in e)hasOwnProperty.call(e,E)&&(a[E]=e[E]);a.originalType=n,a.mdxType="string"==typeof n?n:r,s[1]=a;for(var c=2;c<o;c++)s[c]=t[c];return i.createElement.apply(null,s)}return i.createElement.apply(null,t)}R.displayName="MDXCreateElement"},7634:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>E,contentTitle:()=>s,default:()=>S,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var i=t(7462),r=(t(7294),t(3905));const o={},s=void 0,a={unversionedId:"SQL/postgre SQL \u7df4\u7fd2",id:"SQL/postgre SQL \u7df4\u7fd2",title:"postgre SQL \u7df4\u7fd2",description:"\u7d00\u9304\u9019\u6b21\u53c3\u52a0\u7531\u516d\u89d2\u5b78\u9662\u958b\u7684\u5f8c\u7aef\u8cc7\u6599\u5eab\u9ad4\u9a57\u71df\u6240\u5b78\u77e5\u8b58\u9ede",source:"@site/docs\\SQL\\postgre SQL \u7df4\u7fd2.md",sourceDirName:"SQL",slug:"/SQL/postgre SQL \u7df4\u7fd2",permalink:"/docs/SQL/postgre SQL \u7df4\u7fd2",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/SQL/postgre SQL \u7df4\u7fd2.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5b78\u7fd2\u7b46\u8a18",permalink:"/docs/SQL/postgre SQL \u5b78\u7fd2\u7b46\u8a18"},next:{title:"\u5229\u7528Docker Desktop\u4e0b\u8f09\u4e26\u555f\u52d5postgreSQL\u670d\u52d9",permalink:"/docs/SQL/\u5229\u7528Docker Desktop\u4e0b\u8f09\u4e26\u555f\u52d5postgreSQL\u670d\u52d9"}},E={},c=[],l={toc:c};function S(n){let{components:e,...t}=n;return(0,r.kt)("wrapper",(0,i.Z)({},l,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u7d00\u9304\u9019\u6b21\u53c3\u52a0\u7531\u516d\u89d2\u5b78\u9662\u958b\u7684\u5f8c\u7aef\u8cc7\u6599\u5eab\u9ad4\u9a57\u71df\u6240\u5b78\u77e5\u8b58\u9ede"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"\n-- \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588  \u2588\u2588\u2588\u2588\u2588   \u2588     \u2588\n--   \u2588 \u2588   \u2588\u2588    \u2588  \u2588     \u2588\u2588\n--   \u2588 \u2588\u2588\u2588\u2588\u2588 \u2588\u2588\u2588 \u2588\u2588\u2588       \u2588\n--   \u2588 \u2588   \u2588    \u2588\u2588  \u2588      \u2588\n--   \u2588 \u2588   \u2588\u2588\u2588\u2588\u2588 \u2588   \u2588     \u2588\n-- ===================== ====================\n-- 1. \u7528\u6236\u8cc7\u6599\uff0c\u8cc7\u6599\u8868\u70ba USER\n\n-- 1. \u65b0\u589e\uff1a\u65b0\u589e\u516d\u7b46\u7528\u6236\u8cc7\u6599\uff0c\u8cc7\u6599\u5982\u4e0b\uff1a\n--     1. \u7528\u6236\u540d\u7a31\u70ba`\u674e\u71d5\u5bb9`\uff0cEmail \u70ba`lee2000@hexschooltest.io`\uff0cRole\u70ba`USER`\n--     2. \u7528\u6236\u540d\u7a31\u70ba`\u738b\u5c0f\u660e`\uff0cEmail \u70ba`wXlTq@hexschooltest.io`\uff0cRole\u70ba`USER`\n--     3. \u7528\u6236\u540d\u7a31\u70ba`\u808c\u8089\u68d2\u5b50`\uff0cEmail \u70ba`muscle@hexschooltest.io`\uff0cRole\u70ba`USER`\n--     4. \u7528\u6236\u540d\u7a31\u70ba`\u597d\u91ce\u4eba`\uff0cEmail \u70ba`richman@hexschooltest.io`\uff0cRole\u70ba`USER`\n--     5. \u7528\u6236\u540d\u7a31\u70ba`Q\u592a\u90ce`\uff0cEmail \u70ba`starplatinum@hexschooltest.io`\uff0cRole\u70ba`USER`\n--     6. \u7528\u6236\u540d\u7a31\u70ba \u900f\u660e\u4eba\uff0cEmail \u70ba opacity0@hexschooltest.io\uff0cRole \u70ba USER\n-- 1. \u7528\u6236\u8cc7\u6599\uff0c\u8cc7\u6599\u8868\u70ba USER\n\nINSERT INTO \"USER\" (name, email, role) VALUES\n ('\u674e\u71d5\u5bb9', 'lee2000@hexschooltest.io', 'USER'),\n ('\u738b\u5c0f\u660e', 'wXlTq@hexschooltest.io', 'USER'),\n ('\u808c\u8089\u68d2\u5b50', 'muscle@hexschooltest.io', 'USER'),\n ('\u597d\u91ce\u4eba', 'richman@hexschooltest.io', 'USER'),\n ('Q\u592a\u90ce', 'starplatinum@hexschooltest.io', 'USER'),\n ('\u900f\u660e\u4eba', 'opcatiy0@hexschooltest.io', 'USER');\n-- 1-2 \u4fee\u6539\uff1a\u7528 Email \u627e\u5230 \u674e\u71d5\u5bb9\u3001\u808c\u8089\u68d2\u5b50\u3001Q\u592a\u90ce\uff0c\u5982\u679c\u4ed6\u7684 Role \u70ba USER \u5c07\u4ed6\u7684 Role \u6539\u70ba COACH\nUPDATE \"USER\"\nSET role = 'COACH'\nWHERE email IN ('lee2000@hexschooltest.io', 'muscle@hexschooltest.io', 'starplatinum@hexschooltest.io')\nAND role = 'USER';\n-- 1-3 \u522a\u9664\uff1a\u522a\u9664USER \u8cc7\u6599\u8868\u4e2d\uff0c\u7528 Email \u627e\u5230\u900f\u660e\u4eba\uff0c\u4e26\u522a\u9664\u8a72\u7b46\u8cc7\u6599\nDELETE FROM \"USER\"\nWHERE email = 'opcatiy0@hexschooltest.io';\n-- 1-4 \u67e5\u8a62\uff1a\u53d6\u5f97USER \u8cc7\u6599\u8868\u76ee\u524d\u6240\u6709\u7528\u6236\u6578\u91cf\uff08\u63d0\u793a\uff1a\u4f7f\u7528count\u51fd\u5f0f\uff09\nSELECT COUNT(*) AS user_count FROM \"USER\";\n-- 1-5 \u67e5\u8a62\uff1a\u53d6\u5f97 USER \u8cc7\u6599\u8868\u6240\u6709\u7528\u6236\u8cc7\u6599\uff0c\u4e26\u5217\u51fa\u524d 3 \u7b46\uff08\u63d0\u793a\uff1a\u4f7f\u7528limit\u8a9e\u6cd5\uff09\nSELECT * FROM \"USER\"\nLIMIT 3;\n\n--  \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588  \u2588\u2588\u2588\u2588\u2588   \u2588    \u2588\u2588\u2588\u2588\n--    \u2588 \u2588   \u2588\u2588    \u2588  \u2588         \u2588\n--    \u2588 \u2588\u2588\u2588\u2588\u2588 \u2588\u2588\u2588 \u2588\u2588\u2588       \u2588\u2588\u2588\n--    \u2588 \u2588   \u2588    \u2588\u2588  \u2588     \u2588\n--    \u2588 \u2588   \u2588\u2588\u2588\u2588\u2588 \u2588   \u2588    \u2588\u2588\u2588\u2588\u2588\n-- ===================== ====================\n-- 2. \u7d44\u5408\u5305\u65b9\u6848 CREDIT_PACKAGE\u3001\u5ba2\u6236\u8cfc\u8cb7\u8ab2\u7a0b\u5802\u6578 CREDIT_PURCHASE\n-- 2-1. \u65b0\u589e\uff1a\u5728`CREDIT_PACKAGE` \u8cc7\u6599\u8868\u65b0\u589e\u4e09\u7b46\u8cc7\u6599\uff0c\u8cc7\u6599\u9700\u6c42\u5982\u4e0b\uff1a\n    -- 1. \u540d\u7a31\u70ba `7 \u5802\u7d44\u5408\u5305\u65b9\u6848`\uff0c\u50f9\u683c\u70ba`1,400` \u5143\uff0c\u5802\u6578\u70ba`7`\n    -- 2. \u540d\u7a31\u70ba`14 \u5802\u7d44\u5408\u5305\u65b9\u6848`\uff0c\u50f9\u683c\u70ba`2,520` \u5143\uff0c\u5802\u6578\u70ba`14`\n    -- 3. \u540d\u7a31\u70ba `21 \u5802\u7d44\u5408\u5305\u65b9\u6848`\uff0c\u50f9\u683c\u70ba`4,800` \u5143\uff0c\u5802\u6578\u70ba`21`\nINSERT INTO \"CREDIT_PACKAGE\" (name, credit_amount, price) VALUES\n ('7 \u5802\u7d44\u5408\u5305\u65b9\u6848', 7, 1400.00),\n ('14 \u5802\u7d44\u5408\u5305\u65b9\u6848', 14, 2520.00),\n ('21 \u5802\u7d44\u5408\u5305\u65b9\u6848', 21, 4800.00);\n-- 2-2. \u65b0\u589e\uff1a\u5728 `CREDIT_PURCHASE` \u8cc7\u6599\u8868\uff0c\u65b0\u589e\u4e09\u7b46\u8cc7\u6599\uff1a\uff08\u8acb\u4f7f\u7528 name \u6b04\u4f4d\u505a\u5b50\u67e5\u8a62\uff09\n    -- 1. `\u738b\u5c0f\u660e` \u8cfc\u8cb7 `14 \u5802\u7d44\u5408\u5305\u65b9\u6848`\n    -- 2. `\u738b\u5c0f\u660e` \u8cfc\u8cb7 `21 \u5802\u7d44\u5408\u5305\u65b9\u6848`\n    -- 3. `\u597d\u91ce\u4eba` \u8cfc\u8cb7 `14 \u5802\u7d44\u5408\u5305\u65b9\u6848`\nINSERT INTO \"CREDIT_PURCHASE\" (user_id, credit_package_id, purchased_credits, price_paid)\nSELECT\n (SELECT id FROM \"USER\" WHERE email = 'wXlTq@hexschooltest.io') AS user_id,\n id AS credit_package_id,\n credit_amount,\n price\nFROM \"CREDIT_PACKAGE\"\nWHERE name = '7 \u5802\u7d44\u5408\u5305\u65b9\u6848';\n\n\n\n\nINSERT INTO \"CREDIT_PURCHASE\" (user_id, credit_package_id, purchased_credits, price_paid)\nSELECT\n (SELECT id FROM \"USER\" WHERE email = 'wXlTq@hexschooltest.io') AS user_id,\n id AS credit_package_id,\n credit_amount,\n price\nFROM \"CREDIT_PACKAGE\"\nWHERE name = '21 \u5802\u7d44\u5408\u5305\u65b9\u6848';\n\n\nINSERT INTO \"CREDIT_PURCHASE\" (user_id, credit_package_id, purchased_credits, price_paid)\nSELECT\n (SELECT id FROM \"USER\" WHERE email = 'richman@hexschooltest.io') AS user_id,\n id AS credit_package_id,\n credit_amount,\n price\nFROM \"CREDIT_PACKAGE\"\nWHERE name = '14 \u5802\u7d44\u5408\u5305\u65b9\u6848';\n\n\n\n\n\n\n-- \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588  \u2588\u2588\u2588\u2588\u2588   \u2588    \u2588\u2588\u2588\u2588\n--   \u2588 \u2588   \u2588\u2588    \u2588  \u2588         \u2588\u2588\n--   \u2588 \u2588\u2588\u2588\u2588\u2588 \u2588\u2588\u2588 \u2588\u2588\u2588       \u2588\u2588\u2588\n--   \u2588 \u2588   \u2588    \u2588\u2588  \u2588         \u2588\u2588\n--   \u2588 \u2588   \u2588\u2588\u2588\u2588\u2588 \u2588   \u2588    \u2588\u2588\u2588\u2588\n-- ===================== ====================\n-- 3. \u6559\u7df4\u8cc7\u6599 \uff0c\u8cc7\u6599\u8868\u70ba COACH ,SKILL,COACH_LINK_SKILL\n-- 3-1 \u65b0\u589e\uff1a\u5728`COACH`\u8cc7\u6599\u8868\u65b0\u589e\u4e09\u7b46\u6559\u7df4\u8cc7\u6599\uff0c\u8cc7\u6599\u9700\u6c42\u5982\u4e0b\uff1a\n    -- 1. \u5c07\u7528\u6236`\u674e\u71d5\u5bb9`\u65b0\u589e\u70ba\u6559\u7df4\uff0c\u4e26\u4e14\u5e74\u8cc7\u8a2d\u5b9a\u70ba2\u5e74\uff08\u63d0\u793a\uff1a\u4f7f\u7528`\u674e\u71d5\u5bb9`\u7684email \uff0c\u53d6\u5f97 `\u674e\u71d5\u5bb9` \u7684 `id` \uff09\n    -- 2. \u5c07\u7528\u6236`\u808c\u8089\u68d2\u5b50`\u65b0\u589e\u70ba\u6559\u7df4\uff0c\u4e26\u4e14\u5e74\u8cc7\u8a2d\u5b9a\u70ba2\u5e74\n    -- 3. \u5c07\u7528\u6236`Q\u592a\u90ce`\u65b0\u589e\u70ba\u6559\u7df4\uff0c\u4e26\u4e14\u5e74\u8cc7\u8a2d\u5b9a\u70ba2\u5e74\nINSERT INTO \"COACH\" (user_id, experience_years)\nSELECT id, 2\nFROM \"USER\"\nWHERE email IN ('lee2000@hexschooltest.io', 'muscle@hexschooltest.io', 'starplatinum@hexschooltest.io');\n-- 3-2. \u65b0\u589e\uff1a\u627f1\uff0c\u70ba\u4e09\u540d\u6559\u7df4\u65b0\u589e\u5c08\u9577\u8cc7\u6599\u81f3 `COACH_LINK_SKILL` \uff0c\u8cc7\u6599\u9700\u6c42\u5982\u4e0b\uff1a\n    -- 1. \u6240\u6709\u6559\u7df4\u90fd\u6709 `\u91cd\u8a13` \u5c08\u9577\n    -- 2. \u6559\u7df4`\u808c\u8089\u68d2\u5b50` \u9700\u8981\u6709 `\u745c\u73c8` \u5c08\u9577\n    -- 3. \u6559\u7df4`Q\u592a\u90ce` \u9700\u8981\u6709 `\u6709\u6c27\u904b\u52d5` \u8207 `\u5fa9\u5065\u8a13\u7df4` \u5c08\u9577\nINSERT INTO \"COACH_LINK_SKILL\" (coach_id, skill_id)\nSELECT c.id, s.id\nFROM \"COACH\" c, \"SKILL\" s\nWHERE c.user_id IN (\n (SELECT id FROM \"USER\" WHERE email = 'lee2000@hexschooltest.io'),\n (SELECT id FROM \"USER\" WHERE email = 'muscle@hexschooltest.io'),\n (SELECT id FROM \"USER\" WHERE email = 'starplatinum@hexschooltest.io')\n) AND s.name = '\u91cd\u8a13';\n\n\n\nINSERT INTO \"COACH_LINK_SKILL\" (coach_id, skill_id)\nSELECT c.id, s.id\nFROM \"COACH\" c, \"SKILL\" s\nWHERE c.user_id = (SELECT id FROM \"USER\" WHERE email = 'muscle@hexschooltest.io') AND s.name = '\u745c\u4f3d';\n\n\n\nINSERT INTO \"COACH_LINK_SKILL\" (coach_id, skill_id)\nSELECT c.id, s.id\nFROM \"COACH\" c, \"SKILL\" s\nWHERE c.user_id = (SELECT id FROM \"USER\" WHERE email = 'starplatinum@hexschooltest.io') AND s.name IN ('\u6709\u6c27\u904b\u52d5', '\u5fa9\u5065\u8a13\u7df4');\n-- 3-3 \u4fee\u6539\uff1a\u66f4\u65b0\u6559\u7df4\u7684\u7d93\u9a57\u5e74\u6578\uff0c\u8cc7\u6599\u9700\u6c42\u5982\u4e0b\uff1a\n    -- 1. \u6559\u7df4`\u808c\u8089\u68d2\u5b50` \u7684\u7d93\u9a57\u5e74\u6578\u70ba3\u5e74\n    -- 2. \u6559\u7df4`Q\u592a\u90ce` \u7684\u7d93\u9a57\u5e74\u6578\u70ba5\u5e74\nUPDATE \"COACH\"\nSET experience_years = 3\nWHERE user_id = (SELECT id FROM \"USER\" WHERE email = 'muscle@hexschooltest.io');\n\n\nUPDATE \"COACH\"\nSET experience_years = 5\nWHERE user_id = (SELECT id FROM \"USER\" WHERE email = 'starplatinum@hexschooltest.io');\n-- 3-4 \u522a\u9664\uff1a\u65b0\u589e\u4e00\u500b\u5c08\u9577 \u7a7a\u4e2d\u745c\u4f3d \u81f3 SKILL \u8cc7\u6599\u8868\uff0c\u4e4b\u5f8c\u522a\u9664\u6b64\u5c08\u9577\u3002\nINSERT INTO \"SKILL\" (name) VALUES ('\u7a7a\u4e2d\u745c\u4f3d');\nDELETE FROM \"SKILL\"\nWHERE name = '\u7a7a\u4e2d\u745c\u4f3d';\n\n--  \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588  \u2588\u2588\u2588\u2588\u2588   \u2588    \u2588   \u2588\n--    \u2588 \u2588   \u2588\u2588    \u2588  \u2588     \u2588   \u2588\n--    \u2588 \u2588\u2588\u2588\u2588\u2588 \u2588\u2588\u2588 \u2588\u2588\u2588      \u2588\u2588\u2588\u2588\u2588\n--    \u2588 \u2588   \u2588    \u2588\u2588  \u2588         \u2588\n--    \u2588 \u2588   \u2588\u2588\u2588\u2588\u2588 \u2588   \u2588        \u2588\n-- ===================== ====================\n-- 4. \u8ab2\u7a0b\u7ba1\u7406 COURSE \u3001\u7d44\u5408\u5305\u65b9\u6848 CREDIT_PACKAGE\n\n-- 4-1. \u65b0\u589e\uff1a\u5728`COURSE` \u65b0\u589e\u4e00\u9580\u8ab2\u7a0b\uff0c\u8cc7\u6599\u9700\u6c42\u5982\u4e0b\uff1a\n    -- 1. \u6559\u7df4\u8a2d\u5b9a\u70ba\u7528\u6236`\u674e\u71d5\u5bb9`\n    -- 2. \u5728\u8ab2\u7a0b\u5c08\u9577 `skill_id` \u4e0a\u8a2d\u5b9a\u70ba\u300c `\u91cd\u8a13` \u300d\n    -- 3. \u5728\u8ab2\u7a0b\u540d\u7a31\u4e0a\uff0c\u8a2d\u5b9a\u70ba\u300c`\u91cd\u8a13\u57fa\u790e\u8ab2`\u300d\n    -- 4. \u6388\u8ab2\u958b\u59cb\u6642\u9593`start_at`\u8a2d\u5b9a\u70ba2024-11-25 14:00:00\n    -- 5. \u6388\u8ab2\u7d50\u675f\u6642\u9593`end_at`\u8a2d\u5b9a\u70ba2024-11-25 16:00:00\n    -- 6. \u6700\u5927\u6388\u8ab2\u4eba\u6578`max_participants` \u8a2d\u5b9a\u70ba10\n    -- 7. \u6388\u8ab2\u9023\u7d50\u8a2d\u5b9a`meeting_url`\u70ba https://test-meeting.test.io\nINSERT INTO \"COURSE\" (user_id, skill_id, name, description, start_at, end_at, max_participants, meeting_url)\nSELECT\n (SELECT id FROM \"USER\" WHERE email = 'lee2000@hexschooltest.io') AS user_id,\n (SELECT id FROM \"SKILL\" WHERE name = '\u91cd\u8a13') AS skill_id,\n '\u91cd\u8a13\u57fa\u790e\u8ab2' AS name,\n NULL AS description,\n '2024-11-25 14:00:00' AS start_at,\n '2024-11-25 16:00:00' AS end_at,\n 10 AS max_participants,\n 'https://test-meeting.test.io' AS meeting_url;\n\n-- \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588  \u2588\u2588\u2588\u2588\u2588   \u2588    \u2588\u2588\u2588\u2588\u2588\n--   \u2588 \u2588   \u2588\u2588    \u2588  \u2588     \u2588\n--   \u2588 \u2588\u2588\u2588\u2588\u2588 \u2588\u2588\u2588 \u2588\u2588\u2588      \u2588\u2588\u2588\u2588\n--   \u2588 \u2588   \u2588    \u2588\u2588  \u2588         \u2588\n--   \u2588 \u2588   \u2588\u2588\u2588\u2588\u2588 \u2588   \u2588    \u2588\u2588\u2588\u2588\n-- ===================== ====================\n\n-- 5. \u5ba2\u6236\u9810\u7d04\u8207\u6388\u8ab2 COURSE_BOOKING\n-- 5-1. \u65b0\u589e\uff1a\u8acb\u5728 `COURSE_BOOKING` \u65b0\u589e\u5169\u7b46\u8cc7\u6599\uff1a\n    -- 1. \u7b2c\u4e00\u7b46\uff1a`\u738b\u5c0f\u660e`\u9810\u7d04 `\u674e\u71d5\u5bb9` \u7684\u8ab2\u7a0b\n        -- 1. \u9810\u7d04\u4eba\u8a2d\u70ba`\u738b\u5c0f\u660e`\n        -- 2. \u9810\u7d04\u6642\u9593`booking_at` \u8a2d\u70ba2024-11-24 16:00:00\n        -- 3. \u72c0\u614b`status` \u8a2d\u5b9a\u70ba\u5373\u5c07\u6388\u8ab2\n    -- 2. \u65b0\u589e\uff1a `\u597d\u91ce\u4eba` \u9810\u7d04 `\u674e\u71d5\u5bb9` \u7684\u8ab2\u7a0b\n        -- 1. \u9810\u7d04\u4eba\u8a2d\u70ba `\u597d\u91ce\u4eba`\n        -- 2. \u9810\u7d04\u6642\u9593`booking_at` \u8a2d\u70ba2024-11-24 16:00:00\n        -- 3. \u72c0\u614b`status` \u8a2d\u5b9a\u70ba\u5373\u5c07\u6388\u8ab2\n\n-- 5-2. \u4fee\u6539\uff1a`\u738b\u5c0f\u660e`\u53d6\u6d88\u9810\u7d04 `\u674e\u71d5\u5bb9` \u7684\u8ab2\u7a0b\uff0c\u8acb\u5728`COURSE_BOOKING`\u66f4\u65b0\u8a72\u7b46\u9810\u7d04\u8cc7\u6599\uff1a\n    -- 1. \u53d6\u6d88\u9810\u7d04\u6642\u9593`cancelled_at` \u8a2d\u70ba2024-11-24 17:00:00\n    -- 2. \u72c0\u614b`status` \u8a2d\u5b9a\u70ba\u8ab2\u7a0b\u5df2\u53d6\u6d88\n\n-- 5-3. \u65b0\u589e\uff1a`\u738b\u5c0f\u660e`\u518d\u6b21\u9810\u7d04 `\u674e\u71d5\u5bb9`   \u7684\u8ab2\u7a0b\uff0c\u8acb\u5728`COURSE_BOOKING`\u65b0\u589e\u4e00\u7b46\u8cc7\u6599\uff1a\n    -- 1. \u9810\u7d04\u4eba\u8a2d\u70ba`\u738b\u5c0f\u660e`\n    -- 2. \u9810\u7d04\u6642\u9593`booking_at` \u8a2d\u70ba2024-11-24 17:10:25\n    -- 3. \u72c0\u614b`status` \u8a2d\u5b9a\u70ba\u5373\u5c07\u6388\u8ab2\n\n-- 5-4. \u67e5\u8a62\uff1a\u53d6\u5f97\u738b\u5c0f\u660e\u6240\u6709\u7684\u9810\u7d04\u7d00\u9304\uff0c\u5305\u542b\u53d6\u6d88\u9810\u7d04\u7684\u7d00\u9304\n\n-- 5-5. \u4fee\u6539\uff1a`\u738b\u5c0f\u660e` \u73fe\u5728\u5df2\u7d93\u52a0\u5165\u76f4\u64ad\u5ba4\u4e86\uff0c\u8acb\u5728`COURSE_BOOKING`\u66f4\u65b0\u8a72\u7b46\u9810\u7d04\u8cc7\u6599\uff08\u8acb\u6ce8\u610f\uff0c\u4e0d\u8981\u66f4\u65b0\u5230\u5df2\u7d93\u53d6\u6d88\u7684\u7d00\u9304\uff09\uff1a\n    -- 1. \u8acb\u5728\u8a72\u7b46\u9810\u7d04\u8a18\u9304\u4ed6\u7684\u52a0\u5165\u76f4\u64ad\u5ba4\u6642\u9593 `join_at` \u8a2d\u70ba2024-11-25 14:01:59\n    -- 2. \u72c0\u614b`status` \u8a2d\u5b9a\u70ba\u4e0a\u8ab2\u4e2d\n\n-- 5-6. \u67e5\u8a62\uff1a\u8a08\u7b97\u7528\u6236\u738b\u5c0f\u660e\u7684\u8cfc\u8cb7\u5802\u6578\uff0c\u986f\u793a\u9808\u5305\u542b\u4ee5\u4e0b\u6b04\u4f4d\uff1a user_id , total\u3002 (\u9700\u4f7f\u7528\u5230 SUM \u51fd\u5f0f\u8207 Group By)\n\n-- 5-7. \u67e5\u8a62\uff1a\u8a08\u7b97\u7528\u6236\u738b\u5c0f\u660e\u7684\u5df2\u4f7f\u7528\u5802\u6578\uff0c\u986f\u793a\u9808\u5305\u542b\u4ee5\u4e0b\u6b04\u4f4d\uff1a user_id , total\u3002 (\u9700\u4f7f\u7528\u5230 Count \u51fd\u5f0f\u8207 Group By)\n\n-- 5-8. [\u6311\u6230\u984c] \u67e5\u8a62\uff1a\u8acb\u5728\u4e00\u6b21\u67e5\u8a62\u4e2d\uff0c\u8a08\u7b97\u7528\u6236\u738b\u5c0f\u660e\u7684\u5269\u9918\u53ef\u7528\u5802\u6578\uff0c\u986f\u793a\u9808\u5305\u542b\u4ee5\u4e0b\u6b04\u4f4d\uff1a user_id , remaining_credit\n    -- \u63d0\u793a\uff1a\n    -- select (\"CREDIT_PURCHASE\".total_credit - \"COURSE_BOOKING\".used_credit) as remaining_credit, ...\n    -- from ( \u7528\u6236\u738b\u5c0f\u660e\u7684\u8cfc\u8cb7\u5802\u6578 ) as \"CREDIT_PURCHASE\"\n    -- inner join ( \u7528\u6236\u738b\u5c0f\u660e\u7684\u5df2\u4f7f\u7528\u5802\u6578) as \"COURSE_BOOKING\"\n    -- on \"COURSE_BOOKING\".user_id = \"CREDIT_PURCHASE\".user_id;\n\n\n-- \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588  \u2588\u2588\u2588\u2588\u2588   \u2588     \u2588\u2588\u2588\n--   \u2588 \u2588   \u2588\u2588    \u2588  \u2588     \u2588\n--   \u2588 \u2588\u2588\u2588\u2588\u2588 \u2588\u2588\u2588 \u2588\u2588\u2588      \u2588\u2588\u2588\u2588\n--   \u2588 \u2588   \u2588    \u2588\u2588  \u2588     \u2588   \u2588\n--   \u2588 \u2588   \u2588\u2588\u2588\u2588\u2588 \u2588   \u2588     \u2588\u2588\u2588\n-- ===================== ====================\n-- 6. \u5f8c\u53f0\u5831\u8868\n-- 6-1 \u67e5\u8a62\uff1a\u67e5\u8a62\u5c08\u9577\u70ba\u91cd\u8a13\u7684\u6559\u7df4\uff0c\u4e26\u6309\u7d93\u9a57\u5e74\u6578\u6392\u5e8f\uff0c\u7531\u8cc7\u6df1\u5230\u8cc7\u6dfa\uff08\u9700\u4f7f\u7528 inner join \u8207 order by \u8a9e\u6cd5)\n-- \u986f\u793a\u9808\u5305\u542b\u4ee5\u4e0b\u6b04\u4f4d\uff1a \u6559\u7df4\u540d\u7a31 , \u7d93\u9a57\u5e74\u6578, \u5c08\u9577\u540d\u7a31\n\n-- 6-2 \u67e5\u8a62\uff1a\u67e5\u8a62\u6bcf\u7a2e\u5c08\u9577\u7684\u6559\u7df4\u6578\u91cf\uff0c\u4e26\u53ea\u5217\u51fa\u6559\u7df4\u6578\u91cf\u6700\u591a\u7684\u5c08\u9577\uff08\u9700\u4f7f\u7528 group by, inner join \u8207 order by \u8207 limit \u8a9e\u6cd5\uff09\n-- \u986f\u793a\u9808\u5305\u542b\u4ee5\u4e0b\u6b04\u4f4d\uff1a \u5c08\u9577\u540d\u7a31, coach_total\n\n-- 6-3. \u67e5\u8a62\uff1a\u8a08\u7b97 11 \u6708\u4efd\u7d44\u5408\u5305\u65b9\u6848\u7684\u92b7\u552e\u6578\u91cf\n-- \u986f\u793a\u9808\u5305\u542b\u4ee5\u4e0b\u6b04\u4f4d\uff1a \u7d44\u5408\u5305\u65b9\u6848\u540d\u7a31, \u92b7\u552e\u6578\u91cf\n\n-- 6-4. \u67e5\u8a62\uff1a\u8a08\u7b97 11 \u6708\u4efd\u7e3d\u71df\u6536\uff08\u4f7f\u7528 purchase_at \u6b04\u4f4d\u7d71\u8a08\uff09\n-- \u986f\u793a\u9808\u5305\u542b\u4ee5\u4e0b\u6b04\u4f4d\uff1a \u7e3d\u71df\u6536\n\n-- 6-5. \u67e5\u8a62\uff1a\u8a08\u7b97 11 \u6708\u4efd\u6709\u9810\u7d04\u8ab2\u7a0b\u7684\u6703\u54e1\u4eba\u6578\uff08\u9700\u4f7f\u7528 Distinct\uff0c\u4e26\u7528 created_at \u548c status \u6b04\u4f4d\u7d71\u8a08\uff09\n-- \u986f\u793a\u9808\u5305\u542b\u4ee5\u4e0b\u6b04\u4f4d\uff1a \u9810\u7d04\u6703\u54e1\u4eba\u6578\n\n")))}S.isMDXComponent=!0}}]);
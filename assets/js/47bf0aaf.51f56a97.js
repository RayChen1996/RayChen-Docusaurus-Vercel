"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9653],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function L(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var T=r.createContext({}),N=function(e){var t=r.useContext(T),n=t;return e&&(n="function"==typeof e?e(t):E(E({},t),e)),n},u=function(e){var t=N(e.components);return r.createElement(T.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},o=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,T=e.parentName,u=L(e,["components","mdxType","originalType","parentName"]),o=N(n),d=a,s=o["".concat(T,".").concat(d)]||o[d]||c[d]||i;return n?r.createElement(s,E(E({ref:t},u),{},{components:n})):r.createElement(s,E({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,E=new Array(i);E[0]=o;var L={};for(var T in t)hasOwnProperty.call(t,T)&&(L[T]=t[T]);L.originalType=e,L.mdxType="string"==typeof e?e:a,E[1]=L;for(var N=2;N<i;N++)E[N]=n[N];return r.createElement.apply(null,E)}return r.createElement.apply(null,n)}o.displayName="MDXCreateElement"},7347:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>T,contentTitle:()=>E,default:()=>c,frontMatter:()=>i,metadata:()=>L,toc:()=>N});var r=n(7462),a=(n(7294),n(3905));const i={},E=void 0,L={unversionedId:"SQL/Postgresql/\u7df4\u7fd2\u984c\u76ee",id:"SQL/Postgresql/\u7df4\u7fd2\u984c\u76ee",title:"\u7df4\u7fd2\u984c\u76ee",description:"",source:"@site/docs\\SQL\\Postgresql\\\u7df4\u7fd2\u984c\u76ee.md",sourceDirName:"SQL/Postgresql",slug:"/SQL/Postgresql/\u7df4\u7fd2\u984c\u76ee",permalink:"/RayChen-Docusaurus-Vercel/docs/SQL/Postgresql/\u7df4\u7fd2\u984c\u76ee",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/SQL/Postgresql/\u7df4\u7fd2\u984c\u76ee.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5f15\u7528Svg\u5c08\u6848",permalink:"/RayChen-Docusaurus-Vercel/docs/React Native/\u5f15\u7528Svg\u5c08\u6848"},next:{title:"\u900f\u904eDBeaver\u9023\u63a5Docker",permalink:"/RayChen-Docusaurus-Vercel/docs/SQL/Postgresql/\u900f\u904eDBeaver\u9023\u63a5Docker"}},T={},N=[],u={toc:N};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'CREATE EXTENSION IF NOT EXISTS "uuid-ossp";\nCREATE TABLE "USER" (\n  "id" uuid PRIMARY KEY NOT NULL DEFAULT (gen_random_uuid()),\n  "name" varchar(50) NOT NULL,\n  "email" varchar(320) UNIQUE NOT NULL,\n  "role" varchar(20) NOT NULL,\n  "created_at" timestamp NOT NULL DEFAULT (CURRENT_TIMESTAMP),\n  "updated_at" timestamp NOT NULL DEFAULT (CURRENT_TIMESTAMP)\n);\nCREATE TABLE "SKILL" (\n  "id" uuid PRIMARY KEY DEFAULT uuid_generate_v4(),\n  "name" varchar(50) UNIQUE NOT NULL,\n  "created_at" timestamp NOT NULL DEFAULT (CURRENT_TIMESTAMP)\n);\n\nINSERT INTO "SKILL" (name) VALUES (\'\u91cd\u8a13\'), (\'\u745c\u4f3d\'), (\'\u6709\u6c27\u904b\u52d5\'), (\'\u5fa9\u5065\u8a13\u7df4\');\n\nCREATE TABLE "COACH" (\n  "id" uuid PRIMARY KEY NOT NULL DEFAULT uuid_generate_v4(),\n  "user_id" uuid NOT NULL REFERENCES "USER"(id),\n  "experience_years" integer,\n  "description" text,\n  "profile_image_url" varchar(2048),\n  "created_at" timestamp NOT NULL DEFAULT (CURRENT_TIMESTAMP),\n  "updated_at" timestamp NOT NULL DEFAULT (CURRENT_TIMESTAMP),\n  UNIQUE("user_id")\n);\n\nCREATE TABLE "COACH_LINK_SKILL" (\n  "coach_id" uuid NOT NULL REFERENCES "COACH"(id),\n  "skill_id" uuid NOT NULL REFERENCES "SKILL"(id),\n  "created_at" timestamp NOT NULL DEFAULT (CURRENT_TIMESTAMP),\n  PRIMARY KEY ("coach_id", "skill_id")\n);\n\nCREATE TABLE "CREDIT_PACKAGE" (\n  "id" serial PRIMARY KEY,\n  "name" varchar(50) NOT NULL,\n  "credit_amount" integer NOT NULL,\n  "price" numeric(10,2) NOT NULL,\n  "created_at" timestamp NOT NULL DEFAULT (CURRENT_TIMESTAMP)\n);\n\nCREATE TABLE "CREDIT_PURCHASE" (\n  "id" uuid PRIMARY KEY NOT NULL DEFAULT (gen_random_uuid()),\n  "user_id" uuid NOT NULL REFERENCES "USER"(id),\n  "credit_package_id" integer NOT NULL REFERENCES "CREDIT_PACKAGE"(id),\n  "purchased_credits" integer NOT NULL,\n  "price_paid" numeric(10,2) NOT NULL,\n  "created_at" timestamp NOT NULL DEFAULT (CURRENT_TIMESTAMP),\n  "purchase_at" timestamp NOT NULL DEFAULT (CURRENT_TIMESTAMP)\n);\n\nCREATE TABLE "COURSE" (\n  "id" serial PRIMARY KEY,\n  "user_id" uuid NOT NULL REFERENCES "USER"(id),\n  "skill_id" uuid NOT NULL REFERENCES "SKILL"(id),\n  "name" varchar(100) NOT NULL,\n  "description" text,\n  "start_at" timestamp NOT NULL,\n  "end_at" timestamp NOT NULL,\n  "max_participants" integer NOT NULL,\n  "meeting_url" varchar(2048) NOT NULL,\n  "created_at" timestamp NOT NULL DEFAULT (CURRENT_TIMESTAMP)\n);\n\nCREATE TABLE "COURSE_BOOKING" (\n  "id" uuid PRIMARY KEY NOT NULL DEFAULT (gen_random_uuid()),\n  "user_id" uuid NOT NULL REFERENCES "USER"(id),\n  "course_id" integer NOT NULL REFERENCES "COURSE"(id),\n  "booking_at" timestamp NOT NULL,\n  "status" varchar(20) NOT NULL,\n  "join_at" timestamp,\n  "leave_at" timestamp,\n  "cancelled_at" timestamp,\n  "cancellation_reason" varchar(255),\n  "created_at" timestamp NOT NULL DEFAULT (CURRENT_TIMESTAMP)\n);\n\nCREATE TABLE "BLOG_POST" (\n  "id" uuid PRIMARY KEY NOT NULL DEFAULT (gen_random_uuid()),\n  "user_id" uuid NOT NULL REFERENCES "USER"(id),\n  "title" varchar(255) NOT NULL,\n  "content" text NOT NULL,\n  "featured_image_url" varchar(2048),\n  "category" varchar(20) NOT NULL,\n  "spend_minutes" smallint NOT NULL,\n  "created_at" timestamp NOT NULL DEFAULT (CURRENT_TIMESTAMP),\n  "updated_at" timestamp NOT NULL DEFAULT (CURRENT_TIMESTAMP)\n);\n\nCREATE TABLE "COMMENT" (\n  "id" uuid PRIMARY KEY NOT NULL DEFAULT (gen_random_uuid()),\n  "blog_post_id" uuid NOT NULL REFERENCES "BLOG_POST"(id),\n  "user_id" uuid NOT NULL REFERENCES "USER"(id),\n  "content" text NOT NULL,\n  "created_at" timestamp NOT NULL DEFAULT (CURRENT_TIMESTAMP),\n  "updated_at" timestamp NOT NULL DEFAULT (CURRENT_TIMESTAMP)\n);\n\n')))}c.isMDXComponent=!0}}]);
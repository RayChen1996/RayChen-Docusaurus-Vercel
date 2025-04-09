"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7628],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var i=r.createContext({}),s=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(i.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(t),f=o,m=u["".concat(i,".").concat(f)]||u[f]||d[f]||a;return t?r.createElement(m,c(c({ref:n},p),{},{components:t})):r.createElement(m,c({ref:n},p))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=u;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var s=2;s<a;s++)c[s]=t[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3705:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=t(7462),o=(t(7294),t(3905));const a={},c=void 0,l={unversionedId:"Docker/dockerfile",id:"Docker/dockerfile",title:"dockerfile",description:"",source:"@site/docs/Docker/dockerfile.md",sourceDirName:"Docker",slug:"/Docker/dockerfile",permalink:"/docs/Docker/dockerfile",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Docker/dockerfile.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Start Up",permalink:"/docs/ASP NET Core/Start Up"},next:{title:"note",permalink:"/docs/Docusaurus/note"}},i={},s=[],p={toc:s};function d(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'\nFROM node:18-alpine AS base\n\n# Install dependencies only when needed\nFROM base AS deps\n# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.\nRUN apk add --no-cache libc6-compat\nWORKDIR /app\n\n# Install dependencies based on the preferred package manager\nCOPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./\nRUN \\\n  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \\\n  elif [ -f package-lock.json ]; then npm ci; \\\n  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm i --frozen-lockfile; \\\n  else echo "Lockfile not found." && exit 1; \\\n  fi\n\n\n# Rebuild the source code only when needed\nFROM base AS builder\nWORKDIR /app\nCOPY --from=deps /app/node_modules ./node_modules\nCOPY . .\n\n# Next.js collects completely anonymous telemetry data about general usage.\n# Learn more here: https://nextjs.org/telemetry\n# Uncomment the following line in case you want to disable telemetry during the build.\n# ENV NEXT_TELEMETRY_DISABLED 1\n\nRUN \\\n  if [ -f yarn.lock ]; then yarn run build; \\\n  elif [ -f package-lock.json ]; then npm run build; \\\n  elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm run build; \\\n  else echo "Lockfile not found." && exit 1; \\\n  fi\n\n# Production image, copy all the files and run next\nFROM base AS runner\nWORKDIR /app\n\nENV NODE_ENV production\n# Uncomment the following line in case you want to disable telemetry during runtime.\n# ENV NEXT_TELEMETRY_DISABLED 1\n\nRUN addgroup --system --gid 1001 nodejs\nRUN adduser --system --uid 1001 nextjs\n\nCOPY --from=builder /app/public ./public\n\n# Set the correct permission for prerender cache\nRUN mkdir .next\nRUN chown nextjs:nodejs .next\n\n# Automatically leverage output traces to reduce image size\n# https://nextjs.org/docs/advanced-features/output-file-tracing\nCOPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./\nCOPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static\n\nUSER nextjs\n\nEXPOSE 3000\n\nENV PORT 3000\n# set hostname to localhost\nENV HOSTNAME "0.0.0.0"\n\n# server.js is created by next build from the standalone output\n# https://nextjs.org/docs/pages/api-reference/next-config-js/output\nCMD ["node", "server.js"]\n\n')))}d.isMDXComponent=!0}}]);
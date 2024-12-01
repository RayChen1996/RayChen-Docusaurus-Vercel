"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1726],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=i.createContext({}),s=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return i.createElement(c.Provider,{value:t},e.children)},P={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),h=s(n),d=r,l=h["".concat(c,".").concat(d)]||h[d]||P[d]||a;return n?i.createElement(l,o(o({ref:t},p),{},{components:n})):i.createElement(l,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=h;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:r,o[1]=u;for(var s=2;s<a;s++)o[s]=n[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},6204:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>P,frontMatter:()=>a,metadata:()=>u,toc:()=>s});var i=n(7462),r=(n(7294),n(3905));const a={},o=void 0,u={unversionedId:"GraphQL/ReactJS\u5c08\u6848\u5f15\u7528",id:"GraphQL/ReactJS\u5c08\u6848\u5f15\u7528",title:"ReactJS\u5c08\u6848\u5f15\u7528",description:"\u8cc7\u6599\u593e\u7d50\u69cb",source:"@site/docs\\GraphQL\\ReactJS\u5c08\u6848\u5f15\u7528.md",sourceDirName:"GraphQL",slug:"/GraphQL/ReactJS\u5c08\u6848\u5f15\u7528",permalink:"/RayChen-Docusaurus-Vercel/docs/GraphQL/ReactJS\u5c08\u6848\u5f15\u7528",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/GraphQL/ReactJS\u5c08\u6848\u5f15\u7528.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"useQuery",permalink:"/RayChen-Docusaurus-Vercel/docs/GraphQL/Hook/useQuery"},next:{title:"apollo",permalink:"/RayChen-Docusaurus-Vercel/docs/GraphQL/apollo"}},c={},s=[],p={toc:s};function P(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,i.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"\u8cc7\u6599\u593e\u7d50\u69cb\n",(0,r.kt)("img",{alt:"alt text",src:n(6371).Z,width:"374",height:"177"}),"\nclient.ts"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";\nimport { setContext } from "@apollo/client/link/context";\n\nimport useTokenStore from "@/zustand/useTokenStore";\nimport { offsetLimitPagination } from "@apollo/client/utilities";\n\nexport const uri = "";\n\nconst httpLink = createHttpLink({\n  uri,\n});\n\nconst authLink = setContext((_, { headers }) => {\n  const token = useTokenStore.getState().token;\n  const authorization = token ? `Bearer ${token}` : "";\n\n\n  return {\n    headers: {\n      ...headers,\n      authorization,\n    },\n  };\n});\n\nconst cache = new InMemoryCache({\n  typePolicies: {\n    Query: {\n      fields: {\n        members: offsetLimitPagination(),\n        partners: offsetLimitPagination(),\n        rewards: offsetLimitPagination(["enabled", "latest"]),\n        posts: offsetLimitPagination(),\n        videos: offsetLimitPagination(),\n        forums: offsetLimitPagination(),\n        partnerManagers: offsetLimitPagination(),\n        rewardCategories: offsetLimitPagination(),\n        points: offsetLimitPagination(["type", "latest"]),\n      },\n    },\n\n\n  },\n});\n\nconst client = new ApolloClient({\n  link: authLink.concat(httpLink),\n  cache,\n});\nexport default client;\n\n')))}P.isMDXComponent=!0},6371:(e,t,n)=>{n.d(t,{Z:()=>i});const i="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXYAAACxCAYAAADQxJbdAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAACDZSURBVHhe7d0LdFT1vS/wbxLyHEJCXkBIyQMT5aEhRorQgIpPgqjtPRwBD4FzL1Kgt8VSeVzKoS3Hw0FUWu46FS6He6+EVR5yW6tIUheKlkRT1DQiDyXBPDQgeRgCIYEkJLn//57/TOaRx0wyk8xsvp+1trP//71nzw6u9d3/+e3/zPgkJk/oABERDZjAwGC15h6+6pGIiHSCwU5EpDMMdiIinWGwExHpDIOdiEhndDkrJjQwCmmxP0SQf6jq6VRzrRSnLuXgZnuL6iEiGljunhWjy2CfOPIxEexPqpa9y9cvoOjiG2hrb1U99jo6OlB3/Ru0tt1QPd5iHrbun4WYwp1Y/HKB1pPx/A6sTK/B4fkbka31ENFgYrD3wT1x/4hxMQ+oVvd8fADDsACExwRiaHgAmq624kptM65ebkFHeweab17D65+vVnt7CwY7kafjPPY+utF6FUdLftvtUhP0PqbNDcOjWYmY8lgsJtwbhcmPjMJDCxLwYNZIVHQcwfGy/xTh76eOSETkHQYl2EPSF2H9sh8gRLV7l4S5q1dhwVjVdIAss1xqKDYv18XoW/L19cOKpSvw4yU/RllFGbb+divW/ss6rHjuJ/j3l/4dh/70OtputuHnP/05Zj82G5Nuy8AQ3wDtuURE3mBQSjHJ8zdg/aNj0PjZHqz53YdoUv1dS0Lm2uVYMA44e3AHNueWqv7uyVLMmLC78KczG7T2XaNmI3XU41rpZfIjsRiVYMBf//QN6mu6rp/7B/gi7YGR+F6K8ebrJ+9WYtvrP8X11ita2xFZW/ZgTrxqaCpsSiEWJZMTU/HailQY1BY0nMT2pduQr5pm01dZ7yc0WpRcjJwoxTh0PCJyNV2WYkr2v4DN73wNw6RF2PpcTyN350Pdng9SoqZra6MSh2L0bUPx4dsXug11qbWlHWcKalRL/CP5DEGAX5BqOWDhJsxBLubOX6SWnShqiMecXauQoXYxS8nCoYXAbvO+uSgLTcVKm31lOB8SIVydY9pPLK+eBNKX4dCWeWovx7n6eETkOQatxt57uLsi1IEYw1gE+4dp68mTIvD1l1dRe8H+PcKYlGEY//0obQmNCEDj1VYcO1iBE7kX8XnROVy5UaX2dMDejZi77oBqSAXYnFcBhCZjhvEaY2YIFSNpq9H5AawRAdsown3J81ONXWJkvSQ9RBtNr9lr7NLkbcPiHHHc+FnYKi4ODnP18YjIowzqzdPuwz0MD/+i/6EujRl+t/Y4TIR11OhgVBY3aG1LPj4+mPTACIybEqktY+8K1/ovV99A5fkGnL50VGv3S3k9GsVfGJ6g2iYVZ+1nquQVQJ6mIcpYy8mYkgwDKnCsqxLJ3rMoEw8xI9RFwAGuPh4ReZZBnxWjhfubpQgwh7sM9Q1YdCdwMlts60eoSwnD07XHqFHGmlZ1pf1oPWZMiFZXb2833m4YPTZUq8dLzW2NKKv72NhwkqyzH9qvFptatkljrRghdyciVivHJEWJS15DPbr+l6hAvcVFwBGuPh4ReZZBD3ap5I0teEmF++/+Y5M51F865vjNSmsd6BDBHG1IQrD/MK3Hx9f4p8oPHtmSQS6VnqpHy412BIUMQcRI44WgpCYP7R03tXVHafVrEeZWdXZZXlHbHVZ30f4GKhFRLzwi2CVTuLf4N/Yz1DuNGZ6m1mSwA21t9qEuyzCmYP/63FVc+MpYqolLDhWXh3Z8UXNMaztuHp5Q9WvrOnvXuh4ZxyNcnJJpNF9aK95lhIYjSWvZst7XEa4+HhF5Fo8JdkmG+3//8XqXhLoUH26sr0uyXu7n54PhI61nt0THBSMgyBdN11pxucpYU5dksFdc/jtutBrbDpseixjxUF1lXb821rW7ED8eWWrVbOF4JIoH0zHyT5SI0X48ZppuplrS9m1C8QnHpyi6+nhE5Fk8KthdRc43N/gPhyEgQvUA3317XZviOOH7UarHyDRa9/PzxQ/mxKGmsgktzW1aOaY5pFzb5pS8i6gWD4nTLaYrLtyElWIU3zWbaZBybnmmGMVX5HbOWMnbht2FTTCkL7OeraL2bSzMxuY81ecIVx+PiDyKLr8rJsAvGGmxTyEseJTqMRoZF4HokWE49amc92Eswyz+2cMIDgnAt5WX0d7RjvcPn0T6D5IxLvV7ePOd1/F/D+zU9nWKDEjLm6XyA0cipJeoeePGwO78INFuMWa3DP5uPyQkLhCHZOhbKDMfz8SJDyg5dDwicjV+CZgbTbwjFS+s/S0uX6nDPz/3D6oXSLtzMn616kXUfFeNZ59314d17AOYiG4NDHY3ioqIxsiYWFy9dhVfVxpH8ZL8PpnxKRO19S9KzqCtzblZMY5hsBPdqvjtjm5UW1eD01+etAp1qb29TeuXi3tCnYjIfW7pYCci0qNbuhRDRDQYWIohIiKnMNiJiHSGwU5EpDMMdiIinRn0YJ+SfqdaIyIiV+CInYhIZxjsREQ6w2AnItIZBjsRkc4w2ImIdIbBTkSkMwx2IiKdGfQvAZPz2E8UnlItB4x9BAtSzmNfbqnq6L+bEVGoe+wptBmMP5NnKfCbMgx/Lwc+rS2qh4iof3T/QxvOBXsknly7EXPHteDswR3Y7KJwr7//UVx+9EnVshdw6QIi/vKGCPdW1dM938ZGBFRdVC1vMBXrdy1DmnZNa0LRq39F+IpZSKzIxdx1B7Q9iMi1GOx2kpC5djkWjIPLwv27x+fi6g8eUK3+i9n/f2D4/FPV8mQq1HES25duQ77WZ/xlJwY7kfvwa3vtlCLnxR3Y9wUw/unlWD8rSfV7jubvWf9AtOeKR7gYqTcWF6hQlw5gzfxFDHUiL+alN0+tw331zDDVP3B8fXwwNtSABLGMHWaAn2ibdPjwnjQRDR4vLMVYCsPDv9iARXcCJ7NfwEvHrqh+5/SlFBNnCMKS2xNVC8gu+RqlDY3a+rAP30fk24e0dcepEohqSY22P3S9cBMOZVq/GyjLWYQ1e1VDyHh+B1am1+Dw/FzEmWvnUoXo24hs1crasgdzbN9YaOUXdPMj25a1eKOynJ2ony766li2IXIGSzE9uoKjr7yAPeK6kJq1we0j96TQEIwKCdJG56mR4arXKDUiDP6+PogJCkRivJOlGBnYKkznyjKItuSiWG2WZBAfyoxG0aum7WLJqUBi5h689vxUtZdJNGbuygL2mvbdiaKGeMzZvwmiV5O9TvbnQv6Mt7yAaPt1G87yoqNq8abXFs9FpnXQE5Fn0EHNQIb7NuRUhiH1R1mYpnpdLWSIH/4xKQ4/viMRKyeOxeSo4WqLUWpkGH424TasGJ+ExzMfgyEqSm3pjQhNMQq3G53jADab2iL45ei6LGc5NucZuzR7N2J7YRMM6VlYP131aUKA4myLfQvEeoV4jMfEhcYeZ2Rtke8kxIjffINVOoA1r56E8T0KEXkSHQR7MO57bhUy466j5L0j+Ej1utqDsdEI8vPT1of5+2uP7ejAxaYb2qMU6j9Ee/QXF4H0Z5dr671aOF6EZhOKT1iGurWsCSLVG07iLYuSi0n+iRIRriEIT1Admi6OV16vhXDMCNvRfW/mYaJ4+cbCXHMZxyyvAMUNap2IPIaXB7sM9U14dlIASt7cjt+84boPLdkKGWIMbZPiK9ew5bNi7PqyDFtOFuPLeuuECwq3LtV0Rwtt1KDSciRuZSriIsRD3UWL0bKFvIuoFg/Wgd3F8dR+Tpseixi1SkTewYuDfeBCXTpYWom/19arFvB53RW0tLdr6y1t7fisrnPbl8XFOPo/VquWAxrq4d6z77/qqu7fURCRZ/HSYDeFegjK33F/qJtcbu78WgHL6Y1SR0dnu6HhGjpU6PemtLYJCA1H97PxC1BZJx4iYpFh7LCmRtRuC94u3xGYGOfBE5Fn8cJgtwz1V7Bh/8CE+rSYSDwQG61a8mZpOAJ8jf988jHNYpbMPXffjdR/WqRaPTPWyOMx025mS6fsMxUi/FPxRBc3PjOmJMOACpzuov7uGhWQVSZDylT7C4t2f4CIPI2XBbt7Qn1IQ2cZpTu3hRm0DyWZyKmP6yalaLNk5OMd4UPVFkDuFjflXtXqRd427NZmtizDVsvgnr4KW01hv3cjDotsT8zcYT37ZeEmrEwPQVlO5/x01yvA5r0n0SguLCu3zFN9gji/1zKj0cibp0Qex8uC/To+yTuNj1w8Ug/9OB/D/paHoNKSbpdjBR+jvcP6s1y+8NHmtctHWyf+43+qtd7lv7zcPCf90H61rEgFLMorct759kIgbYXFPmpeu+UHlNxCXHwWy6mN8bMszi8cx+ZnW821JyLP4OWfPB1YSTMfRkvjNXxXcg6pzyzG7Y/PUVuA0vfexae7dyAiaSyCI6Nw/p1ctUXPjJ+Wtf+UKhH1hJ889SClx46i8kQBrtfVoeyD91SvkWzL/guffnKLhLrgwBx8Ihp4DPY+ulx6Hp/tfc281J77Qm3RH/n9M3ZfW6DV2OUnZi0/4UpEnoClGOqdDPEVqTCopontF5ARkWP4QxtERDrDGjsRETmFwU5EpDMMdiIinWGwExHpDIOdiEhnGOxERDrDYCci0hkGOxGRzjDYiYh0hsFORKQzDHYiIp3xvu+KGfsIFqScx75cF/7QRmAU0mJ/iCB/+x/wrLlWilOXcnCzvfP3TomI+sPd3xXjNzwy5tdqfVDExY7AhW/lzyU7IhJPLn0WT91/N+5o/gp55y+r/v5JiZ6BO2IewNCASLslZuhtiAu7C42t38EQMBxDA0V/D4ufXyCabzrze3HyxypW45nEKvz5o0rVN7Dk1/K+8tMpCP7j+zip+ojIfYYM8Vdr7uFlwX4d5z4sxo3bJ2Pm/ZNdFu5jwu9GtKH7n2UO9h+GxIjvY2zk1F6X26Pvw9UbVai/cVE9uzcT8fA/JMPw7aeDFuxjpj2Oe2ObUMxgJxoQ7g52L6yxlyLnxR3Y9wUw/unlWD8rSfV7jihDvFojIhp4Xnrz1DrcV88MU/2ewk89EhENPC+eFSPD/QXsOQWkZm3wwHDvg4WbcGj/ns5lyzy1wVrWFot9tGUTstQ2W87sa8V8Lg7uT0Qew8unO17B0Vd0Eu4pWTg0vR7b5y/CXLnkVADxs2x+a1TeaN2DOREnO/cTy+GKeMzZvwPrp6vdNM7sa0P9nikqcsVzNiJbdRORd9DBPHYZ7tuQUxmG1B9lYZrqdaehYf6ISx6GcVMiMf77Udoy5vZhCB0eqPZwniG0BoeXbkO+amNvLooaRH/KVGSorqwts5CICuv9hOx1O8W+IUhbuKpP+1oTFwT5+6YN4oKw7oDqIyJvooNgD8Z9z61CZtx1lLx3BB+pXneIHBWMh+Yl4NGsJEx5bJQW6DLc5TL5kVF45J8S8PCCBHwvfpR6hhMqztqMjAtQWSceQsNhvD08DxPFILqxMLeLEXQBjhc39XFfS3KULy4IMtRtLghE5D28PNhlqG/Cs5MCUPLmdvzmDdd9aMlWzBgD7vsvYxA0dAhKii4j741vkLunFG/8vhi5r32F46JdXFSHIMMQZP23J5E6Pl090zGNtRVqrVNprQhgk+mxiBEP1VUFxraN/Koa8d9oxMkSizP7mkVj5q6uR/lE5F28ONgHLtSlux8YgYa6Zry7rxyf51ejurIJTVdb0d7egaaGm6gR7VP5NTj6h3JUX6rFin/+hXqmt4nHxIVqlYi8kpcGuynUQ1D+jvtDXWpuakPLjTa0NrdpbT9/H+3Rltzn2rUmtDTfUD0ukncR8mNcMSMsb6Z2yhgRLf5bg8o88eDMvmY1OLZU3lwFEjN7ublKRB7NC4PdMtRfwYb97g916bO8KgwfGYyHnklA/LgwTLpvBMbcMUxtFf+Qvj4YkzIMDy2IR2JSHP7X3u1qi6scwGkRuob0WV1MP5yKGSkhFnV6Z/a1Zr65uoLhTuStvCzY3RPq11vr1Vr3Ll+6gXf/UI6rtc2456GRSBDhPvnhUZh0/wj4iFAfmWDA5EdHoeFyK7b/7n/j9DnXfzg/e10uyhCPObusZ7RkbVmGtNAKHLaYxeLMvtYKsHmpfK4Md85hJ/JGXvftjiHpi7A4JQ+vunCkHuAXjLTYpxAW7NhslqFhwXjsh/cgZlQYTv+9HB++ewZDh8lva/PB1xfPo+jin9HSdt24c6+MM1FiCndi8cvWNzvll3OtTK/BYau55FOxfpcMZ9WUup3F4ti+Xb6OnMsupz2K1bKcRViz19hNRP3n7m939L6v7fUQyxevwhfFp/DBR0dVDxGRYxjsHiowMBDNzc2qRUTkOHcHu5fPYx88DHUi8lQMdiIinWGwExHpDIOdiEhnGOxERDrDYCci0hkGOxGRzjDYiYh0hsFORKQzDHYiIp1hsBMR6QyDnYhIZxjsREQ6w2AnItIZBjsRkc543/exj30EC1LOY1+u635BKWz4cGQ89CiCQuTvBVm7VPkNPj7+AVpbW1QPEVH/8Ic2rETiybUbMXdcC84e3IHNLgr3yRkzMO3Bh1XLXm1VFT589x3cvHlT9XSvqakRddXVqqUn3f+EHxE5h8FuJwmZa5djwTi4LNxnPJaJtClTVav//vLH13HutPf9KlTPGOxErsJfULJTipwXd2DfF8D4p5dj/awk1e85RowerdaIiAael948tQ731TPDVL+H8OE9aSIaPF7+Y9ZhePgXG7DoTuBk9gt46dgV1e8cV5diik4U4PhfclSrN50ljt3Iwsr0ENXfhKJXl2NzHpC1ZQ/mxKtuVODw/I3IVi2zhZtwKNO8E9BwEtuXbkO+amL6Kry2IhXVOYtwekJXx5uK9buWIS1Udds+37IUc2KqdizzrWa7fZW+nFN3xyLSEZZienQFR195AXvEdSE1a4PnjdydYEhfhiUiXufOXySWnShqCEHaik3YKkJ9Zu1Oi/54zNm1ChnqeVLG8ztEgEaLC4HcR+2HVKzcv0lcKqwlZu7BxDOm/XJRBnk88Toi1MPzLPpDxfO3zFPPspCShUMLgd3afhb79uOcYqbv6PwbGepE/aaDmoEM923IqQxD6o+yME31eh0xUt1tvilZgM17T6JRhG5ihE1/XgUQmowZ01WXGPUuEaP8shzj6N6o8/kTRQhbqcjFmr1qHQewJkceT7xOnXX/W4VNQPx4uxA2hNbgsFX4imO8Kl5LhPsTptdy8pwMKLH4G4mov3QQ7MG477lVyIy7jpL3juAj1et16i5aj1TzLkJOmmwsLrDuL68X4RiC8ARjM2NKsgjGCpw2h7KSV4DiBjFCn2A96m6sFUFuSTseUHbmgLGt5FfViP9GI850ATGpOGtfBrJ5LafPyfZvJKJ+8fJgl6G+Cc9OCkDJm9vxmzdc96GlgWYXuA5KipI1+XjM2b8Hh6wWi3q5heqq/o2MezzPiFitHDPQ50RE1rw42PUT6v0mbziaa942yzrrkbhbWb7r8JRzIroFeWmwm0I9BOXv3NqhXlrbBISGY6Bm8xuiLGa5mMUjXIzETaP5gT4nIrLmhcFuGeqvYMP+W3ikLuSfKNFuSM583nXTNXvUxQ1VLByPRPFgKqkM+DkRkRUvC3b3hHpTQ4Nacw1XH69HedtwTAyU5XTJrVazTeS8dPuphf1nM91SzkWXc9UtZ9sM+DkRkSUvC/br+CTvND5y8Uj9VOEnOPXJx6gsL+/3Io8jjzeQstctwvbCJm2OuuWNypTiXPsZLP3UWLgT24uTsdL0OitSAdFnWzcfyHMiImte/slTIiLvw0+eEhGRUxjsREQ6w2AnItIZBjsRkc4w2ImIdIbBTkSkMwx2IiKd8ZmYNm1Q57FPvH0MTp/7WrWIiPTvZmuLWnMPjtiJiHSGwU5EpDMMdiIinWGwExHpDIOdiEhnGOxERDrDYCci0hnOY1daDJE4//gLqtV3t729AQGN36kWEZE9zmMnYMYvsefgPmy1+E25rBf34dDBl/gzc0Rkh8FO3ct6ycGLx2ys370Pe9bMVm0iGkwMdi+VvXYB5j692q2/H5oxcrha681ohIeqVSIadAx2IiKd4c1TZfBvni7F1oP3I1G1pKbCP2DR1iPGGvtPJqDqyAKsUUN0WWOfE3kG25f8G/KNXZqMNbuxMj1EtYTyDzB37S7VMG2/jMNPf4C43c8gzTzSviD6TO8A7M9FMp+PBbvX01gcS5175x5NKPr9Emw+rppEtyDePL0VaLXs+zFCBOfcp2WJRS4f4Jza7CgZ9sbQ7jxGWcL9OLT7l8hQ+xgNx4O7fwhkm/b7A4oaRmOOuZ6+C2tE//bCJrEuQ9q4n22oS/lblxhfR6zL4DceT4W6/LvUBcnYL495WW4hIjdisPdgSPM1GKqLrRb/653B5N9Yh5Dar+DT0a56+kKMjmeP7mI0vAubuwjSbokQnZMgR8OWdXcR0EcuAKGJmDFDdWnE+Ln4DYtR8xGxLvbDaEx04TSbrAmjgYYzeKvzhMSFYDVH60RuxmDvQYgI8vj3f2u1DKv4BD7trUh4dyuS3/4lEt57WSwvwbetj2+tspKRiCac+5sTId4FY4iW4bhtaGaXiNF0CG6/13LGShevV14veoERI103s6X0O3FEu4sKEbkbg70HTTEpqHjg52gLGIrmYSO19avxkzH04hmEfFeGb9Pno+L+lWiITUWH7xD1LOdogYzLqOzXKHY24iLFQ+gErDwo57dbLva18i5f73gNqtSqq+Rv/Vi7qKT9RJ7HbqxnwBMNCAZ7D24GDkWjCPcOXz+0+Qdr663Bw3EzxDgNcNjXn6IldARqxz+GDp9+/FM21KNUrfaLvFGqatm2S1f1cfcz1urn/v6MeDegAt6u3k9ErsZg74PrEfGoHfcoDLXnMTbnV4g+LUKzj3V2Y7kiHEmq3TdHUCkn4kRGe2ZoHv83LJIBr9X7J+BZfpCJyK0Y7H1UfddTKH9wNZrDRiP6zNuIOndUbXFO/t/KxGh2NB7sZ9hlnzGG5hMu/46B4YhzsIQSEinLSj3Q6v0O7EdE/cJg74PgugrEnPozmiITUf7QarT7B8FwydnJiYoYzf5nYRNC0p+x+i4YOf97qzNhn/0BihqAxNm2teyl2NrH8ofxohOC8ATVoZFz3G1LKrtwulw82LxjyHrR5lzUjeKiI53z6onI9RjsfRBW8Qmizr6DlLfWIemdF+DbegNNUWPVVudpc8GPXBChbLrhKZafTAAuOVMXP4LNSxbgcLnpZqVpuV+7eFh+iMlh6qJjOq+evgsme+0HKDPfvDXNh7c5l9nD+eEkogHAT54qPX3yNOXNdWJ7hBidr1E9QOiFzzD027Pwa2nEtZETUJ94r/jX9OXX9hJRr/jJUw9QmbEUl9Lnq5ZRw+hJ+PaeBaic9izqk6ZpoU5E5Ak4Ylc6fP1xPcqqmNwnwbXl2geYiIi64+4RO4OdiGiAsRRDREROYbATEekMg52ISGcY7EREOsNgJyLSGZ/E5AmDOitmSvqdOFF4SrWIiPQvMDBYrbkHR+xERDrDYCci0hkGOxGRzjDYiYh0hsFORKQzDHYiIp3hdEfl5tBoXHh6u2r13eiDKzHkWo1qERHZ43RHIiJyCoOdbmHzsHX/Hrz2/FTVJtIHBvutbuEmHBLhZrdsmad2uNVNxfpdDH/yLgz2W5ZxtHooEzg8fxHmWi6vnkSj2oviER6qVom8BIP9liRDfRYSK3JFkG9Etuo1y9uGxesOqAYReRvOilEGbVbM9FV4bUUqqnMWYc1e1aeRJYBlSMNJbF+6DfmqN+P5HViZHqJaQoP1dvPzLEaZZTbHztqyB3PiK8RIvYtQ74os12TGq4ZRl8eMEOci+paIv8cg+qz2ceAYxn2iUfTqcmzOU30aiwuRxQXH+HeohmSz3fw81QKabI5t3B5TuBOLXy5QfZ3s/q01lv9utsfv4m8i6gJnxQwivxsNCPr2C6tlSON3aiswpKEWQVXn4NPRrnrcSwbZyvQai9LJThTVqY0aGTQi1OvkSFztk1OBxEzLGvE8TBRh2FiY61ioy2PalGu2FzaJY+7A+ulqF7NkEerhOKb2MwWcPG9jYHcew/68nGGse2sXEtPx5ueiTG3VyAumCm3Ta24vBNJW7MHWhWqfXuS/vNx83EbzcVSod3F8+TcReQIGew8CL57FiJx/tVpCvvoIPm0tGHn4Vxj9+s8w4u3fYIRY97np3h+n7TqQC7B5XedoPWuLGD3KEbzlqHXvRhwWeWNImYoM2Z4eixjxUF1lP0Lt2gGssRnZ57/8VxF2IUiZYhPKoSHinYfNuwAxCpej6rIcm1G4OC95gTCkZ3VxgejF9KlIEe9IyvIs36mI8zT/3SL4F4p3DWIEbzkSz385G0UNQOKE/t8YzpiSLN6VVOCY5Uhf/E0crZMnYLD3oDl2PKoy/wXtgaFoDR+trTeNnYagypMIrC5B3bT/iqpZ63E9/h4xvB+inuUuFagXoWQOaDsq+IsLLMLOKPuMSPbQZMyQAZoQLgKpCfXlxm19o84lyrIOIlXgtE2wZU0Q+4iLzVtdBF7+iRI0igtEeILqcFTeRVSLh24D2hT8Z2zvExTgeHETED8eWaqnr/KrZLktHhMdHP0TDSQGew/agkJxY9Q4dPj5oT0gRFu/aYhEu1ikkNIC3AyLxZXUJ9Hh4+5/SjE6z5MBnYqVcjbLrlXWAa9G4ob0ZfZTF21q2+LMnQ9Tq2mR1jV8s4Z6lKpVo6mIixAPdRftLjYaFdAxI5wtxxzAW2K0j/hZxvOxnZqpXbxE8Geazrdzsa+Z99HeXOPoX72Go+UdooHAYO+D5qgkEeZPIKjqS8T+v58j7O9/BAaizi7e6htrxSLUVMDb1qjlzTtzzddqUaWQ8nptKqPDYarVkkV4WdXZd2qhNpiM9e9FWpnJFPDW4SpvlFr+/ZaLgzeNeyQutEvlsYw1eGPAb+r3OwEiV2Cw91H9PfNw6fFfo2V4PMKL/ohhp95WW/rGmVGrZaiZa9SOjn7zClDcY0nHWtbsVBhk3b5PYViASnlzNyK269fqst7v3LuJ7HUyXI0XmsRMFazaxasP70r6RN6DEOegzf2Pxxx+sIs8AIO9DwJrSxH+6UE0xySjas6v0e4fjOALZ9RWJ6lAtq9X9/7BGK12bg6wAzitBf2sXkaNYqS5V4SQGPEv6XVGSjelFFXDdoSxvp+KJ7ooVZhuQJrr8t29m1AXgO6p2jmiEadd5IwXr0TxbsORi5cj7P//2FCv2e1FjGjAAP8f8gnMEY27/vIAAAAASUVORK5CYII="}}]);
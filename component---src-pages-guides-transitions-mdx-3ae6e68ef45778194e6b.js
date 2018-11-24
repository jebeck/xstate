(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{161:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",function(){return u});var n=a(184),i=a.n(n),s=a(0),c=a.n(s),o=a(174),r=a(181);t.default=function(e){var t=e.components,a=i()(e,["components"]);return c.a.createElement(o.MDXTag,{name:"wrapper",Layout:r.a,layoutProps:a,components:t},c.a.createElement(o.MDXTag,{name:"h1",components:t,props:{id:"transitions"}},c.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"h1",props:{href:"#transitions","aria-hidden":!0,class:"anchor"}}),"Transitions"),c.a.createElement(o.MDXTag,{name:"p",components:t},"A state transition defines what the ",c.a.createElement(o.MDXTag,{name:"strong",components:t,parentName:"p"},"next state")," is, given the ",c.a.createElement(o.MDXTag,{name:"strong",components:t,parentName:"p"},"current state")," and ",c.a.createElement(o.MDXTag,{name:"strong",components:t,parentName:"p"},"event"),". State transitions are defined on state nodes, in the ",c.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"on")," property:"),c.a.createElement("div",{className:"gatsby-highlight","data-language":"js"},c.a.createElement("pre",{className:"language-js"},c.a.createElement("code",{className:"language-js"},c.a.createElement("span",{className:"token keyword"},"import")," ",c.a.createElement("span",{className:"token punctuation"},"{")," Machine ",c.a.createElement("span",{className:"token punctuation"},"}")," ",c.a.createElement("span",{className:"token keyword"},"from")," ",c.a.createElement("span",{className:"token string"},"'xstate'"),c.a.createElement("span",{className:"token punctuation"},";"),"\n","\n",c.a.createElement("span",{className:"token keyword"},"const")," promiseMachine ",c.a.createElement("span",{className:"token operator"},"=")," ",c.a.createElement("span",{className:"token function"},"Machine"),c.a.createElement("span",{className:"token punctuation"},"("),c.a.createElement("span",{className:"token punctuation"},"{"),"\n","  ","id",c.a.createElement("span",{className:"token punctuation"},":")," ",c.a.createElement("span",{className:"token string"},"'promise'"),c.a.createElement("span",{className:"token punctuation"},","),"\n","  ","initial",c.a.createElement("span",{className:"token punctuation"},":")," ",c.a.createElement("span",{className:"token string"},"'pending'"),c.a.createElement("span",{className:"token punctuation"},","),"\n","  ","states",c.a.createElement("span",{className:"token punctuation"},":")," ",c.a.createElement("span",{className:"token punctuation"},"{"),"\n","    ","pending",c.a.createElement("span",{className:"token punctuation"},":")," ",c.a.createElement("span",{className:"token punctuation"},"{"),"\n","      ","on",c.a.createElement("span",{className:"token punctuation"},":")," ",c.a.createElement("span",{className:"token punctuation"},"{"),"\n","        ",c.a.createElement("span",{className:"token comment"},"// state transition (shorthand)"),"\n","        ",c.a.createElement("span",{className:"token comment"},"// this is equivalent to ","{"," target: 'resolved' ","}"),"\n","        ",c.a.createElement("span",{className:"token constant"},"RESOLVE"),c.a.createElement("span",{className:"token punctuation"},":")," ",c.a.createElement("span",{className:"token string"},"'resolved'"),c.a.createElement("span",{className:"token punctuation"},","),"\n","\n","        ",c.a.createElement("span",{className:"token comment"},"// state transition (object)"),"\n","        ",c.a.createElement("span",{className:"token constant"},"REJECT"),c.a.createElement("span",{className:"token punctuation"},":")," ",c.a.createElement("span",{className:"token punctuation"},"{"),"\n","          ","target",c.a.createElement("span",{className:"token punctuation"},":")," ",c.a.createElement("span",{className:"token string"},"'rejected'"),"\n","        ",c.a.createElement("span",{className:"token punctuation"},"}"),"\n","      ",c.a.createElement("span",{className:"token punctuation"},"}"),"\n","    ",c.a.createElement("span",{className:"token punctuation"},"}"),c.a.createElement("span",{className:"token punctuation"},","),"\n","    ","resolved",c.a.createElement("span",{className:"token punctuation"},":")," ",c.a.createElement("span",{className:"token punctuation"},"{"),"\n","      ","type",c.a.createElement("span",{className:"token punctuation"},":")," ",c.a.createElement("span",{className:"token string"},"'final'"),"\n","    ",c.a.createElement("span",{className:"token punctuation"},"}"),c.a.createElement("span",{className:"token punctuation"},","),"\n","    ","rejected",c.a.createElement("span",{className:"token punctuation"},":")," ",c.a.createElement("span",{className:"token punctuation"},"{"),"\n","      ","type",c.a.createElement("span",{className:"token punctuation"},":")," ",c.a.createElement("span",{className:"token string"},"'final'"),"\n","    ",c.a.createElement("span",{className:"token punctuation"},"}"),"\n","  ",c.a.createElement("span",{className:"token punctuation"},"}"),"\n",c.a.createElement("span",{className:"token punctuation"},"}"),c.a.createElement("span",{className:"token punctuation"},")"),c.a.createElement("span",{className:"token punctuation"},";")))),c.a.createElement(o.MDXTag,{name:"p",components:t},"In the above example, when the machine is in the ",c.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"pending")," state and it receives a ",c.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"RESOLVE")," event, it will transition to the ",c.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"resolved")," state."),c.a.createElement(o.MDXTag,{name:"p",components:t},"A state transition can be defined as:"),c.a.createElement(o.MDXTag,{name:"ul",components:t},c.a.createElement(o.MDXTag,{name:"li",components:t,parentName:"ul"},"a string, e.g., ",c.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"RESOLVE: 'resolved'"),", which is equivalent to..."),c.a.createElement(o.MDXTag,{name:"li",components:t,parentName:"ul"},"an object with a ",c.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"target")," property, e.g., ",c.a.createElement(o.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"RESOLVE: { target: 'resolved' }"),","),c.a.createElement(o.MDXTag,{name:"li",components:t,parentName:"ul"},"an array of transition objects, which are used for conditional transitions (see ",c.a.createElement(o.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"/xstate/guides/guards"}},"guards"),")")))};var u={}},168:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return N}),a.d(t,"StaticQueryContext",function(){return M}),a.d(t,"StaticQuery",function(){return g});var n=a(0),i=a.n(n),s=a(4),c=a.n(s),o=a(167),r=a.n(o);a.d(t,"Link",function(){return r.a}),a.d(t,"withPrefix",function(){return o.withPrefix}),a.d(t,"navigate",function(){return o.navigate}),a.d(t,"push",function(){return o.push}),a.d(t,"replace",function(){return o.replace}),a.d(t,"navigateTo",function(){return o.navigateTo});var u=a(170),l=a.n(u);a.d(t,"PageRenderer",function(){return l.a});var m=a(34);a.d(t,"parsePath",function(){return m.a});var M=i.a.createContext({}),g=function(e){return i.a.createElement(M.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};function N(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}g.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},170:function(e,t,a){var n;e.exports=(n=a(173))&&n.default||n},171:function(e,t,a){e.exports={heading:"typography-module--heading--1nwnC",h1:"typography-module--h1--2Esa2",h2:"typography-module--h2--3ie0v",code:"typography-module--code--240F2",anchor:"typography-module--anchor--1uJIO"}},172:function(e){e.exports={data:{site:{siteMetadata:{title:"XState Documentation"}}}}},173:function(e,t,a){"use strict";a.r(t);var n=a(10),i=a.n(n),s=a(0),c=a.n(s),o=a(4),r=a.n(o),u=a(51),l=a(2),m=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return c.a.createElement(u.a,i()({location:t,pageResources:a},a.json))};m.propTypes={location:r.a.shape({pathname:r.a.string.isRequired}).isRequired},t.default=m},175:function(e,t,a){e.exports={layout:"layout-module--layout--WT_lX",header:"layout-module--header--7X126",sidebar:"layout-module--sidebar--3qq0Q",content:"layout-module--content--2CPz1"}},176:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAyNzkuOCA5OC41IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNzkuOCA5OC41OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPGcgaWQ9IkxheWVyXzYiPgoJCTxwYXRoIGQ9Ik01NS44LDEwLjRMNTUuOCwxMC40aDE5LjVMNTUuNiw0NC42bDAsMEM0OS42LDMzLjksNDkuNywyMC45LDU1LjgsMTAuNHoiIGZpbGw9InZhcigtLWZpbGwsIGJsYWNrKSIvPgoJCTxwb2x5Z29uIHBvaW50cz0iNzUuNCw4OC4xIDMwLjUsMTAuNCAxMSwxMC40IDMzLjQsNDkuMyAxMSw4OC4xIDMwLjUsODguMSA0My4yLDY2LjIgNTUuOCw4OC4xIiBmaWxsPSJ2YXIoLS1maWxsLCBibGFjaykiLz4KCTwvZz4KCTxnIGNsYXNzPSJzdDAiPgoJCTxwYXRoIGQ9Ik04OS4xLDU5LjhjMy4yLDIuNyw2LjksNCwxMS4zLDQuMWM1LjItMC4xLDcuOC0yLDcuOS01LjdjMC0zLjEtMS43LTQuOS01LjItNS41Yy0xLjYtMC4yLTMuNC0wLjUtNS4zLTAuOAoJCQljLTMuNC0wLjYtNi0xLjktNy44LTMuOWMtMS44LTIuMS0yLjgtNC42LTIuOC03LjZjMC0zLjYsMS4yLTYuNSwzLjUtOC43YzIuMi0yLjIsNS40LTMuMyw5LjUtMy4zYzQuOSwwLjEsOS4yLDEuNSwxMi45LDQuMgoJCQlsLTMuNCw1LjFjLTMtMi02LjMtMy4xLTkuOC0zLjJjLTEuOSwwLTMuNCwwLjUtNC42LDEuNGMtMS4zLDEtMiwyLjUtMiw0LjRjMCwxLjIsMC40LDIuMywxLjMsMy4yYzAuOSwxLDIuMywxLjcsNC4zLDIKCQkJYzEuMSwwLjIsMi42LDAuNCw0LjUsMC42YzMuNywwLjUsNi41LDEuOSw4LjMsNC4xYzEuOCwyLjIsMi42LDQuNywyLjYsNy43QzExNCw2NiwxMDkuNCw2OS45LDEwMC4zLDcwYy01LjksMC0xMC45LTEuOS0xNS4yLTUuNgoJCQlMODkuMSw1OS44eiIgZmlsbD0idmFyKC0tZmlsbCwgYmxhY2spIi8+CgkJPHBhdGggZD0iTTEzNS41LDM0LjJoLTEwLjl2LTUuNWgyNy44djUuNWgtMTAuOXYzNS41aC02VjM0LjJ6IiBmaWxsPSJ2YXIoLS1maWxsLCBibGFjaykiLz4KCQk8cGF0aCBkPSJNMTgwLjksNjAuNWgtMTUuMWwtMy4xLDkuMmgtNi40bDE0LjQtNDFoNWwxNC40LDQxSDE4NEwxODAuOSw2MC41eiBNMTc5LjIsNTVsLTUuNy0xNy45aC0wLjFMMTY3LjYsNTVIMTc5LjJ6IiBmaWxsPSJ2YXIoLS1maWxsLCBibGFjaykiLz4KCQk8cGF0aCBkPSJNMjA1LjQsMzQuMmgtMTAuOXYtNS41aDI3Ljh2NS41aC0xMC45djM1LjVoLTZWMzQuMnoiIGZpbGw9InZhcigtLWZpbGwsIGJsYWNrKSIvPgoJCTxwYXRoIGQ9Ik0yMzQuMiwyOC43aDI1LjR2NS44aC0xOS40djExLjdoMTYuNXY1LjVoLTE2LjV2MTIuMWgxOS40djUuOGgtMjUuNFYyOC43eiIgZmlsbD0idmFyKC0tZmlsbCwgYmxhY2spIi8+Cgk8L2c+CjwvZz4KPC9zdmc+Cg=="},177:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0OTYgNTEyIj48cGF0aCBkPSJNMTY1LjkgMzk3LjRjMCAyLTIuMyAzLjYtNS4yIDMuNi0zLjMuMy01LjYtMS4zLTUuNi0zLjYgMC0yIDIuMy0zLjYgNS4yLTMuNiAzLS4zIDUuNiAxLjMgNS42IDMuNnptLTMxLjEtNC41Yy0uNyAyIDEuMyA0LjMgNC4zIDQuOSAyLjYgMSA1LjYgMCA2LjItMnMtMS4zLTQuMy00LjMtNS4yYy0yLjYtLjctNS41LjMtNi4yIDIuM3ptNDQuMi0xLjdjLTIuOS43LTQuOSAyLjYtNC42IDQuOS4zIDIgMi45IDMuMyA1LjkgMi42IDIuOS0uNyA0LjktMi42IDQuNi00LjYtLjMtMS45LTMtMy4yLTUuOS0yLjl6TTI0NC44IDhDMTA2LjEgOCAwIDExMy4zIDAgMjUyYzAgMTEwLjkgNjkuOCAyMDUuOCAxNjkuNSAyMzkuMiAxMi44IDIuMyAxNy4zLTUuNiAxNy4zLTEyLjEgMC02LjItLjMtNDAuNC0uMy02MS40IDAgMC03MCAxNS04NC43LTI5LjggMCAwLTExLjQtMjkuMS0yNy44LTM2LjYgMCAwLTIyLjktMTUuNyAxLjYtMTUuNCAwIDAgMjQuOSAyIDM4LjYgMjUuOCAyMS45IDM4LjYgNTguNiAyNy41IDcyLjkgMjAuOSAyLjMtMTYgOC44LTI3LjEgMTYtMzMuNy01NS45LTYuMi0xMTIuMy0xNC4zLTExMi4zLTExMC41IDAtMjcuNSA3LjYtNDEuMyAyMy42LTU4LjktMi42LTYuNS0xMS4xLTMzLjMgMi42LTY3LjkgMjAuOS02LjUgNjkgMjcgNjkgMjcgMjAtNS42IDQxLjUtOC41IDYyLjgtOC41czQyLjggMi45IDYyLjggOC41YzAgMCA0OC4xLTMzLjYgNjktMjcgMTMuNyAzNC43IDUuMiA2MS40IDIuNiA2Ny45IDE2IDE3LjcgMjUuOCAzMS41IDI1LjggNTguOSAwIDk2LjUtNTguOSAxMDQuMi0xMTQuOCAxMTAuNSA5LjIgNy45IDE3IDIyLjkgMTcgNDYuNCAwIDMzLjctLjMgNzUuNC0uMyA4My42IDAgNi41IDQuNiAxNC40IDE3LjMgMTIuMUM0MjguMiA0NTcuOCA0OTYgMzYyLjkgNDk2IDI1MiA0OTYgMTEzLjMgMzgzLjUgOCAyNDQuOCA4ek05Ny4yIDM1Mi45Yy0xLjMgMS0xIDMuMy43IDUuMiAxLjYgMS42IDMuOSAyLjMgNS4yIDEgMS4zLTEgMS0zLjMtLjctNS4yLTEuNi0xLjYtMy45LTIuMy01LjItMXptLTEwLjgtOC4xYy0uNyAxLjMuMyAyLjkgMi4zIDMuOSAxLjYgMSAzLjYuNyA0LjMtLjcuNy0xLjMtLjMtMi45LTIuMy0zLjktMi0uNi0zLjYtLjMtNC4zLjd6bTMyLjQgMzUuNmMtMS42IDEuMy0xIDQuMyAxLjMgNi4yIDIuMyAyLjMgNS4yIDIuNiA2LjUgMSAxLjMtMS4zLjctNC4zLTEuMy02LjItMi4yLTIuMy01LjItMi42LTYuNS0xem0tMTEuNC0xNC43Yy0xLjYgMS0xLjYgMy42IDAgNS45IDEuNiAyLjMgNC4zIDMuMyA1LjYgMi4zIDEuNi0xLjMgMS42LTMuOSAwLTYuMi0xLjQtMi4zLTQtMy4zLTUuNi0yeiIvPjwvc3ZnPgo8IS0tCkZvbnQgQXdlc29tZSBQcm8gNS40LjIgYnkgQGZvbnRhd2Vzb21lIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20KTGljZW5zZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tL2xpY2Vuc2UgKENvbW1lcmNpYWwgTGljZW5zZSkKLS0+Cg=="},178:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48cGF0aCBkPSJNNDQyIDExNEg2YTYgNiAwIDAgMS02LTZWODRhNiA2IDAgMCAxIDYtNmg0MzZhNiA2IDAgMCAxIDYgNnYyNGE2IDYgMCAwIDEtNiA2em0wIDE2MEg2YTYgNiAwIDAgMS02LTZ2LTI0YTYgNiAwIDAgMSA2LTZoNDM2YTYgNiAwIDAgMSA2IDZ2MjRhNiA2IDAgMCAxLTYgNnptMCAxNjBINmE2IDYgMCAwIDEtNi02di0yNGE2IDYgMCAwIDEgNi02aDQzNmE2IDYgMCAwIDEgNiA2djI0YTYgNiAwIDAgMS02IDZ6Ii8+PC9zdmc+CjwhLS0KRm9udCBBd2Vzb21lIFBybyA1LjQuMiBieSBAZm9udGF3ZXNvbWUgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbQpMaWNlbnNlIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20vbGljZW5zZSAoQ29tbWVyY2lhbCBMaWNlbnNlKQotLT4K"},179:function(e,t,a){e.exports={logo:"header-module--logo--3gu8x",header:"header-module--header--2Q3RK",github:"header-module--github--2n2t6",menu:"header-module--menu--3bKjy"}},180:function(e,t,a){e.exports={nav:"sidebar-module--nav--dK6KB",items:"sidebar-module--items--3H_1t",item:"sidebar-module--item--3A0ef",topLevel:"sidebar-module--topLevel--3yzSB",link:"sidebar-module--link--2azLL"}},181:function(e,t,a){"use strict";a(76),a(182);var n=a(7),i=a.n(n),s=a(172),c=a(0),o=a.n(c),r=a(4),u=a.n(r),l=a(183),m=a.n(l),M=a(168),g=a(174),N=a(175),p=a.n(N),L=a(171),y=a.n(L),d=(a(185),a(186),a(169)),j=a.n(d),I=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this.props,t=e.tag,a=e.id;return o.a.createElement(t,{className:j()(y.a.heading,y.a[t]),id:a},o.a.createElement("span",null,this.props.children))},t}(o.a.Component);function E(e){return o.a.createElement("a",Object.assign({},e,{className:j()(y.a.anchor)}))}var C=a(187),D=a.n(C),T=a(176),S=a.n(T),h=a(177),A=a.n(h),k=a(178),x=a.n(k),w=a(179),z=a.n(w),Y=function(e){var t=e.siteTitle,a=e.className,n=e.onToggleMenu;return o.a.createElement("header",{className:j()(a,z.a.header)},o.a.createElement(M.Link,{to:"/",style:{color:"white",textDecoration:"none"},alt:t,className:z.a.logo},o.a.createElement("img",{src:S.a,width:"auto"})),o.a.createElement("div",null,o.a.createElement("a",{href:"https://github.com/davidkpiano/xstate",alt:"XState on GitHub",className:z.a.github},o.a.createElement("img",{src:A.a,width:"auto"})),o.a.createElement("img",{src:x.a,width:"auto",className:z.a.menu,onClick:n})))},b=(a(188),a(77),a(50),a(189),a(49),a(180)),v=a.n(b);console.log(v.a);var O={guides:{title:"Guides",pages:{start:{title:"Getting Started"},installation:{title:"Installation"},states:{title:"States"},transitions:{title:"Transitions"},hierarchical:{title:"Hierarchical States"},parallel:{title:"Parallel States"},actions:{title:"Actions"},guards:{title:"Guards"},context:{title:"Context"},activities:{title:"Activities"},communication:{title:"Communication"},delays:{title:"Delays"},final:{title:"Final States"},history:{title:"History State Nodes"},ids:{title:"Identifying States"},internal:{title:"Internal Transitions"},interpretation:{title:"Interpreting Machines"},typescript:{title:"TypeScript Usage"}}},recipes:{title:"Recipes",pages:{react:{title:"React"},rxjs:{title:"RxJS"}}},api:{title:"API Docs",pages:{api:{title:"TypeScript",link:"/docs/api"},v3:{title:"Version 3.x",link:"/docs-v3"}}}},f=function(e){function t(){return e.apply(this,arguments)||this}i()(t,e);var a=t.prototype;return a.renderPages=function(e,t){return o.a.createElement("ul",{className:v.a.items},Object.keys(e).map(function(a){var n=e[a],i=e[a].link||"docs/"+t+"/"+a;return o.a.createElement("li",{className:v.a.item},o.a.createElement(M.Link,{to:i,className:v.a.link},n.title))}))},a.render=function(){var e=this;this.props.visible;return o.a.createElement("nav",{className:v.a.nav},o.a.createElement("ul",{className:v.a.items},Object.keys(O).map(function(t){var a=O[t],n=a.pages,i=a.title,s=a.link,c=void 0===s?"docs/"+t:s;return o.a.createElement("li",{className:j()(v.a.item,v.a.topLevel)},o.a.createElement(M.Link,{to:c,className:v.a.link},i),n&&e.renderPages(n,t))})))},t}(o.a.Component),Q=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(t=e.call.apply(e,[this].concat(n))||this).state={menuToggled:!1},t}i()(t,e);var a=t.prototype;return a.componentDidMount=function(){D.a.initHighlighting()},a.toggleMenu=function(){this.setState({menuToggled:!this.state.menuToggled})},a.render=function(){var e=this,t=this.props.children;return o.a.createElement(M.StaticQuery,{query:"1044757290",render:function(a){return o.a.createElement("main",{className:p.a.layout},o.a.createElement(m.a,{title:a.site.siteMetadata.title,meta:[{name:"description",content:"XState is a library for creating state machines and statecharts in JavaScript."},{name:"keywords",content:"sample, something"}]},o.a.createElement("html",{lang:"en"}),o.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Roboto:300,700|Source+Code+Pro",rel:"stylesheet"})),o.a.createElement(Y,{className:p.a.header,siteTitle:a.site.siteMetadata.title,onToggleMenu:e.toggleMenu.bind(e)}),o.a.createElement("div",{className:p.a.sidebar,"data-visible":e.state.menuToggled||void 0},o.a.createElement(f,null)),o.a.createElement(g.MDXProvider,{components:{h1:function(e){return o.a.createElement(I,Object.assign({tag:"h1"},e))},h2:function(e){return o.a.createElement(I,Object.assign({tag:"h2"},e))},h3:function(e){return o.a.createElement(I,Object.assign({tag:"h3"},e))},a:function(e){return o.a.createElement(E,e)},inlineCode:function(e){return o.a.createElement("code",{className:y.a.code},e.children)}}},o.a.createElement("main",{className:p.a.content},t)))},data:s})},t}(o.a.Component);Q.propTypes={children:u.a.node.isRequired};t.a=Q}}]);
//# sourceMappingURL=component---src-pages-guides-transitions-mdx-3ae6e68ef45778194e6b.js.map
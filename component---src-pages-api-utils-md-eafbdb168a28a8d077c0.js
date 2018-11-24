(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{143:function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",function(){return u});var n=t(184),s=t.n(n),c=t(0),l=t.n(c),o=t(174),m=t(181);a.default=function(e){var a=e.components,t=s()(e,["components"]);return l.a.createElement(o.MDXTag,{name:"wrapper",Layout:m.a,layoutProps:t,components:a},l.a.createElement(o.MDXTag,{name:"h2",components:a,props:{id:"matchesstateparentstatevalue-childstatevalue"}},l.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"h2",props:{href:"#matchesstateparentstatevalue-childstatevalue","aria-hidden":!0,class:"anchor"}}),l.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"h2"},"matchesState(parentStateValue, childStateValue)")),l.a.createElement(o.MDXTag,{name:"p",components:a},"Determines if the ",l.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"childStateValue")," matches (is contained by, or equal to) the ",l.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"parentStateValue"),"."),l.a.createElement(o.MDXTag,{name:"p",components:a},l.a.createElement(o.MDXTag,{name:"strong",components:a,parentName:"p"},"Arguments:")),l.a.createElement(o.MDXTag,{name:"ul",components:a},l.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},l.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"parentStateValue"),": the state value (or delimited string path) of the parent state value to match against"),l.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},l.a.createElement(o.MDXTag,{name:"p",components:a,parentName:"li"},l.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"childStateValue"),": the child state value (or delimited string path) of the state value to determine whether it is:"),l.a.createElement(o.MDXTag,{name:"ul",components:a,parentName:"li"},l.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},"equal to the ",l.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"parentStateValue")),l.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},"or a child state value of the ",l.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"parentStateValue"),".")))),l.a.createElement(o.MDXTag,{name:"p",components:a},l.a.createElement(o.MDXTag,{name:"strong",components:a,parentName:"p"},"Examples:")),l.a.createElement(o.MDXTag,{name:"p",components:a},"Typically, you would pass the ",l.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"p"},".value")," of the state you want to match into the function:"),l.a.createElement("div",{className:"gatsby-highlight","data-language":"js"},l.a.createElement("pre",{className:"language-js"},l.a.createElement("code",{className:"language-js"},l.a.createElement("span",{className:"token keyword"},"import")," ",l.a.createElement("span",{className:"token punctuation"},"{")," matchesState ",l.a.createElement("span",{className:"token punctuation"},"}")," ",l.a.createElement("span",{className:"token keyword"},"from")," ",l.a.createElement("span",{className:"token string"},"'xstate'"),l.a.createElement("span",{className:"token punctuation"},";"),"\n","\n",l.a.createElement("span",{className:"token keyword"},"const")," nextState ",l.a.createElement("span",{className:"token operator"},"=")," machine",l.a.createElement("span",{className:"token punctuation"},"."),l.a.createElement("span",{className:"token function"},"transition"),l.a.createElement("span",{className:"token punctuation"},"("),l.a.createElement("span",{className:"token comment"},"/* ... */"),l.a.createElement("span",{className:"token punctuation"},")"),l.a.createElement("span",{className:"token punctuation"},";"),"\n","\n",l.a.createElement("span",{className:"token comment"},"// Check if nextState is in 'a.b':"),"\n",l.a.createElement("span",{className:"token keyword"},"const")," isInDesiredState ",l.a.createElement("span",{className:"token operator"},"=")," ",l.a.createElement("span",{className:"token function"},"matchesState"),l.a.createElement("span",{className:"token punctuation"},"("),l.a.createElement("span",{className:"token string"},"'a.b'"),l.a.createElement("span",{className:"token punctuation"},",")," nextState",l.a.createElement("span",{className:"token punctuation"},"."),"value",l.a.createElement("span",{className:"token punctuation"},")"),l.a.createElement("span",{className:"token punctuation"},";")))),l.a.createElement(o.MDXTag,{name:"p",components:a},"Some equality examples: "),l.a.createElement("div",{className:"gatsby-highlight","data-language":"js"},l.a.createElement("pre",{className:"language-js"},l.a.createElement("code",{className:"language-js"},l.a.createElement("span",{className:"token function"},"matchesState"),l.a.createElement("span",{className:"token punctuation"},"("),l.a.createElement("span",{className:"token string"},"'a'"),l.a.createElement("span",{className:"token punctuation"},",")," ",l.a.createElement("span",{className:"token string"},"'a'"),l.a.createElement("span",{className:"token punctuation"},")"),l.a.createElement("span",{className:"token punctuation"},";")," ",l.a.createElement("span",{className:"token comment"},"// true"),"\n",l.a.createElement("span",{className:"token function"},"matchesState"),l.a.createElement("span",{className:"token punctuation"},"("),l.a.createElement("span",{className:"token string"},"'b'"),l.a.createElement("span",{className:"token punctuation"},",")," ",l.a.createElement("span",{className:"token string"},"'b.b1'"),l.a.createElement("span",{className:"token punctuation"},")"),l.a.createElement("span",{className:"token punctuation"},";")," ",l.a.createElement("span",{className:"token comment"},"// true"),"\n",l.a.createElement("span",{className:"token function"},"matchesState"),l.a.createElement("span",{className:"token punctuation"},"("),l.a.createElement("span",{className:"token string"},"'b'"),l.a.createElement("span",{className:"token punctuation"},",")," ",l.a.createElement("span",{className:"token punctuation"},"{")," b",l.a.createElement("span",{className:"token punctuation"},":")," ",l.a.createElement("span",{className:"token string"},"'b1'")," ",l.a.createElement("span",{className:"token punctuation"},"}"),l.a.createElement("span",{className:"token punctuation"},")"),l.a.createElement("span",{className:"token punctuation"},";")," ",l.a.createElement("span",{className:"token comment"},"// true"),"\n",l.a.createElement("span",{className:"token function"},"matchesState"),l.a.createElement("span",{className:"token punctuation"},"("),l.a.createElement("span",{className:"token punctuation"},"{")," a",l.a.createElement("span",{className:"token punctuation"},":")," ",l.a.createElement("span",{className:"token string"},"'b'")," ",l.a.createElement("span",{className:"token punctuation"},"}"),l.a.createElement("span",{className:"token punctuation"},",")," ",l.a.createElement("span",{className:"token punctuation"},"{")," a",l.a.createElement("span",{className:"token punctuation"},":")," ",l.a.createElement("span",{className:"token string"},"'b'")," ",l.a.createElement("span",{className:"token punctuation"},"}"),l.a.createElement("span",{className:"token punctuation"},")"),l.a.createElement("span",{className:"token punctuation"},";")," ",l.a.createElement("span",{className:"token comment"},"// true"),"\n",l.a.createElement("span",{className:"token function"},"matchesState"),l.a.createElement("span",{className:"token punctuation"},"("),l.a.createElement("span",{className:"token punctuation"},"{")," a",l.a.createElement("span",{className:"token punctuation"},":")," ",l.a.createElement("span",{className:"token punctuation"},"{")," b",l.a.createElement("span",{className:"token punctuation"},":")," ",l.a.createElement("span",{className:"token string"},"'c'")," ",l.a.createElement("span",{className:"token punctuation"},"}")," ",l.a.createElement("span",{className:"token punctuation"},"}"),l.a.createElement("span",{className:"token punctuation"},",")," ",l.a.createElement("span",{className:"token punctuation"},"{")," a",l.a.createElement("span",{className:"token punctuation"},":")," ",l.a.createElement("span",{className:"token punctuation"},"{")," b",l.a.createElement("span",{className:"token punctuation"},":")," ",l.a.createElement("span",{className:"token string"},"'c'")," ",l.a.createElement("span",{className:"token punctuation"},"}")," ",l.a.createElement("span",{className:"token punctuation"},"}"),l.a.createElement("span",{className:"token punctuation"},")"),l.a.createElement("span",{className:"token punctuation"},";")," ",l.a.createElement("span",{className:"token comment"},"// true"),"\n",l.a.createElement("span",{className:"token function"},"matchesState"),l.a.createElement("span",{className:"token punctuation"},"("),l.a.createElement("span",{className:"token punctuation"},"{")," foo",l.a.createElement("span",{className:"token punctuation"},":")," ",l.a.createElement("span",{className:"token string"},"'bar'")," ",l.a.createElement("span",{className:"token punctuation"},"}"),l.a.createElement("span",{className:"token punctuation"},",")," ",l.a.createElement("span",{className:"token punctuation"},"{")," foo",l.a.createElement("span",{className:"token punctuation"},":")," ",l.a.createElement("span",{className:"token punctuation"},"{")," bar",l.a.createElement("span",{className:"token punctuation"},":")," ",l.a.createElement("span",{className:"token punctuation"},"{")," baz",l.a.createElement("span",{className:"token punctuation"},":")," ",l.a.createElement("span",{className:"token string"},"'quo'")," ",l.a.createElement("span",{className:"token punctuation"},"}")," ",l.a.createElement("span",{className:"token punctuation"},"}")," ",l.a.createElement("span",{className:"token punctuation"},"}"),l.a.createElement("span",{className:"token punctuation"},")"),l.a.createElement("span",{className:"token punctuation"},";")," ",l.a.createElement("span",{className:"token comment"},"// true"),"\n",l.a.createElement("span",{className:"token function"},"matchesState"),l.a.createElement("span",{className:"token punctuation"},"("),l.a.createElement("span",{className:"token string"},"'b'"),l.a.createElement("span",{className:"token punctuation"},",")," ",l.a.createElement("span",{className:"token punctuation"},"{")," b",l.a.createElement("span",{className:"token punctuation"},":")," ",l.a.createElement("span",{className:"token string"},"'b1'"),l.a.createElement("span",{className:"token punctuation"},",")," c",l.a.createElement("span",{className:"token punctuation"},":")," ",l.a.createElement("span",{className:"token string"},"'c1'")," ",l.a.createElement("span",{className:"token punctuation"},"}"),l.a.createElement("span",{className:"token punctuation"},")"),l.a.createElement("span",{className:"token punctuation"},";")," ",l.a.createElement("span",{className:"token comment"},"// true"),"\n",l.a.createElement("span",{className:"token function"},"matchesState"),l.a.createElement("span",{className:"token punctuation"},"("),l.a.createElement("span",{className:"token string"},"'a.b.c'"),l.a.createElement("span",{className:"token punctuation"},",")," ",l.a.createElement("span",{className:"token punctuation"},"{")," a",l.a.createElement("span",{className:"token punctuation"},":")," ",l.a.createElement("span",{className:"token punctuation"},"{")," b",l.a.createElement("span",{className:"token punctuation"},":")," ",l.a.createElement("span",{className:"token string"},"'c'")," ",l.a.createElement("span",{className:"token punctuation"},"}")," ",l.a.createElement("span",{className:"token punctuation"},"}"),l.a.createElement("span",{className:"token punctuation"},")"),l.a.createElement("span",{className:"token punctuation"},";")," ",l.a.createElement("span",{className:"token comment"},"// true"),"\n","\n",l.a.createElement("span",{className:"token function"},"matchesState"),l.a.createElement("span",{className:"token punctuation"},"("),l.a.createElement("span",{className:"token string"},"'a.a1'"),l.a.createElement("span",{className:"token punctuation"},",")," ",l.a.createElement("span",{className:"token string"},"'b.b1'"),l.a.createElement("span",{className:"token punctuation"},")"),l.a.createElement("span",{className:"token punctuation"},";")," ",l.a.createElement("span",{className:"token comment"},"// false"),"\n",l.a.createElement("span",{className:"token function"},"matchesState"),l.a.createElement("span",{className:"token punctuation"},"("),l.a.createElement("span",{className:"token string"},"'a.b.c'"),l.a.createElement("span",{className:"token punctuation"},",")," ",l.a.createElement("span",{className:"token string"},"'a.b'"),l.a.createElement("span",{className:"token punctuation"},")"),l.a.createElement("span",{className:"token punctuation"},";")," ",l.a.createElement("span",{className:"token comment"},"// false"),"\n",l.a.createElement("span",{className:"token function"},"matchesState"),l.a.createElement("span",{className:"token punctuation"},"("),l.a.createElement("span",{className:"token punctuation"},"{")," a",l.a.createElement("span",{className:"token punctuation"},":")," ",l.a.createElement("span",{className:"token punctuation"},"{")," b",l.a.createElement("span",{className:"token punctuation"},":")," ",l.a.createElement("span",{className:"token punctuation"},"{")," c",l.a.createElement("span",{className:"token punctuation"},":")," ",l.a.createElement("span",{className:"token string"},"'d'")," ",l.a.createElement("span",{className:"token punctuation"},"}")," ",l.a.createElement("span",{className:"token punctuation"},"}")," ",l.a.createElement("span",{className:"token punctuation"},"}"),l.a.createElement("span",{className:"token punctuation"},",")," ",l.a.createElement("span",{className:"token punctuation"},"{")," a",l.a.createElement("span",{className:"token punctuation"},":")," ",l.a.createElement("span",{className:"token string"},"'b'")," ",l.a.createElement("span",{className:"token punctuation"},"}"),l.a.createElement("span",{className:"token punctuation"},")"),l.a.createElement("span",{className:"token punctuation"},";")," ",l.a.createElement("span",{className:"token comment"},"// false")))))};var u={}},168:function(e,a,t){"use strict";t.r(a),t.d(a,"graphql",function(){return M}),t.d(a,"StaticQueryContext",function(){return p}),t.d(a,"StaticQuery",function(){return N});var n=t(0),s=t.n(n),c=t(4),l=t.n(c),o=t(167),m=t.n(o);t.d(a,"Link",function(){return m.a}),t.d(a,"withPrefix",function(){return o.withPrefix}),t.d(a,"navigate",function(){return o.navigate}),t.d(a,"push",function(){return o.push}),t.d(a,"replace",function(){return o.replace}),t.d(a,"navigateTo",function(){return o.navigateTo});var u=t(170),i=t.n(u);t.d(a,"PageRenderer",function(){return i.a});var r=t(34);t.d(a,"parsePath",function(){return r.a});var p=s.a.createContext({}),N=function(e){return s.a.createElement(p.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):s.a.createElement("div",null,"Loading (StaticQuery)")})};function M(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}N.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},170:function(e,a,t){var n;e.exports=(n=t(173))&&n.default||n},171:function(e,a,t){e.exports={heading:"typography-module--heading--1nwnC",h1:"typography-module--h1--2Esa2",h2:"typography-module--h2--3ie0v",code:"typography-module--code--240F2",anchor:"typography-module--anchor--1uJIO"}},172:function(e){e.exports={data:{site:{siteMetadata:{title:"XState Documentation"}}}}},173:function(e,a,t){"use strict";t.r(a);var n=t(10),s=t.n(n),c=t(0),l=t.n(c),o=t(4),m=t.n(o),u=t(51),i=t(2),r=function(e){var a=e.location,t=i.default.getResourcesForPathnameSync(a.pathname);return l.a.createElement(u.a,s()({location:a,pageResources:t},t.json))};r.propTypes={location:m.a.shape({pathname:m.a.string.isRequired}).isRequired},a.default=r},175:function(e,a,t){e.exports={layout:"layout-module--layout--WT_lX",header:"layout-module--header--7X126",sidebar:"layout-module--sidebar--3qq0Q",content:"layout-module--content--2CPz1"}},176:function(e,a){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAyNzkuOCA5OC41IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNzkuOCA5OC41OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPGcgaWQ9IkxheWVyXzYiPgoJCTxwYXRoIGQ9Ik01NS44LDEwLjRMNTUuOCwxMC40aDE5LjVMNTUuNiw0NC42bDAsMEM0OS42LDMzLjksNDkuNywyMC45LDU1LjgsMTAuNHoiIGZpbGw9InZhcigtLWZpbGwsIGJsYWNrKSIvPgoJCTxwb2x5Z29uIHBvaW50cz0iNzUuNCw4OC4xIDMwLjUsMTAuNCAxMSwxMC40IDMzLjQsNDkuMyAxMSw4OC4xIDMwLjUsODguMSA0My4yLDY2LjIgNTUuOCw4OC4xIiBmaWxsPSJ2YXIoLS1maWxsLCBibGFjaykiLz4KCTwvZz4KCTxnIGNsYXNzPSJzdDAiPgoJCTxwYXRoIGQ9Ik04OS4xLDU5LjhjMy4yLDIuNyw2LjksNCwxMS4zLDQuMWM1LjItMC4xLDcuOC0yLDcuOS01LjdjMC0zLjEtMS43LTQuOS01LjItNS41Yy0xLjYtMC4yLTMuNC0wLjUtNS4zLTAuOAoJCQljLTMuNC0wLjYtNi0xLjktNy44LTMuOWMtMS44LTIuMS0yLjgtNC42LTIuOC03LjZjMC0zLjYsMS4yLTYuNSwzLjUtOC43YzIuMi0yLjIsNS40LTMuMyw5LjUtMy4zYzQuOSwwLjEsOS4yLDEuNSwxMi45LDQuMgoJCQlsLTMuNCw1LjFjLTMtMi02LjMtMy4xLTkuOC0zLjJjLTEuOSwwLTMuNCwwLjUtNC42LDEuNGMtMS4zLDEtMiwyLjUtMiw0LjRjMCwxLjIsMC40LDIuMywxLjMsMy4yYzAuOSwxLDIuMywxLjcsNC4zLDIKCQkJYzEuMSwwLjIsMi42LDAuNCw0LjUsMC42YzMuNywwLjUsNi41LDEuOSw4LjMsNC4xYzEuOCwyLjIsMi42LDQuNywyLjYsNy43QzExNCw2NiwxMDkuNCw2OS45LDEwMC4zLDcwYy01LjksMC0xMC45LTEuOS0xNS4yLTUuNgoJCQlMODkuMSw1OS44eiIgZmlsbD0idmFyKC0tZmlsbCwgYmxhY2spIi8+CgkJPHBhdGggZD0iTTEzNS41LDM0LjJoLTEwLjl2LTUuNWgyNy44djUuNWgtMTAuOXYzNS41aC02VjM0LjJ6IiBmaWxsPSJ2YXIoLS1maWxsLCBibGFjaykiLz4KCQk8cGF0aCBkPSJNMTgwLjksNjAuNWgtMTUuMWwtMy4xLDkuMmgtNi40bDE0LjQtNDFoNWwxNC40LDQxSDE4NEwxODAuOSw2MC41eiBNMTc5LjIsNTVsLTUuNy0xNy45aC0wLjFMMTY3LjYsNTVIMTc5LjJ6IiBmaWxsPSJ2YXIoLS1maWxsLCBibGFjaykiLz4KCQk8cGF0aCBkPSJNMjA1LjQsMzQuMmgtMTAuOXYtNS41aDI3Ljh2NS41aC0xMC45djM1LjVoLTZWMzQuMnoiIGZpbGw9InZhcigtLWZpbGwsIGJsYWNrKSIvPgoJCTxwYXRoIGQ9Ik0yMzQuMiwyOC43aDI1LjR2NS44aC0xOS40djExLjdoMTYuNXY1LjVoLTE2LjV2MTIuMWgxOS40djUuOGgtMjUuNFYyOC43eiIgZmlsbD0idmFyKC0tZmlsbCwgYmxhY2spIi8+Cgk8L2c+CjwvZz4KPC9zdmc+Cg=="},177:function(e,a){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0OTYgNTEyIj48cGF0aCBkPSJNMTY1LjkgMzk3LjRjMCAyLTIuMyAzLjYtNS4yIDMuNi0zLjMuMy01LjYtMS4zLTUuNi0zLjYgMC0yIDIuMy0zLjYgNS4yLTMuNiAzLS4zIDUuNiAxLjMgNS42IDMuNnptLTMxLjEtNC41Yy0uNyAyIDEuMyA0LjMgNC4zIDQuOSAyLjYgMSA1LjYgMCA2LjItMnMtMS4zLTQuMy00LjMtNS4yYy0yLjYtLjctNS41LjMtNi4yIDIuM3ptNDQuMi0xLjdjLTIuOS43LTQuOSAyLjYtNC42IDQuOS4zIDIgMi45IDMuMyA1LjkgMi42IDIuOS0uNyA0LjktMi42IDQuNi00LjYtLjMtMS45LTMtMy4yLTUuOS0yLjl6TTI0NC44IDhDMTA2LjEgOCAwIDExMy4zIDAgMjUyYzAgMTEwLjkgNjkuOCAyMDUuOCAxNjkuNSAyMzkuMiAxMi44IDIuMyAxNy4zLTUuNiAxNy4zLTEyLjEgMC02LjItLjMtNDAuNC0uMy02MS40IDAgMC03MCAxNS04NC43LTI5LjggMCAwLTExLjQtMjkuMS0yNy44LTM2LjYgMCAwLTIyLjktMTUuNyAxLjYtMTUuNCAwIDAgMjQuOSAyIDM4LjYgMjUuOCAyMS45IDM4LjYgNTguNiAyNy41IDcyLjkgMjAuOSAyLjMtMTYgOC44LTI3LjEgMTYtMzMuNy01NS45LTYuMi0xMTIuMy0xNC4zLTExMi4zLTExMC41IDAtMjcuNSA3LjYtNDEuMyAyMy42LTU4LjktMi42LTYuNS0xMS4xLTMzLjMgMi42LTY3LjkgMjAuOS02LjUgNjkgMjcgNjkgMjcgMjAtNS42IDQxLjUtOC41IDYyLjgtOC41czQyLjggMi45IDYyLjggOC41YzAgMCA0OC4xLTMzLjYgNjktMjcgMTMuNyAzNC43IDUuMiA2MS40IDIuNiA2Ny45IDE2IDE3LjcgMjUuOCAzMS41IDI1LjggNTguOSAwIDk2LjUtNTguOSAxMDQuMi0xMTQuOCAxMTAuNSA5LjIgNy45IDE3IDIyLjkgMTcgNDYuNCAwIDMzLjctLjMgNzUuNC0uMyA4My42IDAgNi41IDQuNiAxNC40IDE3LjMgMTIuMUM0MjguMiA0NTcuOCA0OTYgMzYyLjkgNDk2IDI1MiA0OTYgMTEzLjMgMzgzLjUgOCAyNDQuOCA4ek05Ny4yIDM1Mi45Yy0xLjMgMS0xIDMuMy43IDUuMiAxLjYgMS42IDMuOSAyLjMgNS4yIDEgMS4zLTEgMS0zLjMtLjctNS4yLTEuNi0xLjYtMy45LTIuMy01LjItMXptLTEwLjgtOC4xYy0uNyAxLjMuMyAyLjkgMi4zIDMuOSAxLjYgMSAzLjYuNyA0LjMtLjcuNy0xLjMtLjMtMi45LTIuMy0zLjktMi0uNi0zLjYtLjMtNC4zLjd6bTMyLjQgMzUuNmMtMS42IDEuMy0xIDQuMyAxLjMgNi4yIDIuMyAyLjMgNS4yIDIuNiA2LjUgMSAxLjMtMS4zLjctNC4zLTEuMy02LjItMi4yLTIuMy01LjItMi42LTYuNS0xem0tMTEuNC0xNC43Yy0xLjYgMS0xLjYgMy42IDAgNS45IDEuNiAyLjMgNC4zIDMuMyA1LjYgMi4zIDEuNi0xLjMgMS42LTMuOSAwLTYuMi0xLjQtMi4zLTQtMy4zLTUuNi0yeiIvPjwvc3ZnPgo8IS0tCkZvbnQgQXdlc29tZSBQcm8gNS40LjIgYnkgQGZvbnRhd2Vzb21lIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20KTGljZW5zZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tL2xpY2Vuc2UgKENvbW1lcmNpYWwgTGljZW5zZSkKLS0+Cg=="},178:function(e,a){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48cGF0aCBkPSJNNDQyIDExNEg2YTYgNiAwIDAgMS02LTZWODRhNiA2IDAgMCAxIDYtNmg0MzZhNiA2IDAgMCAxIDYgNnYyNGE2IDYgMCAwIDEtNiA2em0wIDE2MEg2YTYgNiAwIDAgMS02LTZ2LTI0YTYgNiAwIDAgMSA2LTZoNDM2YTYgNiAwIDAgMSA2IDZ2MjRhNiA2IDAgMCAxLTYgNnptMCAxNjBINmE2IDYgMCAwIDEtNi02di0yNGE2IDYgMCAwIDEgNi02aDQzNmE2IDYgMCAwIDEgNiA2djI0YTYgNiAwIDAgMS02IDZ6Ii8+PC9zdmc+CjwhLS0KRm9udCBBd2Vzb21lIFBybyA1LjQuMiBieSBAZm9udGF3ZXNvbWUgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbQpMaWNlbnNlIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20vbGljZW5zZSAoQ29tbWVyY2lhbCBMaWNlbnNlKQotLT4K"},179:function(e,a,t){e.exports={logo:"header-module--logo--3gu8x",header:"header-module--header--2Q3RK",github:"header-module--github--2n2t6",menu:"header-module--menu--3bKjy"}},180:function(e,a,t){e.exports={nav:"sidebar-module--nav--dK6KB",items:"sidebar-module--items--3H_1t",item:"sidebar-module--item--3A0ef",topLevel:"sidebar-module--topLevel--3yzSB",link:"sidebar-module--link--2azLL"}},181:function(e,a,t){"use strict";t(76),t(182);var n=t(7),s=t.n(n),c=t(172),l=t(0),o=t.n(l),m=t(4),u=t.n(m),i=t(183),r=t.n(i),p=t(168),N=t(174),M=t(175),g=t.n(M),E=t(171),L=t.n(E),k=(t(185),t(186),t(169)),y=t.n(k),d=function(e){function a(){return e.apply(this,arguments)||this}return s()(a,e),a.prototype.render=function(){var e=this.props,a=e.tag,t=e.id;return o.a.createElement(a,{className:y()(L.a.heading,L.a[a]),id:t},o.a.createElement("span",null,this.props.children))},a}(o.a.Component);function j(e){return o.a.createElement("a",Object.assign({},e,{className:y()(L.a.anchor)}))}var I=t(187),S=t.n(I),C=t(176),h=t.n(C),D=t(177),T=t.n(D),A=t(178),x=t.n(A),w=t(179),b=t.n(w),z=function(e){var a=e.siteTitle,t=e.className,n=e.onToggleMenu;return o.a.createElement("header",{className:y()(t,b.a.header)},o.a.createElement(p.Link,{to:"/",style:{color:"white",textDecoration:"none"},alt:a,className:b.a.logo},o.a.createElement("img",{src:h.a,width:"auto"})),o.a.createElement("div",null,o.a.createElement("a",{href:"https://github.com/davidkpiano/xstate",alt:"XState on GitHub",className:b.a.github},o.a.createElement("img",{src:T.a,width:"auto"})),o.a.createElement("img",{src:x.a,width:"auto",className:b.a.menu,onClick:n})))},Y=(t(188),t(77),t(50),t(189),t(49),t(180)),f=t.n(Y);console.log(f.a);var v={guides:{title:"Guides",pages:{start:{title:"Getting Started"},installation:{title:"Installation"},states:{title:"States"},transitions:{title:"Transitions"},hierarchical:{title:"Hierarchical States"},parallel:{title:"Parallel States"},actions:{title:"Actions"},guards:{title:"Guards"},context:{title:"Context"},activities:{title:"Activities"},communication:{title:"Communication"},delays:{title:"Delays"},final:{title:"Final States"},history:{title:"History State Nodes"},ids:{title:"Identifying States"},internal:{title:"Internal Transitions"},interpretation:{title:"Interpreting Machines"},typescript:{title:"TypeScript Usage"}}},recipes:{title:"Recipes",pages:{react:{title:"React"},rxjs:{title:"RxJS"}}},api:{title:"API Docs",pages:{api:{title:"TypeScript",link:"/docs/api"},v3:{title:"Version 3.x",link:"/docs-v3"}}}},O=function(e){function a(){return e.apply(this,arguments)||this}s()(a,e);var t=a.prototype;return t.renderPages=function(e,a){return o.a.createElement("ul",{className:f.a.items},Object.keys(e).map(function(t){var n=e[t],s=e[t].link||"docs/"+a+"/"+t;return o.a.createElement("li",{className:f.a.item},o.a.createElement(p.Link,{to:s,className:f.a.link},n.title))}))},t.render=function(){var e=this;this.props.visible;return o.a.createElement("nav",{className:f.a.nav},o.a.createElement("ul",{className:f.a.items},Object.keys(v).map(function(a){var t=v[a],n=t.pages,s=t.title,c=t.link,l=void 0===c?"docs/"+a:c;return o.a.createElement("li",{className:y()(f.a.item,f.a.topLevel)},o.a.createElement(p.Link,{to:l,className:f.a.link},s),n&&e.renderPages(n,a))})))},a}(o.a.Component),Q=function(e){function a(){for(var a,t=arguments.length,n=new Array(t),s=0;s<t;s++)n[s]=arguments[s];return(a=e.call.apply(e,[this].concat(n))||this).state={menuToggled:!1},a}s()(a,e);var t=a.prototype;return t.componentDidMount=function(){S.a.initHighlighting()},t.toggleMenu=function(){this.setState({menuToggled:!this.state.menuToggled})},t.render=function(){var e=this,a=this.props.children;return o.a.createElement(p.StaticQuery,{query:"1044757290",render:function(t){return o.a.createElement("main",{className:g.a.layout},o.a.createElement(r.a,{title:t.site.siteMetadata.title,meta:[{name:"description",content:"XState is a library for creating state machines and statecharts in JavaScript."},{name:"keywords",content:"sample, something"}]},o.a.createElement("html",{lang:"en"}),o.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Roboto:300,700|Source+Code+Pro",rel:"stylesheet"})),o.a.createElement(z,{className:g.a.header,siteTitle:t.site.siteMetadata.title,onToggleMenu:e.toggleMenu.bind(e)}),o.a.createElement("div",{className:g.a.sidebar,"data-visible":e.state.menuToggled||void 0},o.a.createElement(O,null)),o.a.createElement(N.MDXProvider,{components:{h1:function(e){return o.a.createElement(d,Object.assign({tag:"h1"},e))},h2:function(e){return o.a.createElement(d,Object.assign({tag:"h2"},e))},h3:function(e){return o.a.createElement(d,Object.assign({tag:"h3"},e))},a:function(e){return o.a.createElement(j,e)},inlineCode:function(e){return o.a.createElement("code",{className:L.a.code},e.children)}}},o.a.createElement("main",{className:g.a.content},a)))},data:c})},a}(o.a.Component);Q.propTypes={children:u.a.node.isRequired};a.a=Q}}]);
//# sourceMappingURL=component---src-pages-api-utils-md-eafbdb168a28a8d077c0.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{139:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",function(){return r});var n=a(184),o=a.n(n),s=a(0),i=a.n(s),c=a(174),m=a(181);t.default=function(e){var t=e.components,a=o()(e,["components"]);return i.a.createElement(c.MDXTag,{name:"wrapper",Layout:m.a,layoutProps:a,components:t},i.a.createElement(c.MDXTag,{name:"h1",components:t,props:{id:"actions"}},i.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"h1",props:{href:"#actions","aria-hidden":!0,class:"anchor"}}),"Actions"),i.a.createElement(c.MDXTag,{name:"p",components:t},"Actions in XState represent the side-effects that transitioning from/to a state can produce. These actions are never executed in XState; rather, they are provided to you in the ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"state.actions")," property of the ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"State")," instance, returned from ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"machine.transition(...)"),"."),i.a.createElement(c.MDXTag,{name:"p",components:t},"An ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"Action")," can be a:"),i.a.createElement(c.MDXTag,{name:"ul",components:t},i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"string"),", e.g., ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"'fetchData'")),i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"p",components:t,parentName:"li"},i.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"ActionObject"),", which is an ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"object")," with:"),i.a.createElement(c.MDXTag,{name:"ul",components:t,parentName:"li"},i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"an ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"action.type")," property whose ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"string")," value identifies the action"),i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"any other arbitrary properties relevant to the ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"action"),"."))),i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"p",components:t,parentName:"li"},i.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"function"),", a named function with two arguments (since 3.3):"),i.a.createElement(c.MDXTag,{name:"ul",components:t,parentName:"li"},i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"ctx")," - the context (i.e., the ",i.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"li",props:{href:"/xstate/guides/context"}},"extended state"),")"),i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},i.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"event")," - the ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"EventObject")," associated with the action")))),i.a.createElement(c.MDXTag,{name:"h1",components:t,props:{id:"state-node-action-properties"}},i.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"h1",props:{href:"#state-node-action-properties","aria-hidden":!0,class:"anchor"}}),"State Node Action Properties"),i.a.createElement(c.MDXTag,{name:"h2",components:t,props:{id:"statenodeonentry"}},i.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"h2",props:{href:"#statenodeonentry","aria-hidden":!0,class:"anchor"}}),i.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"h2"},"stateNode.onEntry")),i.a.createElement(c.MDXTag,{name:"p",components:t},"(",i.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"Action | Action[]"),") The action(s) to be executed upon entering the state."),i.a.createElement(c.MDXTag,{name:"p",components:t},i.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"p"},"Usage:")," A state's ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"onEntry")," actions will be executed in the following scenarios:"),i.a.createElement(c.MDXTag,{name:"ul",components:t},i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"When the state is a leaf state (i.e., no child states) and is entered from a different state"),i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"When the state is a parent state and the previous state comes from a different same-level parent"),i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"When the state explicitly transitions to itself"),i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"When the state is an initial state or parent of an initial state, from ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"machine.initialState"),".")),i.a.createElement(c.MDXTag,{name:"h2",components:t,props:{id:"statenodeonexit"}},i.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"h2",props:{href:"#statenodeonexit","aria-hidden":!0,class:"anchor"}}),i.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"h2"},"stateNode.onExit")),i.a.createElement(c.MDXTag,{name:"p",components:t},"(",i.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"Action | Action[]"),") The action(s) to be executed upon exiting the state."),i.a.createElement(c.MDXTag,{name:"p",components:t},i.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"p"},"Usage:")," A state's ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"onExit")," actions will be executed in the following scenarios:"),i.a.createElement(c.MDXTag,{name:"ul",components:t},i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"When the state is a leaf state and is exited to go to a different state"),i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"When the state is a parent state and the next state goes to a different same-level parent"),i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"When the state explicitly transitions to itself")),i.a.createElement(c.MDXTag,{name:"p",components:t},"All ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"onExit")," actions will always occur first, before any ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"onEntry")," or transition actions."),i.a.createElement(c.MDXTag,{name:"h2",components:t,props:{id:"transitionactions"}},i.a.createElement(c.MDXTag,{name:"a",components:t,parentName:"h2",props:{href:"#transitionactions","aria-hidden":!0,class:"anchor"}}),i.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"h2"},"transition.actions")),i.a.createElement(c.MDXTag,{name:"p",components:t},"(",i.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"Action[]"),") The action(s) to be executed on the determined transition."),i.a.createElement(c.MDXTag,{name:"p",components:t},i.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"p"},"Usage:")," These actions will always occur before ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"onEntry")," actions and after ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"onExit")," actions."),i.a.createElement("div",{className:"gatsby-highlight","data-language":"js"},i.a.createElement("pre",{className:"language-js"},i.a.createElement("code",{className:"language-js"},i.a.createElement("span",{className:"token comment"},"// example of a named function action"),"\n",i.a.createElement("span",{className:"token keyword"},"function")," ",i.a.createElement("span",{className:"token function"},"showLoader"),i.a.createElement("span",{className:"token punctuation"},"("),"ctx",i.a.createElement("span",{className:"token punctuation"},",")," event",i.a.createElement("span",{className:"token punctuation"},")")," ",i.a.createElement("span",{className:"token punctuation"},"{"),"\n","  ",i.a.createElement("span",{className:"token comment"},"// ..."),"\n",i.a.createElement("span",{className:"token punctuation"},"}"),"\n","\n",i.a.createElement("span",{className:"token keyword"},"const")," fetchMachine ",i.a.createElement("span",{className:"token operator"},"=")," ",i.a.createElement("span",{className:"token function"},"Machine"),i.a.createElement("span",{className:"token punctuation"},"("),i.a.createElement("span",{className:"token punctuation"},"{"),"\n","  ","id",i.a.createElement("span",{className:"token punctuation"},":")," ",i.a.createElement("span",{className:"token string"},"'fetch'"),i.a.createElement("span",{className:"token punctuation"},","),"\n","  ","initial",i.a.createElement("span",{className:"token punctuation"},":")," ",i.a.createElement("span",{className:"token string"},"'idle'"),i.a.createElement("span",{className:"token punctuation"},","),"\n","  ","states",i.a.createElement("span",{className:"token punctuation"},":")," ",i.a.createElement("span",{className:"token punctuation"},"{"),"\n","    ","idle",i.a.createElement("span",{className:"token punctuation"},":")," ",i.a.createElement("span",{className:"token punctuation"},"{"),"\n","      ","on",i.a.createElement("span",{className:"token punctuation"},":")," ",i.a.createElement("span",{className:"token punctuation"},"{"),"\n","        ",i.a.createElement("span",{className:"token constant"},"FETCH"),i.a.createElement("span",{className:"token punctuation"},":")," ",i.a.createElement("span",{className:"token punctuation"},"{"),"\n","          ","target",i.a.createElement("span",{className:"token punctuation"},":")," ",i.a.createElement("span",{className:"token string"},"'pending'"),i.a.createElement("span",{className:"token punctuation"},",")," ",i.a.createElement("span",{className:"token comment"},"// since 4.0"),"\n","          ",i.a.createElement("span",{className:"token comment"},"// transition actions"),"\n","          ","actions",i.a.createElement("span",{className:"token punctuation"},":")," ",i.a.createElement("span",{className:"token punctuation"},"["),i.a.createElement("span",{className:"token string"},"'warmCache'"),i.a.createElement("span",{className:"token punctuation"},",")," showLoader",i.a.createElement("span",{className:"token punctuation"},"]"),"\n","        ",i.a.createElement("span",{className:"token punctuation"},"}"),"\n","      ",i.a.createElement("span",{className:"token punctuation"},"}"),i.a.createElement("span",{className:"token punctuation"},","),"\n","      ",i.a.createElement("span",{className:"token comment"},"// onExit actions"),"\n","      ","onExit",i.a.createElement("span",{className:"token punctuation"},":")," ",i.a.createElement("span",{className:"token punctuation"},"["),i.a.createElement("span",{className:"token string"},"'preloadViews'"),i.a.createElement("span",{className:"token punctuation"},"]"),"\n","    ",i.a.createElement("span",{className:"token punctuation"},"}"),i.a.createElement("span",{className:"token punctuation"},","),"\n","    ","pending",i.a.createElement("span",{className:"token punctuation"},":")," ",i.a.createElement("span",{className:"token punctuation"},"{"),"\n","      ",i.a.createElement("span",{className:"token comment"},"// onEntry actions"),"\n","      ","onEntry",i.a.createElement("span",{className:"token punctuation"},":")," ",i.a.createElement("span",{className:"token punctuation"},"["),i.a.createElement("span",{className:"token string"},"'fetchData'"),i.a.createElement("span",{className:"token punctuation"},"]"),"\n","    ",i.a.createElement("span",{className:"token punctuation"},"}"),"\n","  ",i.a.createElement("span",{className:"token punctuation"},"}"),"\n",i.a.createElement("span",{className:"token punctuation"},"}"),i.a.createElement("span",{className:"token punctuation"},")"),i.a.createElement("span",{className:"token punctuation"},";"),"\n","\n","console",i.a.createElement("span",{className:"token punctuation"},"."),i.a.createElement("span",{className:"token function"},"log"),i.a.createElement("span",{className:"token punctuation"},"("),"fetchMachine",i.a.createElement("span",{className:"token punctuation"},"."),i.a.createElement("span",{className:"token function"},"transition"),i.a.createElement("span",{className:"token punctuation"},"("),"fetchMachine",i.a.createElement("span",{className:"token punctuation"},"."),"initialState",i.a.createElement("span",{className:"token punctuation"},",")," ",i.a.createElement("span",{className:"token string"},"'FETCH'"),i.a.createElement("span",{className:"token punctuation"},")"),i.a.createElement("span",{className:"token punctuation"},")"),i.a.createElement("span",{className:"token punctuation"},";"),"\n",i.a.createElement("span",{className:"token comment"},"// => State ","{"),"\n",i.a.createElement("span",{className:"token comment"},"//","   ","value: 'pending',"),"\n",i.a.createElement("span",{className:"token comment"},"//","   ","history: new State('idle'),"),"\n",i.a.createElement("span",{className:"token comment"},"//","   ","actions: ["),"\n",i.a.createElement("span",{className:"token comment"},"//","     ","'preloadViews', // onExit action for 'idle' state"),"\n",i.a.createElement("span",{className:"token comment"},"//","     ","'warmCache', // transition action for 'idle' -> 'pending' on 'FETCH'"),"\n",i.a.createElement("span",{className:"token comment"},"//","     ","[Function: showLoader], // transition action for 'idle' -> 'pending' on 'FETCH'"),"\n",i.a.createElement("span",{className:"token comment"},"//","     ","'fetchData' // onEntry action for 'pending' state"),"\n",i.a.createElement("span",{className:"token comment"},"//","   ","]"),"\n",i.a.createElement("span",{className:"token comment"},"// ","}")))),i.a.createElement(c.MDXTag,{name:"p",components:t},i.a.createElement(c.MDXTag,{name:"strong",components:t,parentName:"p"},"Notes:")),i.a.createElement(c.MDXTag,{name:"ul",components:t},i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"Prefer ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"actions")," defined on transitions. Avoid excessive usage of ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"onEntry")," or ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"onExit")," actions."),i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"As a rule of thumb, if you are absolutely sure that every possible transition to or from a state will exhibit the same actions, only then should you use ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"onEntry")," or ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"onExit")," actions, respectively."),i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"Prefer action objects (e.g., ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"{ type: 'SOME_EVENT' }"),") over string events."),i.a.createElement(c.MDXTag,{name:"li",components:t,parentName:"ul"},"Avoid unnamed function actions, such as ",i.a.createElement(c.MDXTag,{name:"inlineCode",components:t,parentName:"li"},"() => { ... }"),". This makes visualization and debugging less useful.")))};var r={}},168:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return g}),a.d(t,"StaticQueryContext",function(){return p}),a.d(t,"StaticQuery",function(){return M});var n=a(0),o=a.n(n),s=a(4),i=a.n(s),c=a(167),m=a.n(c);a.d(t,"Link",function(){return m.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var r=a(170),l=a.n(r);a.d(t,"PageRenderer",function(){return l.a});var u=a(34);a.d(t,"parsePath",function(){return u.a});var p=o.a.createContext({}),M=function(e){return o.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):o.a.createElement("div",null,"Loading (StaticQuery)")})};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}M.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},170:function(e,t,a){var n;e.exports=(n=a(173))&&n.default||n},171:function(e,t,a){e.exports={heading:"typography-module--heading--1nwnC",h1:"typography-module--h1--2Esa2",h2:"typography-module--h2--3ie0v",code:"typography-module--code--240F2",anchor:"typography-module--anchor--1uJIO"}},172:function(e){e.exports={data:{site:{siteMetadata:{title:"XState Documentation"}}}}},173:function(e,t,a){"use strict";a.r(t);var n=a(10),o=a.n(n),s=a(0),i=a.n(s),c=a(4),m=a.n(c),r=a(51),l=a(2),u=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(r.a,o()({location:t,pageResources:a},a.json))};u.propTypes={location:m.a.shape({pathname:m.a.string.isRequired}).isRequired},t.default=u},175:function(e,t,a){e.exports={layout:"layout-module--layout--WT_lX",header:"layout-module--header--7X126",sidebar:"layout-module--sidebar--3qq0Q",content:"layout-module--content--2CPz1"}},176:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAyNzkuOCA5OC41IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNzkuOCA5OC41OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPGcgaWQ9IkxheWVyXzYiPgoJCTxwYXRoIGQ9Ik01NS44LDEwLjRMNTUuOCwxMC40aDE5LjVMNTUuNiw0NC42bDAsMEM0OS42LDMzLjksNDkuNywyMC45LDU1LjgsMTAuNHoiIGZpbGw9InZhcigtLWZpbGwsIGJsYWNrKSIvPgoJCTxwb2x5Z29uIHBvaW50cz0iNzUuNCw4OC4xIDMwLjUsMTAuNCAxMSwxMC40IDMzLjQsNDkuMyAxMSw4OC4xIDMwLjUsODguMSA0My4yLDY2LjIgNTUuOCw4OC4xIiBmaWxsPSJ2YXIoLS1maWxsLCBibGFjaykiLz4KCTwvZz4KCTxnIGNsYXNzPSJzdDAiPgoJCTxwYXRoIGQ9Ik04OS4xLDU5LjhjMy4yLDIuNyw2LjksNCwxMS4zLDQuMWM1LjItMC4xLDcuOC0yLDcuOS01LjdjMC0zLjEtMS43LTQuOS01LjItNS41Yy0xLjYtMC4yLTMuNC0wLjUtNS4zLTAuOAoJCQljLTMuNC0wLjYtNi0xLjktNy44LTMuOWMtMS44LTIuMS0yLjgtNC42LTIuOC03LjZjMC0zLjYsMS4yLTYuNSwzLjUtOC43YzIuMi0yLjIsNS40LTMuMyw5LjUtMy4zYzQuOSwwLjEsOS4yLDEuNSwxMi45LDQuMgoJCQlsLTMuNCw1LjFjLTMtMi02LjMtMy4xLTkuOC0zLjJjLTEuOSwwLTMuNCwwLjUtNC42LDEuNGMtMS4zLDEtMiwyLjUtMiw0LjRjMCwxLjIsMC40LDIuMywxLjMsMy4yYzAuOSwxLDIuMywxLjcsNC4zLDIKCQkJYzEuMSwwLjIsMi42LDAuNCw0LjUsMC42YzMuNywwLjUsNi41LDEuOSw4LjMsNC4xYzEuOCwyLjIsMi42LDQuNywyLjYsNy43QzExNCw2NiwxMDkuNCw2OS45LDEwMC4zLDcwYy01LjksMC0xMC45LTEuOS0xNS4yLTUuNgoJCQlMODkuMSw1OS44eiIgZmlsbD0idmFyKC0tZmlsbCwgYmxhY2spIi8+CgkJPHBhdGggZD0iTTEzNS41LDM0LjJoLTEwLjl2LTUuNWgyNy44djUuNWgtMTAuOXYzNS41aC02VjM0LjJ6IiBmaWxsPSJ2YXIoLS1maWxsLCBibGFjaykiLz4KCQk8cGF0aCBkPSJNMTgwLjksNjAuNWgtMTUuMWwtMy4xLDkuMmgtNi40bDE0LjQtNDFoNWwxNC40LDQxSDE4NEwxODAuOSw2MC41eiBNMTc5LjIsNTVsLTUuNy0xNy45aC0wLjFMMTY3LjYsNTVIMTc5LjJ6IiBmaWxsPSJ2YXIoLS1maWxsLCBibGFjaykiLz4KCQk8cGF0aCBkPSJNMjA1LjQsMzQuMmgtMTAuOXYtNS41aDI3Ljh2NS41aC0xMC45djM1LjVoLTZWMzQuMnoiIGZpbGw9InZhcigtLWZpbGwsIGJsYWNrKSIvPgoJCTxwYXRoIGQ9Ik0yMzQuMiwyOC43aDI1LjR2NS44aC0xOS40djExLjdoMTYuNXY1LjVoLTE2LjV2MTIuMWgxOS40djUuOGgtMjUuNFYyOC43eiIgZmlsbD0idmFyKC0tZmlsbCwgYmxhY2spIi8+Cgk8L2c+CjwvZz4KPC9zdmc+Cg=="},177:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0OTYgNTEyIj48cGF0aCBkPSJNMTY1LjkgMzk3LjRjMCAyLTIuMyAzLjYtNS4yIDMuNi0zLjMuMy01LjYtMS4zLTUuNi0zLjYgMC0yIDIuMy0zLjYgNS4yLTMuNiAzLS4zIDUuNiAxLjMgNS42IDMuNnptLTMxLjEtNC41Yy0uNyAyIDEuMyA0LjMgNC4zIDQuOSAyLjYgMSA1LjYgMCA2LjItMnMtMS4zLTQuMy00LjMtNS4yYy0yLjYtLjctNS41LjMtNi4yIDIuM3ptNDQuMi0xLjdjLTIuOS43LTQuOSAyLjYtNC42IDQuOS4zIDIgMi45IDMuMyA1LjkgMi42IDIuOS0uNyA0LjktMi42IDQuNi00LjYtLjMtMS45LTMtMy4yLTUuOS0yLjl6TTI0NC44IDhDMTA2LjEgOCAwIDExMy4zIDAgMjUyYzAgMTEwLjkgNjkuOCAyMDUuOCAxNjkuNSAyMzkuMiAxMi44IDIuMyAxNy4zLTUuNiAxNy4zLTEyLjEgMC02LjItLjMtNDAuNC0uMy02MS40IDAgMC03MCAxNS04NC43LTI5LjggMCAwLTExLjQtMjkuMS0yNy44LTM2LjYgMCAwLTIyLjktMTUuNyAxLjYtMTUuNCAwIDAgMjQuOSAyIDM4LjYgMjUuOCAyMS45IDM4LjYgNTguNiAyNy41IDcyLjkgMjAuOSAyLjMtMTYgOC44LTI3LjEgMTYtMzMuNy01NS45LTYuMi0xMTIuMy0xNC4zLTExMi4zLTExMC41IDAtMjcuNSA3LjYtNDEuMyAyMy42LTU4LjktMi42LTYuNS0xMS4xLTMzLjMgMi42LTY3LjkgMjAuOS02LjUgNjkgMjcgNjkgMjcgMjAtNS42IDQxLjUtOC41IDYyLjgtOC41czQyLjggMi45IDYyLjggOC41YzAgMCA0OC4xLTMzLjYgNjktMjcgMTMuNyAzNC43IDUuMiA2MS40IDIuNiA2Ny45IDE2IDE3LjcgMjUuOCAzMS41IDI1LjggNTguOSAwIDk2LjUtNTguOSAxMDQuMi0xMTQuOCAxMTAuNSA5LjIgNy45IDE3IDIyLjkgMTcgNDYuNCAwIDMzLjctLjMgNzUuNC0uMyA4My42IDAgNi41IDQuNiAxNC40IDE3LjMgMTIuMUM0MjguMiA0NTcuOCA0OTYgMzYyLjkgNDk2IDI1MiA0OTYgMTEzLjMgMzgzLjUgOCAyNDQuOCA4ek05Ny4yIDM1Mi45Yy0xLjMgMS0xIDMuMy43IDUuMiAxLjYgMS42IDMuOSAyLjMgNS4yIDEgMS4zLTEgMS0zLjMtLjctNS4yLTEuNi0xLjYtMy45LTIuMy01LjItMXptLTEwLjgtOC4xYy0uNyAxLjMuMyAyLjkgMi4zIDMuOSAxLjYgMSAzLjYuNyA0LjMtLjcuNy0xLjMtLjMtMi45LTIuMy0zLjktMi0uNi0zLjYtLjMtNC4zLjd6bTMyLjQgMzUuNmMtMS42IDEuMy0xIDQuMyAxLjMgNi4yIDIuMyAyLjMgNS4yIDIuNiA2LjUgMSAxLjMtMS4zLjctNC4zLTEuMy02LjItMi4yLTIuMy01LjItMi42LTYuNS0xem0tMTEuNC0xNC43Yy0xLjYgMS0xLjYgMy42IDAgNS45IDEuNiAyLjMgNC4zIDMuMyA1LjYgMi4zIDEuNi0xLjMgMS42LTMuOSAwLTYuMi0xLjQtMi4zLTQtMy4zLTUuNi0yeiIvPjwvc3ZnPgo8IS0tCkZvbnQgQXdlc29tZSBQcm8gNS40LjIgYnkgQGZvbnRhd2Vzb21lIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20KTGljZW5zZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tL2xpY2Vuc2UgKENvbW1lcmNpYWwgTGljZW5zZSkKLS0+Cg=="},178:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48cGF0aCBkPSJNNDQyIDExNEg2YTYgNiAwIDAgMS02LTZWODRhNiA2IDAgMCAxIDYtNmg0MzZhNiA2IDAgMCAxIDYgNnYyNGE2IDYgMCAwIDEtNiA2em0wIDE2MEg2YTYgNiAwIDAgMS02LTZ2LTI0YTYgNiAwIDAgMSA2LTZoNDM2YTYgNiAwIDAgMSA2IDZ2MjRhNiA2IDAgMCAxLTYgNnptMCAxNjBINmE2IDYgMCAwIDEtNi02di0yNGE2IDYgMCAwIDEgNi02aDQzNmE2IDYgMCAwIDEgNiA2djI0YTYgNiAwIDAgMS02IDZ6Ii8+PC9zdmc+CjwhLS0KRm9udCBBd2Vzb21lIFBybyA1LjQuMiBieSBAZm9udGF3ZXNvbWUgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbQpMaWNlbnNlIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20vbGljZW5zZSAoQ29tbWVyY2lhbCBMaWNlbnNlKQotLT4K"},179:function(e,t,a){e.exports={logo:"header-module--logo--3gu8x",header:"header-module--header--2Q3RK",github:"header-module--github--2n2t6",menu:"header-module--menu--3bKjy"}},180:function(e,t,a){e.exports={nav:"sidebar-module--nav--dK6KB",items:"sidebar-module--items--3H_1t",item:"sidebar-module--item--3A0ef",topLevel:"sidebar-module--topLevel--3yzSB",link:"sidebar-module--link--2azLL"}},181:function(e,t,a){"use strict";a(76),a(182);var n=a(7),o=a.n(n),s=a(172),i=a(0),c=a.n(i),m=a(4),r=a.n(m),l=a(183),u=a.n(l),p=a(168),M=a(174),g=a(175),N=a.n(g),d=a(171),E=a.n(d),L=(a(185),a(186),a(169)),y=a.n(L),T=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){var e=this.props,t=e.tag,a=e.id;return c.a.createElement(t,{className:y()(E.a.heading,E.a[t]),id:a},c.a.createElement("span",null,this.props.children))},t}(c.a.Component);function D(e){return c.a.createElement("a",Object.assign({},e,{className:y()(E.a.anchor)}))}var j=a(187),h=a.n(j),C=a(176),I=a.n(C),k=a(177),A=a.n(k),S=a(178),x=a.n(S),w=a(179),f=a.n(w),X=function(e){var t=e.siteTitle,a=e.className,n=e.onToggleMenu;return c.a.createElement("header",{className:y()(a,f.a.header)},c.a.createElement(p.Link,{to:"/",style:{color:"white",textDecoration:"none"},alt:t,className:f.a.logo},c.a.createElement("img",{src:I.a,width:"auto"})),c.a.createElement("div",null,c.a.createElement("a",{href:"https://github.com/davidkpiano/xstate",alt:"XState on GitHub",className:f.a.github},c.a.createElement("img",{src:A.a,width:"auto"})),c.a.createElement("img",{src:x.a,width:"auto",className:f.a.menu,onClick:n})))},b=(a(188),a(77),a(50),a(189),a(49),a(180)),z=a.n(b);console.log(z.a);var Y={guides:{title:"Guides",pages:{start:{title:"Getting Started"},installation:{title:"Installation"},states:{title:"States"},transitions:{title:"Transitions"},hierarchical:{title:"Hierarchical States"},parallel:{title:"Parallel States"},actions:{title:"Actions"},guards:{title:"Guards"},context:{title:"Context"},activities:{title:"Activities"},communication:{title:"Communication"},delays:{title:"Delays"},final:{title:"Final States"},history:{title:"History State Nodes"},ids:{title:"Identifying States"},internal:{title:"Internal Transitions"},interpretation:{title:"Interpreting Machines"},typescript:{title:"TypeScript Usage"}}},recipes:{title:"Recipes",pages:{react:{title:"React"},rxjs:{title:"RxJS"}}},api:{title:"API Docs",pages:{api:{title:"TypeScript",link:"/docs/api"},v3:{title:"Version 3.x",link:"/docs-v3"}}}},v=function(e){function t(){return e.apply(this,arguments)||this}o()(t,e);var a=t.prototype;return a.renderPages=function(e,t){return c.a.createElement("ul",{className:z.a.items},Object.keys(e).map(function(a){var n=e[a],o=e[a].link||"docs/"+t+"/"+a;return c.a.createElement("li",{className:z.a.item},c.a.createElement(p.Link,{to:o,className:z.a.link},n.title))}))},a.render=function(){var e=this;this.props.visible;return c.a.createElement("nav",{className:z.a.nav},c.a.createElement("ul",{className:z.a.items},Object.keys(Y).map(function(t){var a=Y[t],n=a.pages,o=a.title,s=a.link,i=void 0===s?"docs/"+t:s;return c.a.createElement("li",{className:y()(z.a.item,z.a.topLevel)},c.a.createElement(p.Link,{to:i,className:z.a.link},o),n&&e.renderPages(n,t))})))},t}(c.a.Component),O=function(e){function t(){for(var t,a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(t=e.call.apply(e,[this].concat(n))||this).state={menuToggled:!1},t}o()(t,e);var a=t.prototype;return a.componentDidMount=function(){h.a.initHighlighting()},a.toggleMenu=function(){this.setState({menuToggled:!this.state.menuToggled})},a.render=function(){var e=this,t=this.props.children;return c.a.createElement(p.StaticQuery,{query:"1044757290",render:function(a){return c.a.createElement("main",{className:N.a.layout},c.a.createElement(u.a,{title:a.site.siteMetadata.title,meta:[{name:"description",content:"XState is a library for creating state machines and statecharts in JavaScript."},{name:"keywords",content:"sample, something"}]},c.a.createElement("html",{lang:"en"}),c.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Roboto:300,700|Source+Code+Pro",rel:"stylesheet"})),c.a.createElement(X,{className:N.a.header,siteTitle:a.site.siteMetadata.title,onToggleMenu:e.toggleMenu.bind(e)}),c.a.createElement("div",{className:N.a.sidebar,"data-visible":e.state.menuToggled||void 0},c.a.createElement(v,null)),c.a.createElement(M.MDXProvider,{components:{h1:function(e){return c.a.createElement(T,Object.assign({tag:"h1"},e))},h2:function(e){return c.a.createElement(T,Object.assign({tag:"h2"},e))},h3:function(e){return c.a.createElement(T,Object.assign({tag:"h3"},e))},a:function(e){return c.a.createElement(D,e)},inlineCode:function(e){return c.a.createElement("code",{className:E.a.code},e.children)}}},c.a.createElement("main",{className:N.a.content},t)))},data:s})},t}(c.a.Component);O.propTypes={children:r.a.node.isRequired};t.a=O}}]);
//# sourceMappingURL=component---src-pages-api-actions-md-66cc5a46154ef500520f.js.map
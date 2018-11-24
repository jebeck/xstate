(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{142:function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",function(){return r});var n=t(184),s=t.n(n),o=t(0),c=t.n(o),m=t(174),l=t(181);a.default=function(e){var a=e.components,t=s()(e,["components"]);return c.a.createElement(m.MDXTag,{name:"wrapper",Layout:l.a,layoutProps:t,components:a},c.a.createElement(m.MDXTag,{name:"h1",components:a,props:{id:"state"}},c.a.createElement(m.MDXTag,{name:"a",components:a,parentName:"h1",props:{href:"#state","aria-hidden":!0,class:"anchor"}}),"State"),c.a.createElement(m.MDXTag,{name:"p",components:a},"A state in XState represents the finite state of your application. It is immutable, and it is up to you to decide how you want to propagate these state values into your atomic application state."),c.a.createElement(m.MDXTag,{name:"h2",components:a,props:{id:"new-statevalue-history-actions"}},c.a.createElement(m.MDXTag,{name:"a",components:a,parentName:"h2",props:{href:"#new-statevalue-history-actions","aria-hidden":!0,class:"anchor"}}),c.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"h2"},"new State(value, history?, actions?)")),c.a.createElement(m.MDXTag,{name:"p",components:a},"Instantiates a new ",c.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"State")," instance. Typically, you will seldom need to create a new ",c.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"State")," instance, except possibly when testing."),c.a.createElement(m.MDXTag,{name:"p",components:a},c.a.createElement(m.MDXTag,{name:"strong",components:a,parentName:"p"},"Arguments:")),c.a.createElement(m.MDXTag,{name:"ul",components:a},c.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},c.a.createElement(m.MDXTag,{name:"p",components:a,parentName:"li"},c.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"value"),": ",c.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"StateValue")),c.a.createElement(m.MDXTag,{name:"ul",components:a,parentName:"li"},c.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},"e.g., ",c.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"'green'")," or ",c.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"{ red: 'walk' }")))),c.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},c.a.createElement(m.MDXTag,{name:"p",components:a,parentName:"li"},c.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"history?"),": ",c.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"State")," (default: ",c.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"undefined"),")"),c.a.createElement(m.MDXTag,{name:"ul",components:a,parentName:"li"},c.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},"the previous state, if it exists"))),c.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},c.a.createElement(m.MDXTag,{name:"p",components:a,parentName:"li"},c.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"actions?"),": ",c.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"Action[]")," (default: ",c.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"[]"),")"),c.a.createElement(m.MDXTag,{name:"ul",components:a,parentName:"li"},c.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},"the set of actions to be executed")))),c.a.createElement(m.MDXTag,{name:"p",components:a},c.a.createElement(m.MDXTag,{name:"strong",components:a,parentName:"p"},"Usage:")," See the ",c.a.createElement(m.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"examples/light.md"}},c.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"a"},"lightMachine"))," from the examples."),c.a.createElement("div",{className:"gatsby-highlight","data-language":"js"},c.a.createElement("pre",{className:"language-js"},c.a.createElement("code",{className:"language-js"},"console",c.a.createElement("span",{className:"token punctuation"},"."),c.a.createElement("span",{className:"token function"},"log"),c.a.createElement("span",{className:"token punctuation"},"("),"lightMachine",c.a.createElement("span",{className:"token punctuation"},"."),"initialState",c.a.createElement("span",{className:"token punctuation"},")"),c.a.createElement("span",{className:"token punctuation"},";")," ",c.a.createElement("span",{className:"token comment"},"// returns a State instance"),"\n",c.a.createElement("span",{className:"token comment"},"// => State ","{"),"\n",c.a.createElement("span",{className:"token comment"},"//","   ","value: 'green',"),"\n",c.a.createElement("span",{className:"token comment"},"//","   ","history: undefined,"),"\n",c.a.createElement("span",{className:"token comment"},"//","   ","actions: [], // any onEntry actions for 'green'"),"\n",c.a.createElement("span",{className:"token comment"},"// ","}"),"\n","\n","console",c.a.createElement("span",{className:"token punctuation"},"."),c.a.createElement("span",{className:"token function"},"log"),c.a.createElement("span",{className:"token punctuation"},"("),"lightMachine",c.a.createElement("span",{className:"token punctuation"},"."),c.a.createElement("span",{className:"token function"},"transition"),c.a.createElement("span",{className:"token punctuation"},"("),"lightMachine",c.a.createElement("span",{className:"token punctuation"},"."),"initialState",c.a.createElement("span",{className:"token punctuation"},",")," ",c.a.createElement("span",{className:"token string"},"'TIMER'"),c.a.createElement("span",{className:"token punctuation"},")"),c.a.createElement("span",{className:"token punctuation"},")"),c.a.createElement("span",{className:"token punctuation"},";"),"\n",c.a.createElement("span",{className:"token comment"},"// => State ","{"),"\n",c.a.createElement("span",{className:"token comment"},"//","   ","value: 'yellow',"),"\n",c.a.createElement("span",{className:"token comment"},"//","   ","history: new State('green'), // same as above"),"\n",c.a.createElement("span",{className:"token comment"},"//","   ","actions: [], // any onExit actions from 'green', onEntry actions for 'yellow', etc."),"\n",c.a.createElement("span",{className:"token comment"},"// ","}")))),c.a.createElement(m.MDXTag,{name:"h1",components:a,props:{id:"state-properties"}},c.a.createElement(m.MDXTag,{name:"a",components:a,parentName:"h1",props:{href:"#state-properties","aria-hidden":!0,class:"anchor"}}),"State properties"),c.a.createElement(m.MDXTag,{name:"h2",components:a,props:{id:"statevalue"}},c.a.createElement(m.MDXTag,{name:"a",components:a,parentName:"h2",props:{href:"#statevalue","aria-hidden":!0,class:"anchor"}}),c.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"h2"},"state.value")),c.a.createElement(m.MDXTag,{name:"p",components:a},"(",c.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"StateValue"),") The value (",c.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"string")," or ",c.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"object"),") representing the finite state."),c.a.createElement(m.MDXTag,{name:"p",components:a},c.a.createElement(m.MDXTag,{name:"strong",components:a,parentName:"p"},"Usage:")),c.a.createElement("div",{className:"gatsby-highlight","data-language":"js"},c.a.createElement("pre",{className:"language-js"},c.a.createElement("code",{className:"language-js"},c.a.createElement("span",{className:"token keyword"},"const")," nextState ",c.a.createElement("span",{className:"token operator"},"=")," lightMachine",c.a.createElement("span",{className:"token punctuation"},"."),c.a.createElement("span",{className:"token function"},"transition"),c.a.createElement("span",{className:"token punctuation"},"("),"lightMachine",c.a.createElement("span",{className:"token punctuation"},"."),"initialState",c.a.createElement("span",{className:"token punctuation"},",")," ",c.a.createElement("span",{className:"token string"},"'TIMER'"),c.a.createElement("span",{className:"token punctuation"},")"),c.a.createElement("span",{className:"token punctuation"},";"),"\n","console",c.a.createElement("span",{className:"token punctuation"},"."),c.a.createElement("span",{className:"token function"},"log"),c.a.createElement("span",{className:"token punctuation"},"("),"nextState",c.a.createElement("span",{className:"token punctuation"},"."),"value",c.a.createElement("span",{className:"token punctuation"},")"),c.a.createElement("span",{className:"token punctuation"},";"),"\n",c.a.createElement("span",{className:"token comment"},"// => 'green'"),"\n","\n","console",c.a.createElement("span",{className:"token punctuation"},"."),c.a.createElement("span",{className:"token function"},"log"),c.a.createElement("span",{className:"token punctuation"},"("),"parallelMachine",c.a.createElement("span",{className:"token punctuation"},"."),"initialState",c.a.createElement("span",{className:"token punctuation"},"."),"value",c.a.createElement("span",{className:"token punctuation"},")"),c.a.createElement("span",{className:"token punctuation"},";"),"\n",c.a.createElement("span",{className:"token comment"},"// => ","{"),"\n",c.a.createElement("span",{className:"token comment"},"//","   ","upload: 'idle',"),"\n",c.a.createElement("span",{className:"token comment"},"//","   ","download: 'idle'"),"\n",c.a.createElement("span",{className:"token comment"},"// ","}")))),c.a.createElement(m.MDXTag,{name:"h1",components:a,props:{id:"state-static-methods"}},c.a.createElement(m.MDXTag,{name:"a",components:a,parentName:"h1",props:{href:"#state-static-methods","aria-hidden":!0,class:"anchor"}}),"State static methods"),c.a.createElement(m.MDXTag,{name:"h2",components:a,props:{id:"statefromstatevalue"}},c.a.createElement(m.MDXTag,{name:"a",components:a,parentName:"h2",props:{href:"#statefromstatevalue","aria-hidden":!0,class:"anchor"}}),c.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"h2"},"State.from(stateValue)")),c.a.createElement(m.MDXTag,{name:"p",components:a},"Creates a new ",c.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"State")," from the provided ",c.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"stateValue"),"."),c.a.createElement(m.MDXTag,{name:"p",components:a},c.a.createElement(m.MDXTag,{name:"strong",components:a,parentName:"p"},"Arguments:")),c.a.createElement(m.MDXTag,{name:"ul",components:a},c.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},c.a.createElement(m.MDXTag,{name:"p",components:a,parentName:"li"},c.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"stateValue"),": ",c.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"StateValue | State")),c.a.createElement(m.MDXTag,{name:"ul",components:a,parentName:"li"},c.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},"e.g., ",c.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"'green'")," or ",c.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"'red.walk'")," or ",c.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"{ red: 'walk' }"))))),c.a.createElement(m.MDXTag,{name:"p",components:a},c.a.createElement(m.MDXTag,{name:"strong",components:a,parentName:"p"},"Returns:")," ",c.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"State")),c.a.createElement(m.MDXTag,{name:"p",components:a},c.a.createElement(m.MDXTag,{name:"strong",components:a,parentName:"p"},"Usage:")),c.a.createElement("div",{className:"gatsby-highlight","data-language":"js"},c.a.createElement("pre",{className:"language-js"},c.a.createElement("code",{className:"language-js"},c.a.createElement("span",{className:"token keyword"},"const")," greenState ",c.a.createElement("span",{className:"token operator"},"=")," State",c.a.createElement("span",{className:"token punctuation"},"."),c.a.createElement("span",{className:"token keyword"},"from"),c.a.createElement("span",{className:"token punctuation"},"("),c.a.createElement("span",{className:"token string"},"'green'"),c.a.createElement("span",{className:"token punctuation"},")"),c.a.createElement("span",{className:"token punctuation"},";"),"\n","console",c.a.createElement("span",{className:"token punctuation"},"."),c.a.createElement("span",{className:"token function"},"log"),c.a.createElement("span",{className:"token punctuation"},"("),"greenState",c.a.createElement("span",{className:"token punctuation"},")"),c.a.createElement("span",{className:"token punctuation"},";"),"\n",c.a.createElement("span",{className:"token comment"},"// => State ","{"),"\n",c.a.createElement("span",{className:"token comment"},"//","   ","value: 'green',"),"\n",c.a.createElement("span",{className:"token comment"},"//","   ","history: undefined,"),"\n",c.a.createElement("span",{className:"token comment"},"//","   ","actions: []"),"\n",c.a.createElement("span",{className:"token comment"},"// ","}")))),c.a.createElement(m.MDXTag,{name:"h2",components:a,props:{id:"stateinertstatevalue"}},c.a.createElement(m.MDXTag,{name:"a",components:a,parentName:"h2",props:{href:"#stateinertstatevalue","aria-hidden":!0,class:"anchor"}}),c.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"h2"},"State.inert(stateValue)")),c.a.createElement(m.MDXTag,{name:"p",components:a},"Creates a new ",c.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"State")," from the provided ",c.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"stateValue")," with no ",c.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"actions")," (i.e., inert)."),c.a.createElement(m.MDXTag,{name:"p",components:a},c.a.createElement(m.MDXTag,{name:"strong",components:a,parentName:"p"},"Arguments:")),c.a.createElement(m.MDXTag,{name:"ul",components:a},c.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},c.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"stateValue"),": ",c.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"StateValue | State"))),c.a.createElement(m.MDXTag,{name:"p",components:a},c.a.createElement(m.MDXTag,{name:"strong",components:a,parentName:"p"},"Returns:")," ",c.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"State")),c.a.createElement(m.MDXTag,{name:"p",components:a},c.a.createElement(m.MDXTag,{name:"strong",components:a,parentName:"p"},"Usage:")),c.a.createElement("div",{className:"gatsby-highlight","data-language":"js"},c.a.createElement("pre",{className:"language-js"},c.a.createElement("code",{className:"language-js"},c.a.createElement("span",{className:"token keyword"},"const")," stateWithActions ",c.a.createElement("span",{className:"token operator"},"=")," ",c.a.createElement("span",{className:"token keyword"},"new")," ",c.a.createElement("span",{className:"token class-name"},"State"),c.a.createElement("span",{className:"token punctuation"},"("),c.a.createElement("span",{className:"token string"},"'green'"),c.a.createElement("span",{className:"token punctuation"},",")," undefined",c.a.createElement("span",{className:"token punctuation"},",")," ",c.a.createElement("span",{className:"token punctuation"},"["),c.a.createElement("span",{className:"token string"},"'enterGreen'"),c.a.createElement("span",{className:"token punctuation"},"]"),c.a.createElement("span",{className:"token punctuation"},")"),c.a.createElement("span",{className:"token punctuation"},";"),"\n",c.a.createElement("span",{className:"token keyword"},"const")," stateWithoutActions ",c.a.createElement("span",{className:"token operator"},"=")," State",c.a.createElement("span",{className:"token punctuation"},"."),c.a.createElement("span",{className:"token function"},"inert"),c.a.createElement("span",{className:"token punctuation"},"("),"stateWithActions",c.a.createElement("span",{className:"token punctuation"},")"),c.a.createElement("span",{className:"token punctuation"},";"),"\n","console",c.a.createElement("span",{className:"token punctuation"},"."),c.a.createElement("span",{className:"token function"},"log"),c.a.createElement("span",{className:"token punctuation"},"("),"stateWithoutActions",c.a.createElement("span",{className:"token punctuation"},")"),c.a.createElement("span",{className:"token punctuation"},";"),"\n",c.a.createElement("span",{className:"token comment"},"// => State ","{"),"\n",c.a.createElement("span",{className:"token comment"},"//","   ","value: 'green',"),"\n",c.a.createElement("span",{className:"token comment"},"//","   ","history: undefined,"),"\n",c.a.createElement("span",{className:"token comment"},"//","   ","actions: []"),"\n",c.a.createElement("span",{className:"token comment"},"// ","}")))))};var r={}},168:function(e,a,t){"use strict";t.r(a),t.d(a,"graphql",function(){return M}),t.d(a,"StaticQueryContext",function(){return u}),t.d(a,"StaticQuery",function(){return g});var n=t(0),s=t.n(n),o=t(4),c=t.n(o),m=t(167),l=t.n(m);t.d(a,"Link",function(){return l.a}),t.d(a,"withPrefix",function(){return m.withPrefix}),t.d(a,"navigate",function(){return m.navigate}),t.d(a,"push",function(){return m.push}),t.d(a,"replace",function(){return m.replace}),t.d(a,"navigateTo",function(){return m.navigateTo});var r=t(170),i=t.n(r);t.d(a,"PageRenderer",function(){return i.a});var p=t(34);t.d(a,"parsePath",function(){return p.a});var u=s.a.createContext({}),g=function(e){return s.a.createElement(u.Consumer,null,function(a){return e.data||a[e.query]&&a[e.query].data?(e.render||e.children)(e.data?e.data.data:a[e.query].data):s.a.createElement("div",null,"Loading (StaticQuery)")})};function M(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}g.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},170:function(e,a,t){var n;e.exports=(n=t(173))&&n.default||n},171:function(e,a,t){e.exports={heading:"typography-module--heading--1nwnC",h1:"typography-module--h1--2Esa2",h2:"typography-module--h2--3ie0v",code:"typography-module--code--240F2",anchor:"typography-module--anchor--1uJIO"}},172:function(e){e.exports={data:{site:{siteMetadata:{title:"XState Documentation"}}}}},173:function(e,a,t){"use strict";t.r(a);var n=t(10),s=t.n(n),o=t(0),c=t.n(o),m=t(4),l=t.n(m),r=t(51),i=t(2),p=function(e){var a=e.location,t=i.default.getResourcesForPathnameSync(a.pathname);return c.a.createElement(r.a,s()({location:a,pageResources:t},t.json))};p.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},a.default=p},175:function(e,a,t){e.exports={layout:"layout-module--layout--WT_lX",header:"layout-module--header--7X126",sidebar:"layout-module--sidebar--3qq0Q",content:"layout-module--content--2CPz1"}},176:function(e,a){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjAuMSwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAyNzkuOCA5OC41IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyNzkuOCA5OC41OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxnPgoJPGcgaWQ9IkxheWVyXzYiPgoJCTxwYXRoIGQ9Ik01NS44LDEwLjRMNTUuOCwxMC40aDE5LjVMNTUuNiw0NC42bDAsMEM0OS42LDMzLjksNDkuNywyMC45LDU1LjgsMTAuNHoiIGZpbGw9InZhcigtLWZpbGwsIGJsYWNrKSIvPgoJCTxwb2x5Z29uIHBvaW50cz0iNzUuNCw4OC4xIDMwLjUsMTAuNCAxMSwxMC40IDMzLjQsNDkuMyAxMSw4OC4xIDMwLjUsODguMSA0My4yLDY2LjIgNTUuOCw4OC4xIiBmaWxsPSJ2YXIoLS1maWxsLCBibGFjaykiLz4KCTwvZz4KCTxnIGNsYXNzPSJzdDAiPgoJCTxwYXRoIGQ9Ik04OS4xLDU5LjhjMy4yLDIuNyw2LjksNCwxMS4zLDQuMWM1LjItMC4xLDcuOC0yLDcuOS01LjdjMC0zLjEtMS43LTQuOS01LjItNS41Yy0xLjYtMC4yLTMuNC0wLjUtNS4zLTAuOAoJCQljLTMuNC0wLjYtNi0xLjktNy44LTMuOWMtMS44LTIuMS0yLjgtNC42LTIuOC03LjZjMC0zLjYsMS4yLTYuNSwzLjUtOC43YzIuMi0yLjIsNS40LTMuMyw5LjUtMy4zYzQuOSwwLjEsOS4yLDEuNSwxMi45LDQuMgoJCQlsLTMuNCw1LjFjLTMtMi02LjMtMy4xLTkuOC0zLjJjLTEuOSwwLTMuNCwwLjUtNC42LDEuNGMtMS4zLDEtMiwyLjUtMiw0LjRjMCwxLjIsMC40LDIuMywxLjMsMy4yYzAuOSwxLDIuMywxLjcsNC4zLDIKCQkJYzEuMSwwLjIsMi42LDAuNCw0LjUsMC42YzMuNywwLjUsNi41LDEuOSw4LjMsNC4xYzEuOCwyLjIsMi42LDQuNywyLjYsNy43QzExNCw2NiwxMDkuNCw2OS45LDEwMC4zLDcwYy01LjksMC0xMC45LTEuOS0xNS4yLTUuNgoJCQlMODkuMSw1OS44eiIgZmlsbD0idmFyKC0tZmlsbCwgYmxhY2spIi8+CgkJPHBhdGggZD0iTTEzNS41LDM0LjJoLTEwLjl2LTUuNWgyNy44djUuNWgtMTAuOXYzNS41aC02VjM0LjJ6IiBmaWxsPSJ2YXIoLS1maWxsLCBibGFjaykiLz4KCQk8cGF0aCBkPSJNMTgwLjksNjAuNWgtMTUuMWwtMy4xLDkuMmgtNi40bDE0LjQtNDFoNWwxNC40LDQxSDE4NEwxODAuOSw2MC41eiBNMTc5LjIsNTVsLTUuNy0xNy45aC0wLjFMMTY3LjYsNTVIMTc5LjJ6IiBmaWxsPSJ2YXIoLS1maWxsLCBibGFjaykiLz4KCQk8cGF0aCBkPSJNMjA1LjQsMzQuMmgtMTAuOXYtNS41aDI3Ljh2NS41aC0xMC45djM1LjVoLTZWMzQuMnoiIGZpbGw9InZhcigtLWZpbGwsIGJsYWNrKSIvPgoJCTxwYXRoIGQ9Ik0yMzQuMiwyOC43aDI1LjR2NS44aC0xOS40djExLjdoMTYuNXY1LjVoLTE2LjV2MTIuMWgxOS40djUuOGgtMjUuNFYyOC43eiIgZmlsbD0idmFyKC0tZmlsbCwgYmxhY2spIi8+Cgk8L2c+CjwvZz4KPC9zdmc+Cg=="},177:function(e,a){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0OTYgNTEyIj48cGF0aCBkPSJNMTY1LjkgMzk3LjRjMCAyLTIuMyAzLjYtNS4yIDMuNi0zLjMuMy01LjYtMS4zLTUuNi0zLjYgMC0yIDIuMy0zLjYgNS4yLTMuNiAzLS4zIDUuNiAxLjMgNS42IDMuNnptLTMxLjEtNC41Yy0uNyAyIDEuMyA0LjMgNC4zIDQuOSAyLjYgMSA1LjYgMCA2LjItMnMtMS4zLTQuMy00LjMtNS4yYy0yLjYtLjctNS41LjMtNi4yIDIuM3ptNDQuMi0xLjdjLTIuOS43LTQuOSAyLjYtNC42IDQuOS4zIDIgMi45IDMuMyA1LjkgMi42IDIuOS0uNyA0LjktMi42IDQuNi00LjYtLjMtMS45LTMtMy4yLTUuOS0yLjl6TTI0NC44IDhDMTA2LjEgOCAwIDExMy4zIDAgMjUyYzAgMTEwLjkgNjkuOCAyMDUuOCAxNjkuNSAyMzkuMiAxMi44IDIuMyAxNy4zLTUuNiAxNy4zLTEyLjEgMC02LjItLjMtNDAuNC0uMy02MS40IDAgMC03MCAxNS04NC43LTI5LjggMCAwLTExLjQtMjkuMS0yNy44LTM2LjYgMCAwLTIyLjktMTUuNyAxLjYtMTUuNCAwIDAgMjQuOSAyIDM4LjYgMjUuOCAyMS45IDM4LjYgNTguNiAyNy41IDcyLjkgMjAuOSAyLjMtMTYgOC44LTI3LjEgMTYtMzMuNy01NS45LTYuMi0xMTIuMy0xNC4zLTExMi4zLTExMC41IDAtMjcuNSA3LjYtNDEuMyAyMy42LTU4LjktMi42LTYuNS0xMS4xLTMzLjMgMi42LTY3LjkgMjAuOS02LjUgNjkgMjcgNjkgMjcgMjAtNS42IDQxLjUtOC41IDYyLjgtOC41czQyLjggMi45IDYyLjggOC41YzAgMCA0OC4xLTMzLjYgNjktMjcgMTMuNyAzNC43IDUuMiA2MS40IDIuNiA2Ny45IDE2IDE3LjcgMjUuOCAzMS41IDI1LjggNTguOSAwIDk2LjUtNTguOSAxMDQuMi0xMTQuOCAxMTAuNSA5LjIgNy45IDE3IDIyLjkgMTcgNDYuNCAwIDMzLjctLjMgNzUuNC0uMyA4My42IDAgNi41IDQuNiAxNC40IDE3LjMgMTIuMUM0MjguMiA0NTcuOCA0OTYgMzYyLjkgNDk2IDI1MiA0OTYgMTEzLjMgMzgzLjUgOCAyNDQuOCA4ek05Ny4yIDM1Mi45Yy0xLjMgMS0xIDMuMy43IDUuMiAxLjYgMS42IDMuOSAyLjMgNS4yIDEgMS4zLTEgMS0zLjMtLjctNS4yLTEuNi0xLjYtMy45LTIuMy01LjItMXptLTEwLjgtOC4xYy0uNyAxLjMuMyAyLjkgMi4zIDMuOSAxLjYgMSAzLjYuNyA0LjMtLjcuNy0xLjMtLjMtMi45LTIuMy0zLjktMi0uNi0zLjYtLjMtNC4zLjd6bTMyLjQgMzUuNmMtMS42IDEuMy0xIDQuMyAxLjMgNi4yIDIuMyAyLjMgNS4yIDIuNiA2LjUgMSAxLjMtMS4zLjctNC4zLTEuMy02LjItMi4yLTIuMy01LjItMi42LTYuNS0xem0tMTEuNC0xNC43Yy0xLjYgMS0xLjYgMy42IDAgNS45IDEuNiAyLjMgNC4zIDMuMyA1LjYgMi4zIDEuNi0xLjMgMS42LTMuOSAwLTYuMi0xLjQtMi4zLTQtMy4zLTUuNi0yeiIvPjwvc3ZnPgo8IS0tCkZvbnQgQXdlc29tZSBQcm8gNS40LjIgYnkgQGZvbnRhd2Vzb21lIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20KTGljZW5zZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tL2xpY2Vuc2UgKENvbW1lcmNpYWwgTGljZW5zZSkKLS0+Cg=="},178:function(e,a){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NDggNTEyIj48cGF0aCBkPSJNNDQyIDExNEg2YTYgNiAwIDAgMS02LTZWODRhNiA2IDAgMCAxIDYtNmg0MzZhNiA2IDAgMCAxIDYgNnYyNGE2IDYgMCAwIDEtNiA2em0wIDE2MEg2YTYgNiAwIDAgMS02LTZ2LTI0YTYgNiAwIDAgMSA2LTZoNDM2YTYgNiAwIDAgMSA2IDZ2MjRhNiA2IDAgMCAxLTYgNnptMCAxNjBINmE2IDYgMCAwIDEtNi02di0yNGE2IDYgMCAwIDEgNi02aDQzNmE2IDYgMCAwIDEgNiA2djI0YTYgNiAwIDAgMS02IDZ6Ii8+PC9zdmc+CjwhLS0KRm9udCBBd2Vzb21lIFBybyA1LjQuMiBieSBAZm9udGF3ZXNvbWUgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbQpMaWNlbnNlIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20vbGljZW5zZSAoQ29tbWVyY2lhbCBMaWNlbnNlKQotLT4K"},179:function(e,a,t){e.exports={logo:"header-module--logo--3gu8x",header:"header-module--header--2Q3RK",github:"header-module--github--2n2t6",menu:"header-module--menu--3bKjy"}},180:function(e,a,t){e.exports={nav:"sidebar-module--nav--dK6KB",items:"sidebar-module--items--3H_1t",item:"sidebar-module--item--3A0ef",topLevel:"sidebar-module--topLevel--3yzSB",link:"sidebar-module--link--2azLL"}},181:function(e,a,t){"use strict";t(76),t(182);var n=t(7),s=t.n(n),o=t(172),c=t(0),m=t.n(c),l=t(4),r=t.n(l),i=t(183),p=t.n(i),u=t(168),g=t(174),M=t(175),N=t.n(M),E=t(171),d=t.n(E),L=(t(185),t(186),t(169)),y=t.n(L),T=function(e){function a(){return e.apply(this,arguments)||this}return s()(a,e),a.prototype.render=function(){var e=this.props,a=e.tag,t=e.id;return m.a.createElement(a,{className:y()(d.a.heading,d.a[a]),id:t},m.a.createElement("span",null,this.props.children))},a}(m.a.Component);function D(e){return m.a.createElement("a",Object.assign({},e,{className:y()(d.a.anchor)}))}var j=t(187),h=t.n(j),I=t(176),C=t.n(I),k=t(177),S=t.n(k),A=t(178),w=t.n(A),x=t(179),X=t.n(x),f=function(e){var a=e.siteTitle,t=e.className,n=e.onToggleMenu;return m.a.createElement("header",{className:y()(t,X.a.header)},m.a.createElement(u.Link,{to:"/",style:{color:"white",textDecoration:"none"},alt:a,className:X.a.logo},m.a.createElement("img",{src:C.a,width:"auto"})),m.a.createElement("div",null,m.a.createElement("a",{href:"https://github.com/davidkpiano/xstate",alt:"XState on GitHub",className:X.a.github},m.a.createElement("img",{src:S.a,width:"auto"})),m.a.createElement("img",{src:w.a,width:"auto",className:X.a.menu,onClick:n})))},z=(t(188),t(77),t(50),t(189),t(49),t(180)),Y=t.n(z);console.log(Y.a);var v={guides:{title:"Guides",pages:{start:{title:"Getting Started"},installation:{title:"Installation"},states:{title:"States"},transitions:{title:"Transitions"},hierarchical:{title:"Hierarchical States"},parallel:{title:"Parallel States"},actions:{title:"Actions"},guards:{title:"Guards"},context:{title:"Context"},activities:{title:"Activities"},communication:{title:"Communication"},delays:{title:"Delays"},final:{title:"Final States"},history:{title:"History State Nodes"},ids:{title:"Identifying States"},internal:{title:"Internal Transitions"},interpretation:{title:"Interpreting Machines"},typescript:{title:"TypeScript Usage"}}},recipes:{title:"Recipes",pages:{react:{title:"React"},rxjs:{title:"RxJS"}}},api:{title:"API Docs",pages:{api:{title:"TypeScript",link:"/docs/api"},v3:{title:"Version 3.x",link:"/docs-v3"}}}},b=function(e){function a(){return e.apply(this,arguments)||this}s()(a,e);var t=a.prototype;return t.renderPages=function(e,a){return m.a.createElement("ul",{className:Y.a.items},Object.keys(e).map(function(t){var n=e[t],s=e[t].link||"docs/"+a+"/"+t;return m.a.createElement("li",{className:Y.a.item},m.a.createElement(u.Link,{to:s,className:Y.a.link},n.title))}))},t.render=function(){var e=this;this.props.visible;return m.a.createElement("nav",{className:Y.a.nav},m.a.createElement("ul",{className:Y.a.items},Object.keys(v).map(function(a){var t=v[a],n=t.pages,s=t.title,o=t.link,c=void 0===o?"docs/"+a:o;return m.a.createElement("li",{className:y()(Y.a.item,Y.a.topLevel)},m.a.createElement(u.Link,{to:c,className:Y.a.link},s),n&&e.renderPages(n,a))})))},a}(m.a.Component),O=function(e){function a(){for(var a,t=arguments.length,n=new Array(t),s=0;s<t;s++)n[s]=arguments[s];return(a=e.call.apply(e,[this].concat(n))||this).state={menuToggled:!1},a}s()(a,e);var t=a.prototype;return t.componentDidMount=function(){h.a.initHighlighting()},t.toggleMenu=function(){this.setState({menuToggled:!this.state.menuToggled})},t.render=function(){var e=this,a=this.props.children;return m.a.createElement(u.StaticQuery,{query:"1044757290",render:function(t){return m.a.createElement("main",{className:N.a.layout},m.a.createElement(p.a,{title:t.site.siteMetadata.title,meta:[{name:"description",content:"XState is a library for creating state machines and statecharts in JavaScript."},{name:"keywords",content:"sample, something"}]},m.a.createElement("html",{lang:"en"}),m.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Roboto:300,700|Source+Code+Pro",rel:"stylesheet"})),m.a.createElement(f,{className:N.a.header,siteTitle:t.site.siteMetadata.title,onToggleMenu:e.toggleMenu.bind(e)}),m.a.createElement("div",{className:N.a.sidebar,"data-visible":e.state.menuToggled||void 0},m.a.createElement(b,null)),m.a.createElement(g.MDXProvider,{components:{h1:function(e){return m.a.createElement(T,Object.assign({tag:"h1"},e))},h2:function(e){return m.a.createElement(T,Object.assign({tag:"h2"},e))},h3:function(e){return m.a.createElement(T,Object.assign({tag:"h3"},e))},a:function(e){return m.a.createElement(D,e)},inlineCode:function(e){return m.a.createElement("code",{className:d.a.code},e.children)}}},m.a.createElement("main",{className:N.a.content},a)))},data:o})},a}(m.a.Component);O.propTypes={children:r.a.node.isRequired};a.a=O}}]);
//# sourceMappingURL=component---src-pages-api-state-md-daf6b219830ab03ee9b6.js.map
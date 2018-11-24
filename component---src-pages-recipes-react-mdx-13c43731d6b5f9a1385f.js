(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{164:function(e,a,n){"use strict";n.r(a),n.d(a,"_frontmatter",function(){return p});var t=n(167),s=n.n(t),c=n(0),o=n.n(c),m=n(168),l=n(169);a.default=function(e){var a=e.components,n=s()(e,["components"]);return o.a.createElement(m.MDXTag,{name:"wrapper",Layout:l.a,layoutProps:n,components:a},o.a.createElement(m.MDXTag,{name:"h1",components:a,props:{id:"usage-with-react"}},o.a.createElement(m.MDXTag,{name:"a",components:a,parentName:"h1",props:{href:"#usage-with-react","aria-hidden":!0,class:"anchor"}}),"Usage with React"),o.a.createElement(m.MDXTag,{name:"p",components:a},"The most straightforward way of using XState with React is through local component state. In general, given a machine definition:"),o.a.createElement(m.MDXTag,{name:"ul",components:a},o.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},"The ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"machine")," is ",o.a.createElement(m.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"../guides/interpretation"}},"interpreted")," and its ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"service")," instance is placed on the component instance."),o.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},"For local state, ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"this.state.current")," will hold the current machine state. You can use a property name other than ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"li"},".current"),"."),o.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},"When the component is mounted, the ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"service")," is started via ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"this.service.start()"),"."),o.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},"When the component will unmount, the ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"service")," is stopped via ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"this.service.stop()"),"."),o.a.createElement(m.MDXTag,{name:"li",components:a,parentName:"ul"},"Events are sent to the ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"service")," via ",o.a.createElement(m.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"this.service.send(event)"),".")),o.a.createElement(m.MDXTag,{name:"h2",components:a,props:{id:"class-components"}},o.a.createElement(m.MDXTag,{name:"a",components:a,parentName:"h2",props:{href:"#class-components","aria-hidden":!0,class:"anchor"}}),"Class components"),o.a.createElement("div",{className:"gatsby-highlight","data-language":"jsx"},o.a.createElement("pre",{className:"language-jsx"},o.a.createElement("code",{className:"language-jsx"},o.a.createElement("span",{className:"token keyword"},"import")," React ",o.a.createElement("span",{className:"token keyword"},"from")," ",o.a.createElement("span",{className:"token string"},"'react'"),o.a.createElement("span",{className:"token punctuation"},";"),"\n",o.a.createElement("span",{className:"token keyword"},"import")," ",o.a.createElement("span",{className:"token punctuation"},"{")," Machine ",o.a.createElement("span",{className:"token punctuation"},"}")," ",o.a.createElement("span",{className:"token keyword"},"from")," ",o.a.createElement("span",{className:"token string"},"'xstate'"),o.a.createElement("span",{className:"token punctuation"},";"),"\n",o.a.createElement("span",{className:"token keyword"},"import")," ",o.a.createElement("span",{className:"token punctuation"},"{")," interpret ",o.a.createElement("span",{className:"token punctuation"},"}")," ",o.a.createElement("span",{className:"token keyword"},"from")," ",o.a.createElement("span",{className:"token string"},"'xstate/lib/interpreter'"),o.a.createElement("span",{className:"token punctuation"},";"),"\n","\n",o.a.createElement("span",{className:"token keyword"},"const")," toggleMachine ",o.a.createElement("span",{className:"token operator"},"=")," ",o.a.createElement("span",{className:"token function"},"Machine"),o.a.createElement("span",{className:"token punctuation"},"("),o.a.createElement("span",{className:"token punctuation"},"{"),"\n","  ","id",o.a.createElement("span",{className:"token punctuation"},":")," ",o.a.createElement("span",{className:"token string"},"'toggle'"),o.a.createElement("span",{className:"token punctuation"},","),"\n","  ","initial",o.a.createElement("span",{className:"token punctuation"},":")," ",o.a.createElement("span",{className:"token string"},"'inactive'"),o.a.createElement("span",{className:"token punctuation"},","),"\n","  ","states",o.a.createElement("span",{className:"token punctuation"},":")," ",o.a.createElement("span",{className:"token punctuation"},"{"),"\n","    ","inactive",o.a.createElement("span",{className:"token punctuation"},":")," ",o.a.createElement("span",{className:"token punctuation"},"{"),"\n","      ","on",o.a.createElement("span",{className:"token punctuation"},":")," ",o.a.createElement("span",{className:"token punctuation"},"{")," ",o.a.createElement("span",{className:"token constant"},"TOGGLE"),o.a.createElement("span",{className:"token punctuation"},":")," ",o.a.createElement("span",{className:"token string"},"'active'")," ",o.a.createElement("span",{className:"token punctuation"},"}"),"\n","    ",o.a.createElement("span",{className:"token punctuation"},"}"),o.a.createElement("span",{className:"token punctuation"},","),"\n","    ","active",o.a.createElement("span",{className:"token punctuation"},":")," ",o.a.createElement("span",{className:"token punctuation"},"{"),"\n","      ","on",o.a.createElement("span",{className:"token punctuation"},":")," ",o.a.createElement("span",{className:"token punctuation"},"{")," ",o.a.createElement("span",{className:"token constant"},"TOGGLE"),o.a.createElement("span",{className:"token punctuation"},":")," ",o.a.createElement("span",{className:"token string"},"'inactive'")," ",o.a.createElement("span",{className:"token punctuation"},"}"),"\n","    ",o.a.createElement("span",{className:"token punctuation"},"}"),"\n","  ",o.a.createElement("span",{className:"token punctuation"},"}"),"\n",o.a.createElement("span",{className:"token punctuation"},"}"),o.a.createElement("span",{className:"token punctuation"},")"),o.a.createElement("span",{className:"token punctuation"},";"),"\n","\n",o.a.createElement("span",{className:"token keyword"},"class")," ",o.a.createElement("span",{className:"token class-name"},"Toggle")," ",o.a.createElement("span",{className:"token keyword"},"extends")," ",o.a.createElement("span",{className:"token class-name"},"React",o.a.createElement("span",{className:"token punctuation"},"."),"Component")," ",o.a.createElement("span",{className:"token punctuation"},"{"),"\n","  ","state ",o.a.createElement("span",{className:"token operator"},"=")," ",o.a.createElement("span",{className:"token punctuation"},"{"),"\n","    ","current",o.a.createElement("span",{className:"token punctuation"},":")," toggleMachine",o.a.createElement("span",{className:"token punctuation"},"."),"initialState","\n","  ",o.a.createElement("span",{className:"token punctuation"},"}"),o.a.createElement("span",{className:"token punctuation"},";"),"\n","\n","  ","service ",o.a.createElement("span",{className:"token operator"},"=")," ",o.a.createElement("span",{className:"token function"},"interpret"),o.a.createElement("span",{className:"token punctuation"},"("),"toggleMachine",o.a.createElement("span",{className:"token punctuation"},")"),"\n","    ",o.a.createElement("span",{className:"token punctuation"},"."),o.a.createElement("span",{className:"token function"},"onTransition"),o.a.createElement("span",{className:"token punctuation"},"("),"current ",o.a.createElement("span",{className:"token operator"},"=>")," ",o.a.createElement("span",{className:"token keyword"},"this"),o.a.createElement("span",{className:"token punctuation"},"."),o.a.createElement("span",{className:"token function"},"setState"),o.a.createElement("span",{className:"token punctuation"},"("),o.a.createElement("span",{className:"token punctuation"},"{")," current ",o.a.createElement("span",{className:"token punctuation"},"}"),o.a.createElement("span",{className:"token punctuation"},")"),o.a.createElement("span",{className:"token punctuation"},")"),o.a.createElement("span",{className:"token punctuation"},";"),"\n","\n","  ",o.a.createElement("span",{className:"token function"},"componentDidMount"),o.a.createElement("span",{className:"token punctuation"},"("),o.a.createElement("span",{className:"token punctuation"},")")," ",o.a.createElement("span",{className:"token punctuation"},"{"),"\n","    ",o.a.createElement("span",{className:"token keyword"},"this"),o.a.createElement("span",{className:"token punctuation"},"."),"service",o.a.createElement("span",{className:"token punctuation"},"."),o.a.createElement("span",{className:"token function"},"start"),o.a.createElement("span",{className:"token punctuation"},"("),o.a.createElement("span",{className:"token punctuation"},")"),o.a.createElement("span",{className:"token punctuation"},";"),"\n","  ",o.a.createElement("span",{className:"token punctuation"},"}"),"\n","\n","  ",o.a.createElement("span",{className:"token function"},"componentWillUnmount"),o.a.createElement("span",{className:"token punctuation"},"("),o.a.createElement("span",{className:"token punctuation"},")")," ",o.a.createElement("span",{className:"token punctuation"},"{"),"\n","    ",o.a.createElement("span",{className:"token keyword"},"this"),o.a.createElement("span",{className:"token punctuation"},"."),"service",o.a.createElement("span",{className:"token punctuation"},"."),o.a.createElement("span",{className:"token function"},"stop"),o.a.createElement("span",{className:"token punctuation"},"("),o.a.createElement("span",{className:"token punctuation"},")"),o.a.createElement("span",{className:"token punctuation"},";"),"\n","  ",o.a.createElement("span",{className:"token punctuation"},"}"),"\n","\n","  ",o.a.createElement("span",{className:"token function"},"render"),o.a.createElement("span",{className:"token punctuation"},"("),o.a.createElement("span",{className:"token punctuation"},")")," ",o.a.createElement("span",{className:"token punctuation"},"{"),"\n","    ",o.a.createElement("span",{className:"token keyword"},"const")," ",o.a.createElement("span",{className:"token punctuation"},"{")," current ",o.a.createElement("span",{className:"token punctuation"},"}")," ",o.a.createElement("span",{className:"token operator"},"=")," ",o.a.createElement("span",{className:"token keyword"},"this"),o.a.createElement("span",{className:"token punctuation"},"."),"state",o.a.createElement("span",{className:"token punctuation"},";"),"\n","    ",o.a.createElement("span",{className:"token keyword"},"const")," ",o.a.createElement("span",{className:"token punctuation"},"{")," send ",o.a.createElement("span",{className:"token punctuation"},"}"),"  ",o.a.createElement("span",{className:"token keyword"},"this"),o.a.createElement("span",{className:"token punctuation"},"."),"service",o.a.createElement("span",{className:"token punctuation"},";"),"\n","\n","    ",o.a.createElement("span",{className:"token keyword"},"return")," ",o.a.createElement("span",{className:"token punctuation"},"("),"\n","      ",o.a.createElement("span",{className:"token tag"},o.a.createElement("span",{className:"token tag"},o.a.createElement("span",{className:"token punctuation"},"<"),"button")," ",o.a.createElement("span",{className:"token attr-name"},"onClick"),o.a.createElement("span",{className:"token script language-javascript"},o.a.createElement("span",{className:"token script-punctuation punctuation"},"="),o.a.createElement("span",{className:"token punctuation"},"{"),o.a.createElement("span",{className:"token punctuation"},"("),o.a.createElement("span",{className:"token punctuation"},")")," ",o.a.createElement("span",{className:"token operator"},"=>")," ",o.a.createElement("span",{className:"token function"},"send"),o.a.createElement("span",{className:"token punctuation"},"("),o.a.createElement("span",{className:"token string"},"'TOGGLE'"),o.a.createElement("span",{className:"token punctuation"},")"),o.a.createElement("span",{className:"token punctuation"},"}")),o.a.createElement("span",{className:"token punctuation"},">")),o.a.createElement("span",{className:"token plain-text"},"\n","        "),o.a.createElement("span",{className:"token punctuation"},"{"),"current",o.a.createElement("span",{className:"token punctuation"},"."),o.a.createElement("span",{className:"token function"},"matches"),o.a.createElement("span",{className:"token punctuation"},"("),o.a.createElement("span",{className:"token string"},"'inactive'"),o.a.createElement("span",{className:"token punctuation"},")")," ",o.a.createElement("span",{className:"token operator"},"?")," ",o.a.createElement("span",{className:"token string"},"'Off'")," ",o.a.createElement("span",{className:"token punctuation"},":")," ",o.a.createElement("span",{className:"token string"},"'On'"),o.a.createElement("span",{className:"token punctuation"},"}"),o.a.createElement("span",{className:"token plain-text"},"\n","      "),o.a.createElement("span",{className:"token tag"},o.a.createElement("span",{className:"token tag"},o.a.createElement("span",{className:"token punctuation"},"</"),"button"),o.a.createElement("span",{className:"token punctuation"},">")),"\n","    ",o.a.createElement("span",{className:"token punctuation"},")"),"\n","  ",o.a.createElement("span",{className:"token punctuation"},"}"),"\n",o.a.createElement("span",{className:"token punctuation"},"}")))))};var p={}}}]);
//# sourceMappingURL=component---src-pages-recipes-react-mdx-13c43731d6b5f9a1385f.js.map
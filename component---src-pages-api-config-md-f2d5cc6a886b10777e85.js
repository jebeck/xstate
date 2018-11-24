(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{141:function(e,a,n){"use strict";n.r(a),n.d(a,"_frontmatter",function(){return p});var t=n(167),s=n.n(t),c=n(0),m=n.n(c),o=n(168),l=n(169);a.default=function(e){var a=e.components,n=s()(e,["components"]);return m.a.createElement(o.MDXTag,{name:"wrapper",Layout:l.a,layoutProps:n,components:a},m.a.createElement(o.MDXTag,{name:"h1",components:a,props:{id:"machine-and-state-configuration"}},m.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"h1",props:{href:"#machine-and-state-configuration","aria-hidden":!0,class:"anchor"}}),"Machine and State Configuration"),m.a.createElement(o.MDXTag,{name:"p",components:a},"In xstate, statecharts are recursive data structures, where the machine and its states (and deeper states) share a common configuration schema."),m.a.createElement(o.MDXTag,{name:"h2",components:a,props:{id:"machine-configuration"}},m.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"h2",props:{href:"#machine-configuration","aria-hidden":!0,class:"anchor"}}),"Machine Configuration"),m.a.createElement(o.MDXTag,{name:"ul",components:a},m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"p",components:a,parentName:"li"},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"initial"),": (string) The relative state key of the initial state."),m.a.createElement(o.MDXTag,{name:"ul",components:a,parentName:"li"},m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},"Optional for simple states with no substates (i.e., when ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"states")," is undefined)."),m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},"Must be ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"undefined")," if ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"parallel: true")," is set."))),m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"p",components:a,parentName:"li"},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"parallel"),": (boolean) Set to ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"true")," if this is a parallel machine."),m.a.createElement(o.MDXTag,{name:"ul",components:a,parentName:"li"},m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},"Optional (default: ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"false"),")."))),m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"states"),": (object) The mapping of state keys to their state configuration."),m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"p",components:a,parentName:"li"},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"key"),": (string) The name of the machine."),m.a.createElement(o.MDXTag,{name:"ul",components:a,parentName:"li"},m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},"Optional, but recommended for debugging purposes."))),m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"p",components:a,parentName:"li"},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"strict"),": (boolean) Set to ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"true")," if you want strict errors to show (e.g., transitioning from events that are not accepted by the machine)"),m.a.createElement(o.MDXTag,{name:"ul",components:a,parentName:"li"},m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},"Optional (default: ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"false"),")")))),m.a.createElement("div",{className:"gatsby-highlight","data-language":"js"},m.a.createElement("pre",{className:"language-js"},m.a.createElement("code",{className:"language-js"},m.a.createElement("span",{className:"token comment"},"// standard machine config"),"\n",m.a.createElement("span",{className:"token keyword"},"const")," standardMachineConfig ",m.a.createElement("span",{className:"token operator"},"=")," ",m.a.createElement("span",{className:"token punctuation"},"{"),"\n","  ","key",m.a.createElement("span",{className:"token punctuation"},":")," ",m.a.createElement("span",{className:"token string"},"'light'"),m.a.createElement("span",{className:"token punctuation"},","),"\n","  ","initial",m.a.createElement("span",{className:"token punctuation"},":")," ",m.a.createElement("span",{className:"token string"},"'green'"),m.a.createElement("span",{className:"token punctuation"},","),"\n","  ","states",m.a.createElement("span",{className:"token punctuation"},":")," ",m.a.createElement("span",{className:"token punctuation"},"{"),"\n","    ","green",m.a.createElement("span",{className:"token punctuation"},":")," ",m.a.createElement("span",{className:"token punctuation"},"{")," on",m.a.createElement("span",{className:"token punctuation"},":")," ",m.a.createElement("span",{className:"token punctuation"},"{")," ",m.a.createElement("span",{className:"token constant"},"TIMER"),m.a.createElement("span",{className:"token punctuation"},":")," ",m.a.createElement("span",{className:"token string"},"'yellow'")," ",m.a.createElement("span",{className:"token punctuation"},"}")," ",m.a.createElement("span",{className:"token punctuation"},"}"),m.a.createElement("span",{className:"token punctuation"},","),"\n","    ","yellow",m.a.createElement("span",{className:"token punctuation"},":")," ",m.a.createElement("span",{className:"token punctuation"},"{")," on",m.a.createElement("span",{className:"token punctuation"},":")," ",m.a.createElement("span",{className:"token punctuation"},"{")," ",m.a.createElement("span",{className:"token constant"},"TIMER"),m.a.createElement("span",{className:"token punctuation"},":")," ",m.a.createElement("span",{className:"token string"},"'red'")," ",m.a.createElement("span",{className:"token punctuation"},"}")," ",m.a.createElement("span",{className:"token punctuation"},"}"),m.a.createElement("span",{className:"token punctuation"},","),"\n","    ","red",m.a.createElement("span",{className:"token punctuation"},":")," ",m.a.createElement("span",{className:"token punctuation"},"{")," on",m.a.createElement("span",{className:"token punctuation"},":")," ",m.a.createElement("span",{className:"token punctuation"},"{")," ",m.a.createElement("span",{className:"token constant"},"TIMER"),m.a.createElement("span",{className:"token punctuation"},":")," ",m.a.createElement("span",{className:"token string"},"'green'")," ",m.a.createElement("span",{className:"token punctuation"},"}")," ",m.a.createElement("span",{className:"token punctuation"},"}"),m.a.createElement("span",{className:"token punctuation"},","),"\n","  ",m.a.createElement("span",{className:"token punctuation"},"}"),"\n",m.a.createElement("span",{className:"token punctuation"},"}"),m.a.createElement("span",{className:"token punctuation"},";"),"\n","\n",m.a.createElement("span",{className:"token comment"},"// parallel machine config"),"\n",m.a.createElement("span",{className:"token keyword"},"const")," parallelMachineConfig ",m.a.createElement("span",{className:"token operator"},"=")," ",m.a.createElement("span",{className:"token punctuation"},"{"),"\n","  ","key",m.a.createElement("span",{className:"token punctuation"},":")," ",m.a.createElement("span",{className:"token string"},"'intersection'"),m.a.createElement("span",{className:"token punctuation"},","),"\n","  ","parallel",m.a.createElement("span",{className:"token punctuation"},":")," ",m.a.createElement("span",{className:"token boolean"},"true"),m.a.createElement("span",{className:"token punctuation"},","),"\n","  ","states",m.a.createElement("span",{className:"token punctuation"},":")," ",m.a.createElement("span",{className:"token punctuation"},"{"),"\n","    ","northSouthLight",m.a.createElement("span",{className:"token punctuation"},":")," ",m.a.createElement("span",{className:"token punctuation"},"{"),"\n","      ","initial",m.a.createElement("span",{className:"token punctuation"},":")," ",m.a.createElement("span",{className:"token string"},"'green'"),m.a.createElement("span",{className:"token punctuation"},","),"\n","      ","states",m.a.createElement("span",{className:"token punctuation"},":")," ",m.a.createElement("span",{className:"token punctuation"},"{"),"\n","        ","green",m.a.createElement("span",{className:"token punctuation"},":")," ",m.a.createElement("span",{className:"token punctuation"},"{")," on",m.a.createElement("span",{className:"token punctuation"},":")," ",m.a.createElement("span",{className:"token punctuation"},"{")," ",m.a.createElement("span",{className:"token constant"},"TIMER"),m.a.createElement("span",{className:"token punctuation"},":")," ",m.a.createElement("span",{className:"token string"},"'yellow'")," ",m.a.createElement("span",{className:"token punctuation"},"}")," ",m.a.createElement("span",{className:"token punctuation"},"}"),m.a.createElement("span",{className:"token punctuation"},","),"\n","        ","yellow",m.a.createElement("span",{className:"token punctuation"},":")," ",m.a.createElement("span",{className:"token punctuation"},"{")," on",m.a.createElement("span",{className:"token punctuation"},":")," ",m.a.createElement("span",{className:"token punctuation"},"{")," ",m.a.createElement("span",{className:"token constant"},"TIMER"),m.a.createElement("span",{className:"token punctuation"},":")," ",m.a.createElement("span",{className:"token string"},"'red'")," ",m.a.createElement("span",{className:"token punctuation"},"}")," ",m.a.createElement("span",{className:"token punctuation"},"}"),m.a.createElement("span",{className:"token punctuation"},","),"\n","        ","red",m.a.createElement("span",{className:"token punctuation"},":")," ",m.a.createElement("span",{className:"token punctuation"},"{")," on",m.a.createElement("span",{className:"token punctuation"},":")," ",m.a.createElement("span",{className:"token punctuation"},"{")," ",m.a.createElement("span",{className:"token constant"},"TIMER"),m.a.createElement("span",{className:"token punctuation"},":")," ",m.a.createElement("span",{className:"token string"},"'green'")," ",m.a.createElement("span",{className:"token punctuation"},"}")," ",m.a.createElement("span",{className:"token punctuation"},"}"),m.a.createElement("span",{className:"token punctuation"},","),"\n","      ",m.a.createElement("span",{className:"token punctuation"},"}"),"\n","    ",m.a.createElement("span",{className:"token punctuation"},"}"),m.a.createElement("span",{className:"token punctuation"},","),"\n","    ","eastWestLight",m.a.createElement("span",{className:"token punctuation"},":")," ",m.a.createElement("span",{className:"token punctuation"},"{"),"\n","      ","initial",m.a.createElement("span",{className:"token punctuation"},":")," ",m.a.createElement("span",{className:"token string"},"'red'"),m.a.createElement("span",{className:"token punctuation"},","),"\n","      ","states",m.a.createElement("span",{className:"token punctuation"},":")," ",m.a.createElement("span",{className:"token punctuation"},"{"),"\n","        ","green",m.a.createElement("span",{className:"token punctuation"},":")," ",m.a.createElement("span",{className:"token punctuation"},"{")," on",m.a.createElement("span",{className:"token punctuation"},":")," ",m.a.createElement("span",{className:"token punctuation"},"{")," ",m.a.createElement("span",{className:"token constant"},"TIMER"),m.a.createElement("span",{className:"token punctuation"},":")," ",m.a.createElement("span",{className:"token string"},"'yellow'")," ",m.a.createElement("span",{className:"token punctuation"},"}")," ",m.a.createElement("span",{className:"token punctuation"},"}"),m.a.createElement("span",{className:"token punctuation"},","),"\n","        ","yellow",m.a.createElement("span",{className:"token punctuation"},":")," ",m.a.createElement("span",{className:"token punctuation"},"{")," on",m.a.createElement("span",{className:"token punctuation"},":")," ",m.a.createElement("span",{className:"token punctuation"},"{")," ",m.a.createElement("span",{className:"token constant"},"TIMER"),m.a.createElement("span",{className:"token punctuation"},":")," ",m.a.createElement("span",{className:"token string"},"'red'")," ",m.a.createElement("span",{className:"token punctuation"},"}")," ",m.a.createElement("span",{className:"token punctuation"},"}"),m.a.createElement("span",{className:"token punctuation"},","),"\n","        ","red",m.a.createElement("span",{className:"token punctuation"},":")," ",m.a.createElement("span",{className:"token punctuation"},"{")," on",m.a.createElement("span",{className:"token punctuation"},":")," ",m.a.createElement("span",{className:"token punctuation"},"{")," ",m.a.createElement("span",{className:"token constant"},"TIMER"),m.a.createElement("span",{className:"token punctuation"},":")," ",m.a.createElement("span",{className:"token string"},"'green'")," ",m.a.createElement("span",{className:"token punctuation"},"}")," ",m.a.createElement("span",{className:"token punctuation"},"}"),m.a.createElement("span",{className:"token punctuation"},","),"\n","      ",m.a.createElement("span",{className:"token punctuation"},"}"),"\n","    ",m.a.createElement("span",{className:"token punctuation"},"}"),"\n","  ",m.a.createElement("span",{className:"token punctuation"},"}"),"\n",m.a.createElement("span",{className:"token punctuation"},"}")))),m.a.createElement(o.MDXTag,{name:"h2",components:a,props:{id:"state-configuration"}},m.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"h2",props:{href:"#state-configuration","aria-hidden":!0,class:"anchor"}}),"State Configuration"),m.a.createElement(o.MDXTag,{name:"ul",components:a},m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"p",components:a,parentName:"li"},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"id"),": (string) The unique identifier of the state node (since 3.3)."),m.a.createElement(o.MDXTag,{name:"ul",components:a,parentName:"li"},m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},"Optional, defaults to the delimited full path to the state node, e.g., ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"'foo.bar.baz'")))),m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"p",components:a,parentName:"li"},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"on"),": (object) The mapping of event types to ",m.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"#transition-configuration"}},"transitions"),"."),m.a.createElement(o.MDXTag,{name:"ul",components:a,parentName:"li"},m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},"Optional, especially if state is a final state."))),m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"p",components:a,parentName:"li"},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"onEntry"),": (string | string[]) The name(s) of actions to be executed upon entry to this state."),m.a.createElement(o.MDXTag,{name:"ul",components:a,parentName:"li"},m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},"Optional."))),m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"p",components:a,parentName:"li"},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"onExit"),": (string | string[]) The name(s) of actions to be executed upon exit from this state."),m.a.createElement(o.MDXTag,{name:"ul",components:a,parentName:"li"},m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},"Optional."))),m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"p",components:a,parentName:"li"},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"data"),": (any) Any meta data related to the state node (since 3.2)."),m.a.createElement(o.MDXTag,{name:"ul",components:a,parentName:"li"},m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},"Optional.")))),m.a.createElement("div",{className:"gatsby-highlight","data-language":"js"},m.a.createElement("pre",{className:"language-js"},m.a.createElement("code",{className:"language-js"},m.a.createElement("span",{className:"token keyword"},"const")," redStateConfig ",m.a.createElement("span",{className:"token operator"},"=")," ",m.a.createElement("span",{className:"token punctuation"},"{"),"\n","  ","initial",m.a.createElement("span",{className:"token punctuation"},":")," ",m.a.createElement("span",{className:"token string"},"'walk'"),m.a.createElement("span",{className:"token punctuation"},","),"\n","  ","states",m.a.createElement("span",{className:"token punctuation"},":")," ",m.a.createElement("span",{className:"token punctuation"},"{"),"\n","    ","walk",m.a.createElement("span",{className:"token punctuation"},":")," ",m.a.createElement("span",{className:"token punctuation"},"{"),"\n","      ","onEntry",m.a.createElement("span",{className:"token punctuation"},":")," ",m.a.createElement("span",{className:"token punctuation"},"["),m.a.createElement("span",{className:"token string"},"'flashWalkSign'"),m.a.createElement("span",{className:"token punctuation"},"]"),m.a.createElement("span",{className:"token punctuation"},","),"\n","      ","on",m.a.createElement("span",{className:"token punctuation"},":")," ",m.a.createElement("span",{className:"token punctuation"},"{"),"\n","        ",m.a.createElement("span",{className:"token constant"},"PED_COUNTDOWN"),m.a.createElement("span",{className:"token punctuation"},":")," ",m.a.createElement("span",{className:"token string"},"'wait'"),"\n","      ",m.a.createElement("span",{className:"token punctuation"},"}"),"\n","    ",m.a.createElement("span",{className:"token punctuation"},"}"),m.a.createElement("span",{className:"token punctuation"},","),"\n","    ","wait",m.a.createElement("span",{className:"token punctuation"},":")," ",m.a.createElement("span",{className:"token punctuation"},"{"),"\n","      ","onEntry",m.a.createElement("span",{className:"token punctuation"},":")," ",m.a.createElement("span",{className:"token punctuation"},"["),m.a.createElement("span",{className:"token string"},"'flashWaitSign'"),m.a.createElement("span",{className:"token punctuation"},",")," ",m.a.createElement("span",{className:"token string"},"'startCountdown'"),m.a.createElement("span",{className:"token punctuation"},"]"),m.a.createElement("span",{className:"token punctuation"},","),"\n","      ","on",m.a.createElement("span",{className:"token punctuation"},":")," ",m.a.createElement("span",{className:"token punctuation"},"{"),"\n","        ",m.a.createElement("span",{className:"token constant"},"PED_COUNTDOWN"),m.a.createElement("span",{className:"token punctuation"},":")," ",m.a.createElement("span",{className:"token string"},"'stop'"),"\n","      ",m.a.createElement("span",{className:"token punctuation"},"}"),"\n","    ",m.a.createElement("span",{className:"token punctuation"},"}"),m.a.createElement("span",{className:"token punctuation"},","),"\n","    ","stop",m.a.createElement("span",{className:"token punctuation"},":")," ",m.a.createElement("span",{className:"token punctuation"},"{"),m.a.createElement("span",{className:"token punctuation"},"}"),"\n","  ",m.a.createElement("span",{className:"token punctuation"},"}"),m.a.createElement("span",{className:"token punctuation"},","),"\n","  ","on",m.a.createElement("span",{className:"token punctuation"},":")," ",m.a.createElement("span",{className:"token punctuation"},"{"),"\n","    ",m.a.createElement("span",{className:"token constant"},"TIMER"),m.a.createElement("span",{className:"token punctuation"},":")," ",m.a.createElement("span",{className:"token string"},"'green'"),m.a.createElement("span",{className:"token punctuation"},","),"\n","    ",m.a.createElement("span",{className:"token constant"},"POWER_OUTAGE"),m.a.createElement("span",{className:"token punctuation"},":")," ",m.a.createElement("span",{className:"token string"},"'red'"),"\n","  ",m.a.createElement("span",{className:"token punctuation"},"}"),"\n",m.a.createElement("span",{className:"token punctuation"},"}")))),m.a.createElement(o.MDXTag,{name:"p",components:a},"Compound states (states with substates) can also have a ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"state")," property, just like machines. You must include either ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"initial")," or ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"parallel")," for these compound states - they have the same configuration as standard/parallel machines."),m.a.createElement(o.MDXTag,{name:"h2",components:a,props:{id:"transition-configuration"}},m.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"h2",props:{href:"#transition-configuration","aria-hidden":!0,class:"anchor"}}),"Transition Configuration"),m.a.createElement(o.MDXTag,{name:"p",components:a},"On the ",m.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"#state-configuration"}},"state configuration"),", transitions are specified in the ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"on")," property. The values can be"),m.a.createElement(o.MDXTag,{name:"ul",components:a},m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},"an object mapping events to ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"string")," state IDs:")),m.a.createElement("div",{className:"gatsby-highlight","data-language":"js"},m.a.createElement("pre",{className:"language-js"},m.a.createElement("code",{className:"language-js"},m.a.createElement("span",{className:"token keyword"},"const")," lightMachine ",m.a.createElement("span",{className:"token operator"},"=")," ",m.a.createElement("span",{className:"token function"},"Machine"),m.a.createElement("span",{className:"token punctuation"},"("),m.a.createElement("span",{className:"token punctuation"},"{"),"\n","  ","initial",m.a.createElement("span",{className:"token punctuation"},":")," ",m.a.createElement("span",{className:"token string"},"'green'"),m.a.createElement("span",{className:"token punctuation"},","),"\n","  ","states",m.a.createElement("span",{className:"token punctuation"},":")," ",m.a.createElement("span",{className:"token punctuation"},"{"),"\n","    ","green",m.a.createElement("span",{className:"token punctuation"},":")," ",m.a.createElement("span",{className:"token punctuation"},"{"),"\n","      ","on",m.a.createElement("span",{className:"token punctuation"},":")," ",m.a.createElement("span",{className:"token punctuation"},"{"),"\n","        ",m.a.createElement("span",{className:"token comment"},"// on the 'TIMER' event, go to the 'yellow' state"),"\n","        ",m.a.createElement("span",{className:"token constant"},"TIMER"),m.a.createElement("span",{className:"token punctuation"},":")," ",m.a.createElement("span",{className:"token string"},"'yellow'"),"\n","      ",m.a.createElement("span",{className:"token punctuation"},"}"),"\n","    ",m.a.createElement("span",{className:"token punctuation"},"}"),m.a.createElement("span",{className:"token punctuation"},","),"\n","    ","yellow",m.a.createElement("span",{className:"token punctuation"},":")," ",m.a.createElement("span",{className:"token punctuation"},"{"),"\n","      ",m.a.createElement("span",{className:"token comment"},"// ..."),"\n","    ",m.a.createElement("span",{className:"token punctuation"},"}"),m.a.createElement("span",{className:"token punctuation"},","),"\n","    ","red",m.a.createElement("span",{className:"token punctuation"},":")," ",m.a.createElement("span",{className:"token punctuation"},"{"),"\n","      ",m.a.createElement("span",{className:"token comment"},"// ..."),"\n","    ",m.a.createElement("span",{className:"token punctuation"},"}"),"\n","  ",m.a.createElement("span",{className:"token punctuation"},"}"),"\n",m.a.createElement("span",{className:"token punctuation"},"}"),m.a.createElement("span",{className:"token punctuation"},")"),m.a.createElement("span",{className:"token punctuation"},";")))),m.a.createElement(o.MDXTag,{name:"ul",components:a},m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"p",components:a,parentName:"li"},"an object mapping events to transition configs with these props:"),m.a.createElement(o.MDXTag,{name:"ul",components:a,parentName:"li"},m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"p",components:a,parentName:"li"},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"cond"),": (string | function) a conditional guard that must evaluate to ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"true")," for the transition to take place (see ",m.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"guides/guards.md"}},"guarded transitions"),")"),m.a.createElement(o.MDXTag,{name:"ul",components:a,parentName:"li"},m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},"Optional."))),m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"actions"),": (Action[]) an array of action strings or objects that are to be executed when the transition takes place (see ",m.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"li",props:{href:"api/actions.md"}},"actions"),")\n- Optional.\n/",m.a.createElement(o.MDXTag,{name:"em",components:a,parentName:"li"}," - ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"em"},"in"),": (string | object) a string or object representing the state that the current state must match for the transition to take place (see ",m.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"em",props:{href:"guides/guards.md"}},"guarded transitions"),")\n- Optional. "),"/"),m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"p",components:a,parentName:"li"},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"internal"),": (boolean) whether the transition is an internal transition or not (see ",m.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"guides/internal.md"}},"internal transitions"),")"),m.a.createElement(o.MDXTag,{name:"ul",components:a,parentName:"li"},m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},"Optional, defaults to ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"false"))))))),m.a.createElement("div",{className:"gatsby-highlight","data-language":"js"},m.a.createElement("pre",{className:"language-js"},m.a.createElement("code",{className:"language-js"},m.a.createElement("span",{className:"token keyword"},"const")," lightMachine ",m.a.createElement("span",{className:"token operator"},"=")," ",m.a.createElement("span",{className:"token function"},"Machine"),m.a.createElement("span",{className:"token punctuation"},"("),m.a.createElement("span",{className:"token punctuation"},"{"),"\n","  ","initial",m.a.createElement("span",{className:"token punctuation"},":")," ",m.a.createElement("span",{className:"token string"},"'green'"),m.a.createElement("span",{className:"token punctuation"},","),"\n","  ","states",m.a.createElement("span",{className:"token punctuation"},":")," ",m.a.createElement("span",{className:"token punctuation"},"{"),"\n","    ","green",m.a.createElement("span",{className:"token punctuation"},":")," ",m.a.createElement("span",{className:"token punctuation"},"{"),"\n","      ","on",m.a.createElement("span",{className:"token punctuation"},":")," ",m.a.createElement("span",{className:"token punctuation"},"{"),"\n","        ",m.a.createElement("span",{className:"token constant"},"TIMER"),m.a.createElement("span",{className:"token punctuation"},":")," ",m.a.createElement("span",{className:"token punctuation"},"{"),"\n","          ","target",m.a.createElement("span",{className:"token punctuation"},":")," ",m.a.createElement("span",{className:"token string"},"'yellow'"),m.a.createElement("span",{className:"token punctuation"},",")," ",m.a.createElement("span",{className:"token comment"},"// since 4.0"),"\n","          ",m.a.createElement("span",{className:"token comment"},"// specify that 'startYellowTimer' action should be executed"),"\n","          ","actions",m.a.createElement("span",{className:"token punctuation"},":")," ",m.a.createElement("span",{className:"token punctuation"},"["),m.a.createElement("span",{className:"token string"},"'startYellowTimer'"),m.a.createElement("span",{className:"token punctuation"},"]"),"\n","        ",m.a.createElement("span",{className:"token punctuation"},"}"),"\n","      ",m.a.createElement("span",{className:"token punctuation"},"}"),"\n","    ",m.a.createElement("span",{className:"token punctuation"},"}"),m.a.createElement("span",{className:"token punctuation"},","),"\n","    ","yellow",m.a.createElement("span",{className:"token punctuation"},":")," ",m.a.createElement("span",{className:"token punctuation"},"{"),"\n","      ","on",m.a.createElement("span",{className:"token punctuation"},":")," ",m.a.createElement("span",{className:"token punctuation"},"{"),"\n","        ",m.a.createElement("span",{className:"token constant"},"TIMER"),m.a.createElement("span",{className:"token punctuation"},":")," ",m.a.createElement("span",{className:"token punctuation"},"{"),"\n","          ","target",m.a.createElement("span",{className:"token punctuation"},":")," ",m.a.createElement("span",{className:"token string"},"'red'"),m.a.createElement("span",{className:"token punctuation"},",")," ",m.a.createElement("span",{className:"token comment"},"// since 4.0"),"\n","          ",m.a.createElement("span",{className:"token comment"},"// transition to 'red' only if < 100 seconds elapsed"),"\n","          ","cond",m.a.createElement("span",{className:"token punctuation"},":")," ",m.a.createElement("span",{className:"token punctuation"},"("),m.a.createElement("span",{className:"token punctuation"},"{")," elapsed ",m.a.createElement("span",{className:"token punctuation"},"}"),m.a.createElement("span",{className:"token punctuation"},")")," ",m.a.createElement("span",{className:"token operator"},"=>")," elapsed ",m.a.createElement("span",{className:"token operator"},"<")," ",m.a.createElement("span",{className:"token number"},"100"),"\n","        ",m.a.createElement("span",{className:"token punctuation"},"}"),"\n","      ",m.a.createElement("span",{className:"token punctuation"},"}"),"\n","    ",m.a.createElement("span",{className:"token punctuation"},"}"),m.a.createElement("span",{className:"token punctuation"},","),"\n","    ","red",m.a.createElement("span",{className:"token punctuation"},":")," ",m.a.createElement("span",{className:"token punctuation"},"{"),"\n","      ",m.a.createElement("span",{className:"token comment"},"// ..."),"\n","    ",m.a.createElement("span",{className:"token punctuation"},"}"),"\n","  ",m.a.createElement("span",{className:"token punctuation"},"}"),"\n",m.a.createElement("span",{className:"token punctuation"},"}"),m.a.createElement("span",{className:"token punctuation"},")"),m.a.createElement("span",{className:"token punctuation"},";")))),m.a.createElement(o.MDXTag,{name:"ul",components:a},m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"p",components:a,parentName:"li"},"an array of conditional transitions with the same configuration as above, but with an additional ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"target")," prop:"),m.a.createElement(o.MDXTag,{name:"ul",components:a,parentName:"li"},m.a.createElement(o.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"li"},"target"),": (string | string[]) a string or array of strings representing the state(s) that the machine will transition to.")))),m.a.createElement("div",{className:"gatsby-highlight","data-language":"js"},m.a.createElement("pre",{className:"language-js"},m.a.createElement("code",{className:"language-js"},m.a.createElement("span",{className:"token keyword"},"const")," lightMachine ",m.a.createElement("span",{className:"token operator"},"=")," ",m.a.createElement("span",{className:"token function"},"Machine"),m.a.createElement("span",{className:"token punctuation"},"("),m.a.createElement("span",{className:"token punctuation"},"{"),"\n","  ","initial",m.a.createElement("span",{className:"token punctuation"},":")," ",m.a.createElement("span",{className:"token string"},"'green'"),m.a.createElement("span",{className:"token punctuation"},","),"\n","  ","states",m.a.createElement("span",{className:"token punctuation"},":")," ",m.a.createElement("span",{className:"token punctuation"},"{"),"\n","    ","green",m.a.createElement("span",{className:"token punctuation"},":")," ",m.a.createElement("span",{className:"token punctuation"},"{"),"\n","      ","on",m.a.createElement("span",{className:"token punctuation"},":")," ",m.a.createElement("span",{className:"token punctuation"},"{"),"\n","        ",m.a.createElement("span",{className:"token constant"},"TIMER"),m.a.createElement("span",{className:"token punctuation"},":")," ",m.a.createElement("span",{className:"token punctuation"},"["),"\n","          ",m.a.createElement("span",{className:"token comment"},"// transition to 'green' only if < 100 seconds elapsed"),"\n","          ",m.a.createElement("span",{className:"token punctuation"},"{")," target",m.a.createElement("span",{className:"token punctuation"},":")," ",m.a.createElement("span",{className:"token string"},"'green'"),m.a.createElement("span",{className:"token punctuation"},",")," cond",m.a.createElement("span",{className:"token punctuation"},":")," ",m.a.createElement("span",{className:"token punctuation"},"("),m.a.createElement("span",{className:"token punctuation"},"{")," elapsed ",m.a.createElement("span",{className:"token punctuation"},"}"),m.a.createElement("span",{className:"token punctuation"},")")," ",m.a.createElement("span",{className:"token operator"},"=>")," elapsed ",m.a.createElement("span",{className:"token operator"},"<")," ",m.a.createElement("span",{className:"token number"},"100")," ",m.a.createElement("span",{className:"token punctuation"},"}"),m.a.createElement("span",{className:"token punctuation"},","),"\n","          ",m.a.createElement("span",{className:"token comment"},"// transition to 'yellow' only if >= 200 seconds elapsed"),"\n","          ",m.a.createElement("span",{className:"token punctuation"},"{")," target",m.a.createElement("span",{className:"token punctuation"},":")," ",m.a.createElement("span",{className:"token string"},"'yellow'"),m.a.createElement("span",{className:"token punctuation"},",")," cond",m.a.createElement("span",{className:"token punctuation"},":")," ",m.a.createElement("span",{className:"token punctuation"},"("),m.a.createElement("span",{className:"token punctuation"},"{")," elapsed ",m.a.createElement("span",{className:"token punctuation"},"}"),m.a.createElement("span",{className:"token punctuation"},")")," ",m.a.createElement("span",{className:"token operator"},"=>")," elapsed ",m.a.createElement("span",{className:"token operator"},">=")," ",m.a.createElement("span",{className:"token number"},"200"),m.a.createElement("span",{className:"token punctuation"},"}"),m.a.createElement("span",{className:"token punctuation"},","),"\n","          ",m.a.createElement("span",{className:"token comment"},"// otherwise transition to 'red'"),"\n","          ",m.a.createElement("span",{className:"token punctuation"},"{")," target",m.a.createElement("span",{className:"token punctuation"},":")," ",m.a.createElement("span",{className:"token string"},"'red'")," ",m.a.createElement("span",{className:"token punctuation"},"}"),"\n","        ",m.a.createElement("span",{className:"token punctuation"},"]"),"\n","      ",m.a.createElement("span",{className:"token punctuation"},"}"),"\n","    ",m.a.createElement("span",{className:"token punctuation"},"}"),m.a.createElement("span",{className:"token punctuation"},","),"\n","    ","yellow",m.a.createElement("span",{className:"token punctuation"},":")," ",m.a.createElement("span",{className:"token punctuation"},"{"),"\n","      ",m.a.createElement("span",{className:"token comment"},"// ..."),"\n","    ",m.a.createElement("span",{className:"token punctuation"},"}"),m.a.createElement("span",{className:"token punctuation"},","),"\n","    ","red",m.a.createElement("span",{className:"token punctuation"},":")," ",m.a.createElement("span",{className:"token punctuation"},"{"),"\n","      ",m.a.createElement("span",{className:"token comment"},"// ..."),"\n","    ",m.a.createElement("span",{className:"token punctuation"},"}"),"\n","  ",m.a.createElement("span",{className:"token punctuation"},"}"),"\n",m.a.createElement("span",{className:"token punctuation"},"}"),m.a.createElement("span",{className:"token punctuation"},")"),m.a.createElement("span",{className:"token punctuation"},";")))))};var p={}}}]);
//# sourceMappingURL=component---src-pages-api-config-md-f2d5cc6a886b10777e85.js.map
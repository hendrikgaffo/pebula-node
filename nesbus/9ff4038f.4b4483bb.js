(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{143:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return p})),n.d(t,"rightToc",(function(){return d})),n.d(t,"default",(function(){return f}));var r=n(1),a=n(6),i=n(0),o=n.n(i),s=n(146),c=n(150),u=n(149);n(126);var l=function(e){var t=e.to;return o.a.createElement(u.a,{to:Object(c.a)(t)},e.children)},b={id:"introduction",title:"Introduction",sidebar_label:"1. Introduction"},p={id:"getting-started/introduction",title:"Introduction",description:"**NesBus** (Nest / Service Bus) is a microservice extension for **NestJS** that adds support for Azure Service Bus within **NestJS** in a",source:"@site/docs/getting-started/introduction.md",permalink:"/pebula-node/nesbus/docs/getting-started/introduction",editUrl:"https://github.com/shlomiassaf/pebula-node/tree/master/packages/nesbus/website/docs/getting-started/introduction.md",sidebar_label:"1. Introduction",sidebar:"someSidebar",next:{title:"Installation",permalink:"/pebula-node/nesbus/docs/getting-started/installation"}},d=[{value:"Message Handling",id:"message-handling",children:[]},{value:"Client Emitters",id:"client-emitters",children:[]},{value:"Easy Setup",id:"easy-setup",children:[]},{value:"Leverage Advanced Architecture Patterns",id:"leverage-advanced-architecture-patterns",children:[]},{value:"NOTE: @azure/service-bus@7",id:"note-azureservice-bus7",children:[]}],m={rightToc:d};function f(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},m,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"NesBus")," (Nest / Service Bus) is a microservice extension for ",Object(s.b)("strong",{parentName:"p"},"NestJS")," that adds support for Azure Service Bus within ",Object(s.b)("strong",{parentName:"p"},"NestJS")," in a\nsimple and intuitive way."),Object(s.b)("p",null,"It simplifies how we use and manage service bus through an declarative API that automate message handling & emitter registration:"),Object(s.b)("h3",{id:"message-handling"},"Message Handling"),Object(s.b)("p",null,"Handling incoming service bus message is now as easy as handling incoming REST requests."),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"@Controller()\nexport class ServiceBusController {\n  @Queue<MethodDecorator>(({\n    name: 'nesbus-queue.demo'\n  })\n  async myQueueEntity(@Ctx() context: SbContext) {\n  }\n}\n")),Object(s.b)("h3",{id:"client-emitters"},"Client Emitters"),Object(s.b)("p",null,"Defining service bus emitters (",Object(s.b)("inlineCode",{parentName:"p"},"Sender"),") requires no logic, you can compose a client emitter in seconds:"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"@Injectable()\nexport class ServiceBusEmitClient {\n\n  @QueueEmitter({\n    name: 'nesbus-queue.demo'\n  })\n  myQueueEntity: Sender;\n}\n")),Object(s.b)("h3",{id:"easy-setup"},"Easy Setup"),Object(s.b)("p",null,"The library also helps with service bus entity management through a declarative API for automatic creation\nof service bus entities based on the entities we define in the controllers / services in our application."),Object(s.b)("p",null,"We call it ",Object(s.b)("strong",{parentName:"p"},"provision"),". ","[",Object(s.b)(l,{to:"docs/guide/provisioning",mdxType:"DocLink"},"Read more..."),"]"),Object(s.b)("p",null,"This allows a ",Object(s.b)("strong",{parentName:"p"},"code-first")," approach for service bus management and architecture."),Object(s.b)("h3",{id:"leverage-advanced-architecture-patterns"},"Leverage Advanced Architecture Patterns"),Object(s.b)("p",null,"By simplifying the work with service bus, ",Object(s.b)("strong",{parentName:"p"},"Nesbus")," enables the use of more advanced architecture patterns that you\ncan use to manage the flow of your application."),Object(s.b)("p",null,"Using ",Object(s.b)("strong",{parentName:"p"},"Observables")," you can now implement a ",Object(s.b)("strong",{parentName:"p"},"CQRS")," or ",Object(s.b)("strong",{parentName:"p"},"Event Sourcing")," models out of the box.\nIn addition, ",Object(s.b)("strong",{parentName:"p"},"Observables")," along with ",Object(s.b)("strong",{parentName:"p"},"Interceptors")," allow us to use plugins that encapsulate behaviors for us."),Object(s.b)("p",null,"For example, the ",Object(s.b)("strong",{parentName:"p"},Object(s.b)(l,{to:"docs/tasks/back-off",mdxType:"DocLink"},"SbBackoffRetry plugin"))," wraps incoming service bus messages and handles them when their handler throws.\nIt will perform a retry to handle them again but with a delay between each try. The delay is not constant and it is based on an algorithm (linear / exponential)\nso the effect of periodic stress on you server is reduced."),Object(s.b)("h2",{id:"note-azureservice-bus7"},"NOTE: @azure/service-bus@7"),Object(s.b)("div",{className:"admonition admonition-info alert alert--info"},Object(s.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(s.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(s.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(s.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(s.b)("p",{parentName:"div"},Object(s.b)("inlineCode",{parentName:"p"},"@pebula/nesbus")," supports ",Object(s.b)("inlineCode",{parentName:"p"},"@azure/service-bus@1.1.6"),"."),Object(s.b)("p",{parentName:"div"},"The azure team is currently working on a re-redesigned library, currently in preview (",Object(s.b)("inlineCode",{parentName:"p"},"7.0.0-preview.2"),").\nOnce version 7 becomes official, ",Object(s.b)("inlineCode",{parentName:"p"},"@pebula/nesbus")," will support it, with limited backward compatibility to v1 (critical bugs only)."),Object(s.b)("p",{parentName:"div"},"Since version 7 comes with significant breaking changes you should expect some changes in nesbus as well while\nsome will not get noticed due to the abstraction."))))}f.isMDXComponent=!0},146:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),l=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},b=function(e){var t=l(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),b=l(n),d=r,m=b["".concat(o,".").concat(d)]||b[d]||p[d]||i;return n?a.a.createElement(m,s({ref:t},u,{components:n})):a.a.createElement(m,s({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<i;u++)o[u]=n[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},147:function(e,t,n){"use strict";var r=n(0),a=n(35);t.a=function(){return Object(r.useContext)(a.a)}},149:function(e,t,n){"use strict";var r=n(0),a=n.n(r),i=n(19),o=n(152),s=n(13),c=n.n(s),u=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};t.a=function(e){var{isNavLink:t}=e,n=u(e,["isNavLink"]);const{to:s,href:l}=n,b=s||l,p=Object(o.a)(b),d=Object(r.useRef)(!1),m=t?i.c:i.b,f=c.a.canUseIntersectionObserver;let g;return Object(r.useEffect)(()=>(!f&&p&&window.docusaurus.prefetch(b),()=>{f&&g&&g.disconnect()}),[b,f,p]),b&&p&&!b.startsWith("#")?a.a.createElement(m,Object.assign({},n,{onMouseEnter:()=>{d.current||(window.docusaurus.preload(b),d.current=!0)},innerRef:e=>{var t,n;f&&e&&p&&(t=e,n=()=>{window.docusaurus.prefetch(b)},g=new window.IntersectionObserver(e=>{e.forEach(e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(g.unobserve(t),g.disconnect(),n())})}),g.observe(t))},to:b})):a.a.createElement("a",Object.assign({},n,{href:b}))}},150:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(147);function a(e){const{siteConfig:t}=Object(r.a)(),{baseUrl:n="/"}=t||{};if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}},152:function(e,t,n){"use strict";function r(e){return/^\/(?!\/)/.test(e)}n.d(t,"a",(function(){return r}))}}]);
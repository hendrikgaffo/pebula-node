(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{134:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return m})),n.d(t,"default",(function(){return d}));var a=n(1),r=n(6),i=n(0),c=n.n(i),o=n(138),s=n(142);n(140),n(118);var l=function(e){const{to:t}=e;return c.a.createElement("a",{href:Object(s.a)(t),target:"_blank"},e.children)},b={id:"introduction",title:"Introduction",sidebar_label:"1. Introduction"},u={id:"getting-started/introduction",title:"Introduction",description:"**touchstone** is a metadata-driven benchmarking framework, built on top of [benchmark.js](https://benchmarkjs.com/)",source:"@site/docs/getting-started/introduction.md",permalink:"/pebula-node/touchstone/docs/getting-started/introduction",editUrl:"https://github.com/shlomiassaf/pebula-node/tree/master/packages/touchstone/website/docs/getting-started/introduction.md",sidebar_label:"1. Introduction",sidebar:"someSidebar",next:{title:"Installation",permalink:"/pebula-node/touchstone/docs/getting-started/installation"}},m=[{value:"Declarative Benchmarks",id:"declarative-benchmarks",children:[]},{value:"Life Cycle Events",id:"life-cycle-events",children:[]},{value:"Composition &amp; Re-use",id:"composition--re-use",children:[]},{value:"TouchStone Events",id:"touchstone-events",children:[]},{value:"Multiple Suites",id:"multiple-suites",children:[]},{value:"Execute",id:"execute",children:[]},{value:"Demo",id:"demo",children:[]}],p={rightToc:m};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"touchstone")," is a metadata-driven benchmarking framework, built on top of ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://benchmarkjs.com/"}),"benchmark.js")),Object(o.b)("h2",{id:"declarative-benchmarks"},"Declarative Benchmarks"),Object(o.b)("p",null,"With ",Object(o.b)("strong",{parentName:"p"},"touchstone")," you define your benchmark like this:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"import { Suite, Case } from '@pebula/touchstone';\n\n@Suite({ name: 'My First Benchmark Suite' })\nclass MyFirstBenchmarkSuite {\n @Case({ name: 'my-first-benchmark' })\n  firstBenchmark() {\n    /* Benchmarking... */\n  }\n\n  @Case()\n  async secondBenchmark() {\n     // Will automatically detect that it's async. Name is taken from method name.\n    /* Benchmarking... */\n  }\n}\n")),Object(o.b)("h2",{id:"life-cycle-events"},"Life Cycle Events"),Object(o.b)("p",null,"All ",Object(o.b)("inlineCode",{parentName:"p"},"benchmark.js")," event are wrapped and delivered in a normalized manner:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"@Suite()\nclass TestSuite {\n  @OnStart() start(event: SuiteStartEvent) { }\n\n  @OnCaseComplete() caseComplete(event: CaseCompleteEvent) { }\n\n  @OnComplete() complete(event: SuiteCompleteEvent) { }\n\n  // @OnReset, @OnAbort, @OnError\n}\n")),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"There are additional, touchstone specific, events..."))),Object(o.b)("h2",{id:"composition--re-use"},"Composition & Re-use"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"touchstone")," is fully extensible through inheritance or composition (mixins):"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"import { Suite, Case, Mixin, VegaLiteReporter, SimpleConsoleReporter } from '@pebula/touchstone';\n\n@Suite({ name: 'My First Benchmark Suite' })\nclass MyFirstBenchmarkSuite extends Mixin(SimpleConsoleReporter, VegaLiteReporter) {\n @Case({ name: 'my-first-benchmark' })\n  firstBenchmark() {\n    /* Benchmarking... */\n  }\n}\n")),Object(o.b)("p",null,"In the example above we ",Object(o.b)("inlineCode",{parentName:"p"},"Mixin")," reporting behavior from 2 built-in reporters:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"SimpleConsoleReporter")," - Will log progress to the console"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"VegaLiteReporter")," - Will output HTML, SVG and PNG charts using ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://vega.github.io/vega-lite/"}),"vega-lite"))),Object(o.b)("h2",{id:"touchstone-events"},"TouchStone Events"),Object(o.b)("p",null,"There are 2 ",Object(o.b)("strong",{parentName:"p"},"touchstone")," events:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"@OnTouchStoneStart()")," - Fired with the ",Object(o.b)("inlineCode",{parentName:"li"},"TouchStoneStartEvent")," event context parameter"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"@OnTouchStoneEnd()")," - Fired with the ",Object(o.b)("inlineCode",{parentName:"li"},"TouchStoneEndEvent")," event context parameter (which contains the ",Object(o.b)("inlineCode",{parentName:"li"},"SuiteResult[]")," property)")),Object(o.b)("p",null,"Both events can be registered on any suite."),Object(o.b)("h2",{id:"multiple-suites"},"Multiple Suites"),Object(o.b)("p",null,"You can declare multiple suite's, ",Object(o.b)("strong",{parentName:"p"},"touchstone")," will execute them one after the other."),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Because multiple suites can be used for a single run it might not make sense to register mixins on the suite.\nFor suite events this might be ok but the ",Object(o.b)("strong",{parentName:"p"},"touchstone")," start/end events will trigger multiple times, once for every suite."),Object(o.b)("p",{parentName:"div"},"For this scenario, and in general, we recommend using a container to manage all mixins, configuration, etc...\nThe container events will invoke once for all of the events in the system. (i.e. A case complete event, from any suite, will fire once on the container)"))),Object(o.b)("h2",{id:"execute"},"Execute"),Object(o.b)("p",null,"To execute the suite/s and start benchmarking you need to invoke the ",Object(o.b)("inlineCode",{parentName:"p"},"touchStone()")," function."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"import { Suite, Case, touchStone } from '@pebula/touchstone';\n\n@Suite({ name: 'My First Benchmark Suite' })\nclass MyFirstBenchmarkSuite {\n @Case({ name: 'my-first-benchmark' })\n  firstBenchmark() {\n    /* Benchmarking... */\n  }\n\n  @Case()\n  async secondBenchmark() {\n     // Will automatically detect that it's async. Name is taken from method name.\n    /* Benchmarking... */\n  }\n}\n\nawait touchStone();\n")),Object(o.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"tip")),Object(o.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"When using a touchstone configuration container you don't need to call ",Object(o.b)("inlineCode",{parentName:"p"},"touchStone()"),", the benchmark\nwill automatically execute."))),Object(o.b)("h2",{id:"demo"},"Demo"),Object(o.b)("p",null,"The following is the output of the a demo benchmark application: ",Object(o.b)(l,{to:"demo/benchmark-chart.html",mdxType:"ExtRelativeLink"},"benchmark-chart")))}d.isMDXComponent=!0},138:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),b=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o({},t,{},e)),n},u=function(e){var t=b(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=b(n),p=a,d=u["".concat(c,".").concat(p)]||u[p]||m[p]||i;return n?r.a.createElement(d,o({ref:t},l,{components:n})):r.a.createElement(d,o({ref:t},l))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var l=2;l<i;l++)c[l]=n[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},139:function(e,t,n){"use strict";var a=n(0),r=n(36);t.a=function(){return Object(a.useContext)(r.a)}},140:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(19),c=n(144),o=n(13),s=n.n(o),l=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};t.a=function(e){var{isNavLink:t}=e,n=l(e,["isNavLink"]);const{to:o,href:b}=n,u=o||b,m=Object(c.a)(u),p=Object(a.useRef)(!1),d=t?i.c:i.b,h=s.a.canUseIntersectionObserver;let O;return Object(a.useEffect)(()=>(!h&&m&&window.docusaurus.prefetch(u),()=>{h&&O&&O.disconnect()}),[u,h,m]),u&&m&&!u.startsWith("#")?r.a.createElement(d,Object.assign({},n,{onMouseEnter:()=>{p.current||(window.docusaurus.preload(u),p.current=!0)},innerRef:e=>{var t,n;h&&e&&m&&(t=e,n=()=>{window.docusaurus.prefetch(u)},O=new window.IntersectionObserver(e=>{e.forEach(e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(O.unobserve(t),O.disconnect(),n())})}),O.observe(t))},to:u})):r.a.createElement("a",Object.assign({},n,{href:u}))}},142:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n(139);function r(e){const{siteConfig:t}=Object(a.a)(),{baseUrl:n="/"}=t||{};if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}},144:function(e,t,n){"use strict";function a(e){return/^\/(?!\/)/.test(e)}n.d(t,"a",(function(){return a}))}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{124:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return u}));var r=t(1),o=t(6),a=(t(0),t(148)),c={id:"plugins",title:"Plugins",sidebar_label:"6. Plugins"},i={id:"advanced/plugins",title:"Plugins",description:"The way to declare and bind mongoose plugins to **GooseTyped** models.",source:"@site/docs/advanced/plugins.md",permalink:"/pebula-node/goosetyped/docs/advanced/plugins",editUrl:"https://github.com/shlomiassaf/pebula-node/tree/master/packages/goosetyped/website/docs/advanced/plugins.md",sidebar_label:"6. Plugins",sidebar:"someSidebar",previous:{title:"Local Columns",permalink:"/pebula-node/goosetyped/docs/advanced/local-column"},next:{title:"Async Model Compilation",permalink:"/pebula-node/goosetyped/docs/advanced/async-model-compilation"}},l=[],p={rightToc:l};function u(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The way to declare and bind mongoose plugins to ",Object(a.b)("strong",{parentName:"p"},"GooseTyped")," models."),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import * as mongooseAutopopulate from 'mongoose-autopopulate';\nimport { GtDocument, GtModel, GtColumn, GtPlugin } from '@pebula/goosetyped';\n\n@GtDocument()\n@GtPlugin({ plugin: mongooseAutopopulate })\nexport class Person<T extends string> extends GtModel() {\n\n  @GtColumn() name: string;\n  @GtColumn() age: number;\n}\n")))}u.isMDXComponent=!0},148:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return b}));var r=t(0),o=t.n(r);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),u=function(e){var n=o.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i({},n,{},e)),t},s=function(e){var n=u(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(t),m=r,b=s["".concat(c,".").concat(m)]||s[m]||d[m]||a;return t?o.a.createElement(b,i({ref:n},p,{components:t})):o.a.createElement(b,i({ref:n},p))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,c=new Array(a);c[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var p=2;p<a;p++)c[p]=t[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{146:function(e,t,n){"use strict";n.r(t);var a=n(1),o=n(0),r=n.n(o),s=n(151),l=n.n(s),c=n(155),i=n(150),m=n(149),u=n(154),p=n(134),y=n.n(p),g=n(158),d=n(161),h=n(177),f=n.n(h);var v=function(e){const{siteConfig:{themeConfig:{prism:t={}}}}=Object(m.a)(),[n,s]=Object(o.useState)(!1);Object(o.useEffect)(()=>{s(!0)},[]);const{isDarkTheme:l}=Object(g.a)(),c=t.theme||f.a,i=t.darkTheme||c,u=l?i:c,{lang:p="yaml",snippet:h}=e;return r.a.createElement(d.a,Object(a.a)({},d.b,{key:n,theme:u,code:h,language:p}),({className:e,style:t,tokens:n,getLineProps:a,getTokenProps:o})=>r.a.createElement("pre",{className:`${e} ${y.a.codeSnippet}`,style:t},n.map((e,t)=>r.a.createElement("div",a({line:e,key:t}),e.map((e,t)=>r.a.createElement("span",o({token:e,key:t})))))))},b=n(135),E=n.n(b);const k=[{title:r.a.createElement(r.a.Fragment,null,"Easy to Use"),imageUrl:"img/undraw_docusaurus_mountain.svg",description:r.a.createElement(r.a.Fragment,null,r.a.createElement("strong",null,"GooseTyped")," is here to make your life easy. The classes you define are the actual models you use. No intermediate classes or any additional step is required.")},{title:r.a.createElement(r.a.Fragment,null,"Focus on What Matters"),imageUrl:"img/undraw_docusaurus_tree.svg",description:r.a.createElement(r.a.Fragment,null,"Forget about mongoose ",r.a.createElement("strong",null,"Schema"),", define your models using typescript decorators and let ",r.a.createElement("strong",null,"GooseTyped")," do the rest. Discriminators? Extending Schemas? who cares... GooseTyped will take care of it for you.")},{title:r.a.createElement(r.a.Fragment,null,"Code Reuse"),imageUrl:"img/undraw_docusaurus_react.svg",description:r.a.createElement(r.a.Fragment,null,"Wether you extend your models using inheritance or composition (via mixins),",r.a.createElement("strong",null," GooseTyped")," got you covered. Creating models and reusing code is now natural.")}];function N({imageUrl:e,title:t,description:n}){const a=Object(u.a)(e);return r.a.createElement("div",{className:l()("col col--4",E.a.feature)},a&&r.a.createElement("div",{className:"text--center"},r.a.createElement("img",{className:E.a.featureImage,src:a,alt:t})),r.a.createElement("h3",null,t),r.a.createElement("p",null,n))}t.default=function(){const e=Object(m.a)(),{siteConfig:t={}}=e;return r.a.createElement(c.a,{title:""+t.title,description:"Description will go into a meta tag in <head />"},r.a.createElement("header",{className:l()("hero hero--primary",E.a.heroBanner)},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"hero__title"},t.title),r.a.createElement("p",{className:"hero__subtitle"},t.tagline),r.a.createElement("div",{className:E.a.buttons},r.a.createElement(i.a,{className:l()("button button--outline button--secondary button--lg",E.a.getStarted),to:Object(u.a)("docs/getting-started/introduction")},"Get Started")))),r.a.createElement("main",null,r.a.createElement("section",{className:E.a.features},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:l()("col col--6")},r.a.createElement("h3",null,"Turn this..."),r.a.createElement(v,{snippet:"/* customer.ts */\nimport mongoose from 'mongoose';\n\nconst customerSchema = new mongoose.Schema({\n  name: String,\n  age: Number,\n});\n\nexport interface ICustomer extends mongoose.Document {\n  name: string;\n  age: number;\n}\n\nexport const Customer = mongoose.model<ICustomer>('Customer', customerSchema);",lang:"typescript"})),r.a.createElement("div",{className:l()("col col--6")},r.a.createElement("h3",null,"To this..."),r.a.createElement(v,{snippet:"/* customer.ts */\nimport { GtDocument, GtModel } from '@pebula/goosetyped';\n\n@GtDocument()\nexport class Customer extends GtModel() {\n  @GtColumn()\n  name: string;\n\n  @GtColumn()\n  age: number;\n}",lang:"typescript"}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:l()("col")},r.a.createElement(v,{snippet:"import { Customer } from './customer';\n\nconst customer = new Customer({ name: 'John', age: 50 });\n",lang:"typescript"}),"And we're not even scratching the surface of what GooseTyped can do for you...")))),k&&k.length&&r.a.createElement("section",{className:E.a.features},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},k.map((e,t)=>r.a.createElement(N,Object(a.a)({key:t},e))))))))}},161:function(e,t,n){"use strict";n.d(t,"b",(function(){return s}));var a=n(36),o={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","at-rule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]},r=n(0),s={Prism:a.a,theme:o};function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var i=/\r\n|\r|\n/,m=function(e){0===e.length?e.push({types:["plain"],content:"",empty:!0}):1===e.length&&""===e[0].content&&(e[0].empty=!0)},u=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},p=function(e,t){var n=e.plain,a=Object.create(null),o=e.styles.reduce((function(e,n){var a=n.languages,o=n.style;return a&&!a.includes(t)||n.types.forEach((function(t){var n=c({},e[t],o);e[t]=n})),e}),a);return o.root=n,o.plain=c({},n,{backgroundColor:null}),o};function y(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&-1===t.indexOf(a)&&(n[a]=e[a]);return n}var g=function(e){function t(){for(var t=this,n=[],a=arguments.length;a--;)n[a]=arguments[a];e.apply(this,n),l(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?p(e.theme,e.language):void 0;return t.themeDict=n})),l(this,"getLineProps",(function(e){var n=e.key,a=e.className,o=e.style,r=c({},y(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),s=t.getThemeDict(t.props);return void 0!==s&&(r.style=s.plain),void 0!==o&&(r.style=void 0!==r.style?c({},r.style,o):o),void 0!==n&&(r.key=n),a&&(r.className+=" "+a),r})),l(this,"getStyleForToken",(function(e){var n=e.types,a=e.empty,o=n.length,r=t.getThemeDict(t.props);if(void 0!==r){if(1===o&&"plain"===n[0])return a?{display:"inline-block"}:void 0;if(1===o&&!a)return r[n[0]];var s=a?{display:"inline-block"}:{},l=n.map((function(e){return r[e]}));return Object.assign.apply(Object,[s].concat(l))}})),l(this,"getTokenProps",(function(e){var n=e.key,a=e.className,o=e.style,r=e.token,s=c({},y(e,["key","className","style","token"]),{className:"token "+r.types.join(" "),children:r.content,style:t.getStyleForToken(r),key:void 0});return void 0!==o&&(s.style=void 0!==s.style?c({},s.style,o):o),void 0!==n&&(s.key=n),a&&(s.className+=" "+a),s}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,a=e.code,o=e.children,r=this.getThemeDict(this.props),s=t.languages[n];return o({tokens:function(e){for(var t=[[]],n=[e],a=[0],o=[e.length],r=0,s=0,l=[],c=[l];s>-1;){for(;(r=a[s]++)<o[s];){var p=void 0,y=t[s],g=n[s][r];if("string"==typeof g?(y=s>0?y:["plain"],p=g):(y=u(y,g.type),g.alias&&(y=u(y,g.alias)),p=g.content),"string"==typeof p){var d=p.split(i),h=d.length;l.push({types:y,content:d[0]});for(var f=1;f<h;f++)m(l),c.push(l=[]),l.push({types:y,content:d[f]})}else s++,t.push(y),n.push(p),a.push(0),o.push(p.length)}s--,t.pop(),n.pop(),a.pop(),o.pop()}return m(l),c}(void 0!==s?t.tokenize(a,s,n):[a]),className:"prism-code language-"+n,style:void 0!==r?r.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(r.Component);t.a=g},177:function(e,t){e.exports={plain:{color:"#f8f8f2",backgroundColor:"#272822"},styles:[{types:["comment"],style:{color:"rgb(136, 132, 111)"}},{types:["string","changed"],style:{color:"rgb(230, 219, 116)"}},{types:["punctuation","tag","deleted"],style:{color:"rgb(249, 38, 114)"}},{types:["number","builtin"],style:{color:"rgb(174, 129, 255)"}},{types:["variable"],style:{color:"rgb(248, 248, 242)"}},{types:["function","attr-name","inserted"],style:{color:"rgb(166, 226, 46)"}}]}}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{137:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(1),o=a(6),r=(a(0),a(148)),i=a(152),c={id:"metadata",title:"Metadata",sidebar_label:"1. Metadata"},s={id:"basics/metadata",title:"Metadata",description:"Metadata is the information required to define a model and we can divide it to 2 parts:",source:"@site/docs/basics/metadata.md",permalink:"/pebula-node/goosetyped/docs/basics/metadata",editUrl:"https://github.com/shlomiassaf/pebula-node/tree/master/packages/goosetyped/website/docs/basics/metadata.md",sidebar_label:"1. Metadata",sidebar:"someSidebar",previous:{title:"Basic Usage",permalink:"/pebula-node/goosetyped/docs/getting-started/basic-example"},next:{title:"Columns",permalink:"/pebula-node/goosetyped/docs/basics/columns"}},l=[{value:"Mongoose metadata",id:"mongoose-metadata",children:[]},{value:"GooseTyped metadata",id:"goosetyped-metadata",children:[]}],d={rightToc:l};function p(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Metadata is the information required to define a model and we can divide it to 2 parts:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Column of the model and metadata about them"),Object(r.b)("li",{parentName:"ol"},"Metadata about the model itself (compound index's, collation, versioning, etc...)")),Object(r.b)("h2",{id:"mongoose-metadata"},"Mongoose metadata"),Object(r.b)("p",null,"In mongoose we define all the metadata in the ",Object(r.b)("inlineCode",{parentName:"p"},"Schema")," class."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Column metadata is defined by providing a ",Object(r.b)("inlineCode",{parentName:"li"},"SchemaDefinition")," object."),Object(r.b)("li",{parentName:"ol"},"Metadata about the model is defined by providing a ",Object(r.b)("inlineCode",{parentName:"li"},"SchemaOptions"),".")),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-typescript"}),"import { SchemaDefinition, SchemaOptions, Schema } from 'mongoose';\n\nconst columnMetadata: SchemaDefinition = {\n  name: Schema.Types.String,\n};\n\nconst modelMetadata: SchemaOptions = {\n  collection: 'data',\n};\n\nvar dataSchema = new Schema(columnMetadata, modelMetadata);\n")),Object(r.b)("h2",{id:"goosetyped-metadata"},"GooseTyped metadata"),Object(r.b)("p",null,"In ",Object(r.b)("strong",{parentName:"p"},"GooseTyped")," metadata is defined as part of the class definition, as an additional parameter sent to decorators."),Object(r.b)("p",null,"In most cases the decorators does not require additional metadata and provide a default behavior that will usually suffice, however\nif you wish to change it you can."),Object(r.b)("p",null,"You'll notice that some metadata options will match directly to mongoose options and some will not. ",Object(r.b)("strong",{parentName:"p"},"GooseTyped")," goal is to simplify how\nmodels are defined and it abstracts away some of the options to reduce the complexity."),Object(r.b)("p",null,"For example, the ",Object(r.b)(i.a,{type:"schema",hash:"skipVersioning",mdxType:"MongooseDocsLink"})," option is set on the model options\nin mongoose but in ",Object(r.b)("strong",{parentName:"p"},"GooseTyped")," it is set per column and ",Object(r.b)("strong",{parentName:"p"},"GooseTyped")," will created the proper definition for the entire model\nfrom all of the column."))}p.isMDXComponent=!0},148:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return b}));var n=a(0),o=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var l=o.a.createContext({}),d=function(e){var t=o.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c({},t,{},e)),a},p=function(e){var t=d(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(a),u=n,b=p["".concat(i,".").concat(u)]||p[u]||m[u]||r;return a?o.a.createElement(b,c({ref:t},l,{components:a})):o.a.createElement(b,c({ref:t},l))}));function b(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<r;l++)i[l]=a[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},149:function(e,t,a){"use strict";var n=a(0),o=a(35);t.a=function(){return Object(n.useContext)(o.a)}},152:function(e,t,a){"use strict";var n=a(0),o=a.n(n),r=(a(94),a(149));t.a=function(e){const t=Object(r.a)(),{type:a,hash:n,display:i}=e,c=`${t.siteConfig.customFields.mongooseDocsUrl}/${function(e){switch(e){case"schema":return"guide";case"schemaType":return"SchemaTypes";case"connection":return"Connections";case"model":return"Models";case"document":return"Documents";case"subDocument":return"subdocs";case"query":return"Queries";case"validation":return"Validation";case"middleware":return"Middleware";case"populate":return"Populate";case"discriminator":return"Discriminators";case"plugins":return"Plugins"}throw new Error("Unknown link segment type "+e)}(a).toLowerCase()}.html${n?"#"+n:""}`;return o.a.createElement("a",{href:c,target:"_blank"},e.children||i||n||"")}}}]);
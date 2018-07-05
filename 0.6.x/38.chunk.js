(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{213:function(e,n){e.exports="# Get Start\n\n<example />"},214:function(e,n){e.exports="## 安装\n```\n$ npm install shineout\n```\n\n## 使用\n``` js\nimport { Table } from 'shineout'\n\n<Table />\n```\n\n## 配置\n\n### theme 主题\n\n目前内置支持了两套主题，bootstrap（v3版本, 默认），和兼容 ant-design 的主题 'antd'（方便两个组件库混用的场景，只是配色接近，交互和接口参数不同）。\n\n可以通过修改 webpack 的 less-loader 配置来切换主题。\n```\n{\n  loader: 'less-loader',\n  options: {\n    modifyVars: {\n      'so-theme': 'antd'\n    }\n  }\n}\n```\n\n### CSS 前缀\n\n默认通过前缀来隔离 css 代码，默认的前缀是 'so'。通常情况下，不需要修改。如果想修改这个值，修改 webpack 的 less-loader 配置\n```\n{\n  loader: 'less-loader',\n  options: {\n    modifyVars: {\n      'so-prefix': 'your-prefix'\n    }\n  }\n}\n``` \n\n在项目内设置 config\n\n```\nimport config from 'shineout/config'\nconfig.setConfig({\n  prefix: 'your-prefix'\n})\n```\n```\n// 或者修改webpack 的 process.env\nplugins: [\n  new webpack.DefinePlugin({\n    'process.env': {\n      SO_PREFIX: JSON.stringify('your-prefix'),\n    },\n  }),\n],\n```\n\n### CSS Module\n\n如果需要使用 CSS Module，首先修改 webpack 的 css-loader 配置\n```\n{\n  loader: 'css-loader',\n  options: {\n    module: true,\n    localIdentName: '[local]--[hash:base64:5]'\n  }\n}\n```\n\n在应用入口设置 config.cssModule 为 true\n```\nimport config from 'shineout/config'\nconfig.setConfig({\n  cssModule: true\n})\n\n```\n```\n// 或者修改 webpack 的 process.env\nplugins: [\n  new webpack.DefinePlugin({\n    'process.env': {\n      CSS_MODULE: true\n    },\n  }),\n],\n```\n\n\n## I18N\n\n组件库中部分组件（Datepicker，Select，Modal等）内置了部分文字，暂时为简体中文（zh-CN）和英文（en-US）两组。默认为英文（en-US），可以通过 webpack 的 process.env 切换\n```\nplugins: [\n  new webpack.DefinePlugin({\n    'process.env': {\n      LOCALE: JSON.stringify('zh-CN'),\n    },\n  }),\n],\n```\n\n或者调用 locale 的 setLocale 方法\n\n```\nimport { setLocale } from 'shineout'\nsetLocale('zh-CN')\n```\n\nsetLocale 也可以传入一个 Json 数据设置部分值\n\n```\nsetLocale({ ok: 'yes' })\n```\n\n当前 locale 内容如下:\n\n<example name=\"locale\" />"},233:function(e,n){},234:function(e,n){},235:function(e,n){},5:function(e,n,t){"use strict";var r=t(0),o=t.n(r),a=(t(3),t(105)),i=t.n(a),c=t(42),l=t(28),s=t(2),u=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}();function f(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}var p=function(e){function n(){var e,t,r;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);for(var o=arguments.length,a=Array(o),i=0;i<o;i++)a[i]=arguments[i];return t=r=f(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(a))),r.bindElement=function(e){r.element=e},f(r,t)}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,r["PureComponent"]),u(n,[{key:"componentDidMount",value:function(){this.highlightCode()}},{key:"componentDidUpdate",value:function(){this.highlightCode()}},{key:"highlightCode",value:function(){window.hljs.highlightBlock(this.element),this.props.onHighLight&&this.props.onHighLight(this.element.offsetHeight)}},{key:"render",value:function(){return o.a.createElement("pre",null,o.a.createElement("code",{ref:this.bindElement,className:this.props.language},this.props.value))}}]),n}();p.defaultProps={language:""};var d=p,h=function(){return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,n){var t=[],r=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(t.push(i.value),!n||t.length!==n);r=!0);}catch(e){o=!0,a=e}finally{try{!r&&c.return&&c.return()}finally{if(o)throw a}}return t}(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),m=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}();var b=Object(l.a)(t(235),"example"),y=function(e){function n(e){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);var t=function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));t.setCodeBlockHeight=function(e){t.codeHeight=e},t.bindCodeBlock=function(e){t.codeblock=e},t.state={showcode:!1};var r=e.title.split("\n"),o=h(r,1)[0];return t.id="h-"+Object(c.a)(o),e.appendHeading({id:t.id,level:3,children:[o]}),t}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,r["PureComponent"]),m(n,[{key:"collapse",value:function(e,n,t){var r=this;this.codeblock.style.height=e*(n-1)+"px",n>1&&setTimeout(function(){r.collapse(e,n-1,t)},16),t&&(document.documentElement.scrollTop-=e)}},{key:"toggleCode",value:function(e){var n=this,t=!this.state.showcode;this.setState({showcode:t},function(){if(t)n.codeblock.style.height=n.codeHeight+"px";else{var r=n.codeHeight%15;r>0&&n.collapse(r,1,e),n.collapse((n.codeHeight-r)/15,15,e)}})}},{key:"renderCodeHandle",value:function(e){var n=this.state.showcode;return o.a.createElement("a",{href:"javascript:;",className:b("toggle"),onClick:this.toggleCode.bind(this,e)},"<",n?"/":" ",">")}},{key:"render",value:function(){var e,n=this.props,t=n.component,a=n.rawText,i=this.state.showcode,c=a.replace(/(^|\n|\r)\s*\/\*[\s\S]*?\*\/\s*(?:\r|\n|$)/,"").trim(),l=this.props.title.split("\n"),s=(e=l,Array.isArray(e)?e:Array.from(e)),u=s[0],f=s.slice(1);return o.a.createElement(r.Fragment,null,o.a.createElement("div",{id:this.id,className:b("title")},u,f.length>0&&o.a.createElement("div",{className:b("sub-title")},f.map(function(e,n){return o.a.createElement("div",{key:n,dangerouslySetInnerHTML:{__html:e}})}))),o.a.createElement("div",{className:b("_",i&&"showcode")},o.a.createElement("div",{className:b("body")},Object(r.createElement)(t),this.renderCodeHandle(!1)),o.a.createElement("div",{ref:this.bindCodeBlock,className:b("code")},this.renderCodeHandle(!0),o.a.createElement(d,{onHighLight:this.setCodeBlockHeight,onClose:this.toggleCode,language:"jsx",value:c}))))}}]),n}();y.defaultProps={appendHeading:function(){},rawText:""};var g=y,v=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}();var w=Object(l.a)(t(234),"markdown"),O=/^<code name="([\w|-]+)" /,E=/^<example name="([\w|-]+)"/,j=function(e){function n(e){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);var t=function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.headings=[],t.appendHeading=t.appendHeading.bind(t),t}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,r["PureComponent"]),v(n,[{key:"componentDidMount",value:function(){this.props.onHeadingSetted&&this.props.onHeadingSetted(this.headings)}},{key:"appendHeading",value:function(e){this.headings.push(e)}},{key:"renderCode",value:function(e){var n=this.props.codes[e];return n?o.a.createElement(r.Fragment,null,o.a.createElement(d,{language:"jsx",value:n.text}),n.log.map(function(e,n){return o.a.createElement("div",{key:n,className:w("console")},e)})):(console.error("Code "+e+" not existed"),null)}},{key:"renderExamples",value:function(){var e=this,n=this.props.examples;if(!n)return o.a.createElement("div",null);var t=Object(s.a)("示例","Example"),a="h-"+Object(c.a)("Example");return this.appendHeading({id:a,level:2,children:[t]}),o.a.createElement(r.Fragment,null,o.a.createElement("h2",{id:a},t),n.map(function(n,t){if(/\d+-/.test(n.name))return o.a.createElement(g,Object.assign({key:t,appendHeading:e.appendHeading},n))}))}},{key:"renderExample",value:function(e){var n=(this.props.examples||[]).find(function(n){return n.name===e});return n?o.a.createElement(g,n):null}},{key:"render",value:function(){var e=this,n=this.props.source;return this.headings=[],o.a.createElement(i.a,{className:w("_"),source:n,renderers:{code:d,heading:function(n){var t=n.level,r=n.children,a="h-"+Object(c.a)(r[0]);2!==t&&3!==t||e.appendHeading({id:a,level:t,children:r});var i="h"+t;return o.a.createElement(i,{id:a},r)},html:function(n){var t=n.value;if("<example />"===t)return e.renderExamples();var r=t.match(E);if(r)return e.renderExample(r[1],t.indexOf("noExpand")>=0);if("<br>"===t||"<br />"===t)return o.a.createElement("br",null);var a=t.match(O);return a?e.renderCode(a[1]):null}}})}}]),n}();j.defaultProps={children:null,examples:null,onHeadingSetted:void 0};var k=j,_=t(51),x=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}();var C=t(6);t.d(n,"a",function(){return H});var P,S=((P=function(e){function n(e){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);var t=function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.state={source:t.props.source},t}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,r.PureComponent),x(n,[{key:"componentDidMount",value:function(){var e=this;this.props.loader&&this.props.loader().then(function(n){e.setState({source:n})})}},{key:"render",value:function(){var e=this.state.source;return e?o.a.createElement(k,Object.assign({},this.props,{source:e})):o.a.createElement(_.a,{style:{minHeight:200}})}}]),n}()).defaultProps={loader:void 0,source:void 0},P);n.b=S;function H(e){return Object(C.a)(function(n){return o.a.createElement(S,Object.assign({},n,{loader:e}))})}},6:function(e,n,t){"use strict";var r=t(0),o=t.n(r),a=t(104),i=t(50),c=t(28),l=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}();function s(e){if(Array.isArray(e)){for(var n=0,t=Array(e.length);n<e.length;n++)t[n]=e[n];return t}return Array.from(e)}var u=Object(c.a)(t(233),"nav");n.a=function(e){return function(n){function t(e){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={headings:[]},n.setHeading=n.setHeading.bind(n),n}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(t,r["PureComponent"]),l(t,[{key:"setHeading",value:function(e){this.setState({headings:[].concat(s(this.state.headings),s(e))})}},{key:"renderNav",value:function(){var e=this.state.headings;return o.a.createElement(i.a,{className:u("sticky"),top:50},o.a.createElement("div",{className:u("nav")},e.map(function(e,n){var t=e.children.filter(function(e){return"string"==typeof e});return o.a.createElement(a.a,{key:n,className:u("level-"+e.level),to:"#"+e.id},t)})))}},{key:"render",value:function(){return o.a.createElement("div",{className:u("_")},o.a.createElement(e,{onHeadingSetted:this.setHeading}),this.renderNav())}}]),t}()}},895:function(e,n){e.exports="import React from 'react'\nimport { getLocale } from 'shineout/locale'\n\nexport default function () {\n  return <pre>{JSON.stringify(getLocale(), null, 2)}</pre>\n}\n"},896:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),a=t(26);n.default=function(){return o.a.createElement("pre",null,JSON.stringify(Object(a.a)(),null,2))}},897:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),a=t(6),i=t(5),c=t(2),l=t(214),s=t.n(l),u=t(213),f=t.n(u),p=Object(c.a)(s.a,f.a),d=[{name:"locale",title:Object(c.a)("",""),component:t(896).default,rawText:t(895)}];n.default=Object(a.a)(function(e){return o.a.createElement(i.b,Object.assign({},e,{codes:void 0,source:p,examples:d}))})}}]);
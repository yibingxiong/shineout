(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{180:function(e,t){e.exports=""},181:function(e,t){e.exports='# Data.Form 表单数据处理\n\nForm 表单数据处理辅助类。\n\n## 示例\n\n<code name="example" />\n\n实际使用见 [Form](#/components/Form)\n\n## 初始化参数\n\n### removeUndefined *boolean*\n\n是否移除值为 undefined 的数据，默认值为 true。\n\n### onChange *function(data)*\n\n值变化时回调函数。\n\n## 函数\n\n### getValue *function():object*\n获取当前表单所有对象值。\n\n### setValue *function(object)*\n设置值。新的值会替代当前值。\n\n### set *fuction(name, value)*\n设置数据。\n\n### get *fuction(name)*\n获取单个字段值。'},233:function(e,t){},234:function(e,t){},235:function(e,t){},27:function(e,t,n){"use strict";var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var o=window.console,a=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.logs={default:[]},this.current=this.logs.default}return r(e,[{key:"setType",value:function(e){this.logs[e]||(this.logs[e]=[]),this.current=this.logs[e]}},{key:"log",value:function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=t.map(function(e){return""+JSON.stringify(e)});this.current.push(r)}}]),e}();t.a={start:function(){window.console=new a},setType:function(e){window.console.setType(e)},end:function(){var e=window.console.logs;return window.console=o,e}}},489:function(e,t){e.exports="import { Datum } from 'shineout'\n\nconst datum = new Datum.Form()\n\ndatum.setValue({ email: 'test@123.com', name: { lastName: 'Potter' } })\ndatum.set('age', 20)\ndatum.set('name.firstName', 'Harry')\nconsole.log(datum.get('age'))\nconsole.log(datum.get('name'))\nconsole.log(datum.get('name.firstName'))\nconsole.log(datum.get('name.lastName'))\nconsole.log(datum.getValue())\n"},490:function(e,t,n){"use strict";n.r(t);var r=new(n(1).h.Form);r.setValue({email:"test@123.com",name:{lastName:"Potter"}}),r.set("age",20),r.set("name.firstName","Harry"),console.log(r.get("age")),console.log(r.get("name")),console.log(r.get("name.firstName")),console.log(r.get("name.lastName")),console.log(r.getValue())},491:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(6),i=n(5),c=n(27),l=n(2),u=n(181),s=n.n(u),f=n(180),p=n.n(f),d=Object(l.a)(s.a,p.a),h=[];c.a.start(),c.a.setType("example"),n(490);var m=c.a.end(),g={example:{text:n(489),log:m.example}};t.default=Object(a.a)(function(e){return o.a.createElement(i.b,Object.assign({},e,{codes:g,source:d,examples:h}))})},5:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=(n(3),n(105)),i=n.n(a),c=n(42),l=n(28),u=n(2),s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function f(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var p=function(e){function t(){var e,n,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,a=Array(o),i=0;i<o;i++)a[i]=arguments[i];return n=r=f(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),r.bindElement=function(e){r.element=e},f(r,n)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r["PureComponent"]),s(t,[{key:"componentDidMount",value:function(){this.highlightCode()}},{key:"componentDidUpdate",value:function(){this.highlightCode()}},{key:"highlightCode",value:function(){window.hljs.highlightBlock(this.element),this.props.onHighLight&&this.props.onHighLight(this.element.offsetHeight)}},{key:"render",value:function(){return o.a.createElement("pre",null,o.a.createElement("code",{ref:this.bindElement,className:this.props.language},this.props.value))}}]),t}();p.defaultProps={language:""};var d=p,h=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,o=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(r=(i=c.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{!r&&c.return&&c.return()}finally{if(o)throw a}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),m=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var g=Object(l.a)(n(235),"example"),y=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));n.setCodeBlockHeight=function(e){n.codeHeight=e},n.bindCodeBlock=function(e){n.codeblock=e},n.state={showcode:!1};var r=e.title.split("\n"),o=h(r,1)[0];return n.id="h-"+Object(c.a)(o),e.appendHeading({id:n.id,level:3,children:[o]}),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r["PureComponent"]),m(t,[{key:"collapse",value:function(e,t,n){var r=this;this.codeblock.style.height=e*(t-1)+"px",t>1&&setTimeout(function(){r.collapse(e,t-1,n)},16),n&&(document.documentElement.scrollTop-=e)}},{key:"toggleCode",value:function(e){var t=this,n=!this.state.showcode;this.setState({showcode:n},function(){if(n)t.codeblock.style.height=t.codeHeight+"px";else{var r=t.codeHeight%15;r>0&&t.collapse(r,1,e),t.collapse((t.codeHeight-r)/15,15,e)}})}},{key:"renderCodeHandle",value:function(e){var t=this.state.showcode;return o.a.createElement("a",{href:"javascript:;",className:g("toggle"),onClick:this.toggleCode.bind(this,e)},"<",t?"/":" ",">")}},{key:"render",value:function(){var e,t=this.props,n=t.component,a=t.rawText,i=this.state.showcode,c=a.replace(/(^|\n|\r)\s*\/\*[\s\S]*?\*\/\s*(?:\r|\n|$)/,"").trim(),l=this.props.title.split("\n"),u=(e=l,Array.isArray(e)?e:Array.from(e)),s=u[0],f=u.slice(1);return o.a.createElement(r.Fragment,null,o.a.createElement("div",{id:this.id,className:g("title")},s,f.length>0&&o.a.createElement("div",{className:g("sub-title")},f.map(function(e,t){return o.a.createElement("div",{key:t,dangerouslySetInnerHTML:{__html:e}})}))),o.a.createElement("div",{className:g("_",i&&"showcode")},o.a.createElement("div",{className:g("body")},Object(r.createElement)(n),this.renderCodeHandle(!1)),o.a.createElement("div",{ref:this.bindCodeBlock,className:g("code")},this.renderCodeHandle(!0),o.a.createElement(d,{onHighLight:this.setCodeBlockHeight,onClose:this.toggleCode,language:"jsx",value:c}))))}}]),t}();y.defaultProps={appendHeading:function(){},rawText:""};var b=y,v=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var w=Object(l.a)(n(234),"markdown"),E=/^<code name="([\w|-]+)" /,O=/^<example name="([\w|-]+)"/,j=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.headings=[],n.appendHeading=n.appendHeading.bind(n),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r["PureComponent"]),v(t,[{key:"componentDidMount",value:function(){this.props.onHeadingSetted&&this.props.onHeadingSetted(this.headings)}},{key:"appendHeading",value:function(e){this.headings.push(e)}},{key:"renderCode",value:function(e){var t=this.props.codes[e];return t?o.a.createElement(r.Fragment,null,o.a.createElement(d,{language:"jsx",value:t.text}),t.log.map(function(e,t){return o.a.createElement("div",{key:t,className:w("console")},e)})):(console.error("Code "+e+" not existed"),null)}},{key:"renderExamples",value:function(){var e=this,t=this.props.examples;if(!t)return o.a.createElement("div",null);var n=Object(u.a)("示例","Example"),a="h-"+Object(c.a)("Example");return this.appendHeading({id:a,level:2,children:[n]}),o.a.createElement(r.Fragment,null,o.a.createElement("h2",{id:a},n),t.map(function(t,n){if(/\d+-/.test(t.name))return o.a.createElement(b,Object.assign({key:n,appendHeading:e.appendHeading},t))}))}},{key:"renderExample",value:function(e){var t=(this.props.examples||[]).find(function(t){return t.name===e});return t?o.a.createElement(b,t):null}},{key:"render",value:function(){var e=this,t=this.props.source;return this.headings=[],o.a.createElement(i.a,{className:w("_"),source:t,renderers:{code:d,heading:function(t){var n=t.level,r=t.children,a="h-"+Object(c.a)(r[0]);2!==n&&3!==n||e.appendHeading({id:a,level:n,children:r});var i="h"+n;return o.a.createElement(i,{id:a},r)},html:function(t){var n=t.value;if("<example />"===n)return e.renderExamples();var r=n.match(O);if(r)return e.renderExample(r[1],n.indexOf("noExpand")>=0);if("<br>"===n||"<br />"===n)return o.a.createElement("br",null);var a=n.match(E);return a?e.renderCode(a[1]):null}}})}}]),t}();j.defaultProps={children:null,examples:null,onHeadingSetted:void 0};var _=j,k=n(51),x=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var H=n(6);n.d(t,"a",function(){return N});var P,C=((P=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={source:n.props.source},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r.PureComponent),x(t,[{key:"componentDidMount",value:function(){var e=this;this.props.loader&&this.props.loader().then(function(t){e.setState({source:t})})}},{key:"render",value:function(){var e=this.state.source;return e?o.a.createElement(_,Object.assign({},this.props,{source:e})):o.a.createElement(k.a,{style:{minHeight:200}})}}]),t}()).defaultProps={loader:void 0,source:void 0},P);t.b=C;function N(e){return Object(H.a)(function(t){return o.a.createElement(C,Object.assign({},t,{loader:e}))})}},6:function(e,t,n){"use strict";var r=n(0),o=n.n(r),a=n(104),i=n(50),c=n(28),l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();function u(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}var s=Object(c.a)(n(233),"nav");t.a=function(e){return function(t){function n(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n);var t=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.state={headings:[]},t.setHeading=t.setHeading.bind(t),t}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(n,r["PureComponent"]),l(n,[{key:"setHeading",value:function(e){this.setState({headings:[].concat(u(this.state.headings),u(e))})}},{key:"renderNav",value:function(){var e=this.state.headings;return o.a.createElement(i.a,{className:s("sticky"),top:50},o.a.createElement("div",{className:s("nav")},e.map(function(e,t){var n=e.children.filter(function(e){return"string"==typeof e});return o.a.createElement(a.a,{key:t,className:s("level-"+e.level),to:"#"+e.id},n)})))}},{key:"render",value:function(){return o.a.createElement("div",{className:s("_")},o.a.createElement(e,{onHeadingSetted:this.setHeading}),this.renderNav())}}]),n}()}}}]);
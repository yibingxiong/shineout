(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{203:function(e,n){e.exports="# Checkbox\n\n<example />"},204:function(e,n){e.exports="# Checkbox *复选框*\n\nCheckbox 可以单独使用。一组Checkbox使用时，使用一个Array类型的属性 data 来控制选项。\n\n<example />\n\n## API\n\n### Checkbox\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| checked | bool \\| 'indeterminate' | 无 | checked 传入时为受控组件 |\n| disabled | bool | false | 是否禁用 |\n| htmlValue | any | true | 选中时返回值 |\n| name | string | 无 | Form 存取数据的名称 |\n| onChange | function(value,checked) | 无 | 选中时，value 为 htmlValue，checked 为 true<br />未选中时，value 为 undefined，checked 为 false |\n| value | any | 无 | 如果 checked 未设置，checked 状态为 value === htmlValue |\n\n### Checkbox.Group\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| data | array | 必填 | 数据项 |\n| datum | object | 无 | 数据处理，可以传入一个 [Datum.List](#/components/Datum.List) 对象，或者 Datum.List 配置 |\n| defaultValue | array | | 初始值 |\n| disabled | bool | false | 是否禁用 |\n| name | string | 无 | Form 存取数据的名称 |\n| keygen | string \\| function(obj):string | index | 生成每一项key的辅助方法<br />不填的情况下，会使用index(不推荐，在某些情况下可能会有问题)<br />为函数时，使用此函数返回值<br />为string时，使用这个string对应的数据值。如 'id'，相当于 (d) => d.id |\n| onChange | function(value) | 无 | value 为 datum.getValue() |\n| renderItem | string \\| function(d) | 必填 | 为 string 时，返回 d\\[string]<br />为 function 时，返回函数结果 |\n| value | array | | 在Form中，value会被表单接管，value无效 |"},233:function(e,n){},234:function(e,n){},235:function(e,n){},5:function(e,n,t){"use strict";var o=t(0),r=t.n(o),a=(t(3),t(105)),c=t.n(a),i=t(42),l=t(28),u=t(2),d=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}();function s(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}var f=function(e){function n(){var e,t,o;!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);for(var r=arguments.length,a=Array(r),c=0;c<r;c++)a[c]=arguments[c];return t=o=s(this,(e=n.__proto__||Object.getPrototypeOf(n)).call.apply(e,[this].concat(a))),o.bindElement=function(e){o.element=e},s(o,t)}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,o["PureComponent"]),d(n,[{key:"componentDidMount",value:function(){this.highlightCode()}},{key:"componentDidUpdate",value:function(){this.highlightCode()}},{key:"highlightCode",value:function(){window.hljs.highlightBlock(this.element),this.props.onHighLight&&this.props.onHighLight(this.element.offsetHeight)}},{key:"render",value:function(){return r.a.createElement("pre",null,r.a.createElement("code",{ref:this.bindElement,className:this.props.language},this.props.value))}}]),n}();f.defaultProps={language:""};var p=f,h=function(){return function(e,n){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,n){var t=[],o=!0,r=!1,a=void 0;try{for(var c,i=e[Symbol.iterator]();!(o=(c=i.next()).done)&&(t.push(c.value),!n||t.length!==n);o=!0);}catch(e){r=!0,a=e}finally{try{!o&&i.return&&i.return()}finally{if(r)throw a}}return t}(e,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),m=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}();var b=Object(l.a)(t(235),"example"),y=function(e){function n(e){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);var t=function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));t.setCodeBlockHeight=function(e){t.codeHeight=e},t.bindCodeBlock=function(e){t.codeblock=e},t.state={showcode:!1};var o=e.title.split("\n"),r=h(o,1)[0];return t.id="h-"+Object(i.a)(r),e.appendHeading({id:t.id,level:3,children:[r]}),t}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,o["PureComponent"]),m(n,[{key:"collapse",value:function(e,n,t){var o=this;this.codeblock.style.height=e*(n-1)+"px",n>1&&setTimeout(function(){o.collapse(e,n-1,t)},16),t&&(document.documentElement.scrollTop-=e)}},{key:"toggleCode",value:function(e){var n=this,t=!this.state.showcode;this.setState({showcode:t},function(){if(t)n.codeblock.style.height=n.codeHeight+"px";else{var o=n.codeHeight%15;o>0&&n.collapse(o,1,e),n.collapse((n.codeHeight-o)/15,15,e)}})}},{key:"renderCodeHandle",value:function(e){var n=this.state.showcode;return r.a.createElement("a",{href:"javascript:;",className:b("toggle"),onClick:this.toggleCode.bind(this,e)},"<",n?"/":" ",">")}},{key:"render",value:function(){var e,n=this.props,t=n.component,a=n.rawText,c=this.state.showcode,i=a.replace(/(^|\n|\r)\s*\/\*[\s\S]*?\*\/\s*(?:\r|\n|$)/,"").trim(),l=this.props.title.split("\n"),u=(e=l,Array.isArray(e)?e:Array.from(e)),d=u[0],s=u.slice(1);return r.a.createElement(o.Fragment,null,r.a.createElement("div",{id:this.id,className:b("title")},d,s.length>0&&r.a.createElement("div",{className:b("sub-title")},s.map(function(e,n){return r.a.createElement("div",{key:n,dangerouslySetInnerHTML:{__html:e}})}))),r.a.createElement("div",{className:b("_",c&&"showcode")},r.a.createElement("div",{className:b("body")},Object(o.createElement)(t),this.renderCodeHandle(!1)),r.a.createElement("div",{ref:this.bindCodeBlock,className:b("code")},this.renderCodeHandle(!0),r.a.createElement(p,{onHighLight:this.setCodeBlockHeight,onClose:this.toggleCode,language:"jsx",value:i}))))}}]),n}();y.defaultProps={appendHeading:function(){},rawText:""};var v=y,g=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}();var k=Object(l.a)(t(234),"markdown"),x=/^<code name="([\w|-]+)" /,C=/^<example name="([\w|-]+)"/,w=function(e){function n(e){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);var t=function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.headings=[],t.appendHeading=t.appendHeading.bind(t),t}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,o["PureComponent"]),g(n,[{key:"componentDidMount",value:function(){this.props.onHeadingSetted&&this.props.onHeadingSetted(this.headings)}},{key:"appendHeading",value:function(e){this.headings.push(e)}},{key:"renderCode",value:function(e){var n=this.props.codes[e];return n?r.a.createElement(o.Fragment,null,r.a.createElement(p,{language:"jsx",value:n.text}),n.log.map(function(e,n){return r.a.createElement("div",{key:n,className:k("console")},e)})):(console.error("Code "+e+" not existed"),null)}},{key:"renderExamples",value:function(){var e=this,n=this.props.examples;if(!n)return r.a.createElement("div",null);var t=Object(u.a)("示例","Example"),a="h-"+Object(i.a)("Example");return this.appendHeading({id:a,level:2,children:[t]}),r.a.createElement(o.Fragment,null,r.a.createElement("h2",{id:a},t),n.map(function(n,t){if(/\d+-/.test(n.name))return r.a.createElement(v,Object.assign({key:t,appendHeading:e.appendHeading},n))}))}},{key:"renderExample",value:function(e){var n=(this.props.examples||[]).find(function(n){return n.name===e});return n?r.a.createElement(v,n):null}},{key:"render",value:function(){var e=this,n=this.props.source;return this.headings=[],r.a.createElement(c.a,{className:k("_"),source:n,renderers:{code:p,heading:function(n){var t=n.level,o=n.children,a="h-"+Object(i.a)(o[0]);2!==t&&3!==t||e.appendHeading({id:a,level:t,children:o});var c="h"+t;return r.a.createElement(c,{id:a},o)},html:function(n){var t=n.value;if("<example />"===t)return e.renderExamples();var o=t.match(C);if(o)return e.renderExample(o[1],t.indexOf("noExpand")>=0);if("<br>"===t||"<br />"===t)return r.a.createElement("br",null);var a=t.match(x);return a?e.renderCode(a[1]):null}}})}}]),n}();w.defaultProps={children:null,examples:null,onHeadingSetted:void 0};var E=w,O=t(51),j=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}();var _=t(6);t.d(n,"a",function(){return T});var H,P=((H=function(e){function n(e){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n);var t=function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(n.__proto__||Object.getPrototypeOf(n)).call(this,e));return t.state={source:t.props.source},t}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(n,o.PureComponent),j(n,[{key:"componentDidMount",value:function(){var e=this;this.props.loader&&this.props.loader().then(function(n){e.setState({source:n})})}},{key:"render",value:function(){var e=this.state.source;return e?r.a.createElement(E,Object.assign({},this.props,{source:e})):r.a.createElement(O.a,{style:{minHeight:200}})}}]),n}()).defaultProps={loader:void 0,source:void 0},H);n.b=P;function T(e){return Object(_.a)(function(n){return r.a.createElement(P,Object.assign({},n,{loader:e}))})}},6:function(e,n,t){"use strict";var o=t(0),r=t.n(o),a=t(104),c=t(50),i=t(28),l=function(){function e(e,n){for(var t=0;t<n.length;t++){var o=n[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(n,t,o){return t&&e(n.prototype,t),o&&e(n,o),n}}();function u(e){if(Array.isArray(e)){for(var n=0,t=Array(e.length);n<e.length;n++)t[n]=e[n];return t}return Array.from(e)}var d=Object(i.a)(t(233),"nav");n.a=function(e){return function(n){function t(e){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,n){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!n||"object"!=typeof n&&"function"!=typeof n?e:n}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={headings:[]},n.setHeading=n.setHeading.bind(n),n}return function(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function, not "+typeof n);e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),n&&(Object.setPrototypeOf?Object.setPrototypeOf(e,n):e.__proto__=n)}(t,o["PureComponent"]),l(t,[{key:"setHeading",value:function(e){this.setState({headings:[].concat(u(this.state.headings),u(e))})}},{key:"renderNav",value:function(){var e=this.state.headings;return r.a.createElement(c.a,{className:d("sticky"),top:50},r.a.createElement("div",{className:d("nav")},e.map(function(e,n){var t=e.children.filter(function(e){return"string"==typeof e});return r.a.createElement(a.a,{key:n,className:d("level-"+e.level),to:"#"+e.id},t)})))}},{key:"render",value:function(){return r.a.createElement("div",{className:d("_")},r.a.createElement(e,{onHeadingSetted:this.setHeading}),this.renderNav())}}]),t}()}},818:function(e,n){e.exports="/**\n * cn - 带输入\n * en - Base\n */\nimport React from 'react'\nimport { Checkbox } from 'shineout'\n\nexport default function () {\n  return (\n    <Checkbox inputable onChange={d => console.log(d)}>more...</Checkbox>\n  )\n}\n"},819:function(e,n,t){"use strict";t.r(n);var o=t(0),r=t.n(o),a=t(1);n.default=function(){return r.a.createElement(a.f,{inputable:!0,onChange:function(e){return console.log(e)}},"more...")}},820:function(e,n){e.exports="/**\n * cn - \\n 使用 datum disabled 实现有条件禁用\n * en - Disabled\n */\nimport React from 'react'\nimport { Checkbox } from 'shineout'\n\nconst data = ['red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'violet']\n\nexport default function () {\n  return (\n    <div>\n      <Checkbox.Group\n        data={data}\n        datum={{ disabled: d => d === 'yellow' }}\n        value={['blue']}\n        renderItem={d => d}\n      />\n    </div>\n  )\n}\n"},821:function(e,n,t){"use strict";t.r(n);var o=t(0),r=t.n(o),a=t(1),c=["red","orange","yellow","green","cyan","blue","violet"];n.default=function(){return r.a.createElement("div",null,r.a.createElement(a.f.Group,{data:c,datum:{disabled:function(e){return"yellow"===e}},value:["blue"],renderItem:function(e){return e}}))}},822:function(e,n){e.exports="/**\n * cn - 禁用\n * en - Disabled\n */\nimport React from 'react'\nimport { Checkbox } from 'shineout'\n\nconst data = ['red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'violet']\n\nexport default function () {\n  return (\n    <div>\n      <Checkbox.Group\n        disabled\n        data={data}\n        value={['blue', 'cyan']}\n        renderItem={d => d}\n      />\n      <br />\n      <Checkbox disabled checked={false}>not checked</Checkbox>\n      <Checkbox disabled checked>checked</Checkbox>\n      <Checkbox disabled checked=\"indeterminate\">indeterminate</Checkbox>\n    </div>\n  )\n}\n"},823:function(e,n,t){"use strict";t.r(n);var o=t(0),r=t.n(o),a=t(1),c=["red","orange","yellow","green","cyan","blue","violet"];n.default=function(){return r.a.createElement("div",null,r.a.createElement(a.f.Group,{disabled:!0,data:c,value:["blue","cyan"],renderItem:function(e){return e}}),r.a.createElement("br",null),r.a.createElement(a.f,{disabled:!0,checked:!1},"not checked"),r.a.createElement(a.f,{disabled:!0,checked:!0},"checked"),r.a.createElement(a.f,{disabled:!0,checked:"indeterminate"},"indeterminate"))}},824:function(e,n){e.exports="/**\n * cn - 垂直布局\n * en - Block\n */\nimport React from 'react'\nimport { Checkbox } from 'shineout'\n\nconst data = [\n  { id: 1, color: 'red' },\n  { id: 2, color: 'orange' },\n  { id: 3, color: 'yellow' },\n  { id: 4, color: 'green' },\n  { id: 5, color: 'cyan' },\n  { id: 6, color: 'blue' },\n  { id: 7, color: 'violet' },\n]\n\nexport default function () {\n  return (\n    <Checkbox.Group\n      keygen=\"id\"\n      block\n      data={data}\n      datum={{ format: 'color' }}\n      onChange={d => console.log(d)}\n      value={['blue', 'cyan']}\n      renderItem=\"color\"\n    />\n  )\n}\n"},825:function(e,n,t){"use strict";t.r(n);var o=t(0),r=t.n(o),a=t(1),c=[{id:1,color:"red"},{id:2,color:"orange"},{id:3,color:"yellow"},{id:4,color:"green"},{id:5,color:"cyan"},{id:6,color:"blue"},{id:7,color:"violet"}];n.default=function(){return r.a.createElement(a.f.Group,{keygen:"id",block:!0,data:c,datum:{format:"color"},onChange:function(e){return console.log(e)},value:["blue","cyan"],renderItem:"color"})}},826:function(e,n){e.exports="/**\n * cn -\n *    -- React 组件方式\n * en -\n */\nimport React from 'react'\nimport { Checkbox } from 'shineout'\n\nconst data = [\n  { id: 1, color: 'red' },\n  { id: 2, color: 'orange' },\n  { id: 3, color: 'yellow' },\n  { id: 4, color: 'green' },\n  { id: 5, color: 'cyan' },\n  { id: 6, color: 'blue' },\n  { id: 7, color: 'violet' },\n]\n\nexport default function () {\n  return (\n    <Checkbox.Group value={[3, 5]} onChange={(value) => { console.log(value) }}>\n      {\n        data.map(d => (\n          <Checkbox key={d.id} htmlValue={d.id}>{d.color}</Checkbox>\n        ))\n      }\n    </Checkbox.Group>\n  )\n}\n\n"},827:function(e,n,t){"use strict";t.r(n);var o=t(0),r=t.n(o),a=t(1),c=[{id:1,color:"red"},{id:2,color:"orange"},{id:3,color:"yellow"},{id:4,color:"green"},{id:5,color:"cyan"},{id:6,color:"blue"},{id:7,color:"violet"}];n.default=function(){return r.a.createElement(a.f.Group,{value:[3,5],onChange:function(e){console.log(e)}},c.map(function(e){return r.a.createElement(a.f,{key:e.id,htmlValue:e.id},e.color)}))}},828:function(e,n){e.exports="/**\n * cn -  \\n 复杂的数据可以使用 datum 进行处理\n */\nimport React from 'react'\nimport { Checkbox } from 'shineout'\n\nconst data = [\n  { id: 1, color: 'red' },\n  { id: 2, color: 'orange' },\n  { id: 3, color: 'yellow' },\n  { id: 4, color: 'green' },\n  { id: 5, color: 'cyan' },\n  { id: 6, color: 'blue' },\n  { id: 7, color: 'violet' },\n]\n\nfunction renderItem(d) {\n  const style = { borderBottom: `solid 1px ${d.color}`, paddingBottom: 2 }\n  return <span style={style}>{d.color}</span>\n}\n\nexport default function () {\n  return (\n    <Checkbox.Group\n      keygen=\"id\"\n      data={data}\n      datum={{ format: 'color' }}\n      onChange={d => console.log(d)}\n      value={['blue', 'cyan']}\n      renderItem={renderItem}\n    />\n  )\n}\n"},829:function(e,n,t){"use strict";t.r(n);var o=t(0),r=t.n(o),a=t(1),c=[{id:1,color:"red"},{id:2,color:"orange"},{id:3,color:"yellow"},{id:4,color:"green"},{id:5,color:"cyan"},{id:6,color:"blue"},{id:7,color:"violet"}];function i(e){var n={borderBottom:"solid 1px "+e.color,paddingBottom:2};return r.a.createElement("span",{style:n},e.color)}n.default=function(){return r.a.createElement(a.f.Group,{keygen:"id",data:c,datum:{format:"color"},onChange:function(e){return console.log(e)},value:["blue","cyan"],renderItem:i})}},830:function(e,n){e.exports="/**\n * cn - 一组多选框\n * en - Group\n */\nimport React from 'react'\nimport { Checkbox } from 'shineout'\n\nconst data = ['red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'violet']\n\nfunction renderItem(color) {\n  const style = { borderBottom: `solid 1px ${color}`, paddingBottom: 2 }\n  return <span style={style}>{color}</span>\n}\n\nexport default function () {\n  return (\n    <Checkbox.Group\n      keygen={c => c}\n      data={data}\n      onChange={c => console.log(c)}\n      value={['blue', 'cyan']}\n      renderItem={renderItem}\n    />\n  )\n}\n"},831:function(e,n,t){"use strict";t.r(n);var o=t(0),r=t.n(o),a=t(1),c=["red","orange","yellow","green","cyan","blue","violet"];function i(e){var n={borderBottom:"solid 1px "+e,paddingBottom:2};return r.a.createElement("span",{style:n},e)}n.default=function(){return r.a.createElement(a.f.Group,{keygen:function(e){return e},data:c,onChange:function(e){return console.log(e)},value:["blue","cyan"],renderItem:i})}},832:function(e,n){e.exports='/**\n * cn - 选中值 \\n 未设置htmlValue的状态下，checkbox选中时返回true，如果设置 htmlValue，返回 htmlValue，未选中返回 undefined。\n * en - Value\n */\nimport React from \'react\'\nimport { Checkbox } from \'shineout\'\n\nexport default function () {\n  return (\n    <Checkbox onChange={v => console.log(v)} htmlValue="ok" value="ok">\n      value is "ok"\n    </Checkbox>\n  )\n}\n'},833:function(e,n,t){"use strict";t.r(n);var o=t(0),r=t.n(o),a=t(1);n.default=function(){return r.a.createElement(a.f,{onChange:function(e){return console.log(e)},htmlValue:"ok",value:"ok"},'value is "ok"')}},834:function(e,n){e.exports="/**\n * cn - 状态 \\n checked 有三个值，选中、未选中、半选。checked 设置时为受控组件（此示例没有处理）。\n * en - Checked\n */\nimport React from 'react'\nimport { Checkbox } from 'shineout'\n\nexport default function () {\n  return (\n    <div>\n      <Checkbox checked={false}>not checked</Checkbox>\n      <Checkbox checked>checked</Checkbox>\n      <Checkbox checked=\"indeterminate\">indeterminate</Checkbox>\n    </div>\n  )\n}\n"},835:function(e,n,t){"use strict";t.r(n);var o=t(0),r=t.n(o),a=t(1);n.default=function(){return r.a.createElement("div",null,r.a.createElement(a.f,{checked:!1},"not checked"),r.a.createElement(a.f,{checked:!0},"checked"),r.a.createElement(a.f,{checked:"indeterminate"},"indeterminate"))}},836:function(e,n){e.exports="/**\n * cn - 基本用法\n * en - Base\n */\nimport React from 'react'\nimport { Checkbox } from 'shineout'\n\nexport default function () {\n  return (\n    <Checkbox>Checkbox</Checkbox>\n  )\n}\n"},837:function(e,n,t){"use strict";t.r(n);var o=t(0),r=t.n(o),a=t(1);n.default=function(){return r.a.createElement(a.f,null,"Checkbox")}},838:function(e,n,t){"use strict";t.r(n);var o=t(0),r=t.n(o),a=t(6),c=t(5),i=t(2),l=t(204),u=t.n(l),d=t(203),s=t.n(d),f=Object(i.a)(u.a,s.a),p=[{name:"1-base",title:Object(i.a)("基本用法","Base"),component:t(837).default,rawText:t(836)},{name:"2-checked",title:Object(i.a)("状态 \n checked 有三个值，选中、未选中、半选。checked 设置时为受控组件（此示例没有处理）。","Checked"),component:t(835).default,rawText:t(834)},{name:"3-value",title:Object(i.a)("选中值 \n 未设置htmlValue的状态下，checkbox选中时返回true，如果设置 htmlValue，返回 htmlValue，未选中返回 undefined。","Value"),component:t(833).default,rawText:t(832)},{name:"4-array",title:Object(i.a)("一组多选框","Group"),component:t(831).default,rawText:t(830)},{name:"4-group",title:Object(i.a)("\n 复杂的数据可以使用 datum 进行处理",""),component:t(829).default,rawText:t(828)},{name:"4-rawgroup",title:Object(i.a)(" \n React 组件方式",""),component:t(827).default,rawText:t(826)},{name:"5-block",title:Object(i.a)("垂直布局","Block"),component:t(825).default,rawText:t(824)},{name:"6-disabled",title:Object(i.a)("禁用","Disabled"),component:t(823).default,rawText:t(822)},{name:"7-disabled",title:Object(i.a)("\n 使用 datum disabled 实现有条件禁用","Disabled"),component:t(821).default,rawText:t(820)},{name:"8-input",title:Object(i.a)("带输入","Base"),component:t(819).default,rawText:t(818)}];n.default=Object(a.a)(function(e){return r.a.createElement(c.b,Object.assign({},e,{codes:void 0,source:f,examples:p}))})}}]);
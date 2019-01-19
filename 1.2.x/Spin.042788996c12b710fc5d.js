(window.webpackJsonpShineoutDoc=window.webpackJsonpShineoutDoc||[]).push([[38],{1113:function(e,n,t){"use strict";t.r(n);var a=t(0),c=t.n(a),r=t(121),i=t(127),o=t(25),l=t(1114),s=t.n(l),u=t(1115),d=t.n(u),m=Object(o.a)(s.a,d.a),p=[{name:"01-default",title:Object(o.a)('default \n name="default"','default \n name="default"'),component:t(1116).default,rawText:t(1117)},{name:"02-chasing-dots",title:Object(o.a)('chasing-dots \n name="chasing-dots"','chasing-dots \n name="chasing-dots"'),component:t(1118).default,rawText:t(1119)},{name:"03-cube-grid",title:Object(o.a)('cube-grid \n name="cube-grid"','cube-grid \n name="cube-grid"'),component:t(1120).default,rawText:t(1121)},{name:"04-double-bounce",title:Object(o.a)('double-bounce \n name="double-bounce"','double-bounce \n name="double-bounce"'),component:t(1122).default,rawText:t(1123)},{name:"05-fading-circle",title:Object(o.a)('fading-circle \n name="fading-circle"','fading-circle \n name="fading-circle"'),component:t(1124).default,rawText:t(1125)},{name:"06-four-dots",title:Object(o.a)('four-dots \n name="four-dots"','four-dots \n name="four-dots"'),component:t(1126).default,rawText:t(1127)},{name:"07-plane",title:Object(o.a)('plane \n name="plane"','plane \n name="plane"'),component:t(1128).default,rawText:t(1129)},{name:"08-pulse",title:Object(o.a)('pulse \n name="pulse"','pulse \n name="pulse"'),component:t(1130).default,rawText:t(1131)},{name:"09-ring",title:Object(o.a)('ring \n name="ring"','ring \n name="ring"'),component:t(1132).default,rawText:t(1133)},{name:"10-scale-circle",title:Object(o.a)('scale-circle \n name="scale-circle"','scale-circle \n name="scale-circle"'),component:t(1134).default,rawText:t(1135)},{name:"11-three-bounce",title:Object(o.a)('three-bounce \n name="three-bounce"','three-bounce \n name="three-bounce"'),component:t(1136).default,rawText:t(1137)},{name:"12-wave",title:Object(o.a)('wave \n name="wave"','wave \n name="wave"'),component:t(1138).default,rawText:t(1139)}];n.default=Object(r.a)(function(e){return c.a.createElement(i.b,Object.assign({},e,{codes:void 0,source:m,examples:p}))})},1114:function(e,n){e.exports="# Spin *加载中*\n\n部分样式来源于[SpinKit](https://github.com/tobiasahlin/SpinKit)\n\n<example />\n\n## API\n\n| 属性 | 类型 | 默认值 | 说明 |\n| --- | --- | --- | --- |\n| color | string | #6c757d | 颜色 |\n| size | number \\| string | 40 | 尺寸 |\n| name | string | 'fading-circle' | 类型，可选值见示例 |"},1115:function(e,n){e.exports="# Spin\n\nPart of the style comes from [SpinKit](https://github.com/tobiasahlin/SpinKit).\n\n<example />\n\n## API\n\n| Property | Type | Default | Description |\n| --- | --- | --- | --- |\n| color | string | #6c757d | color |\n| size | number \\| string | 40 | size |\n| name | string | 'fading-circle' | type. See the example for optional values. |"},1116:function(e,n,t){"use strict";t.r(n);var a=t(0),c=t.n(a),r=t(32);n.default=function(){return c.a.createElement("div",{style:{display:"flex"}},c.a.createElement(r.a,{size:18,name:"default",color:"green"}),c.a.createElement(r.a,{name:"default"}),c.a.createElement(r.a,{size:"54px",name:"default",color:"#dc3545"}))}},1117:function(e,n){e.exports='/**\n* cn - default\n     -- name="default"\n* en - default\n     -- name="default"\n*/\nimport React from \'react\'\nimport { Spin } from \'shineout\'\n\nexport default function() {\n  const style = { display: \'flex\' }\n  return (\n    <div style={style}>\n      <Spin size={18} name="default" color="green" />\n      <Spin name="default" />\n      <Spin size="54px" name="default" color="#dc3545" />\n    </div>\n  )\n}\n'},1118:function(e,n,t){"use strict";t.r(n);var a=t(0),c=t.n(a),r=t(32);n.default=function(){return c.a.createElement("div",{style:{display:"flex"}},c.a.createElement(r.a,{size:18,name:"chasing-dots",color:"green"}),c.a.createElement(r.a,{name:"chasing-dots"}),c.a.createElement(r.a,{size:"54px",name:"chasing-dots",color:"#dc3545"}))}},1119:function(e,n){e.exports='/**\n* cn - chasing-dots\n     -- name="chasing-dots"\n* en - chasing-dots\n     -- name="chasing-dots"\n*/\nimport React from \'react\'\nimport { Spin } from \'shineout\'\n\nexport default function() {\n  const style = { display: \'flex\' }\n  return (\n    <div style={style}>\n      <Spin size={18} name="chasing-dots" color="green" />\n      <Spin name="chasing-dots" />\n      <Spin size="54px" name="chasing-dots" color="#dc3545" />\n    </div>\n  )\n}\n'},1120:function(e,n,t){"use strict";t.r(n);var a=t(0),c=t.n(a),r=t(32);n.default=function(){return c.a.createElement("div",{style:{display:"flex"}},c.a.createElement(r.a,{size:18,name:"cube-grid",color:"green"}),c.a.createElement(r.a,{name:"cube-grid"}),c.a.createElement(r.a,{size:"54px",name:"cube-grid",color:"#dc3545"}))}},1121:function(e,n){e.exports='/**\n* cn - cube-grid\n     -- name="cube-grid"\n* en - cube-grid\n     -- name="cube-grid"\n*/\nimport React from \'react\'\nimport { Spin } from \'shineout\'\n\nexport default function() {\n  const style = { display: \'flex\' }\n  return (\n    <div style={style}>\n      <Spin size={18} name="cube-grid" color="green" />\n      <Spin name="cube-grid" />\n      <Spin size="54px" name="cube-grid" color="#dc3545" />\n    </div>\n  )\n}\n'},1122:function(e,n,t){"use strict";t.r(n);var a=t(0),c=t.n(a),r=t(32);n.default=function(){return c.a.createElement("div",{style:{display:"flex"}},c.a.createElement(r.a,{size:18,name:"double-bounce",color:"green"}),c.a.createElement(r.a,{name:"double-bounce"}),c.a.createElement(r.a,{size:"54px",name:"double-bounce",color:"#dc3545"}))}},1123:function(e,n){e.exports='/**\n* cn - double-bounce\n     -- name="double-bounce"\n* en - double-bounce\n     -- name="double-bounce"\n*/\nimport React from \'react\'\nimport { Spin } from \'shineout\'\n\nexport default function() {\n  const style = { display: \'flex\' }\n  return (\n    <div style={style}>\n      <Spin size={18} name="double-bounce" color="green" />\n      <Spin name="double-bounce" />\n      <Spin size="54px" name="double-bounce" color="#dc3545" />\n    </div>\n  )\n}\n'},1124:function(e,n,t){"use strict";t.r(n);var a=t(0),c=t.n(a),r=t(32);n.default=function(){return c.a.createElement("div",{style:{display:"flex"}},c.a.createElement(r.a,{size:18,name:"fading-circle",color:"green"}),c.a.createElement(r.a,{name:"fading-circle"}),c.a.createElement(r.a,{size:"54px",name:"fading-circle",color:"#dc3545"}))}},1125:function(e,n){e.exports='/**\n* cn - fading-circle\n     -- name="fading-circle"\n* en - fading-circle\n     -- name="fading-circle"\n*/\nimport React from \'react\'\nimport { Spin } from \'shineout\'\n\nexport default function() {\n  const style = { display: \'flex\' }\n  return (\n    <div style={style}>\n      <Spin size={18} name="fading-circle" color="green" />\n      <Spin name="fading-circle" />\n      <Spin size="54px" name="fading-circle" color="#dc3545" />\n    </div>\n  )\n}\n'},1126:function(e,n,t){"use strict";t.r(n);var a=t(0),c=t.n(a),r=t(32);n.default=function(){return c.a.createElement("div",{style:{display:"flex"}},c.a.createElement(r.a,{size:18,name:"four-dots",color:"green"}),c.a.createElement(r.a,{name:"four-dots"}),c.a.createElement(r.a,{size:"54px",name:"four-dots",color:"#dc3545"}))}},1127:function(e,n){e.exports='/**\n* cn - four-dots\n     -- name="four-dots"\n* en - four-dots\n     -- name="four-dots"\n*/\nimport React from \'react\'\nimport { Spin } from \'shineout\'\n\nexport default function() {\n  const style = { display: \'flex\' }\n  return (\n    <div style={style}>\n      <Spin size={18} name="four-dots" color="green" />\n      <Spin name="four-dots" />\n      <Spin size="54px" name="four-dots" color="#dc3545" />\n    </div>\n  )\n}\n'},1128:function(e,n,t){"use strict";t.r(n);var a=t(0),c=t.n(a),r=t(32);n.default=function(){return c.a.createElement("div",{style:{display:"flex"}},c.a.createElement(r.a,{size:18,name:"plane",color:"green"}),c.a.createElement(r.a,{name:"plane"}),c.a.createElement(r.a,{size:"54px",name:"plane",color:"#dc3545"}))}},1129:function(e,n){e.exports='/**\n* cn - plane\n     -- name="plane"\n* en - plane\n     -- name="plane"\n*/\nimport React from \'react\'\nimport { Spin } from \'shineout\'\n\nexport default function() {\n  const style = { display: \'flex\' }\n  return (\n    <div style={style}>\n      <Spin size={18} name="plane" color="green" />\n      <Spin name="plane" />\n      <Spin size="54px" name="plane" color="#dc3545" />\n    </div>\n  )\n}\n'},1130:function(e,n,t){"use strict";t.r(n);var a=t(0),c=t.n(a),r=t(32);n.default=function(){return c.a.createElement("div",{style:{display:"flex"}},c.a.createElement(r.a,{size:18,name:"pulse",color:"green"}),c.a.createElement(r.a,{name:"pulse"}),c.a.createElement(r.a,{size:"54px",name:"pulse",color:"#dc3545"}))}},1131:function(e,n){e.exports='/**\n* cn - pulse\n     -- name="pulse"\n* en - pulse\n     -- name="pulse"\n*/\nimport React from \'react\'\nimport { Spin } from \'shineout\'\n\nexport default function() {\n  const style = { display: \'flex\' }\n  return (\n    <div style={style}>\n      <Spin size={18} name="pulse" color="green" />\n      <Spin name="pulse" />\n      <Spin size="54px" name="pulse" color="#dc3545" />\n    </div>\n  )\n}\n'},1132:function(e,n,t){"use strict";t.r(n);var a=t(0),c=t.n(a),r=t(32);n.default=function(){return c.a.createElement("div",{style:{display:"flex"}},c.a.createElement(r.a,{size:18,name:"ring",color:"green"}),c.a.createElement(r.a,{name:"ring"}),c.a.createElement(r.a,{size:"54px",name:"ring",color:"#dc3545"}))}},1133:function(e,n){e.exports='/**\n* cn - ring\n     -- name="ring"\n* en - ring\n     -- name="ring"\n*/\nimport React from \'react\'\nimport { Spin } from \'shineout\'\n\nexport default function() {\n  const style = { display: \'flex\' }\n  return (\n    <div style={style}>\n      <Spin size={18} name="ring" color="green" />\n      <Spin name="ring" />\n      <Spin size="54px" name="ring" color="#dc3545" />\n    </div>\n  )\n}\n'},1134:function(e,n,t){"use strict";t.r(n);var a=t(0),c=t.n(a),r=t(32);n.default=function(){return c.a.createElement("div",{style:{display:"flex"}},c.a.createElement(r.a,{size:18,name:"scale-circle",color:"green"}),c.a.createElement(r.a,{name:"scale-circle"}),c.a.createElement(r.a,{size:"54px",name:"scale-circle",color:"#dc3545"}))}},1135:function(e,n){e.exports='/**\n* cn - scale-circle\n     -- name="scale-circle"\n* en - scale-circle\n     -- name="scale-circle"\n*/\nimport React from \'react\'\nimport { Spin } from \'shineout\'\n\nexport default function() {\n  const style = { display: \'flex\' }\n  return (\n    <div style={style}>\n      <Spin size={18} name="scale-circle" color="green" />\n      <Spin name="scale-circle" />\n      <Spin size="54px" name="scale-circle" color="#dc3545" />\n    </div>\n  )\n}\n'},1136:function(e,n,t){"use strict";t.r(n);var a=t(0),c=t.n(a),r=t(32);n.default=function(){return c.a.createElement("div",{style:{display:"flex"}},c.a.createElement(r.a,{size:18,name:"three-bounce",color:"green"}),c.a.createElement(r.a,{name:"three-bounce"}),c.a.createElement(r.a,{size:"54px",name:"three-bounce",color:"#dc3545"}))}},1137:function(e,n){e.exports='/**\n* cn - three-bounce\n     -- name="three-bounce"\n* en - three-bounce\n     -- name="three-bounce"\n*/\nimport React from \'react\'\nimport { Spin } from \'shineout\'\n\nexport default function() {\n  const style = { display: \'flex\' }\n  return (\n    <div style={style}>\n      <Spin size={18} name="three-bounce" color="green" />\n      <Spin name="three-bounce" />\n      <Spin size="54px" name="three-bounce" color="#dc3545" />\n    </div>\n  )\n}\n'},1138:function(e,n,t){"use strict";t.r(n);var a=t(0),c=t.n(a),r=t(32);n.default=function(){return c.a.createElement("div",{style:{display:"flex"}},c.a.createElement(r.a,{size:18,name:"wave",color:"green"}),c.a.createElement(r.a,{name:"wave"}),c.a.createElement(r.a,{size:"54px",name:"wave",color:"#dc3545"}))}},1139:function(e,n){e.exports='/**\n* cn - wave\n     -- name="wave"\n* en - wave\n     -- name="wave"\n*/\nimport React from \'react\'\nimport { Spin } from \'shineout\'\n\nexport default function() {\n  const style = { display: \'flex\' }\n  return (\n    <div style={style}>\n      <Spin size={18} name="wave" color="green" />\n      <Spin name="wave" />\n      <Spin size="54px" name="wave" color="#dc3545" />\n    </div>\n  )\n}\n'},121:function(e,n,t){"use strict";var a=t(24),c=t(5),r=t(6),i=t(8),o=t(2),l=t(7),s=t(3),u=t(0),d=t.n(u),m=t(158),p=t(40),f=t(17),h=function(e){if(0===p.a.location.search.indexOf("?example="))p.a.push("".concat(p.a.location.pathname,"?example=").concat(e.replace("heading-","")));else{var n=document.getElementById(e);n&&n.scrollIntoView()}};n.a=function(e){return function(n){function t(e){var n;return Object(c.a)(this,t),(n=Object(i.a)(this,Object(o.a)(t).call(this,e))).state={active:"",headings:[]},n.setHeading=n.setHeading.bind(Object(s.a)(Object(s.a)(n))),n.handleScroll=n.handleScroll.bind(Object(s.a)(Object(s.a)(n))),n}return Object(l.a)(t,n),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.bindScroll(),this.handleScroll()}},{key:"componentWillUnmount",value:function(){this.$willUnmount=!0,this.unbindScroll()}},{key:"setHeading",value:function(e){this.setState({headings:[].concat(Object(a.a)(this.state.headings),Object(a.a)(e))})}},{key:"bindScroll",value:function(){document.addEventListener("scroll",this.handleScroll)}},{key:"unbindScroll",value:function(){document.removeEventListener("scroll",this.handleScroll)}},{key:"handleScroll",value:function(){var e=document.documentElement.scrollTop,n=this.state.headings.filter(function(e){return 3===e.level&&e.children[0]});if(0!==n.length){var t=n[0].id;n.forEach(function(n){var a=document.querySelector("#".concat(n.id));a&&a.offsetTop<=e&&(t=n.id)}),this.$willUnmount||this.setState({active:t})}}},{key:"renderNav",value:function(){var e=this,n=this.state,t=n.active,a=n.headings;return d.a.createElement(m.a,{className:Object(f.f)("sticky"),top:50},d.a.createElement("div",{className:Object(f.f)("nav")},a.map(function(n,a){var c=n.children.filter(function(e){return"string"==typeof e});return d.a.createElement("a",{key:a,className:Object(f.f)("level-".concat(n.level),t===n.id&&"active"),onClick:h.bind(e,n.id)},c)})))}},{key:"render",value:function(){return d.a.createElement("div",{className:Object(f.f)("_")},d.a.createElement(e,{onHeadingSetted:this.setHeading}),this.renderNav())}}]),t}(d.a.Component)}},127:function(e,n,t){"use strict";var a=t(0),c=t.n(a),r=t(21),i=t(24),o=t(5),l=t(6),s=t(8),u=t(2),d=t(7),m=t(3),p=t(160),f=t.n(p),h=t(36),g=t(17),b=t(25),v=t(161),y=t.n(v),x=(t(162),t(163),function(e){function n(){var e,t;Object(o.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=Object(s.a)(this,(e=Object(u.a)(n)).call.apply(e,[this].concat(c)))).bindElement=function(e){t.element=e},t}return Object(d.a)(n,e),Object(l.a)(n,[{key:"componentDidMount",value:function(){this.highlightCode()}},{key:"componentDidUpdate",value:function(){this.highlightCode()}},{key:"highlightCode",value:function(){var e=this;y.a.highlightElement(this.element,!1,function(){e.props.onHighLight&&e.props.onHighLight(e.element.offsetHeight)})}},{key:"render",value:function(){return c.a.createElement("pre",{className:this.props.language||"lang-jsx"},c.a.createElement("code",{ref:this.bindElement},this.props.value))}}]),n}(a.PureComponent));x.defaultProps={language:"lang-jsx"};var E=t(147),O=t(32),j=t(27),S=t(134),z=function(e){function n(e){var t;return Object(o.a)(this,n),(t=Object(s.a)(this,Object(u.a)(n).call(this,e))).state={ready:!1},t.placeholderRef=function(e){t.placeholder=e},t}return Object(d.a)(n,e),Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.lazyId=Object(S.a)({element:this.placeholder,render:function(){return e.setState({ready:!0})}})}},{key:"componentWillUnmount",value:function(){Object(S.b)(this.lazyId)}},{key:"render",value:function(){var e=this.state.ready,n=this.props,t=n.children,a=n.placeholder;return e?t:c.a.createElement("span",{ref:this.placeholderRef},a)}}]),n}(j.b),k=t(47),w=t(40),H=c.a.createElement("div",{className:Object(g.a)("placeholder")},c.a.createElement(O.a,null)),C=function(e){function n(e){var t;return Object(o.a)(this,n),(t=Object(s.a)(this,Object(u.a)(n).call(this,e))).setCodeBlockHeight=function(e){t.codeHeight=e},t.bindCodeBlock=function(e){t.codeblock=e},t.state={showcode:!1},t}return Object(d.a)(n,e),Object(l.a)(n,[{key:"collapse",value:function(e,n,t){var a=this;this.codeblock.style.height="".concat(e*(n-1),"px"),n>1&&setTimeout(function(){a.collapse(e,n-1,t)},16),t&&(document.documentElement.scrollTop-=e)}},{key:"toggleCode",value:function(e){var n=this,t=!this.state.showcode;this.setState({showcode:t},function(){if(t)n.codeblock.style.height="".concat(n.codeHeight,"px");else{var a=n.codeHeight%15;a>0&&n.collapse(a,1,e),n.collapse((n.codeHeight-a)/15,15,e)}})}},{key:"renderCodeHandle",value:function(e){var n=this.state.showcode;return c.a.createElement("a",{href:"javascript:;",className:Object(g.a)("toggle"),onClick:this.toggleCode.bind(this,e)},c.a.createElement(k.a,{name:n?"code-close":"code"}))}},{key:"render",value:function(){var e=this.props,n=e.component,t=e.id,r=e.name,i=e.rawText,o=this.state.showcode,l=i.replace(/(^|\n|\r)\s*\/\*[\s\S]*?\*\/\s*(?:\r|\n|$)/,"").trim(),s=w.a.location.search;if(0===s.indexOf("?example=")&&(s=s.replace("?example=",""),r.indexOf(s)<0))return null;var u=this.props.title.split("\n"),d=Object(E.a)(u),m=d[0],p=d.slice(1);return m&&(m=m.trim()),c.a.createElement(a.Fragment,null,m&&c.a.createElement("h3",{key:"0",id:t},m),c.a.createElement(z,{placeholder:H},c.a.createElement("div",{className:Object(g.a)("_",o&&"showcode")},c.a.createElement("div",{className:Object(g.a)("body")},Object(a.createElement)(n)),this.props.title.length>0&&c.a.createElement("div",{className:Object(g.a)("desc")},p.map(function(e,n){return c.a.createElement("div",{key:n,dangerouslySetInnerHTML:{__html:e}})}),this.renderCodeHandle(!1)),c.a.createElement("div",{ref:this.bindCodeBlock,className:Object(g.a)("code")},c.a.createElement(x,{onHighLight:this.setCodeBlockHeight,onClose:this.toggleCode,value:l}),this.renderCodeHandle(!0)))))}}]),n}(a.Component);C.defaultProps={rawText:""};var T=function(e){function n(e){var t;return Object(o.a)(this,n),(t=Object(s.a)(this,Object(u.a)(n).call(this,e))).toggle=function(){t.setState({expanded:!t.state.expanded})},t.state={expanded:!1},t}return Object(d.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){var e=this.props.children,n=this.state.expanded,t=e.map(function(e){return e.replace(/"fn#fn/g,"").replace(/fn#fn"/g,"").replace(/\\n/g,"\n")}),a=n?"pre":"div";return c.a.createElement("div",{onClick:this.toggle,className:Object(g.e)("console")},c.a.createElement(a,null,t))}}]),n}(a.PureComponent);T.defaultProps={children:[]};var R=T,N=/^<code name="([\w|-]+)" /,P=/^<example name="([\w|-]+)"/,D=function(e){function n(e){var t;return Object(o.a)(this,n),(t=Object(s.a)(this,Object(u.a)(n).call(this,e))).renderHeading=function(e){var n=e.level,a=e.children,r="".concat(n,"-").concat(a[0]),i="h".concat(n);if("object"==typeof a[0])return c.a.createElement(i,null,a);if(!t.cache[r]){var o="heading-".concat(Object(h.b)());2!==n&&3!==n||t.appendHeading({id:o,level:n,children:a}),t.cache[r]=c.a.createElement(i,{id:o},a)}return t.cache[r]},t.headings=[],t.appendHeading=t.appendHeading.bind(Object(m.a)(Object(m.a)(t))),t.cache={},t}return Object(d.a)(n,e),Object(l.a)(n,[{key:"componentDidMount",value:function(){this.props.onHeadingSetted&&this.props.onHeadingSetted(this.headings)}},{key:"appendHeading",value:function(e){this.headings.push(e)}},{key:"renderCode",value:function(e){var n=this.props.codes[e];return n?[c.a.createElement(x,{key:"cb",value:n.text})].concat(Object(i.a)(n.log.map(function(e,n){return c.a.createElement(R,{key:n},e)}))):(console.error("Code ".concat(e," not existed")),null)}},{key:"renderExamples",value:function(){var e=this;if(this.cache.examples)return this.cache.examples;var n=this.props.examples;if(!n)return c.a.createElement("div",null);var t=Object(b.a)("示例","Example"),a="heading-".concat(Object(h.b)());return this.appendHeading({id:a,level:2,children:[t]}),this.cache.examples=[c.a.createElement("h2",{key:"h",id:a},t)].concat(Object(i.a)(n.map(function(n,t){if(/\d+-/.test(n.name)){var a="heading-".concat(n.name),i=n.title.split("\n"),o=Object(r.a)(i,1)[0];return e.appendHeading({id:a,level:3,children:[o]}),c.a.createElement(C,Object.assign({key:t,id:a},n,{lazy:t>2}))}}))),this.cache.examples}},{key:"renderExample",value:function(e){var n="example-".concat(e);if(!this.cache[n]){var t=(this.props.examples||[]).find(function(n){return n.name===e});this.cache[n]=t?c.a.createElement(C,t):null}return this.cache[n]}},{key:"render",value:function(){var e=this,n=this.props.source;return this.headings=[],c.a.createElement(f.a,{className:Object(g.e)("_"),source:n,renderers:{code:x,heading:this.renderHeading,html:function(n){var t=n.value;if("<example />"===t)return e.renderExamples();var a=t.match(P);if(a)return e.renderExample(a[1],t.indexOf("noExpand")>=0);if("<br>"===t||"<br />"===t)return c.a.createElement("br",null);var r=t.match(N);return r?e.renderCode(r[1]):null},link:function(e){var n=e.href,t=e.children,a=n.indexOf(!1)?"_blank":void 0;return c.a.createElement("a",{href:n,target:a},t)}}})}}]),n}(a.PureComponent);D.defaultProps={children:null,examples:null,onHeadingSetted:void 0};var B=t(46),I=t(121);t.d(n,"a",function(){return _});var L,M=((L=function(e){function n(e){var t;return Object(o.a)(this,n),(t=Object(s.a)(this,Object(u.a)(n).call(this,e))).state={source:t.props.source},t}return Object(d.a)(n,e),Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.props.loader&&this.props.loader().then(function(n){e.setState({source:n.default})})}},{key:"render",value:function(){var e=this.state.source;return e?c.a.createElement(D,Object.assign({},this.props,{source:e})):c.a.createElement(B.a,{style:{minHeight:200}})}}]),n}(a.PureComponent)).defaultProps={loader:void 0,source:void 0},L);n.b=M;function _(e){return Object(I.a)(function(n){return c.a.createElement(M,Object.assign({},n,{loader:e}))})}},134:function(e,n,t){"use strict";t.d(n,"a",function(){return s}),t.d(n,"b",function(){return u});var a=t(145),c=t(36),r={},i=null,o=!1,l=window.innerHeight||document.documentElement.clientHeight;function s(e){var n=e.element.getBoundingClientRect();if(n.bottom<0||n.top>l){var t=Object(c.b)();return r[t]=e,t}return e.render(),null}function u(e){e&&delete r[e]}document.addEventListener("scroll",function(){i&&clearTimeout(i),i=setTimeout(function(){o||(o=!0,Object.keys(r).forEach(function(e){var n=r[e],t=n.element,a=n.render,c=t.getBoundingClientRect();c.bottom<0||c.top>l||(delete r[e],a())}),o=!1),i=null},80)},a.a)}}]);
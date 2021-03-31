(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[92],{2090:function(e,a,t){"use strict";t.r(a);var n=t(12),r=t(13),c=t(15),l=t(14),m=t(0),s=t.n(m),i=t(794),u=t(1244),o=t(1245),b=t(1246),d=t(800),p=t(783),E=t(784),v=t(1247),g=t(802),f=t(803),B=t(1239),k=t(1240),L=t(35),y=t(3),I=t.n(y),h=t(204),j=t(311),T=s.a.createElement("pre",null,s.a.createElement("code",{className:"language-jsx"},'\nimport React from "react"\nimport {BreadcrumbItem, Breadcrumb} from "reactstrap"\n\nclass BreadcrumbsDefault extends React.Component {\n    render() {\n    return(\n        <Breadcrumb>\n            <BreadcrumbItem>\n            <Link to="#"> Home </Link>\n            </BreadcrumbItem>\n            <BreadcrumbItem>\n            <Link to="#"> Library </Link>\n            </BreadcrumbItem>\n            <BreadcrumbItem>\n            <Link to="#"> Data </Link>\n            </BreadcrumbItem>\n        </Breadcrumb>\n    )\n    }\n}\nexport default BreadcrumbsDefault\n    ')),N=s.a.createElement("pre",null,s.a.createElement("code",{className:"language-jsx"},'\n  import React from "react"\n  import {BreadcrumbItem, Breadcrumb} from "reactstrap"\n\n  class BreadcrumbsStyles extends React.Component {\n      render() {\n      return(\n        <Breadcrumb className="breadcrumb-slash">\n          <BreadcrumbItem>\n            <Link to="#"> Home </Link>\n          </BreadcrumbItem>\n          <BreadcrumbItem>\n            <Link to="#"> Library </Link>\n          </BreadcrumbItem>\n          <BreadcrumbItem>\n            <Link to="#"> Data </Link>\n          </BreadcrumbItem>\n      </Breadcrumb>\n\n      <Breadcrumb className="breadcrumb-dots">\n        <BreadcrumbItem>\n          <Link to="#"> Home </Link>\n        </BreadcrumbItem>\n        <BreadcrumbItem>\n          <Link to="#"> Library </Link>\n        </BreadcrumbItem>\n        <BreadcrumbItem>\n          <Link to="#"> Data </Link>\n        </BreadcrumbItem>\n      </Breadcrumb>\n\n      <Breadcrumb className="breadcrumb-dashes">\n        <BreadcrumbItem>\n          <Link to="#"> Home </Link>\n        </BreadcrumbItem>\n        <BreadcrumbItem>\n          <Link to="#"> Library </Link>\n        </BreadcrumbItem>\n        <BreadcrumbItem>\n          <Link to="#"> Data </Link>\n        </BreadcrumbItem>\n      </Breadcrumb>\n\n      <Breadcrumb className="breadcrumb-pipes">\n        <BreadcrumbItem>\n          <Link to="#"> Home </Link>\n        </BreadcrumbItem>\n        <BreadcrumbItem>\n          <Link to="#"> Library </Link>\n        </BreadcrumbItem>\n        <BreadcrumbItem>\n          <Link to="#"> Data </Link>\n        </BreadcrumbItem>\n      </Breadcrumb>\n\n      <Breadcrumb className="breadcrumb-chevron">\n        <BreadcrumbItem>\n          <Link to="#"> Home </Link>\n        </BreadcrumbItem>\n        <BreadcrumbItem>\n          <Link to="#"> Library </Link>\n        </BreadcrumbItem>\n        <BreadcrumbItem>\n          <Link to="#"> Data </Link>\n        </BreadcrumbItem>\n      </Breadcrumb>\n      )\n      }\n  }\n  export default BreadcrumbsStyles\n      ')),x=s.a.createElement("pre",null,s.a.createElement("code",{className:"language-jsx"},'\n  import React from "react"\n  import {BreadcrumbItem, Breadcrumb} from "reactstrap"\n\n  class BreadcrumbsAlignment extends React.Component {\n      render() {\n      return(\n        <div className="justify-content-start breadcrumb-wrapper">\n        <Breadcrumb>\n          <BreadcrumbItem>\n            <Link to="#"> Home </Link>\n          </BreadcrumbItem>\n          <BreadcrumbItem>\n            <Link to="#"> Library </Link>\n          </BreadcrumbItem>\n          <BreadcrumbItem>\n            <Link to="#"> Data </Link>\n          </BreadcrumbItem>\n        </Breadcrumb>\n      </div>\n\n      <div className="justify-content-center breadcrumb-wrapper">\n        <Breadcrumb>\n          <BreadcrumbItem>\n            <Link to="#"> Home </Link>\n          </BreadcrumbItem>\n          <BreadcrumbItem>\n            <Link to="#"> Library </Link>\n          </BreadcrumbItem>\n          <BreadcrumbItem>\n            <Link to="#"> Data </Link>\n          </BreadcrumbItem>\n        </Breadcrumb>\n      </div>\n\n      <div className="justify-content-end breadcrumb-wrapper">\n        <Breadcrumb>\n          <BreadcrumbItem>\n            <Link to="#"> Home </Link>\n          </BreadcrumbItem>\n          <BreadcrumbItem>\n            <Link to="#"> Library </Link>\n          </BreadcrumbItem>\n          <BreadcrumbItem>\n            <Link to="#"> Data </Link>\n          </BreadcrumbItem>\n        </Breadcrumb>\n      </div>\n      )\n      }\n  }\n  export default BreadcrumbsAlignment\n      ')),O=function(e){Object(c.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];return(e=a.call.apply(a,[this].concat(c))).state={activeTab:"1"},e.toggleTab=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e}return Object(r.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement(s.a.Fragment,null,s.a.createElement(u.a,null,s.a.createElement(o.a,null,s.a.createElement(b.a,null,"Default"),s.a.createElement("div",{className:"views"},s.a.createElement(d.a,{tabs:!0},s.a.createElement(p.a,null,s.a.createElement(E.a,{className:I()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},s.a.createElement(h.a,{size:15}))),s.a.createElement(p.a,null,s.a.createElement(E.a,{className:I()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},s.a.createElement(j.a,{size:15})))))),s.a.createElement(v.a,null,s.a.createElement("p",null,"Reactstrap includes six predefined button styles, each serving its own semantic purpose."),s.a.createElement(g.a,{activeTab:this.state.activeTab},s.a.createElement(f.a,{tabId:"1"},s.a.createElement(B.a,{className:"vx-breadcrumbs"},s.a.createElement(k.a,null,s.a.createElement(L.a,{to:"#"}," Home ")),s.a.createElement(k.a,null,s.a.createElement(L.a,{to:"#"}," Library ")),s.a.createElement(k.a,{active:!0},s.a.createElement("span",null," Data ")))),s.a.createElement(f.a,{className:"component-code",tabId:"2"},T)))))}}]),t}(s.a.Component),w=function(e){Object(c.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];return(e=a.call.apply(a,[this].concat(c))).state={activeTab:"1"},e.toggleTab=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e}return Object(r.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement(s.a.Fragment,null,s.a.createElement(u.a,null,s.a.createElement(o.a,null,s.a.createElement(b.a,null,"Styles"),s.a.createElement("div",{className:"views"},s.a.createElement(d.a,{tabs:!0},s.a.createElement(p.a,null,s.a.createElement(E.a,{className:I()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},s.a.createElement(h.a,{size:15}))),s.a.createElement(p.a,null,s.a.createElement(E.a,{className:I()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},s.a.createElement(j.a,{size:15})))))),s.a.createElement(v.a,null,s.a.createElement("p",null,"These breadcrumbs are only for demo puropses. You can change breadcrumb seprator by changing ",s.a.createElement("code",null,"$breadcrumb-divider")," ","variable value in scss"),s.a.createElement(g.a,{activeTab:this.state.activeTab},s.a.createElement(f.a,{tabId:"1"},s.a.createElement(B.a,{className:"breadcrumb-slash"},s.a.createElement(k.a,null,s.a.createElement(L.a,{to:"#"}," Home ")),s.a.createElement(k.a,null,s.a.createElement(L.a,{to:"#"}," Library ")),s.a.createElement(k.a,{active:!0},s.a.createElement("span",null," Data "))),s.a.createElement(B.a,{className:"breadcrumb-dots"},s.a.createElement(k.a,null,s.a.createElement(L.a,{to:"#"}," Home ")),s.a.createElement(k.a,null,s.a.createElement(L.a,{to:"#"}," Library ")),s.a.createElement(k.a,{active:!0},s.a.createElement("span",null," Data "))),s.a.createElement(B.a,{className:"breadcrumb-dashes"},s.a.createElement(k.a,null,s.a.createElement(L.a,{to:"#"}," Home ")),s.a.createElement(k.a,null,s.a.createElement(L.a,{to:"#"}," Library ")),s.a.createElement(k.a,{active:!0},s.a.createElement("span",null," Data "))),s.a.createElement(B.a,{className:"breadcrumb-pipes"},s.a.createElement(k.a,null,s.a.createElement(L.a,{to:"#"}," Home ")),s.a.createElement(k.a,null,s.a.createElement(L.a,{to:"#"}," Library ")),s.a.createElement(k.a,{active:!0},s.a.createElement("span",null," Data "))),s.a.createElement(B.a,{className:"breadcrumb-chevron"},s.a.createElement(k.a,null,s.a.createElement(L.a,{to:"#"}," Home ")),s.a.createElement(k.a,null,s.a.createElement(L.a,{to:"#"}," Library ")),s.a.createElement(k.a,{active:!0},s.a.createElement("span",null," Data ")))),s.a.createElement(f.a,{className:"component-code",tabId:"2"},N)))))}}]),t}(s.a.Component),C=function(e){Object(c.a)(t,e);var a=Object(l.a)(t);function t(){var e;Object(n.a)(this,t);for(var r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];return(e=a.call.apply(a,[this].concat(c))).state={activeTab:"1"},e.toggleTab=function(a){e.state.activeTab!==a&&e.setState({activeTab:a})},e}return Object(r.a)(t,[{key:"render",value:function(){var e=this;return s.a.createElement(s.a.Fragment,null,s.a.createElement(u.a,null,s.a.createElement(o.a,null,s.a.createElement(b.a,null,"Alignment"),s.a.createElement("div",{className:"views"},s.a.createElement(d.a,{tabs:!0},s.a.createElement(p.a,null,s.a.createElement(E.a,{className:I()({active:"1"===this.state.activeTab}),onClick:function(){e.toggleTab("1")}},s.a.createElement(h.a,{size:15}))),s.a.createElement(p.a,null,s.a.createElement(E.a,{className:I()({active:"2"===this.state.activeTab}),onClick:function(){e.toggleTab("2")}},s.a.createElement(j.a,{size:15})))))),s.a.createElement(v.a,null,s.a.createElement("p",null,"Use class ",s.a.createElement("code",null,".justify-content-position")," to align breadcrumb to desired position."),s.a.createElement(g.a,{activeTab:this.state.activeTab},s.a.createElement(f.a,{tabId:"1"},s.a.createElement("div",{className:"justify-content-start breadcrumb-wrapper"},s.a.createElement(B.a,null,s.a.createElement(k.a,null,s.a.createElement(L.a,{to:"#"}," Home ")),s.a.createElement(k.a,null,s.a.createElement(L.a,{to:"#"}," Library ")),s.a.createElement(k.a,null,s.a.createElement("span",null," Data ")))),s.a.createElement("div",{className:"justify-content-center breadcrumb-wrapper"},s.a.createElement(B.a,null,s.a.createElement(k.a,null,s.a.createElement(L.a,{to:"#"}," Home ")),s.a.createElement(k.a,null,s.a.createElement(L.a,{to:"#"}," Library ")),s.a.createElement(k.a,null,s.a.createElement("span",null," Data ")))),s.a.createElement("div",{className:"justify-content-end breadcrumb-wrapper"},s.a.createElement(B.a,null,s.a.createElement(k.a,null,s.a.createElement(L.a,{to:"#"}," Home ")),s.a.createElement(k.a,null,s.a.createElement(L.a,{to:"#"}," Library ")),s.a.createElement(k.a,null,s.a.createElement("span",null," Data "))))),s.a.createElement(f.a,{className:"component-code",tabId:"2"},x)))))}}]),t}(s.a.Component),D=t(796),H=t.n(D),z=(t(795),function(e){Object(c.a)(t,e);var a=Object(l.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(r.a)(t,[{key:"componentDidMount",value:function(){H.a.highlightAll()}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement(i.a,{breadCrumbTitle:"Breadcrumbs",breadCrumbParent:"Components",breadCrumbActive:"Breadcrumbs"}),s.a.createElement("section",{id:"component-breadcrumbs"},s.a.createElement(O,null),s.a.createElement(w,null)),s.a.createElement("section",{id:"breadcrumb-alignment"},s.a.createElement(C,null)))}}]),t}(s.a.Component));a.default=z},793:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));var n=t(0),r=t.n(n).a.createContext({})},795:function(e,a){!function(e){var a=e.util.clone(e.languages.javascript);e.languages.jsx=e.languages.extend("markup",a),e.languages.jsx.tag.pattern=/<\/?(?:[\w.:-]+\s*(?:\s+(?:[\w.:$-]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s{'">=]+|\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])+\}))?|\{\s*\.{3}\s*[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\s*\}))*\s*\/?)?>/i,e.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/i,e.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">]+)/i,e.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,e.languages.insertBefore("inside","attr-name",{spread:{pattern:/\{\s*\.{3}\s*[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\s*\}/,inside:{punctuation:/\.{3}|[{}.]/,"attr-value":/\w+/}}},e.languages.jsx.tag),e.languages.insertBefore("inside","attr-value",{script:{pattern:/=(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])+\})/i,inside:{"script-punctuation":{pattern:/^=(?={)/,alias:"punctuation"},rest:e.languages.jsx},alias:"language-javascript"}},e.languages.jsx.tag);var t=function e(a){return a?"string"==typeof a?a:"string"==typeof a.content?a.content:a.content.map(e).join(""):""};e.hooks.add("after-tokenize",(function(a){"jsx"!==a.language&&"tsx"!==a.language||function a(n){for(var r=[],c=0;c<n.length;c++){var l=n[c],m=!1;if("string"!=typeof l&&("tag"===l.type&&l.content[0]&&"tag"===l.content[0].type?"</"===l.content[0].content[0].content?0<r.length&&r[r.length-1].tagName===t(l.content[0].content[1])&&r.pop():"/>"===l.content[l.content.length-1].content||r.push({tagName:t(l.content[0].content[1]),openedBraces:0}):0<r.length&&"punctuation"===l.type&&"{"===l.content?r[r.length-1].openedBraces++:0<r.length&&0<r[r.length-1].openedBraces&&"punctuation"===l.type&&"}"===l.content?r[r.length-1].openedBraces--:m=!0),(m||"string"==typeof l)&&0<r.length&&0===r[r.length-1].openedBraces){var s=t(l);c<n.length-1&&("string"==typeof n[c+1]||"plain-text"===n[c+1].type)&&(s+=t(n[c+1]),n.splice(c+1,1)),0<c&&("string"==typeof n[c-1]||"plain-text"===n[c-1].type)&&(s=t(n[c-1])+s,n.splice(c-1,1),c--),n[c]=new e.Token("plain-text",s,null,s)}l.content&&"string"!=typeof l.content&&a(l.content)}}(a.tokens)}))}(Prism)},800:function(e,a,t){"use strict";var n=t(5),r=t(7),c=t(0),l=t.n(c),m=t(1),s=t.n(m),i=t(3),u=t.n(i),o=t(4),b={tabs:s.a.bool,pills:s.a.bool,vertical:s.a.oneOfType([s.a.bool,s.a.string]),horizontal:s.a.string,justified:s.a.bool,fill:s.a.bool,navbar:s.a.bool,card:s.a.bool,tag:o.tagPropType,className:s.a.string,cssModule:s.a.object},d=function(e){var a=e.className,t=e.cssModule,c=e.tabs,m=e.pills,s=e.vertical,i=e.horizontal,b=e.justified,d=e.fill,p=e.navbar,E=e.card,v=e.tag,g=Object(r.a)(e,["className","cssModule","tabs","pills","vertical","horizontal","justified","fill","navbar","card","tag"]),f=Object(o.mapToCssModules)(u()(a,p?"navbar-nav":"nav",!!i&&"justify-content-"+i,function(e){return!1!==e&&(!0===e||"xs"===e?"flex-column":"flex-"+e+"-column")}(s),{"nav-tabs":c,"card-header-tabs":E&&c,"nav-pills":m,"card-header-pills":E&&m,"nav-justified":b,"nav-fill":d}),t);return l.a.createElement(v,Object(n.a)({},g,{className:f}))};d.propTypes=b,d.defaultProps={tag:"ul",vertical:!1},a.a=d},802:function(e,a,t){"use strict";var n=t(5),r=t(11),c=t(0),l=t.n(c),m=t(1),s=t.n(m),i=t(3),u=t.n(i),o=t(793),b=t(4),d={tag:b.tagPropType,activeTab:s.a.any,className:s.a.string,cssModule:s.a.object},p=function(e){function a(a){var t;return(t=e.call(this,a)||this).state={activeTab:t.props.activeTab},t}return Object(r.a)(a,e),a.getDerivedStateFromProps=function(e,a){return a.activeTab!==e.activeTab?{activeTab:e.activeTab}:null},a.prototype.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.tag,c=Object(b.omit)(this.props,Object.keys(d)),m=Object(b.mapToCssModules)(u()("tab-content",a),t);return l.a.createElement(o.a.Provider,{value:{activeTabId:this.state.activeTab}},l.a.createElement(r,Object(n.a)({},c,{className:m})))},a}(c.Component);a.a=p,p.propTypes=d,p.defaultProps={tag:"div"}},803:function(e,a,t){"use strict";t.d(a,"a",(function(){return p}));var n=t(5),r=t(7),c=t(0),l=t.n(c),m=t(1),s=t.n(m),i=t(3),u=t.n(i),o=t(793),b=t(4),d={tag:b.tagPropType,className:s.a.string,cssModule:s.a.object,tabId:s.a.any};function p(e){var a=e.className,t=e.cssModule,c=e.tabId,m=e.tag,s=Object(r.a)(e,["className","cssModule","tabId","tag"]),i=function(e){return Object(b.mapToCssModules)(u()("tab-pane",a,{active:c===e}),t)};return l.a.createElement(o.a.Consumer,null,(function(e){var a=e.activeTabId;return l.a.createElement(m,Object(n.a)({},s,{className:i(a)}))}))}p.propTypes=d,p.defaultProps={tag:"div"}}}]);
//# sourceMappingURL=92.c8719a5f.chunk.js.map
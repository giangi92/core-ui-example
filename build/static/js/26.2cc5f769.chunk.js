(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[26],{727:function(e,a,t){"use strict";var l=t(6),n=t(17),r=t(0),c=t.n(r),s=t(1),m=t.n(s),u=t(12),i=t.n(u),o=t(3),E={children:m.a.node,className:m.a.string,listClassName:m.a.string,cssModule:m.a.object,size:m.a.string,tag:o.q,listTag:o.q,"aria-label":m.a.string},b=function(e){var a,t=e.className,r=e.listClassName,s=e.cssModule,m=e.size,u=e.tag,E=e.listTag,b=e["aria-label"],g=Object(n.a)(e,["className","listClassName","cssModule","size","tag","listTag","aria-label"]),d=Object(o.m)(i()(t),s),p=Object(o.m)(i()(r,"pagination",((a={})["pagination-"+m]=!!m,a)),s);return c.a.createElement(u,{className:d,"aria-label":b},c.a.createElement(E,Object(l.a)({},g,{className:p})))};b.propTypes=E,b.defaultProps={tag:"nav",listTag:"ul","aria-label":"pagination"},a.a=b},728:function(e,a,t){"use strict";var l=t(6),n=t(17),r=t(0),c=t.n(r),s=t(1),m=t.n(s),u=t(12),i=t.n(u),o=t(3),E={active:m.a.bool,children:m.a.node,className:m.a.string,cssModule:m.a.object,disabled:m.a.bool,tag:o.q},b=function(e){var a=e.active,t=e.className,r=e.cssModule,s=e.disabled,m=e.tag,u=Object(n.a)(e,["active","className","cssModule","disabled","tag"]),E=Object(o.m)(i()(t,"page-item",{active:a,disabled:s}),r);return c.a.createElement(m,Object(l.a)({},u,{className:E}))};b.propTypes=E,b.defaultProps={tag:"li"},a.a=b},729:function(e,a,t){"use strict";var l=t(6),n=t(17),r=t(0),c=t.n(r),s=t(1),m=t.n(s),u=t(12),i=t.n(u),o=t(3),E={"aria-label":m.a.string,children:m.a.node,className:m.a.string,cssModule:m.a.object,next:m.a.bool,previous:m.a.bool,first:m.a.bool,last:m.a.bool,tag:o.q},b=function(e){var a,t=e.className,r=e.cssModule,s=e.next,m=e.previous,u=e.first,E=e.last,b=e.tag,g=Object(n.a)(e,["className","cssModule","next","previous","first","last","tag"]),d=Object(o.m)(i()(t,"page-link"),r);m?a="Previous":s?a="Next":u?a="First":E&&(a="Last");var p,f=e["aria-label"]||a;m?p="\u2039":s?p="\u203a":u?p="\xab":E&&(p="\xbb");var v=e.children;return v&&Array.isArray(v)&&0===v.length&&(v=null),g.href||"a"!==b||(b="button"),(m||s||u||E)&&(v=[c.a.createElement("span",{"aria-hidden":"true",key:"caret"},v||p),c.a.createElement("span",{className:"sr-only",key:"sr"},f)]),c.a.createElement(b,Object(l.a)({},g,{className:d,"aria-label":f}),v)};b.propTypes=E,b.defaultProps={tag:"a"},a.a=b},757:function(e,a,t){"use strict";t.r(a);var l=t(70),n=t(71),r=t(73),c=t(72),s=t(0),m=t.n(s),u=t(684),i=t(685),o=t(686),E=t(727),b=t(728),g=t(729),d=function(e){Object(r.a)(t,e);var a=Object(c.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(n.a)(t,[{key:"render",value:function(){return m.a.createElement("div",{className:"animated fadeIn"},m.a.createElement(u.a,null,m.a.createElement(i.a,null,m.a.createElement("i",{className:"fa fa-align-justify"}),m.a.createElement("strong",null,"Pagination"),m.a.createElement("div",{className:"card-header-actions"},m.a.createElement("a",{href:"https://reactstrap.github.io/components/pagination/",rel:"noreferrer noopener",target:"_blank",className:"card-header-action"},m.a.createElement("small",{className:"text-muted"},"docs")))),m.a.createElement(o.a,null,m.a.createElement(E.a,null,m.a.createElement(b.a,null,m.a.createElement(g.a,{previous:!0,tag:"button"})),m.a.createElement(b.a,null,m.a.createElement(g.a,{tag:"button"},"1")),m.a.createElement(b.a,null,m.a.createElement(g.a,{tag:"button"},"2")),m.a.createElement(b.a,null,m.a.createElement(g.a,{tag:"button"},"3")),m.a.createElement(b.a,null,m.a.createElement(g.a,{tag:"button"},"4")),m.a.createElement(b.a,null,m.a.createElement(g.a,{tag:"button"},"5")),m.a.createElement(b.a,null,m.a.createElement(g.a,{next:!0,tag:"button"}))))),m.a.createElement(u.a,null,m.a.createElement(i.a,null,m.a.createElement("i",{className:"fa fa-align-justify"}),m.a.createElement("strong",null,"Pagination"),m.a.createElement("small",null," disabled and active states")),m.a.createElement(o.a,null,m.a.createElement(E.a,null,m.a.createElement(b.a,{disabled:!0},m.a.createElement(g.a,{previous:!0,tag:"button"})),m.a.createElement(b.a,{active:!0},m.a.createElement(g.a,{tag:"button"},"1")),m.a.createElement(b.a,null,m.a.createElement(g.a,{tag:"button"},"2")),m.a.createElement(b.a,null,m.a.createElement(g.a,{tag:"button"},"3")),m.a.createElement(b.a,null,m.a.createElement(g.a,{tag:"button"},"4")),m.a.createElement(b.a,null,m.a.createElement(g.a,{tag:"button"},"5")),m.a.createElement(b.a,null,m.a.createElement(g.a,{next:!0,tag:"button"}))))),m.a.createElement(u.a,null,m.a.createElement(i.a,null,m.a.createElement("i",{className:"fa fa-align-justify"}),m.a.createElement("strong",null,"Pagination"),m.a.createElement("small",null," sizing")),m.a.createElement(o.a,null,m.a.createElement(E.a,{size:"lg"},m.a.createElement(b.a,null,m.a.createElement(g.a,{previous:!0,tag:"button"})),m.a.createElement(b.a,null,m.a.createElement(g.a,{tag:"button"},"1")),m.a.createElement(b.a,null,m.a.createElement(g.a,{tag:"button"},"2")),m.a.createElement(b.a,null,m.a.createElement(g.a,{tag:"button"},"3")),m.a.createElement(b.a,{className:"d-none d-sm-block"},m.a.createElement(g.a,{next:!0,tag:"button"}))),m.a.createElement(E.a,null,m.a.createElement(b.a,null,m.a.createElement(g.a,{previous:!0,tag:"button"})),m.a.createElement(b.a,null,m.a.createElement(g.a,{tag:"button"},"1")),m.a.createElement(b.a,null,m.a.createElement(g.a,{tag:"button"},"2")),m.a.createElement(b.a,null,m.a.createElement(g.a,{tag:"button"},"3")),m.a.createElement(b.a,null,m.a.createElement(g.a,{next:!0,tag:"button"}))),m.a.createElement(E.a,{size:"sm"},m.a.createElement(b.a,null,m.a.createElement(g.a,{previous:!0,tag:"button"})),m.a.createElement(b.a,null,m.a.createElement(g.a,{tag:"button"},"1")),m.a.createElement(b.a,null,m.a.createElement(g.a,{tag:"button"},"2")),m.a.createElement(b.a,null,m.a.createElement(g.a,{tag:"button"},"3")),m.a.createElement(b.a,null,m.a.createElement(g.a,{next:!0,tag:"button"}))))))}}]),t}(s.Component);a.default=d}}]);
//# sourceMappingURL=26.2cc5f769.chunk.js.map
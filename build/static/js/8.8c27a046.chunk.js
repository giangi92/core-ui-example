(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[8],{688:function(e,a,t){"use strict";var n=t(6),s=t(17),r=t(0),c=t.n(r),o=t(1),l=t.n(o),i=t(12),u=t.n(i),m=t(3),d=l.a.oneOfType([l.a.number,l.a.string]),p={tag:m.q,noGutters:l.a.bool,className:l.a.string,cssModule:l.a.object,form:l.a.bool,xs:d,sm:d,md:d,lg:d,xl:d},f={tag:"div",widths:["xs","sm","md","lg","xl"]},g=function(e){var a=e.className,t=e.cssModule,r=e.noGutters,o=e.tag,l=e.form,i=e.widths,d=Object(s.a)(e,["className","cssModule","noGutters","tag","form","widths"]),p=[];i.forEach((function(a,t){var n=e[a];if(delete d[a],n){var s=!t;p.push(s?"row-cols-"+n:"row-cols-"+a+"-"+n)}}));var f=Object(m.m)(u()(a,r?"no-gutters":null,l?"form-row":"row",p),t);return c.a.createElement(o,Object(n.a)({},d,{className:f}))};g.propTypes=p,g.defaultProps=f,a.a=g},689:function(e,a,t){"use strict";var n=t(6),s=t(17),r=t(0),c=t.n(r),o=t(1),l=t.n(o),i=t(12),u=t.n(i),m=t(3),d=l.a.oneOfType([l.a.number,l.a.string]),p=l.a.oneOfType([l.a.bool,l.a.number,l.a.string,l.a.shape({size:l.a.oneOfType([l.a.bool,l.a.number,l.a.string]),order:d,offset:d})]),f={tag:m.q,xs:p,sm:p,md:p,lg:p,xl:p,className:l.a.string,cssModule:l.a.object,widths:l.a.array},g={tag:"div",widths:["xs","sm","md","lg","xl"]},b=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},h=function(e){var a=e.className,t=e.cssModule,r=e.widths,o=e.tag,l=Object(s.a)(e,["className","cssModule","widths","tag"]),i=[];r.forEach((function(a,n){var s=e[a];if(delete l[a],s||""===s){var r=!n;if(Object(m.k)(s)){var c,o=r?"-":"-"+a+"-",d=b(r,a,s.size);i.push(Object(m.m)(u()(((c={})[d]=s.size||""===s.size,c["order"+o+s.order]=s.order||0===s.order,c["offset"+o+s.offset]=s.offset||0===s.offset,c)),t))}else{var p=b(r,a,s);i.push(p)}}})),i.length||i.push("col");var d=Object(m.m)(u()(a,i),t);return c.a.createElement(o,Object(n.a)({},l,{className:d}))};h.propTypes=f,h.defaultProps=g,a.a=h},692:function(e,a,t){"use strict";var n=t(6),s=t(17),r=t(0),c=t.n(r),o=t(1),l=t.n(o),i=t(12),u=t.n(i),m=t(3),d={tag:m.q,className:l.a.string,cssModule:l.a.object},p=function(e){var a=e.className,t=e.cssModule,r=e.tag,o=Object(s.a)(e,["className","cssModule","tag"]),l=Object(m.m)(u()(a,"input-group-text"),t);return c.a.createElement(r,Object(n.a)({},o,{className:l}))};p.propTypes=d,p.defaultProps={tag:"span"},a.a=p},700:function(e,a,t){"use strict";var n=t(6),s=t(17),r=t(0),c=t.n(r),o=t(1),l=t.n(o),i=t(12),u=t.n(i),m=t(3),d={tag:m.q,size:l.a.string,className:l.a.string,cssModule:l.a.object},p=function(e){var a=e.className,t=e.cssModule,r=e.tag,o=e.size,l=Object(s.a)(e,["className","cssModule","tag","size"]),i=Object(m.m)(u()(a,"input-group",o?"input-group-"+o:null),t);return c.a.createElement(r,Object(n.a)({},l,{className:i}))};p.propTypes=d,p.defaultProps={tag:"div"},a.a=p},701:function(e,a,t){"use strict";var n=t(6),s=t(17),r=t(0),c=t.n(r),o=t(1),l=t.n(o),i=t(12),u=t.n(i),m=t(3),d=t(692),p={tag:m.q,addonType:l.a.oneOf(["prepend","append"]).isRequired,children:l.a.node,className:l.a.string,cssModule:l.a.object},f=function(e){var a=e.className,t=e.cssModule,r=e.tag,o=e.addonType,l=e.children,i=Object(s.a)(e,["className","cssModule","tag","addonType","children"]),p=Object(m.m)(u()(a,"input-group-"+o),t);return"string"===typeof l?c.a.createElement(r,Object(n.a)({},i,{className:p}),c.a.createElement(d.a,{children:l})):c.a.createElement(r,Object(n.a)({},i,{className:p,children:l}))};f.propTypes=p,f.defaultProps={tag:"div"},a.a=f},702:function(e,a,t){"use strict";var n=t(6),s=t(17),r=t(15),c=t(22),o=t(0),l=t.n(o),i=t(1),u=t.n(i),m=t(12),d=t.n(m),p=t(3),f={children:u.a.node,type:u.a.string,size:u.a.string,bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:p.q,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},g=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(r.a)(t)),t.focus=t.focus.bind(Object(r.a)(t)),t}Object(c.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.type,c=e.bsSize,o=e.valid,i=e.invalid,u=e.tag,m=e.addon,f=e.plaintext,g=e.innerRef,b=Object(s.a)(e,["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"]),h=["radio","checkbox"].indexOf(r)>-1,j=new RegExp("\\D","g"),v=u||("select"===r||"textarea"===r?r:"input"),N="form-control";f?(N+="-plaintext",v=u||"input"):"file"===r?N+="-file":h&&(N=m?null:"form-check-input"),b.size&&j.test(b.size)&&(Object(p.t)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),c=b.size,delete b.size);var O=Object(p.m)(d()(a,i&&"is-invalid",o&&"is-valid",!!c&&"form-control-"+c,N),t);return("input"===v||u&&"function"===typeof u)&&(b.type=r),b.children&&!f&&"select"!==r&&"string"===typeof v&&"select"!==v&&(Object(p.t)('Input with a type of "'+r+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete b.children),l.a.createElement(v,Object(n.a)({},b,{ref:g,className:O}))},a}(l.a.Component);g.propTypes=f,g.defaultProps={type:"text"},a.a=g},704:function(e,a,t){"use strict";var n=t(6),s=t(17),r=t(0),c=t.n(r),o=t(1),l=t.n(o),i=t(12),u=t.n(i),m=t(3),d={tag:m.q,fluid:l.a.oneOfType([l.a.bool,l.a.string]),className:l.a.string,cssModule:l.a.object},p=function(e){var a=e.className,t=e.cssModule,r=e.fluid,o=e.tag,l=Object(s.a)(e,["className","cssModule","fluid","tag"]),i="container";!0===r?i="container-fluid":r&&(i="container-"+r);var d=Object(m.m)(u()(a,i),t);return c.a.createElement(o,Object(n.a)({},l,{className:d}))};p.propTypes=d,p.defaultProps={tag:"div"},a.a=p},711:function(e,a,t){"use strict";var n=t(6),s=t(17),r=t(15),c=t(22),o=t(0),l=t.n(o),i=t(1),u=t.n(i),m=t(12),d=t.n(m),p=t(3),f={children:u.a.node,inline:u.a.bool,tag:p.q,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},g=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(r.a)(t)),t.submit=t.submit.bind(Object(r.a)(t)),t}Object(c.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.inline,c=e.tag,o=e.innerRef,i=Object(s.a)(e,["className","cssModule","inline","tag","innerRef"]),u=Object(p.m)(d()(a,!!r&&"form-inline"),t);return l.a.createElement(c,Object(n.a)({},i,{ref:o,className:u}))},a}(o.Component);g.propTypes=f,g.defaultProps={tag:"form"},a.a=g},723:function(e,a,t){"use strict";var n=t(6),s=t(17),r=t(0),c=t.n(r),o=t(1),l=t.n(o),i=t(12),u=t.n(i),m=t(3),d={tag:m.q,className:l.a.string,cssModule:l.a.object},p=function(e){var a=e.className,t=e.cssModule,r=e.tag,o=Object(s.a)(e,["className","cssModule","tag"]),l=Object(m.m)(u()(a,"card-group"),t);return c.a.createElement(r,Object(n.a)({},o,{className:l}))};p.propTypes=d,p.defaultProps={tag:"div"},a.a=p},739:function(e,a,t){"use strict";t.r(a);var n=t(70),s=t(71),r=t(73),c=t(72),o=t(0),l=t.n(o),i=t(197),u=t(704),m=t(688),d=t(689),p=t(723),f=t(684),g=t(686),b=t(711),h=t(700),j=t(701),v=t(692),N=t(702),O=t(676),E=function(e){Object(r.a)(t,e);var a=Object(c.a)(t);function t(){return Object(n.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"app flex-row align-items-center"},l.a.createElement(u.a,null,l.a.createElement(m.a,{className:"justify-content-center"},l.a.createElement(d.a,{md:"8"},l.a.createElement(p.a,null,l.a.createElement(f.a,{className:"p-4"},l.a.createElement(g.a,null,l.a.createElement(b.a,null,l.a.createElement("h1",null,"Login"),l.a.createElement("p",{className:"text-muted"},"Sign In to your account"),l.a.createElement(h.a,{className:"mb-3"},l.a.createElement(j.a,{addonType:"prepend"},l.a.createElement(v.a,null,l.a.createElement("i",{className:"icon-user"}))),l.a.createElement(N.a,{type:"text",placeholder:"Username",autoComplete:"username"})),l.a.createElement(h.a,{className:"mb-4"},l.a.createElement(j.a,{addonType:"prepend"},l.a.createElement(v.a,null,l.a.createElement("i",{className:"icon-lock"}))),l.a.createElement(N.a,{type:"password",placeholder:"Password",autoComplete:"current-password"})),l.a.createElement(m.a,null,l.a.createElement(d.a,{xs:"6"},l.a.createElement(O.a,{color:"primary",className:"px-4"},"Login")),l.a.createElement(d.a,{xs:"6",className:"text-right"},l.a.createElement(O.a,{color:"link",className:"px-0"},"Forgot password?")))))),l.a.createElement(f.a,{className:"text-white bg-primary py-5 d-md-down-none",style:{width:"44%"}},l.a.createElement(g.a,{className:"text-center"},l.a.createElement("div",null,l.a.createElement("h2",null,"Sign up"),l.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),l.a.createElement(i.Link,{to:"/register"},l.a.createElement(O.a,{color:"primary",className:"mt-3",active:!0,tabIndex:-1},"Register Now!"))))))))))}}]),t}(o.Component);a.default=E}}]);
//# sourceMappingURL=8.8c27a046.chunk.js.map
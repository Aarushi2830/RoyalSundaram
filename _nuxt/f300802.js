(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{318:function(t,n,r){"use strict";r.d(n,"a",(function(){return d})),r.d(n,"b",(function(){return f})),r.d(n,"c",(function(){return l}));var e=r(320),c=r(0),o=Object(c.h)("v-card__actions"),d=Object(c.h)("v-card__subtitle"),f=Object(c.h)("v-card__text"),l=Object(c.h)("v-card__title");e.a},339:function(t,n,r){"use strict";r.d(n,"a",(function(){return c}));r(65),r(7),r(4),r(11);var e=r(2);function c(t){return e.a.extend({name:"v-".concat(t),functional:!0,props:{id:String,tag:{type:String,default:"div"}},render:function(n,r){var e=r.props,data=r.data,c=r.children;data.staticClass="".concat(t," ").concat(data.staticClass||"").trim();var o=data.attrs;if(o){data.attrs={};var d=Object.keys(o).filter((function(t){if("slot"===t)return!1;var n=o[t];return t.startsWith("data-")?(data.attrs[t]=n,!1):n||"string"==typeof n}));d.length&&(data.staticClass+=" ".concat(d.join(" ")))}return e.id&&(data.domProps=data.domProps||{},data.domProps.id=e.id),n(e.tag,data,c)}})}},340:function(t,n,r){"use strict";r(65),r(7),r(4),r(11),r(194),r(152);var e=r(339),c=r(41);n.a=Object(e.a)("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render:function(t,n){var r,e=n.props,data=n.data,o=n.children,d=data.attrs;return d&&(data.attrs={},r=Object.keys(d).filter((function(t){if("slot"===t)return!1;var n=d[t];return t.startsWith("data-")?(data.attrs[t]=n,!1):n||"string"==typeof n}))),e.id&&(data.domProps=data.domProps||{},data.domProps.id=e.id),t(e.tag,Object(c.a)(data,{staticClass:"container",class:Array({"container--fluid":e.fluid}).concat(r||[])}),o)}})},348:function(t,n,r){"use strict";r.r(n);var e=r(349),c=r.n(e);for(var o in e)["default"].indexOf(o)<0&&function(t){r.d(n,t,(function(){return e[t]}))}(o);n.default=c.a},349:function(t,n){},478:function(t,n,r){"use strict";r.r(n);var e=r(14),c=r(15),o=r.n(c),d=r(320),f=r(318),component=Object(e.a)({},(function(){var t=this.$createElement,n=this._self._c||t;return n("v-card",{staticClass:"pa-md-4 mx-lg-auto",attrs:{color:"white",width:"250px"}},[n("v-card-text",[this._v("\n    Adjust screen size to see spacing changes\n  ")])],1)}),[],!1,null,null,null);n.default=component.exports;o()(component,{VCard:d.a,VCardText:f.b})},483:function(t,n,r){"use strict";r.d(n,"a",(function(){return e})),r.d(n,"b",(function(){return c}));var e=function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("v-content",[n("v-container",[n("v-row",{attrs:{justify:"left"}},[n("h1",[this._v("Leisure Trip")])]),this._v(" "),n("Breakpoint")],1)],1)],1)},c=[]},502:function(t,n,r){"use strict";r.r(n);var e=r(483),c=r(348);for(var o in c)["default"].indexOf(o)<0&&function(t){r.d(n,t,(function(){return c[t]}))}(o);var d=r(14),f=r(15),l=r.n(f),v=r(340),h=r(338),_=r(334),component=Object(d.a)(c.default,e.a,e.b,!1,null,null,null);n.default=component.exports,l()(component,{Breakpoint:r(478).default}),l()(component,{VContainer:v.a,VContent:h.a,VRow:_.a})}}]);
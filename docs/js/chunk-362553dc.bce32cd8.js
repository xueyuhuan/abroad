(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-362553dc"],{2883:function(t,e,a){"use strict";var n=a("a466"),s=a.n(n);s.a},6511:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[t._m(0),a("el-card",{staticClass:"card"},t._l(t.text,function(e){return a("el-card",{key:e.id,attrs:{"body-style":{padding:"10px"}}},[a("header",{attrs:{slot:"header"},slot:"header"},[t._v(t._s(e.name))]),a("el-card",{attrs:{"body-style":{padding:"10px"}}},[a("el-card",{staticClass:"every",attrs:{"body-style":{padding:"10px"}}},[a("p",[t._v(t._s(e.content))])])],1)],1)}))],1)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("fieldset",[a("legend",[t._v("立项须知")])])}],r={name:"home",data:function(){return{text:[]}},created:function(){var t=this;this.$ajax.post("/projectType/list").then(function(e){"0"===e.data.errcode&&(t.text=e.data.data.data)})}},c=r,d=(a("2883"),a("2877")),i=Object(d["a"])(c,n,s,!1,null,"2f4862b8",null);i.options.__file="home.vue";e["default"]=i.exports},a466:function(t,e,a){}}]);
//# sourceMappingURL=chunk-362553dc.bce32cd8.js.map
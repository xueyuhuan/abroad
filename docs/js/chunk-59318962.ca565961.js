(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-59318962"],{"0b46":function(t,e,a){"use strict";var s=a("6cd0"),n=a.n(s);n.a},6511:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},["SYS_STUDENT"!==t.role?[t._m(0),a("el-card",{staticClass:"card"},t._l(t.text,function(e){return a("el-card",{key:e.id,attrs:{"body-style":{padding:"10px"}}},[a("header",{attrs:{slot:"header"},slot:"header"},[t._v(t._s(e.name))]),a("el-card",{attrs:{"body-style":{padding:"10px"}}},[a("el-card",{staticClass:"every",attrs:{"body-style":{padding:"10px"}}},[a("p",[t._v(t._s(e.content))])])],1)],1)}))]:a("el-card",{staticStyle:{"margin-top":"20px"},attrs:{"body-style":{padding:"10px",textAlign:"center",marginTop:"20px"}}},[a("img",{attrs:{src:"8.jpg"}}),a("div",{staticStyle:{padding:"14px 0 10px"}},[a("span",[t._v("南湖浪涌，桂香灵动")]),a("div",{staticClass:"bottom"},[a("el-button",{staticClass:"button",attrs:{type:"text"}},[t._v("百年求索路，桃红李白映苍穹")])],1)])])],2)},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("fieldset",[a("legend",[t._v("立项须知")])])}],r={name:"home",data:function(){return{text:[]}},computed:{role:function(){return this.$store.state.role}},created:function(){var t=this;this.$ajax.post("/projectType/list").then(function(e){"0"===e.data.errcode&&(t.text=e.data.data.data)})}},i=r,c=(a("0b46"),a("2877")),d=Object(c["a"])(i,s,n,!1,null,"2b275578",null);d.options.__file="home.vue";e["default"]=d.exports},"6cd0":function(t,e,a){}}]);
//# sourceMappingURL=chunk-59318962.ca565961.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-cf1dcb06"],{2909:function(t,e,a){"use strict";function l(t){if(Array.isArray(t)){for(var e=0,a=new Array(t.length);e<t.length;e++)a[e]=t[e];return a}}function s(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function r(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function i(t){return l(t)||s(t)||r()}a.d(e,"a",function(){return i})},"5d64":function(t,e,a){"use strict";var l=a("fd72"),s=a.n(l);s.a},be94:function(t,e,a){"use strict";function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{},s=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(a).filter(function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable}))),s.forEach(function(e){l(t,e,a[e])})}return t}a.d(e,"a",function(){return s})},ece1:function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"project"},[t._m(0),a("el-card",{attrs:{shadow:"hover"}},[a("header",{attrs:{slot:"header"},slot:"header"},[t._v("项目")]),a("el-form",{staticClass:"form-inline",attrs:{inline:"",size:"mini",disabled:"","label-width":"110px"}},[a("el-form-item",{staticClass:"block",attrs:{label:"项目名称",prop:"xmmc"}},[a("el-input",{staticClass:"name",model:{value:t.applyProject.xmmc,callback:function(e){t.$set(t.applyProject,"xmmc",e)},expression:"applyProject.xmmc"}})],1),a("el-form-item",{attrs:{label:"出国/出境",prop:"typeid"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.applyProject.typename,callback:function(e){t.$set(t.applyProject,"typename",e)},expression:"applyProject.typename"}},t._l(t.placeList,function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}))],1),a("el-form-item",{attrs:{label:"立项单位",prop:"lxdwid"}},[a("el-select",{attrs:{filterable:"",placeholder:"请选择"},model:{value:t.applyProject.lxdwmc,callback:function(e){t.$set(t.applyProject,"lxdwmc",e)},expression:"applyProject.lxdwmc"}},t._l(t.deptList,function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}))],1),a("el-form-item",{attrs:{label:"项目负责人",prop:"xmfzr"}},[a("el-input",{staticClass:"select",model:{value:t.applyProject.xmfzr,callback:function(e){t.$set(t.applyProject,"xmfzr",e)},expression:"applyProject.xmfzr"}})],1),a("el-form-item",{attrs:{label:"负责人电话",prop:"xmfzrdh"}},[a("el-input",{staticClass:"select",model:{value:t.applyProject.xmfzrdh,callback:function(e){t.$set(t.applyProject,"xmfzrdh",e)},expression:"applyProject.xmfzrdh"}})],1)],1)],1),a("el-card",{attrs:{shadow:"hover"}},[a("header",{attrs:{slot:"header"},slot:"header"},[t._v("学生基本信息")]),a("el-form",{staticClass:"form-inline",attrs:{inline:"",size:"mini",disabled:"","label-width":"110px"}},[a("el-form-item",{attrs:{label:"姓名"}},[a("el-input",{attrs:{disabled:""},model:{value:t.studentInfo.xm,callback:function(e){t.$set(t.studentInfo,"xm",e)},expression:"studentInfo.xm"}})],1),a("el-form-item",{attrs:{label:"学号"}},[a("el-input",{attrs:{disabled:""},model:{value:t.studentInfo.xh,callback:function(e){t.$set(t.studentInfo,"xh",e)},expression:"studentInfo.xh"}})],1),a("el-form-item",{attrs:{label:"性别"}},[a("el-input",{attrs:{disabled:""},model:{value:t.studentInfo.xb,callback:function(e){t.$set(t.studentInfo,"xb",e)},expression:"studentInfo.xb"}})],1),a("el-form-item",{attrs:{label:"学院"}},[a("el-input",{attrs:{disabled:""},model:{value:t.studentInfo.xy,callback:function(e){t.$set(t.studentInfo,"xy",e)},expression:"studentInfo.xy"}})],1),a("el-form-item",{attrs:{label:"专业"}},[a("el-input",{attrs:{disabled:""},model:{value:t.studentInfo.zy,callback:function(e){t.$set(t.studentInfo,"zy",e)},expression:"studentInfo.zy"}})],1),a("el-form-item",{attrs:{label:"班级"}},[a("el-input",{attrs:{disabled:""},model:{value:t.studentInfo.bj,callback:function(e){t.$set(t.studentInfo,"bj",e)},expression:"studentInfo.bj"}})],1),a("el-form-item",{attrs:{label:"培养层次"}},[a("el-input",{attrs:{disabled:""},model:{value:t.studentInfo.pycc,callback:function(e){t.$set(t.studentInfo,"pycc",e)},expression:"studentInfo.pycc"}})],1),a("el-form-item",{attrs:{label:"政治面貌"}},[a("el-input",{attrs:{disabled:""},model:{value:t.studentInfo.zzmm,callback:function(e){t.$set(t.studentInfo,"zzmm",e)},expression:"studentInfo.zzmm"}})],1),a("el-form-item",{attrs:{label:"证件类型"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.apply.zjlx,callback:function(e){t.$set(t.apply,"zjlx",e)},expression:"apply.zjlx"}},[a("el-option",{attrs:{label:"护照",value:"护照"}}),a("el-option",{attrs:{label:"身份证",value:"身份证"}}),a("el-option",{attrs:{label:"台胞证",value:"台胞证"}}),a("el-option",{attrs:{label:"回乡证",value:"回乡证"}}),a("el-option",{attrs:{label:"港澳台居民居住证",value:"港澳台居民居住证"}})],1)],1),a("el-form-item",{attrs:{label:"证件号码"}},[a("el-input",{model:{value:t.apply.zjhm,callback:function(e){t.$set(t.apply,"zjhm",e)},expression:"apply.zjhm"}})],1),a("el-form-item",{attrs:{label:"外语语种"}},[a("el-input",{model:{value:t.apply.wyyz,callback:function(e){t.$set(t.apply,"wyyz",e)},expression:"apply.wyyz"}})],1),a("el-form-item",{attrs:{label:"外语水平"}},[a("el-input",{model:{value:t.apply.wysp,callback:function(e){t.$set(t.apply,"wysp",e)},expression:"apply.wysp"}})],1),a("el-form-item",{attrs:{label:"联系电话"}},[a("el-input",{model:{value:t.apply.lxdh,callback:function(e){t.$set(t.apply,"lxdh",e)},expression:"apply.lxdh"}})],1),a("el-form-item",{attrs:{label:"电子邮箱"}},[a("el-input",{model:{value:t.apply.email,callback:function(e){t.$set(t.apply,"email",e)},expression:"apply.email"}})],1),a("el-form-item",{attrs:{label:"健康状况"}},[a("el-input",{model:{value:t.apply.jkzk,callback:function(e){t.$set(t.apply,"jkzk",e)},expression:"apply.jkzk"}})],1)],1)],1),a("el-card",{attrs:{shadow:"hover"}},[a("header",{attrs:{slot:"header"},slot:"header"},[t._v("申请表")]),a("el-form",{staticClass:"form-inline",attrs:{inline:"",size:"medium",disabled:"","label-width":"110px"}},[a("el-form-item",{staticClass:"block",attrs:{label:"申请理由"}},[a("el-input",{attrs:{type:"textarea",autosize:{minRows:4},placeholder:"请填写项目申请理由（2000字以内）"},model:{value:t.apply.sqly,callback:function(e){t.$set(t.apply,"sqly",e)},expression:"apply.sqly"}})],1),a("el-form-item",{staticClass:"block",attrs:{label:"计划安排"}},[a("el-input",{attrs:{type:"textarea",autosize:{minRows:4},placeholder:"如果是长期学习交流，需要填写详细学习计划（学习/会议/比赛等的内容/计划/安排）"},model:{value:t.apply.jhap,callback:function(e){t.$set(t.apply,"jhap",e)},expression:"apply.jhap"}})],1),a("el-form-item",{attrs:{label:"成绩单"}},[a("el-upload",{staticClass:"img-upload",attrs:{action:t.$proxy+"/upload/uploadFile","show-file-list":!1,"on-success":t.handleSuccess1}},[t.apply.cjd?a("img",{staticClass:"img",attrs:{src:t.$proxy+t.imgUrl+t.apply.cjd}}):a("i",{staticClass:"el-icon-plus icon"})])],1),a("el-form-item",{attrs:{label:"外语成绩证明"}},[a("el-upload",{staticClass:"img-upload",attrs:{action:t.$proxy+"/upload/uploadFile","show-file-list":!1,"on-success":t.handleSuccess2}},[t.apply.wycjzm?a("img",{staticClass:"img",attrs:{src:t.$proxy+t.imgUrl+t.apply.wycjzm}}):a("i",{staticClass:"el-icon-plus icon"})])],1),a("el-form-item",{attrs:{label:"护照首页"}},[a("el-upload",{staticClass:"img-upload",attrs:{action:t.$proxy+"/upload/uploadFile","show-file-list":!1,"on-success":t.handleSuccess3}},[t.apply.hzsy?a("img",{staticClass:"img",attrs:{src:t.$proxy+t.imgUrl+t.apply.hzsy}}):a("i",{staticClass:"el-icon-plus icon"})])],1),a("el-form-item",{staticClass:"block",attrs:{label:"其他材料"}},t._l(t.qtList,function(e){return a("a",{key:e.id,staticClass:"download",attrs:{href:t.$proxy+t.$downloadUrl+e.url}},[t._v(t._s(e.name))])})),"详情"===t.applyName||"审批"===t.applyName?a("el-form-item",{staticClass:"block step",attrs:{label:"审核状况"}},[a("el-steps",{attrs:{active:t.activeStep,"finish-status":"success",space:400}},t._l(t.stepList,function(e){return a("el-step",{key:e.id,attrs:{description:e.spyj}},[a("template",{slot:"title"},["0"===e.status?a("span",[t._v(t._s(e.step_name)+"待审核")]):"1"===e.status?a("span",[t._v(t._s(e.step_name)+"审核通过")]):"9"===e.status?a("span",[t._v(t._s(e.step_name)+"审核不通过")]):t._e()])],2)}))],1):t._e()],1)],1),"审批"===t.applyName?a("el-card",{attrs:{shadow:"hover"}},[a("header",{attrs:{slot:"header"},slot:"header"},[t._v("审批")]),a("el-form",{staticClass:"form-inline",attrs:{inline:"",size:"medium","label-width":"110px"}},[a("el-form-item",{attrs:{label:"审批"}},[a("el-radio-group",{model:{value:t.status,callback:function(e){t.status=e},expression:"status"}},[a("el-radio-button",{attrs:{label:"1"}},[t._v("通过")]),a("el-radio-button",{attrs:{label:"9"}},[t._v("不通过")])],1)],1),a("el-form-item",{attrs:{label:"审批意见"}},[a("el-input",{attrs:{type:"textarea"},model:{value:t.spyj,callback:function(e){t.spyj=e},expression:"spyj"}})],1),a("el-form-item",{staticClass:"block",attrs:{label:" "}},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.submitApprove()}}},[t._v("确认提交")])],1)],1)],1):t._e()],1)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("fieldset",[a("legend",[t._v("详情")])])}],r=(a("7f7f"),a("2909")),i=a("be94"),o=(a("cadf"),a("551c"),a("097d"),{name:"project",data:function(){return{placeList:[],deptList:[],activeStep:2,applyProject:"",studentInfo:"",apply:{projectId:"",studentId:"",zjlx:"",zjhm:"",wyyz:"",wysp:"",lxdh:"",email:"",jkzk:"",sqly:"",jhap:"",cjd:"",wycjzm:"",hzsy:"",qtfile:""},qtList:[],stepList:[],imgUrl:"/resource/showImg?path=",fileList:[],archiveFileList:[],status:"",spyj:""}},computed:{role:function(){return this.$store.state.role},applyId:function(){return this.$store.state.applyId},applyName:function(){return this.$store.state.applyName}},created:function(){this.getInfo(),""===this.applyId&&("SYS_STUDENT"===this.role?this.$router.push("/project/apply/list"):this.$router.push("/project/apply/examine"))},methods:{getInfo:function(){var t=this;this.$ajax.post("projectApply/toView",{applyId:this.applyId}).then(function(e){t.applyProject=Object(i["a"])({},e.data.data.data.project.sqlRow),t.studentInfo=Object(i["a"])({},e.data.data.data.student),t.apply=Object(i["a"])({},e.data.data.data.projectApply),t.qtList=Object(r["a"])(e.data.data.data.qtList),t.stepList=Object(r["a"])(e.data.data.data.processDataList),t.activeStep=e.data.data.data.xl})},handleSuccess1:function(t,e,a){"0"===t.errcode?this.apply.cjd=t.path:this.$message.error(t.errmsg)},handleSuccess2:function(t,e,a){"0"===t.errcode?this.apply.wycjzm=t.path:this.$message.error(t.errmsg)},handleSuccess3:function(t,e,a){"0"===t.errcode?this.apply.hzsy=t.path:this.$message.error(t.errmsg)},handleRemove:function(t,e){var a=this;console.log(t);var l=t.url?t.url:t.response.path;this.$ajax.post("/resource/deleteFile",{path:l}).then(function(t){"0"===t.data.errcode?(a.fileList=Object(r["a"])(e),console.log(a.fileList)):a.$message.error(t.data.errmsg)})},handleSuccess:function(t,e,a){"0"===t.errcode?(this.fileList=Object(r["a"])(a),console.log(this.fileList)):this.$message.error(t.message)},submitForm:function(){var t=this;this.apply.projectId=this.applyProject.id;for(var e=0;e<this.fileList.length;e++)this.fileList[e].response?this.archiveFileList.push({url:this.fileList[e].response.path,name:this.fileList[e].name}):this.archiveFileList.push({url:this.fileList[e].url,name:this.fileList[e].name});this.archiveFileList.length>0&&(this.apply.qtfile=JSON.stringify(this.archiveFileList)),this.$ajax.post("/projectApply/add",this.apply).then(function(e){"0"===e.data.errcode?(t.$message.success("申请已提交"),t.$router.push("/project/apply/list")):t.$message.error(e.data.errmsg)})},resetForm:function(t){this.$refs[t].resetFields()},submitApprove:function(){var t=this;this.$ajax.post("/projectApprove/approve",{roleId:this.role,id:this.applyId,status:this.status,spyj:this.spyj}).then(function(e){"0"===e.data.errcode?t.$router.push("/project/apply/examine"):t.$message.error(e.data.errmsg)})}}}),n=o,p=(a("5d64"),a("2877")),c=Object(p["a"])(n,l,s,!1,null,null,null);c.options.__file="detail.vue";e["default"]=c.exports},fd72:function(t,e,a){}}]);
//# sourceMappingURL=chunk-cf1dcb06.ddb09888.js.map
(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6a3009a1"],{"01bf":function(t,e,a){"use strict";var l=a("76cc"),s=a.n(l);s.a},"228e":function(t,e,a){"use strict";a.r(e);var l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"project"},[a("el-card",{staticClass:"card-search",attrs:{shadow:"hover"}},[a("header",{attrs:{slot:"header"},slot:"header"},[t._v("奖学金名单管理")]),a("el-form",{staticClass:"form-inline-search",attrs:{inline:"",model:t.formSearch,size:"mini"}},[a("el-form-item",{attrs:{label:"奖学金年度",prop:"nd"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.formSearch.nd,callback:function(e){t.$set(t.formSearch,"nd",e)},expression:"formSearch.nd"}},t._l(t.ndList,function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}))],1),a("el-form-item",{attrs:{label:"奖学金批次"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:t.formSearch.pc,callback:function(e){t.$set(t.formSearch,"pc",e)},expression:"formSearch.pc"}},[a("el-option",{attrs:{label:"春季",value:"春季"}}),a("el-option",{attrs:{label:"秋季",value:"秋季"}})],1)],1),a("el-form-item",{attrs:{label:"学生学号"}},[a("el-input",{attrs:{placeholder:"学生学号",clearable:""},model:{value:t.formSearch.xh,callback:function(e){t.$set(t.formSearch,"xh",e)},expression:"formSearch.xh"}})],1),a("el-form-item",{attrs:{label:"学生学院"}},[a("el-select",{attrs:{filterable:"",placeholder:"请选择"},model:{value:t.formSearch.xy,callback:function(e){t.$set(t.formSearch,"xy",e)},expression:"formSearch.xy"}},t._l(t.deptList,function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}))],1),a("el-form-item",{attrs:{label:"培养层次"}},[a("el-select",{attrs:{filterable:"",placeholder:"请选择"},model:{value:t.formSearch.pycc,callback:function(e){t.$set(t.formSearch,"pycc",e)},expression:"formSearch.pycc"}},[a("el-option",{attrs:{label:"本科生",value:"本科生"}}),a("el-option",{attrs:{label:"硕士生",value:"硕士生"}}),a("el-option",{attrs:{label:"博士生",value:"博士生"}})],1)],1),a("el-form-item",{attrs:{label:"项目名称"}},[a("el-input",{attrs:{placeholder:"项目名称",clearable:""},model:{value:t.formSearch.name,callback:function(e){t.$set(t.formSearch,"name",e)},expression:"formSearch.name"}})],1),a("el-form-item",{attrs:{label:"项目单位"}},[a("el-select",{attrs:{filterable:"",placeholder:"请选择"},model:{value:t.formSearch.lxdwId,callback:function(e){t.$set(t.formSearch,"lxdwId",e)},expression:"formSearch.lxdwId"}},t._l(t.deptList,function(t){return a("el-option",{key:t.id,attrs:{label:t.name,value:t.id}})}))],1),a("el-form-item",{attrs:{label:"项目类别"}},[a("el-cascader",{attrs:{options:t.typeList,props:t.props},model:{value:t.formSearch.xmlbList,callback:function(e){t.$set(t.formSearch,"xmlbList",e)},expression:"formSearch.xmlbList"}})],1),a("el-form-item",{attrs:{label:"开始时间"}},[a("el-date-picker",{attrs:{type:"date","value-format":"yyyy-MM-dd"},model:{value:t.formSearch.xmkssj,callback:function(e){t.$set(t.formSearch,"xmkssj",e)},expression:"formSearch.xmkssj"}})],1),a("el-form-item",{attrs:{label:"结束时间"}},[a("el-date-picker",{attrs:{type:"date","value-format":"yyyy-MM-dd"},model:{value:t.formSearch.xmjssj,callback:function(e){t.$set(t.formSearch,"xmjssj",e)},expression:"formSearch.xmjssj"}})],1),a("el-form-item",{attrs:{label:"项目天数"}},[a("el-row",[a("el-col",{attrs:{span:10}},[a("el-input",{attrs:{clearable:""},model:{value:t.formSearch.minDay,callback:function(e){t.$set(t.formSearch,"minDay",e)},expression:"formSearch.minDay"}})],1),a("el-col",{attrs:{span:4}},[t._v("—")]),a("el-col",{attrs:{span:10}},[a("el-input",{attrs:{clearable:""},model:{value:t.formSearch.maxDay,callback:function(e){t.$set(t.formSearch,"maxDay",e)},expression:"formSearch.maxDay"}})],1)],1)],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:t.getTableData}},[t._v("查询")])],1)],1)],1),a("el-card",{attrs:{shadow:"hover"}},[a("div",{staticClass:"btn-group"},[a("el-button-group",[a("el-button",{attrs:{size:"medium",type:"primary"},on:{click:t.batchMoneyReal}},[t._v("批量修改金额")]),a("el-button",{attrs:{size:"medium",type:"primary"},on:{click:t.batchStatus}},[t._v("批量发放")])],1)],1),a("el-table",{attrs:{data:t.tableData,size:"medium",border:""},on:{"row-dblclick":t.rowDblclick,"selection-change":t.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",align:"center",width:"50"}}),a("el-table-column",{attrs:{prop:"std_xh",label:"学号","show-overflow-tooltip":"",align:"center"}}),a("el-table-column",{attrs:{prop:"std_xm",label:"姓名","show-overflow-tooltip":"",align:"center"}}),a("el-table-column",{attrs:{prop:"std_xy",label:"学院","show-overflow-tooltip":"",align:"center"}}),a("el-table-column",{attrs:{prop:"std_pycc",label:"培养层次","show-overflow-tooltip":"",align:"center"}}),a("el-table-column",{attrs:{prop:"std_xslb",label:"学生类别","show-overflow-tooltip":"",align:"center"}}),a("el-table-column",{attrs:{prop:"lxdh",label:"联系电话","show-overflow-tooltip":"",align:"center"}}),a("el-table-column",{attrs:{prop:"xmmc",label:"项目名称","show-overflow-tooltip":"",align:"center"}}),a("el-table-column",{attrs:{prop:"lxdwmc",label:"立项单位","show-overflow-tooltip":"",align:"center"}}),a("el-table-column",{attrs:{prop:"xmlbxname",label:"项目起止时间","show-overflow-tooltip":"",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n                    "+t._s(e.row.xmkssj.substring(0,10))+" 至 "+t._s(e.row.xmjssj.substring(0,10))+"\n                ")]}}])}),a("el-table-column",{attrs:{prop:"lxfsname",label:"留学方式","show-overflow-tooltip":"",align:"center"}}),a("el-table-column",{attrs:{prop:"when_created",label:"学生申请时间","show-overflow-tooltip":"",align:"center"}}),a("el-table-column",{attrs:{prop:"yfje",label:"实发金额","show-overflow-tooltip":"",align:"center"}}),a("el-table-column",{attrs:{prop:"status",label:"发放状态","show-overflow-tooltip":"",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v("\n                    "+t._s("1"===e.row.status?"已发放":"未发放")+"\n                ")]}}])})],1),a("el-pagination",{staticClass:"pagination",attrs:{"current-page":t.formSearch.page,"page-sizes":[10,20,50,100,200,500],"page-size":t.formSearch.limit,layout:"total, sizes, prev, pager, next, jumper",total:t.total},on:{"current-change":t.handleCurrentChange,"size-change":t.handleSizeChange}})],1),a("el-dialog",{attrs:{visible:t.dialogVisible,width:"80%"},on:{"update:visible":function(e){t.dialogVisible=e}}},[a("el-card",{attrs:{shadow:"never"}},[a("header",{attrs:{slot:"header"},slot:"header"},[t._v("学生基本信息")]),a("el-form",{staticClass:"form-inline",attrs:{disabled:"",inline:"",size:"mini","label-width":"110px"}},[a("el-form-item",{attrs:{label:"姓名"}},[a("el-input",{attrs:{disabled:""},model:{value:t.studentInfo.xm,callback:function(e){t.$set(t.studentInfo,"xm",e)},expression:"studentInfo.xm"}})],1),a("el-form-item",{attrs:{label:"学号"}},[a("el-input",{attrs:{disabled:""},model:{value:t.studentInfo.xh,callback:function(e){t.$set(t.studentInfo,"xh",e)},expression:"studentInfo.xh"}})],1),a("el-form-item",{attrs:{label:"性别"}},[a("el-input",{attrs:{disabled:""},model:{value:t.studentInfo.xb,callback:function(e){t.$set(t.studentInfo,"xb",e)},expression:"studentInfo.xb"}})],1),a("el-form-item",{attrs:{label:"学院"}},[a("el-input",{attrs:{disabled:""},model:{value:t.studentInfo.xy,callback:function(e){t.$set(t.studentInfo,"xy",e)},expression:"studentInfo.xy"}})],1),a("el-form-item",{attrs:{label:"专业"}},[a("el-input",{attrs:{disabled:""},model:{value:t.studentInfo.zy,callback:function(e){t.$set(t.studentInfo,"zy",e)},expression:"studentInfo.zy"}})],1),a("el-form-item",{attrs:{label:"培养层次"}},[a("el-input",{attrs:{disabled:""},model:{value:t.studentInfo.pycc,callback:function(e){t.$set(t.studentInfo,"pycc",e)},expression:"studentInfo.pycc"}})],1),a("el-form-item",{attrs:{label:"学生类别"}},[a("el-input",{attrs:{disabled:""},model:{value:t.studentInfo.xxlb,callback:function(e){t.$set(t.studentInfo,"xxlb",e)},expression:"studentInfo.xxlb"}})],1),a("el-form-item",{attrs:{label:"政治面貌"}},[a("el-input",{attrs:{disabled:""},model:{value:t.studentInfo.zzmm,callback:function(e){t.$set(t.studentInfo,"zzmm",e)},expression:"studentInfo.zzmm"}})],1),a("el-form-item",{attrs:{label:"证件类型"}},[a("el-input",{attrs:{disabled:""},model:{value:t.studentInfo.zjlx,callback:function(e){t.$set(t.studentInfo,"zjlx",e)},expression:"studentInfo.zjlx"}})],1),a("el-form-item",{attrs:{label:"证件号码"}},[a("el-input",{attrs:{disabled:""},model:{value:t.studentInfo.zjhm,callback:function(e){t.$set(t.studentInfo,"zjhm",e)},expression:"studentInfo.zjhm"}})],1),a("el-form-item",{attrs:{label:"联系电话"}},[a("el-input",{model:{value:t.apply.lxdh,callback:function(e){t.$set(t.apply,"lxdh",e)},expression:"apply.lxdh"}})],1),a("el-form-item",{attrs:{label:"电子邮箱"}},[a("el-input",{model:{value:t.apply.email,callback:function(e){t.$set(t.apply,"email",e)},expression:"apply.email"}})],1),a("el-form-item",{attrs:{label:"健康状况"}},[a("el-input",{model:{value:t.apply.jkzk,callback:function(e){t.$set(t.apply,"jkzk",e)},expression:"apply.jkzk"}})],1)],1)],1),a("el-card",{attrs:{shadow:"hover"}},[a("header",{attrs:{slot:"header"},slot:"header"},[t._v("申请表")]),a("el-form",{staticClass:"form-inline",attrs:{disabled:"",inline:"",size:"medium","label-width":"110px"}},[a("el-form-item",{staticClass:"block tag-margin",attrs:{label:"关联项目"}},[a("el-tag",{attrs:{size:"medium"}},[t._v("项目类别:"+t._s(t.apply.xmlbname))]),a("el-tag",{attrs:{type:"success",size:"medium"}},[t._v("经费类型:"+t._s(t.apply.jflyname))]),a("el-tag",{attrs:{type:"info",size:"medium"}},[t._v("项目起止时间:"+t._s(t.apply.xmkssj)+" 至 "+t._s(t.apply.xmjssj))])],1),a("el-form-item",{attrs:{label:"国家（地区）"}},[a("el-select",{attrs:{filterable:"",placeholder:"选择交换/交流国家（地区）"},model:{value:t.apply.gjdq,callback:function(e){t.$set(t.apply,"gjdq",e)},expression:"apply.gjdq"}},t._l(t.countryList,function(t){return a("el-option",{key:t.id,attrs:{label:t.value,value:t.id}})}))],1),a("el-form-item",{attrs:{label:"院校/教育机构",prop:"jyjg"}},[a("el-input",{staticClass:"select",model:{value:t.apply.jyjg,callback:function(e){t.$set(t.apply,"jyjg",e)},expression:"apply.jyjg"}})],1),a("el-form-item",{attrs:{label:"留学方式"}},[a("el-select",{attrs:{filterable:"",placeholder:"请选择"},model:{value:t.apply.lxfs,callback:function(e){t.$set(t.apply,"lxfs",e)},expression:"apply.lxfs"}},t._l(t.abroadWayList,function(t){return a("el-option",{key:t.id,attrs:{label:t.value,value:t.id}})}))],1),a("el-form-item",{staticClass:"block",attrs:{label:"学习交流情况"}},[a("el-input",{attrs:{type:"textarea",autosize:{minRows:4},placeholder:"请填写在海外学习交流的主要内容和活动（300字以内）"},model:{value:t.apply.xxjlqk,callback:function(e){t.$set(t.apply,"xxjlqk",e)},expression:"apply.xxjlqk"}})],1),a("el-form-item",{attrs:{label:"获得的课程证明"}},[a("el-upload",{staticClass:"img-upload",attrs:{action:t.$proxy+"/upload/uploadFile","show-file-list":!1}},[t.apply.kczm?a("img",{staticClass:"img",attrs:{src:t.$proxy+t.imgUrl+t.apply.kczm}}):a("i",{staticClass:"el-icon-plus icon"})])],1),a("el-form-item",{attrs:{label:"学分证明"}},[a("el-upload",{staticClass:"img-upload",attrs:{action:t.$proxy+"/upload/uploadFile","show-file-list":!1}},[t.apply.xfzm?a("img",{staticClass:"img",attrs:{src:t.$proxy+t.imgUrl+t.apply.xfzm}}):a("i",{staticClass:"el-icon-plus icon"})])],1),a("el-form-item",{attrs:{label:"证书"}},[a("el-upload",{staticClass:"img-upload",attrs:{action:t.$proxy+"/upload/uploadFile","show-file-list":!1}},[t.apply.zs?a("img",{staticClass:"img",attrs:{src:t.$proxy+t.imgUrl+t.apply.zs}}):a("i",{staticClass:"el-icon-plus icon"})])],1),a("el-form-item",{attrs:{label:"评语"}},[a("el-upload",{staticClass:"img-upload",attrs:{action:t.$proxy+"/upload/uploadFile","show-file-list":!1}},[t.apply.py?a("img",{staticClass:"img",attrs:{src:t.$proxy+t.imgUrl+t.apply.py}}):a("i",{staticClass:"el-icon-plus icon"})])],1),a("el-form-item",{attrs:{label:"成绩单"}},[a("el-upload",{staticClass:"img-upload",attrs:{action:t.$proxy+"/upload/uploadFile","show-file-list":!1}},[t.apply.cjd?a("img",{staticClass:"img",attrs:{src:t.$proxy+t.imgUrl+t.apply.cjd}}):a("i",{staticClass:"el-icon-plus icon"})])],1),a("el-form-item",{staticClass:"block",attrs:{label:"交流报告总结"}},[a("a",{staticClass:"download",attrs:{href:t.$proxy+t.$downloadUrl+t.apply.xxjlzj,target:"_blank"}},[t._v("《华中师范大学学生海外学习交流总结报告》")])]),a("el-form-item",{staticClass:"block step",attrs:{label:"审核状况"}},[a("el-steps",{attrs:{active:t.apply.xl,"finish-status":"success",space:400}},t._l(t.apply.processdatalist,function(e){return a("el-step",{key:e.id,attrs:{description:e.spyj}},[a("template",{slot:"title"},["0"===e.status?a("span",[t._v(t._s(e.step_name)+"待审核")]):"1"===e.status?a("span",[t._v(t._s(e.step_name)+"审核通过")]):"9"===e.status?a("span",[t._v(t._s(e.step_name)+"审核不通过")]):t._e()])],2)}))],1)],1)],1),t.disable?t._e():a("el-card",{attrs:{shadow:"hover"}},[a("header",{attrs:{slot:"header"},slot:"header"},[t._v("审批")]),a("el-form",{staticClass:"form-inline",attrs:{disabled:t.disable,inline:"",size:"medium","label-width":"110px"}},[a("el-form-item",{attrs:{label:"审批"}},[a("el-radio-group",{model:{value:t.examine.status,callback:function(e){t.$set(t.examine,"status",e)},expression:"examine.status"}},[a("el-radio-button",{attrs:{label:"1"}},[t._v("通过")]),a("el-radio-button",{attrs:{label:"9"}},[t._v("不通过")])],1)],1),a("el-form-item",{attrs:{label:"审批意见"}},[a("el-input",{attrs:{type:"textarea"},model:{value:t.examine.spyj,callback:function(e){t.$set(t.examine,"spyj",e)},expression:"examine.spyj"}})],1),a("el-form-item",{staticClass:"block",attrs:{label:" "}},[a("el-button",{attrs:{type:"primary"},on:{click:function(e){t.submitApprove()}}},[t._v("确认提交")])],1)],1)],1)],1)],1)},s=[],o=a("be94"),i=(a("cadf"),a("551c"),a("097d"),{name:"project",data:function(){return{ndList:[],countryList:[],abroadWayList:[],studentInfo:"",apply:{pcId:"",projectId:"",lxdh:"",email:"",jkzk:"",gjdq:"",jyjg:"",lxfs:"",xxjlqk:"",kczm:"",xfzm:"",zs:"",py:"",cjd:"",xxjlzj:""},imgUrl:"/resource/showImg?path=",deptList:[],fundsList:[],typeList:[],props:{value:"id",label:"value",children:"sonList"},formSearch:{xh:"",xy:"",pycc:"",nd:"",pc:"",name:"",lxdwId:"",xmlbList:[],xmlb:"",xmlbx:"",jfly:"",xmkssj:"",xmjssj:"",minDay:"",maxDay:"",status:"0",page:1,limit:10},tableData:[],multipleSelection:[],row:{},total:1,dialogVisible:!1,dialogName:"",disable:!0,examine:{roleId:"",id:"",spyj:"",status:""}}},computed:{role:function(){return this.$store.state.role},form:function(){return this.$store.state.awardData}},created:function(){this.getList(),this.getTableData()},methods:{getList:function(){var t=this;this.$ajax.post("/code/xn").then(function(e){t.ndList=e.data.data.data}),this.$ajax.post("/dept/list").then(function(e){t.deptList=e.data.data.data}),this.$ajax.post("/code/findJfly",{id:this.formSearch.sfzx}).then(function(e){t.fundsList=e.data.data.data}),this.$ajax.post("/code/findCodeAndSonCode",{id:this.formSearch.sfzx}).then(function(e){t.typeList=e.data.data.data})},getTableData:function(){var t=this;this.formSearch.roleId=this.role,this.$ajax.post("/jxjResult/page",this.formSearch).then(function(e){"0"===e.data.errcode?(t.total=e.data.data.data.records,t.tableData=e.data.data.data.rows):t.$message.error(e.data.errmsg)})},rowDblclick:function(t){var e=this;this.apply=Object(o["a"])({},t),this.$ajax.post("/student/getInfoById",{studentId:t.student_id}).then(function(t){e.studentInfo=Object(o["a"])({},t.data.data.data)}),this.dialogVisible=!0,this.disable=!0,this.dialogName="详情"},handleSelectionChange:function(t){this.multipleSelection=t},batchMoney:function(){var t=this;this.multipleSelection.length>0?this.$prompt("请输入金额","应发金额",{confirmButtonText:"确定",cancelButtonText:"取消",inputPattern:/^[0-9]*$/,inputErrorMessage:"请输入数字值"}).then(function(e){var a=e.value;t.$ajax.post("/jxjResult/setFfje",{id:t.multipleSelection.map(function(t){return t.id}),ffje:a}).then(function(e){t.handleCurrentChange(1),t.$message.success(e.data.errmsg)})}).catch(function(){}):this.$message.warning("请选择数据")},batchMoneyReal:function(){var t=this;this.multipleSelection.length>0?this.$prompt("请输入金额","实发金额",{confirmButtonText:"确定",cancelButtonText:"取消",inputPattern:/^[0-9]*$/,inputErrorMessage:"请输入数字值"}).then(function(e){var a=e.value;t.$ajax.post("/jxjResult/setYfje",{id:t.multipleSelection.map(function(t){return t.id}),yfje:a}).then(function(e){t.handleCurrentChange(1),t.$message.success(e.data.errmsg)})}).catch(function(){}):this.$message.warning("请选择数据")},batchStatus:function(){var t=this;this.multipleSelection.length>0?this.$ajax.post("/jxjResult/setStatus",{id:this.multipleSelection.map(function(t){return t.id})}).then(function(e){t.handleCurrentChange(1),t.$message.success(e.data.errmsg)}):this.$message.warning("请选择数据")},handleClick:function(){this.getTableData()},handleApprove:function(t){var e=this;this.apply=Object(o["a"])({},t),this.$ajax.post("/student/getInfoById",{studentId:t.student_id}).then(function(t){e.studentInfo=Object(o["a"])({},t.data.data.data)}),this.dialogVisible=!0,this.disable=!1,this.dialogName="详情"},submitApprove:function(){var t=this;this.examine.roleId=this.role,this.examine.id=this.apply.id,this.$ajax.post("/jxjApprove/approve",this.examine).then(function(e){t.handleCurrentChange(1),t.dialogVisible=!1,t.$message.success(e.data.errmsg)})},handleSizeChange:function(t){this.formSearch.limit=t,this.formSearch.page=1,this.getTableData()},handleCurrentChange:function(t){this.formSearch.page=t,this.getTableData()}}}),r=i,n=(a("01bf"),a("2877")),c=Object(n["a"])(r,l,s,!1,null,null,null);c.options.__file="manange.vue";e["default"]=c.exports},"76cc":function(t,e,a){},be94:function(t,e,a){"use strict";function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{},s=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(a).filter(function(t){return Object.getOwnPropertyDescriptor(a,t).enumerable}))),s.forEach(function(e){l(t,e,a[e])})}return t}a.d(e,"a",function(){return s})}}]);
//# sourceMappingURL=chunk-6a3009a1.261ff57a.js.map
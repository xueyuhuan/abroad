(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1d133472"],{"23f8":function(e,t,l){"use strict";l.r(t);var a=function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"project"},[l("el-card",{staticClass:"card-search",attrs:{shadow:"hover"}},[l("header",{attrs:{slot:"header"},slot:"header"},[e._v("专项项目管理")]),l("el-form",{staticClass:"form-inline-search",attrs:{inline:"",model:e.formSearch,size:"mini"}},[l("el-form-item",{attrs:{label:"项目名称"}},[l("el-input",{attrs:{placeholder:"项目名称",clearable:""},model:{value:e.formSearch.name,callback:function(t){e.$set(e.formSearch,"name",t)},expression:"formSearch.name"}})],1),l("el-form-item",{attrs:{label:"项目单位"}},[l("el-select",{attrs:{filterable:"",placeholder:"请选择"},model:{value:e.formSearch.lxdwId,callback:function(t){e.$set(e.formSearch,"lxdwId",t)},expression:"formSearch.lxdwId"}},e._l(e.deptList,function(e){return l("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}))],1),l("el-form-item",{attrs:{label:"项目类别"}},[l("el-cascader",{attrs:{options:e.typeList,props:e.props},model:{value:e.formSearch.xmlbList,callback:function(t){e.$set(e.formSearch,"xmlbList",t)},expression:"formSearch.xmlbList"}})],1),l("el-form-item",{attrs:{label:"经费来源"}},[l("el-select",{model:{value:e.formSearch.jfly,callback:function(t){e.$set(e.formSearch,"jfly",t)},expression:"formSearch.jfly"}},e._l(e.fundsList,function(e){return l("el-option",{key:e.id,attrs:{label:e.value,value:e.id}})}))],1),l("el-form-item",{attrs:{label:"开始时间"}},[l("el-date-picker",{attrs:{type:"date","value-format":"yyyy-MM-dd HH:mm:ss"},model:{value:e.formSearch.xmkssj,callback:function(t){e.$set(e.formSearch,"xmkssj",t)},expression:"formSearch.xmkssj"}})],1),l("el-form-item",{attrs:{label:"结束时间"}},[l("el-date-picker",{attrs:{type:"date","value-format":"yyyy-MM-dd HH:mm:ss"},model:{value:e.formSearch.xmjssj,callback:function(t){e.$set(e.formSearch,"xmjssj",t)},expression:"formSearch.xmjssj"}})],1),l("el-form-item",{attrs:{label:"项目天数"}},[l("el-row",[l("el-col",{attrs:{span:10}},[l("el-input",{attrs:{clearable:""},model:{value:e.formSearch.minDay,callback:function(t){e.$set(e.formSearch,"minDay",t)},expression:"formSearch.minDay"}})],1),l("el-col",{attrs:{span:4}},[e._v("—")]),l("el-col",{attrs:{span:10}},[l("el-input",{attrs:{clearable:""},model:{value:e.formSearch.maxDay,callback:function(t){e.$set(e.formSearch,"maxDay",t)},expression:"formSearch.maxDay"}})],1)],1)],1),l("el-form-item",[l("el-button",{attrs:{type:"primary"},on:{click:e.getTableData}},[e._v("查询")])],1)],1)],1),l("el-card",{attrs:{shadow:"hover"}},[l("el-tabs",{on:{"tab-click":e.handleClick},model:{value:e.formSearch.status,callback:function(t){e.$set(e.formSearch,"status",t)},expression:"formSearch.status"}},[l("el-tab-pane",{attrs:{label:"全部",name:"all"}},[l("el-table",{attrs:{data:e.tableData,size:"medium",border:""},on:{"row-dblclick":e.rowDblclick}},[l("el-table-column",{attrs:{prop:"xmmc",label:"项目名称","show-overflow-tooltip":"",align:"center"}}),l("el-table-column",{attrs:{prop:"lxdwmc",label:"立项单位","show-overflow-tooltip":"",align:"center"}}),l("el-table-column",{attrs:{prop:"jflyname",label:"经费来源","show-overflow-tooltip":"",align:"center"}}),l("el-table-column",{attrs:{prop:"xmlbxname",label:"项目类别","show-overflow-tooltip":"",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n                            "+e._s(t.row.xmlbname)+"/"+e._s(t.row.xmlbxname)+"\n                        ")]}}])}),l("el-table-column",{attrs:{prop:"time",label:"项目起止时间","show-overflow-tooltip":"",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n                            "+e._s(t.row.xmkssj)+"至"+e._s(t.row.xmzzsj)+"\n                        ")]}}])}),l("el-table-column",{attrs:{prop:"xmts",label:"天数",width:"50","show-overflow-tooltip":"",align:"center"}}),l("el-table-column",{attrs:{prop:"xmfzr",label:"项目负责人",width:"80","show-overflow-tooltip":"",align:"center"}}),l("el-table-column",{attrs:{prop:"xmfzrdh",label:"联系电话",width:"80","show-overflow-tooltip":"",align:"center"}}),l("el-table-column",{attrs:{prop:"mexz",label:"名额",width:"50","show-overflow-tooltip":"",align:"center"}}),l("el-table-column",{attrs:{label:"状态",width:"80",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return["1"===t.row.status?l("el-tag",{attrs:{size:"medium"}},[e._v("待审核")]):"2"===t.row.status?l("el-tag",{attrs:{size:"medium",type:"warning"}},[e._v("已通过")]):"8"===t.row.status?l("el-tag",{attrs:{size:"medium",type:"success"}},[e._v("已发布")]):l("el-tag",{attrs:{size:"medium",type:"info"}},[e._v("未通过")])]}}])})],1)],1),l("el-tab-pane",{attrs:{label:"待审批",name:"1"}},[l("el-table",{attrs:{data:e.tableData,size:"medium",border:""},on:{"row-dblclick":e.rowDblclick}},[l("el-table-column",{attrs:{prop:"xmmc",label:"项目名称","show-overflow-tooltip":"",align:"center"}}),l("el-table-column",{attrs:{prop:"lxdwmc",label:"立项单位","show-overflow-tooltip":"",align:"center"}}),l("el-table-column",{attrs:{prop:"jflyname",label:"经费来源","show-overflow-tooltip":"",align:"center"}}),l("el-table-column",{attrs:{prop:"xmlbxname",label:"项目类别","show-overflow-tooltip":"",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n                            "+e._s(t.row.xmlbname)+"/"+e._s(t.row.xmlbxname)+"\n                        ")]}}])}),l("el-table-column",{attrs:{prop:"time",label:"项目起止时间","show-overflow-tooltip":"",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n                            "+e._s(t.row.xmkssj)+"至"+e._s(t.row.xmzzsj)+"\n                        ")]}}])}),l("el-table-column",{attrs:{prop:"xmfzr",label:"项目负责人",width:"80","show-overflow-tooltip":"",align:"center"}}),l("el-table-column",{attrs:{prop:"xmfzrdh",label:"联系电话",width:"80","show-overflow-tooltip":"",align:"center"}}),l("el-table-column",{attrs:{prop:"mexz",label:"名额",width:"50","show-overflow-tooltip":"",align:"center"}}),l("el-table-column",{attrs:{prop:"xxjl",label:"学校奖励",width:"60","show-overflow-tooltip":"",align:"center"}}),l("el-table-column",{attrs:{label:"操作",width:"80",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-button",{attrs:{type:"primary",size:"mini",plain:""},on:{click:function(l){e.handleApprove(t.row)}}},[e._v("审批")])]}}])})],1)],1),l("el-tab-pane",{attrs:{label:"已通过",name:"2"}},[l("el-table",{attrs:{data:e.tableData,size:"medium",border:""},on:{"row-dblclick":e.rowDblclick}},[l("el-table-column",{attrs:{prop:"xmmc",label:"项目名称","show-overflow-tooltip":"",align:"center"}}),l("el-table-column",{attrs:{prop:"lxdwmc",label:"立项单位",width:"80","show-overflow-tooltip":"",align:"center"}}),l("el-table-column",{attrs:{prop:"jflyname",label:"经费来源","show-overflow-tooltip":"",align:"center"}}),l("el-table-column",{attrs:{prop:"xmlbxname",label:"项目类别","show-overflow-tooltip":"",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n                            "+e._s(t.row.xmlbname)+"/"+e._s(t.row.xmlbxname)+"\n                        ")]}}])}),l("el-table-column",{attrs:{prop:"time",label:"项目起止时间","show-overflow-tooltip":"",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n                            "+e._s(t.row.xmkssj)+"至"+e._s(t.row.xmzzsj)+"\n                        ")]}}])}),l("el-table-column",{attrs:{prop:"xmfzr",label:"项目负责人",width:"80","show-overflow-tooltip":"",align:"center"}}),l("el-table-column",{attrs:{prop:"xmfzrdh",label:"联系电话",width:"80","show-overflow-tooltip":"",align:"center"}}),l("el-table-column",{attrs:{prop:"mexz",label:"名额",width:"50","show-overflow-tooltip":"",align:"center"}}),l("el-table-column",{attrs:{prop:"xxjl",label:"学校奖励",width:"60","show-overflow-tooltip":"",align:"center"}}),l("el-table-column",{attrs:{prop:"shsj",label:"审核时间",width:"80","show-overflow-tooltip":"",align:"center"}}),l("el-table-column",{attrs:{label:"操作",width:"150",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-button",{attrs:{type:"primary",size:"mini",plain:""},on:{click:function(l){e.handleEdit(t.row)}}},[e._v("编辑")]),l("el-button",{attrs:{type:"success",size:"mini",plain:""},on:{click:function(l){e.handleRelease(t.row)}}},[e._v("发布")])]}}])})],1)],1),l("el-tab-pane",{attrs:{label:"已发布",name:"8"}},[l("el-table",{attrs:{data:e.tableData,size:"medium",border:""},on:{"row-dblclick":e.rowDblclick}},[l("el-table-column",{attrs:{prop:"xmmc",label:"项目名称","show-overflow-tooltip":"",align:"center"}}),l("el-table-column",{attrs:{prop:"lxdwmc",label:"立项单位",width:"80","show-overflow-tooltip":"",align:"center"}}),l("el-table-column",{attrs:{prop:"jflyname",label:"经费来源","show-overflow-tooltip":"",align:"center"}}),l("el-table-column",{attrs:{prop:"xmlbxname",label:"项目类别","show-overflow-tooltip":"",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n                            "+e._s(t.row.xmlbname)+"/"+e._s(t.row.xmlbxname)+"\n                        ")]}}])}),l("el-table-column",{attrs:{prop:"time",label:"项目起止时间","show-overflow-tooltip":"",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n                            "+e._s(t.row.xmkssj)+"至"+e._s(t.row.xmzzsj)+"\n                        ")]}}])}),l("el-table-column",{attrs:{prop:"xmfzr",label:"项目负责人",width:"80","show-overflow-tooltip":"",align:"center"}}),l("el-table-column",{attrs:{prop:"xmfzrdh",label:"联系电话",width:"80","show-overflow-tooltip":"",align:"center"}}),l("el-table-column",{attrs:{prop:"mexz",label:"名额",width:"50","show-overflow-tooltip":"",align:"center"}}),l("el-table-column",{attrs:{prop:"xxjl",label:"学校奖励",width:"60","show-overflow-tooltip":"",align:"center"}}),l("el-table-column",{attrs:{prop:"xssqzzsj",label:"申请截止时间",width:"80","show-overflow-tooltip":"",align:"center"}}),l("el-table-column",{attrs:{label:"操作",width:"80",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-button",{attrs:{type:"primary",size:"mini",plain:""},on:{click:function(l){e.handleEdit(t.row)}}},[e._v("编辑")])]}}])})],1)],1),l("el-tab-pane",{attrs:{label:"未通过",name:"9"}},[l("el-table",{attrs:{data:e.tableData,size:"medium",border:""},on:{"row-dblclick":e.rowDblclick}},[l("el-table-column",{attrs:{prop:"xmmc",label:"项目名称","show-overflow-tooltip":"",align:"center"}}),l("el-table-column",{attrs:{prop:"lxdwmc",label:"立项单位",width:"80","show-overflow-tooltip":"",align:"center"}}),l("el-table-column",{attrs:{prop:"jflyname",label:"经费来源","show-overflow-tooltip":"",align:"center"}}),l("el-table-column",{attrs:{prop:"xmlbxname",label:"项目类别","show-overflow-tooltip":"",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n                            "+e._s(t.row.xmlbname)+"/"+e._s(t.row.xmlbxname)+"\n                        ")]}}])}),l("el-table-column",{attrs:{prop:"time",label:"项目起止时间","show-overflow-tooltip":"",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n                            "+e._s(t.row.xmkssj)+"至"+e._s(t.row.xmzzsj)+"\n                        ")]}}])}),l("el-table-column",{attrs:{prop:"xmfzr",label:"项目负责人",width:"80","show-overflow-tooltip":"",align:"center"}}),l("el-table-column",{attrs:{prop:"xmfzrdh",label:"联系电话",width:"80","show-overflow-tooltip":"",align:"center"}}),l("el-table-column",{attrs:{prop:"mexz",label:"名额",width:"50","show-overflow-tooltip":"",align:"center"}}),l("el-table-column",{attrs:{label:"操作",width:"80",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[l("el-button",{attrs:{type:"danger",size:"mini",plain:""},on:{click:function(l){e.handleDel(t.row)}}},[e._v("删除")])]}}])})],1)],1)],1),l("el-pagination",{staticClass:"pagination",attrs:{"current-page":e.formSearch.page,"page-sizes":[10,20,50,100,200,500],"page-size":e.formSearch.limit,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"current-change":e.handleCurrentChange,"size-change":e.handleSizeChange}})],1),l("el-dialog",{attrs:{visible:e.dialogVisible,width:"80%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[l("header",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(e.dialogName))]),l("project-form",{attrs:{row:e.row,disable:e.disable,name:e.dialogName},on:{"submit-approve":e.sonApprove,"submit-release":e.sonRelease,"submit-edit":e.sonEdit,"dialog-close":e.dialogClose}})],1)],1)},o=[],r=l("be94"),s=l("9a73"),n={name:"project",components:{projectForm:s["a"]},data:function(){return{deptList:[],fundsList:[],typeList:[],props:{value:"id",label:"value",children:"sonList"},formSearch:{roleId:"",sfzx:"101",name:"",lxdwId:"",xmlbList:[],xmlb:"",xmlbx:"",jfly:"",xmkssj:"",xmjssj:"",minDay:"",maxDay:"",status:"all",page:1,limit:10},tableData:[],row:{},total:1,dialogVisible:!1,dialogName:"",disable:!0}},computed:{role:function(){return this.$store.state.role}},created:function(){this.getList(),this.getTableData()},methods:{getList:function(){var e=this;this.$ajax.post("/dept/list").then(function(t){e.deptList=t.data.data.data}),this.$ajax.post("/code/findJfly",{id:this.formSearch.sfzx}).then(function(t){e.fundsList=t.data.data.data}),this.$ajax.post("/code/findCodeAndSonCode",{id:this.formSearch.sfzx}).then(function(t){e.typeList=t.data.data.data})},getTableData:function(){var e=this;this.formSearch.roleId=this.role,this.formSearch.xmlb=this.formSearch.xmlbList[0],this.formSearch.xmlbx=this.formSearch.xmlbList[1],this.$ajax.post("/project/approvePage",this.formSearch).then(function(t){e.total=t.data.data.data.records,e.tableData=t.data.data.data.rows})},rowDblclick:function(e){this.row=Object(r["a"])({},e),console.log(this.row),this.dialogVisible=!0,this.disable=!0,this.dialogName="详情"},handleClick:function(){this.getTableData()},handleApprove:function(e){this.row=Object(r["a"])({},e),this.dialogVisible=!0,this.disable=!0,this.dialogName="审批"},sonApprove:function(e){this.handleCurrentChange(1),this.dialogVisible=!1,this.$message.success(e.data.errmsg)},handleEdit:function(e){var t=this;"8"===this.formSearch.status?this.$confirm("该项目已发布, 是否继续修改?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){console.log(e.xmmc),t.row=Object(r["a"])({},e),t.dialogVisible=!0,t.disable=!1,t.dialogName="编辑"}).catch(function(){}):(console.log(e.xmmc),this.row=Object(r["a"])({},e),this.dialogVisible=!0,this.disable=!1,this.dialogName="编辑")},sonEdit:function(e){this.handleCurrentChange(1),this.dialogVisible=!1,this.$message.success(e.data.errmsg)},handleRelease:function(e){this.row=Object(r["a"])({},e),this.dialogVisible=!0,this.disable=!0,this.dialogName="发布"},sonRelease:function(e){this.handleCurrentChange(1),this.dialogVisible=!1,this.$message.success(e.data.errmsg)},handleDel:function(e){var t=this;this.$ajax.post("/project/remove",{id:e.id}).then(function(e){"0"===e.data.errcode?t.$message.success(e.data.errmsg):t.$message.error(e.data.errmsg)})},dialogClose:function(){this.dialogVisible=!1},handleSizeChange:function(e){this.formSearch.limit=e,this.formSearch.page=1,this.getTableData()},handleCurrentChange:function(e){this.formSearch.page=e,this.getTableData()}}},i=n,c=(l("a623"),l("2877")),m=Object(c["a"])(i,a,o,!1,null,null,null);m.options.__file="special.vue";t["default"]=m.exports},"8a42":function(e,t,l){},a623:function(e,t,l){"use strict";var a=l("8a42"),o=l.n(a);o.a}}]);
//# sourceMappingURL=chunk-1d133472.a6fffecf.js.map
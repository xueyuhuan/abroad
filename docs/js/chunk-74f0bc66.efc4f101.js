(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-74f0bc66"],{"182d":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"project"},[e._m(0),a("el-card",[a("header",{attrs:{slot:"header"},slot:"header"},[e._v("设置")]),a("el-form",{ref:"form",staticClass:"form-inline",attrs:{inline:"",size:"medium",model:e.form,rules:e.rules,"label-width":"110px"}},[a("el-form-item",{staticClass:"block",attrs:{label:"奖学金名称",prop:"name"}},[a("el-input",{staticClass:"name",model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),a("el-form-item",{attrs:{label:"奖学金年度",prop:"nd"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.form.nd,callback:function(t){e.$set(e.form,"nd",t)},expression:"form.nd"}},e._l(e.ndList,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}))],1),a("el-form-item",{attrs:{label:"奖学金批次",prop:"pc"}},[a("el-select",{attrs:{placeholder:"请选择"},model:{value:e.form.pc,callback:function(t){e.$set(e.form,"pc",t)},expression:"form.pc"}},[a("el-option",{attrs:{label:"春季",value:"春季"}}),a("el-option",{attrs:{label:"秋季",value:"秋季"}})],1)],1),a("el-form-item",{attrs:{label:"申请开始时间",prop:"sqkssj"}},[a("el-date-picker",{staticClass:"select",attrs:{type:"date","value-format":"yyyy-MM-dd"},model:{value:e.form.sqkssj,callback:function(t){e.$set(e.form,"sqkssj",t)},expression:"form.sqkssj"}})],1),a("el-form-item",{attrs:{label:"申请结束时间",prop:"sqjzsj"}},[a("el-date-picker",{staticClass:"select",attrs:{type:"date","value-format":"yyyy-MM-dd"},model:{value:e.form.sqjzsj,callback:function(t){e.$set(e.form,"sqjzsj",t)},expression:"form.sqjzsj"}})],1),a("el-form-item",{attrs:{label:"关联项目名称"}},[e._l(e.multipleSelection,function(t){return a("el-tag",{key:t.id,staticStyle:{"margin-right":"10px"},attrs:{type:"success"}},[e._v(e._s(t.xmmc))])}),a("el-button",{attrs:{size:"small",type:"primary",icon:"el-icon-document"},on:{click:e.chooseProject}},[e._v("管理可参申本奖学金的项目")])],2),a("el-form-item",{staticClass:"block",attrs:{label:"申请对象"}},[a("el-input",{attrs:{type:"textarea",autosize:{minRows:2},placeholder:"请填写申请对象"},model:{value:e.form.sqdx,callback:function(t){e.$set(e.form,"sqdx",t)},expression:"form.sqdx"}})],1),a("el-form-item",{staticClass:"block",attrs:{label:"资助范围和额度"}},[a("el-input",{attrs:{type:"textarea",autosize:{minRows:2},placeholder:"请填写资助范围和额度"},model:{value:e.form.zzfwed,callback:function(t){e.$set(e.form,"zzfwed",t)},expression:"form.zzfwed"}})],1),a("el-form-item",{staticClass:"block",attrs:{label:"申请资格"}},[a("el-input",{attrs:{type:"textarea",autosize:{minRows:4},placeholder:"请填写学生申请本项目的资格要求"},model:{value:e.form.sqzg,callback:function(t){e.$set(e.form,"sqzg",t)},expression:"form.sqzg"}})],1),a("el-form-item",{attrs:{label:"咨询电话",prop:"zxdh"}},[a("el-input",{staticClass:"select",model:{value:e.form.zxdh,callback:function(t){e.$set(e.form,"zxdh",t)},expression:"form.zxdh"}})],1),a("el-form-item",{staticClass:"block",attrs:{label:"项目材料上传"}},[a("el-upload",{attrs:{action:e.$proxy+"/upload/uploadFile","on-remove":e.handleRemove,"on-success":e.handleSuccess}},[a("el-button",{attrs:{size:"small",type:"primary",icon:"el-icon-upload"}},[e._v("点击上传")]),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("只能上传doc/docx文件，且不超过2M")])],1)],1),a("el-form-item",{staticClass:"submit"},[a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.submitForm("form")}}},[e._v("确认提交")]),a("el-button",{on:{click:function(t){e.resetForm("form")}}},[e._v("重置内容")])],1)],1)],1),a("el-dialog",{attrs:{title:"选择项目",visible:e.dialogVisible,width:"90%","show-close":!1}},[a("el-form",{staticClass:"form-inline-search",attrs:{inline:"",model:e.formSearch,size:"mini"}},[a("el-form-item",{attrs:{label:"项目名称"}},[a("el-input",{attrs:{placeholder:"项目名称",clearable:""},model:{value:e.formSearch.name,callback:function(t){e.$set(e.formSearch,"name",t)},expression:"formSearch.name"}})],1),a("el-form-item",{attrs:{label:"项目单位"}},[a("el-select",{attrs:{filterable:"",placeholder:"请选择"},model:{value:e.formSearch.lxdwId,callback:function(t){e.$set(e.formSearch,"lxdwId",t)},expression:"formSearch.lxdwId"}},e._l(e.deptList,function(e){return a("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}))],1),a("el-form-item",{attrs:{label:"项目类别"}},[a("el-cascader",{attrs:{options:e.typeList,props:e.props},model:{value:e.formSearch.xmlbList,callback:function(t){e.$set(e.formSearch,"xmlbList",t)},expression:"formSearch.xmlbList"}})],1),a("el-form-item",{attrs:{label:"经费来源"}},[a("el-select",{model:{value:e.formSearch.jfly,callback:function(t){e.$set(e.formSearch,"jfly",t)},expression:"formSearch.jfly"}},e._l(e.fundsList,function(e){return a("el-option",{key:e.id,attrs:{label:e.value,value:e.id}})}))],1),a("el-form-item",{attrs:{label:"开始时间"}},[a("el-date-picker",{attrs:{type:"date","value-format":"yyyy-MM-dd HH:mm:ss"},model:{value:e.formSearch.xmkssj,callback:function(t){e.$set(e.formSearch,"xmkssj",t)},expression:"formSearch.xmkssj"}})],1),a("el-form-item",{attrs:{label:"结束时间"}},[a("el-date-picker",{attrs:{type:"date","value-format":"yyyy-MM-dd HH:mm:ss"},model:{value:e.formSearch.xmjssj,callback:function(t){e.$set(e.formSearch,"xmjssj",t)},expression:"formSearch.xmjssj"}})],1),a("el-form-item",{attrs:{label:"项目天数"}},[a("el-row",[a("el-col",{attrs:{span:10}},[a("el-input",{attrs:{clearable:""},model:{value:e.formSearch.minDay,callback:function(t){e.$set(e.formSearch,"minDay",t)},expression:"formSearch.minDay"}})],1),a("el-col",{attrs:{span:4}},[e._v("—")]),a("el-col",{attrs:{span:10}},[a("el-input",{attrs:{clearable:""},model:{value:e.formSearch.maxDay,callback:function(t){e.$set(e.formSearch,"maxDay",t)},expression:"formSearch.maxDay"}})],1)],1)],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:e.getTableData}},[e._v("查询")])],1)],1),a("el-table",{ref:"multipleTable",attrs:{data:e.tableData,"row-key":e.getRowKeys,size:"medium",border:""},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{"reserve-selection":"",type:"selection",width:"50",align:"center"}}),a("el-table-column",{attrs:{prop:"xmmc",label:"项目名称","show-overflow-tooltip":"",align:"center"}}),a("el-table-column",{attrs:{prop:"lxdwmc",label:"立项单位","show-overflow-tooltip":"",align:"center"}}),a("el-table-column",{attrs:{prop:"jflyname",label:"经费来源","show-overflow-tooltip":"",align:"center"}}),a("el-table-column",{attrs:{prop:"xmlbxname",label:"项目类别","show-overflow-tooltip":"",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n                    "+e._s(t.row.xmlbname)+"/"+e._s(t.row.xmlbxname)+"\n                ")]}}])}),a("el-table-column",{attrs:{prop:"time",label:"项目起止时间","show-overflow-tooltip":"",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){return[e._v("\n                    "+e._s(t.row.xmkssj)+"至"+e._s(t.row.xmzzsj)+"\n                ")]}}])}),a("el-table-column",{attrs:{prop:"sfzxname",label:"是否专项",width:"50","show-overflow-tooltip":"",align:"center"}}),a("el-table-column",{attrs:{prop:"xmfzr",label:"项目负责人",width:"80","show-overflow-tooltip":"",align:"center"}}),a("el-table-column",{attrs:{prop:"xmfzrdh",label:"联系电话",width:"80","show-overflow-tooltip":"",align:"center"}})],1),a("footer",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{attrs:{type:"primary"},on:{click:e.chooseSure}},[e._v("确 定")])],1)],1)],1)},s=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("fieldset",[a("legend",[e._v("奖学金批次设置")])])}],o=(a("7f7f"),{name:"project",data:function(){return{ndList:[],false:!1,dialogVisible:!1,formSearch:{roleId:"",sfzx:"",name:"",lxdwId:"",xmlbList:[],xmlb:"",xmlbx:"",jfly:"",xmkssj:"",xmjssj:"",minDay:"",maxDay:"",status:"8",page:1,limit:1e3},total:1,tableData:[],getRowKeys:function(e){return e.id},row:{},multipleSelection:[],chooseCount:0,deptList:[],fundsList:[],typeList:[],props:{value:"id",label:"value",children:"sonList"},fileList:[],archiveFileList:[],form:{roleId:"",projectIds:[],name:"",nd:"",pc:"",sqkssj:"",sqjzsj:"",sqdx:"",zzfwed:"",sqzg:"",zxdh:"",fjzl:""},rules:{name:[{required:!0,message:"请输入奖学金名称",trigger:"blur"}],nd:[{required:!0,message:"请选择年度",trigger:"change"}],pc:[{required:!0,message:"请选择批次",trigger:"change"}],sqkssj:[{required:!0,message:"请选择申请开始时间",trigger:"change"}],sqjzsj:[{required:!0,message:"请选择申请截止时间",trigger:"change"}],sqdx:[{required:!0,message:"请至少选择一项层次对象",trigger:"change"}]}}},computed:{role:function(){return this.$store.state.role}},created:function(){var e=this;this.$ajax.post("/code/xn").then(function(t){e.ndList=t.data.data.data})},methods:{getList:function(){var e=this;this.$ajax.post("/dept/list").then(function(t){e.deptList=t.data.data.data}),this.$ajax.post("/code/findJfly",{id:this.form.sfzx}).then(function(t){e.fundsList=t.data.data.data}),this.$ajax.post("/code/findCodeAndSonCode",{id:this.form.sfzx}).then(function(t){e.typeList=t.data.data.data})},getTableData:function(){var e=this;this.getList(),this.formSearch.roleId=this.role,this.formSearch.xmlb=this.formSearch.xmlbList[0],this.formSearch.xmlbx=this.formSearch.xmlbList[1],this.$ajax.post("/project/approvePage",this.formSearch).then(function(t){e.total=t.data.data.data.records,e.tableData=t.data.data.data.rows})},handleSelectionChange:function(e){this.multipleSelection=e},chooseProject:function(){this.chooseCount++,1===this.chooseCount&&this.getTableData(),this.dialogVisible=!0},chooseSure:function(){this.dialogVisible=!1,console.log(this.multipleSelection)},handleRemove:function(e,t){var a=this,l=e.url?e.url:e.response.path;this.$ajax.post("/resource/deleteFile",{path:l}).then(function(e){"0"===e.data.errcode?a.fileList=t:a.$message.error(e.data.errmsg)})},handleSuccess:function(e,t,a){"0"===e.errcode?this.fileList=a:this.$message.error(e.errmsg)},submitForm:function(e){var t=this;this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;for(var a in t.form.roleId=t.role,t.multipleSelection)t.form.projectIds.push(t.multipleSelection[a].id);t.archiveFileList=[];for(var l=0;l<t.fileList.length;l++)t.fileList[l].response?t.archiveFileList.push({url:t.fileList[l].response.path,name:t.fileList[l].name}):t.archiveFileList.push({url:t.fileList[l].url,name:t.fileList[l].name});t.archiveFileList.length>0&&(t.form.fjzl=JSON.stringify(t.archiveFileList)),t.$ajax.post("/jxjPc/add",t.form).then(function(e){"0"===e.data.errcode&&(t.$message.success("奖学金已设置"),t.$router.push("/award/list"))})})},resetForm:function(e){this.$refs[e].resetFields()}}}),r=o,i=(a("6f1b"),a("2877")),n=Object(i["a"])(r,l,s,!1,null,null,null);n.options.__file="award.vue";t["default"]=n.exports},"54fe":function(e,t,a){},"6f1b":function(e,t,a){"use strict";var l=a("54fe"),s=a.n(l);s.a}}]);
//# sourceMappingURL=chunk-74f0bc66.efc4f101.js.map
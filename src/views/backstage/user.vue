<template>
    <div class="user">
        <fieldset>
            <legend>用户</legend>
        </fieldset>
        <el-card class="header-search">
            <header slot="header">
                <el-form inline :model="formSearch" size="small">
                    <el-form-item label="用户名">
                        <el-input v-model="formSearch.username" placeholder="请输入"></el-input>
                    </el-form-item>
                    <el-form-item label="姓名">
                        <el-input v-model="formSearch.truename" placeholder="请输入"></el-input>
                    </el-form-item>
                    <el-form-item label="用户类型">
                        <el-select v-model="formSearch.usertype" placeholder="请选择" clearable>
                            <el-option label="教职工" value="2"></el-option>
                            <el-option label="学生" value="4"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="部门">
                        <el-select v-model="formSearch.deptid" placeholder="请选择" clearable>
                            <el-option v-for="i in deptList" :key="i.id" :label="i.name" :value="i.id"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="getTableData">查询</el-button>
                    </el-form-item>
                </el-form>
            </header>
            <el-button-group>
                <el-button size="medium" type="primary" @click="add">新增</el-button>
                <el-button size="medium" type="primary" @click="del">删除</el-button>
                <el-button size="medium" type="primary" @click="edit">修改</el-button>
            </el-button-group>
            <el-table :data="tableData" @selection-change="handleSelectionChange">
                <el-table-column type="selection" width="55"></el-table-column>
                <el-table-column prop="username" label="用户名" min-width="180"></el-table-column>
                <el-table-column prop="truename" label="姓名" min-width="150"></el-table-column>
                <el-table-column prop="usertype" label="类型" min-width="150">
                    <template slot-scope="scope">
                        {{scope.row.usertype==='2'?'教职工':'学生'}}
                    </template>
                </el-table-column>
                <el-table-column prop="sex" label="性别" min-width="80"></el-table-column>
            </el-table>
            <el-pagination class="pagination"
                           @current-change="handleCurrentChange"
                           :current-page="formSearch.page"
                           @size-change="handleSizeChange"
                           :page-sizes="[10, 20, 50, 100, 200, 500]"
                           :page-size="formSearch.limit"
                           layout="total, sizes, prev, pager, next, jumper"
                           :total="total">
            </el-pagination>
        </el-card>
        <el-dialog :visible.sync="dialogVisible">
            <header slot="title">{{dialogName}}</header>
            <el-form :model="dialogForm" :rules="rules" ref="dialogForm" label-width="100px">
                <el-form-item label="用户名" prop="username">
                    <el-input v-model="dialogForm.username" placeholder="请输入" clearable></el-input>
                </el-form-item>
                <el-form-item label="姓名" prop="truename">
                    <el-input v-model="dialogForm.truename" placeholder="请输入" clearable></el-input>
                </el-form-item>
                <el-form-item label="用户类型" prop="usertype">
                    <el-select v-model="dialogForm.usertype" placeholder="请选择" clearable>
                        <el-option label="教职工" value="2"></el-option>
                        <el-option label="学生" value="4"></el-option>
                    </el-select>
                </el-form-item>
            </el-form>
            <footer slot="footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="submitForm('dialogForm')">确 定</el-button>
            </footer>
        </el-dialog>
    </div>
</template>

<script>
  export default {
    name: "project",
    data() {
      return {
        //搜索
        formSearch:{
          username:'',
          truename:'',
          usertype:'',
          deptid:'',
          //分页
          page:1,//当前
          limit:10,
        },
        total:1,
        deptList:[],
        //表格
        tableData: [],
        multipleSelection: [],//多选
        //弹框
        dialogVisible:false,//弹框是否显示
        dialogName:'',//弹框名
        dialogForm:{
          username:'',
          truename:'',
          usertype:'',
          deptid:'',
        },
        rules:{
          username:[{required: true, message: '用户名不能为空', trigger: 'blur'}],
          truename:[{required: true, message: '姓名不能为空', trigger: 'blur'}],
          usertype:[{required: true, message: '请选择用户类型', trigger: 'change'}],
          deptid:[{required: true, message: '请选择部门', trigger: 'change'}],
        }
      }
    },
    computed: {
      role () {
        return this.$store.state.role
      }
    },
    created(){
      //部门列表
      this.$ajax.post('/dept/list')
        .then(res=>{
          this.deptList=res.data.data.data;
        });
      this.getTableData();
    },
    methods: {
      //获取表格数据
      getTableData(){
        this.$ajax.post('/user/page',this.formSearch)
          .then(res=>{
            this.total=res.data.data.records;
            this.tableData=res.data.data.data;
          })
      },
      //多选
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      add(){
        for(let key in this.dialogForm){
          delete this.dialogForm[key];
        }
        this.dialogVisible=true;
        this.dialogName='添加';
      },
      edit(){
        if(this.multipleSelection.length===0){
          this.$message.warning('请选择数据');
        }
        else if(this.multipleSelection.length>1){
          this.$message.warning('只能选择一项编辑');
        }
        else{
          this.dialogForm=this.multipleSelection[0];
          this.dialogVisible=true;
          this.dialogName='编辑';
        }
      },
      //提交
      submitForm(formName) {
        let url=this.dialogName==='添加'?'/user/add':'/user/edit';
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log(this.dialogForm)
            this.$ajax.post(url,this.dialogForm)
              .then(res=>{
                this.handleCurrentChange(1);
                this.dialogVisible=false;
                this.$message.success(res.data.errmsg);
              })
          }
          else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      //删除
      del(){
        if(this.multipleSelection.length===0){
          this.$message.warning('请选择数据');
        }
        else{
          let userids=[];
          for(let i=0;i<this.multipleSelection.length;i++){
            userids.push(this.multipleSelection[i].id);
          }
          this.$ajax.post('/user/remove',{userids:userids})
            .then(res=>{
              this.handleCurrentChange(1);
              this.$message.success(res.data.errmsg)
            })
        }
      },
      //分页
      handleSizeChange(val) {
        this.formSearch.limit=val;
        this.formSearch.page=1;
        this.getTableData();
      },
      handleCurrentChange(val) {
        this.formSearch.page=val;
        this.getTableData();
      }
    }
  }
</script>

<style lang="scss">
    .user{
        @extend %width;
    }
</style>
<template>
  <div id="nav">
    <div class="content">
      <router-link to="/" class="title"><ThemePicker></ThemePicker>&nbsp;&nbsp;学生出国（境）学习管理系统</router-link>
      <el-menu class="menu"
              :default-active="$route.path"
              mode="horizontal">
        <el-submenu index="project">
          <template slot="title">项目管理</template>
          <el-menu-item index="/project/add/special"><router-link to="/project/add/special">专项项目申请</router-link></el-menu-item>
          <el-menu-item index="/project/list/special"><router-link to="/project/list/special">专项项目管理</router-link></el-menu-item>
          <el-menu-item index="/project/add/unspecial"><router-link to="/project/add/unspecial">非专项项目备案</router-link></el-menu-item>
          <el-menu-item index="/project/list/unspecial"><router-link to="/project/list/unspecial">非专项项目管理</router-link></el-menu-item>

          <el-menu-item index="/project/list/student"><router-link to="/project/list/student">已发布项目（学生）</router-link></el-menu-item>
          <el-menu-item index="/project/apply/list"><router-link to="/project/apply/list">我的申请记录</router-link></el-menu-item>
        </el-submenu>
        <el-submenu index="bs">
          <template slot="title">系统管理</template>
          <el-menu-item index="/bs/set"><router-link to="/bs/set">基础设置</router-link></el-menu-item>
          <el-menu-item index="/bs/user"><router-link to="/bs/user">用户管理</router-link></el-menu-item>
          <el-menu-item index="/bs/role"><router-link to="/bs/role">角色管理</router-link></el-menu-item>
        </el-submenu>
        <el-submenu index="7">
          <template slot="title">用户名</template>
          <el-menu-item index="7-1" @click="switchRole">切换角色</el-menu-item>
          <el-menu-item index="7-1" @click="logout">注销</el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
    <el-dialog class="switch" :visible.sync="dialogVisible" width="30%">
      <header slot="title">切换角色</header>
      <el-select v-model="newRole" placeholder="请选择">
        <el-option
                v-for="item in roleList"
                :key="item.id"
                :label="item.name"
                :value="item.id">
        </el-option>
      </el-select>
      <footer slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="submitRole">确 定</el-button></footer>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    name: "Navigation",
    data(){
      return{
        dialogVisible:false,
        newRole:this.role,
      }
    },
    computed:{
      role() {//用户角色
        return this.$store.state.role
      },
      roleList(){
        return this.$store.state.roleList
      }
      // student(){
      //   return this.role.includes('SYS_STUDENT')
      // },
      // teacher(){
      //   return this.role.includes('SYS_BZR')
      // },
      // admin(){
      //   return this.role.includes('SYS_ADMIN')
      // },
    },
    watch:{
      role(val){
        this.newRole=val;
      }
    },
    created(){
    },
    methods:{
      logout(){
        this.$ajax.post('/logoutApi')
          .then(res=>{
            sessionStorage.clear();
            window.location.href=res.data.url;
          })
      },
      switchRole(){
        this.dialogVisible=true;
      },
      submitRole(){
        this.$store.commit('setRole',this.newRole);
        this.dialogVisible=false
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  #nav{
    background: #ffffff;
    .content{
      @include flex(space-between);
      @extend %width;
      .title{
        @include flex;
      }
      .menu{
        .el-menu-item{
          padding: 0 50px;
        }
      }
    }
    .switch{
      .el-select{
        display: block;
        width: 70%;
        margin: 0 auto;
      }
    }

  }
</style>

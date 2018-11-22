<template>
  <div id="nav">
    <div class="content">
      <router-link to="/" class="title"><ThemePicker></ThemePicker>&nbsp;&nbsp;学生出国（境）学习管理系统</router-link>
      <el-menu class="menu"
              :default-active="$route.path"
              mode="horizontal">
        <el-submenu index="project">
          <template slot="title">项目管理</template>
          <el-menu-item index="/project/apply"><router-link to="/project/apply">专项项目申请</router-link></el-menu-item>
          <el-menu-item index="/project/list"><router-link to="/project/list/examine">专项项目审批</router-link></el-menu-item>
        </el-submenu>
        <el-submenu index="bs">
          <template slot="title">系统管理</template>
          <el-menu-item index="/bs/set"><router-link to="/bs/set">基础设置</router-link></el-menu-item>
          <el-menu-item index="/bs/user"><router-link to="/bs/user">用户管理</router-link></el-menu-item>
          <el-menu-item index="/bs/role"><router-link to="/bs/role">角色管理</router-link></el-menu-item>
        </el-submenu>
        <el-submenu index="7">
          <template slot="title">用户名</template>
          <el-menu-item index="7-1" @click="logout">注销</el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Navigation",
    // data(){
    //   return{
    //     student:true,
    //     teacher:true,
    //     admin:true,
    //   }
    // },
    computed:{
      role() {//用户角色
        return this.$store.state.role;
      },
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
    // watch:{
    //   $route(to,from){
    //     console.log(to)
    //   }
    // },
    created(){

    },
    methods:{
      logout(){
        this.$ajax.post('/logoutApi')
          .then(res=>{
            sessionStorage.clear();
            window.location.href=res.data.url;
          })
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
  }
</style>

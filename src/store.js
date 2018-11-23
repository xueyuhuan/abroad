import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token:'',
    role:'',//当前用户角色
    roleList:'',//用户所有角色表
    applyProject:'',//当前申请项目
    applyId:'',//学生申请表id
  },
  getters:{
    token:state=>{return state.token},
    role:state=>{return state.role},
    roleList:state=>{return state.roleList},
  },
  mutations: {
    //设置数据
    //data{name,data}
    setData(state,data){
      state[data.name]=data.data;
    },
    //设置token
    setToken(state,token){
      state.token=token;
      sessionStorage['token']=token;
    },
    setRole(state,role){
      state.role=role;
      sessionStorage['role']=role;
    },
    setRoleList(state,roleList){
      state.roleList=roleList;
      sessionStorage['roleList']=JSON.stringify(roleList);
    }
  },
  actions: {}
});

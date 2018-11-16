import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token:'',
    role:''//用户角色
  },
  getters:{
    token:state=>{return state.token},
    role:state=>{return state.role},
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
      sessionStorage['role']=JSON.stringify(role);
    }
  },
  actions: {}
});

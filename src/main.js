import Vue from 'vue'
import ElementUI from 'element-ui'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './axios'

import 'element-ui/lib/theme-chalk/index.css';
import 'font-awesome/css/font-awesome.css'

Vue.prototype.$ajax=axios;
Vue.use(ElementUI);
Vue.config.productionTip = false

router.beforeEach((to,from,next)=>{
  axios.post('/cas/test_login')
    .then(res=>{
      axios.post('/gettoken',{uuid:res.data.data.APP_UUID})
        .then(res=>{
          store.commit('setToken',res.data.data.token);
          store.commit('setRole',res.data.data.roles);
          // console.log(res);
          next()
        })
    })
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

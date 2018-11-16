import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/bs/user",
      name: "user",
      component: () => import("./views/backstage/user.vue"),
      meta:{requireAuth:true}
    },
  ]
})

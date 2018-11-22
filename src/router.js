import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    //后台
    {
      path: "/bs/user",
      name: "user",
      component: () => import("./views/backstage/user.vue"),
      meta:{requireAuth:true}
    },
    {
      path: "/bs/role",
      name: "role",
      component: () => import("./views/backstage/role.vue"),
      meta:{requireAuth:true}
    },
    {
      path: "/bs/set",
      name: "set",
      component: () => import("./views/backstage/set.vue"),
      meta:{requireAuth:true}
    },
    //项目
    {
      path: "/project/apply",
      name: "专项项目申请",
      component: () => import("./views/project/apply/special.vue"),
      meta:{requireAuth:true}
    },
    {
      path: "/project/list/examine",
      name: "专项项目审批",
      component: () => import("./views/project/list/examine.vue"),
      meta:{requireAuth:true}
    },
  ]
})

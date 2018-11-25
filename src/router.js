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
      path: "/project/add/special",
      name: "专项项目申请",
      component: () => import("./views/project/add/special.vue"),
      meta:{requireAuth:true}
    },
    {
      path: "/project/list/special",
      name: "专项项目审批",
      component: () => import("./views/project/list/special.vue"),
      meta:{requireAuth:true}
    },
    {
      path: "/project/add/unspecial",
      name: "非专项项目备案",
      component: () => import("./views/project/add/unspecial.vue"),
      meta:{requireAuth:true}
    },
    {
      path: "/project/list/unspecial",
      name: "非专项项目管理",
      component: () => import("./views/project/list/unspecial.vue"),
      meta:{requireAuth:true}
    },
    {
      path: "/project/list/student",
      name: "学生可申请项目",
      component: () => import("./views/project/list/student.vue"),
      meta:{requireAuth:true}
    },
    {
      path: "/project/apply",
      name: "学生申请表",
      component: () => import("./views/project/apply/apply.vue"),
      meta:{requireAuth:true}
    },
    {
      path: "/project/apply/list",
      name: "我的申请记录",
      component: () => import("./views/project/apply/list.vue"),
      meta:{requireAuth:true}
    },
    {
      path: "/project/apply/examine",
      name: "学生申请审批",
      component: () => import("./views/project/apply/examine.vue"),
      meta:{requireAuth:true}
    },
    {
      path: "/project/apply/detail",
      name: "申请表详情",
      component: () => import("./views/project/apply/detail.vue"),
      meta:{requireAuth:true}
    },
  ]
})

import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    //首页
    {
      path: "/",
      name: "home",
      component: () => import("./views/home.vue"),
    },
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
    //奖学金
    {
      path: "/award/add",
      name: "奖学金新增",
      component: () => import("./views/award/add/award.vue"),
      meta:{requireAuth:true}
    },
    {
      path: "/award/detail",
      name: "奖学金回显",
      component: () => import("./views/award/add/detail.vue"),
      meta:{requireAuth:true}
    },
    {
      path: "/award/list",
      name: "奖学金列表",
      component: () => import("./views/award/list/list.vue"),
      meta:{requireAuth:true}
    },
    {
      path: "/award/list/student",
      name: "学生申请奖学金列表",
      component: () => import("./views/award/list/student.vue"),
      meta:{requireAuth:true}
    },
    {
      path: "/award/apply",
      name: "奖学金申请表",
      component: () => import("./views/award/apply/apply.vue"),
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
      path: "/project/reg/list",
      name: "我的登记",
      component: () => import("./views/project/reg/list.vue"),
      meta:{requireAuth:true}
    },
    {
      path: "/project/reg/normal",
      name: "正常登记表",
      component: () => import("./views/project/reg/normal.vue"),
      meta:{requireAuth:true}
    },
    {
      path: "/project/reg/normal",
      name: "正常登记",
      component: () => import("./views/project/reg/list.vue"),
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

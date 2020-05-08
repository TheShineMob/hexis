import Vue from 'vue'
import VueRouter from 'vue-router'

import Brief from "../views/find/child/Brief";
import Test from "../views/test/Test";


/*mob*/
const Home = () => import("@/views/home/Home")
const Features = () => import("@/views/products/Features")
const Software = () => import("@/views/software/Software")
const Contact = () => import("@/views/contact/Contact")
const BodyFence = () => import("@/views/products/BodyFence")
const BodyFenceMatt = () => import("@/views/products/BodyFenceMatt")
const jianbianImg = () => import("@/views/home/layout/jianbianImg")
const zhengwen = () => import("@/views/home/layout/zhengwen")
const homeTest = () => import("@/views/home/homeTest")
const Find = () => import("@/views/find/Find")
Vue.use(VueRouter)

const routes = [
  {
    path: "",
    redirect: "/Home",
    meta:{
      title: "www.hexis.cn"
    }
  },
  {
    path: "/test",
    component: Test
  },
  {
    path: "/home",
    component: Home,
    meta: {
      title: "HEXIS"
    }
  },
  {
    path: "/features",
    component: Features,
    meta:{
      title: "HEXIS/产品"
    }
  },
  {
    path: "/contact",
    component: Contact,
    meta: {
      title: "HEXIS/联系我们"
    }
  },
  {
    path: "/software",
    component: Software,
    meta: {
      title: "HEXIS/获取软件"
    }
  },
  {
    path: "/bodyFence",
    component: BodyFence,
    meta:{
      title: "HEXIS/BODYFENCE"
    }
  },
  {
    path: "/bodyFenceMatt",
    component: BodyFenceMatt,
    meta:{
      title: "HEXIS/MATT"
    }
  },
  {
    path: "/jianbianImg",
    component:jianbianImg,
  },
  {
    path: "/zhengwen",
    component:zhengwen,
  },
  {
    path: "/homeTest",
    component:homeTest
  },
  {
    path: "/find",
    component: Find,
    meta: {
      title:"HEXIS/查询"
    }
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  /*路由发生变化修改页面title*/
  if(to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router

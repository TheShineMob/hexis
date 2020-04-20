import Vue from 'vue'
import VueRouter from 'vue-router'


/*mob*/
const Home = () => import("@/views/home/Home")
const Features = () => import("@/views/products/Features")
const Software = () => import("@/views/software/Software")
const Contact = () => import("@/views/contact/Contact")
const BodyFence = () => import("@/views/products/BodyFence")
const BodyFenceMatt = () => import("@/views/products/BodyFenceMatt")
Vue.use(VueRouter)

const routes = [
  {
    path: "",
    redirect: "/home"
  },
  {
    path: "/test",
    component: BodyFenceMatt
  },
  // {
  //   path: "/home",
  //   component: Home
  // },
  {
    path: "/features",
    component: Features
  },
  {
    path: "/contact",
    component: Contact
  },
  {
    path: "/software",
    component: Software
  },
  {
    path: "/bodyFence",
    component: BodyFence
  },
  {
    path: "/bodyFenceMatt",
    component: BodyFenceMatt
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

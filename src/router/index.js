import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import { setTitle } from '@/lib/util'

Vue.use(VueRouter)

const router = new VueRouter({
  // mode: 'history',
  routes
})
// 判断是否登录
const isLogin = true
// 路由守卫
router.beforeEach((to, from, next) => {
  to.meta && setTitle(to.meta.title)
  if (to.name !== "login") {
    if (isLogin) next()
    else next({ name: 'login' })
  } else {
    if (isLogin) next({ name: "home" })
    else next()
  }
})
export default router

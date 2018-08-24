import Vue from 'vue'
import Router from 'vue-router'

/** 路由懒加载 */
// 首页
const home = resolve => require(['@/components/page/home/home.vue'], resolve)
// 404页面
const notFound = resolve => require(['@/components/page/notFound'], resolve)

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    }, {
      path: '/404',
      name: 'notFound',
      component: notFound
    }, {
      path: '*',
      redirect: '/404'
    }
  ]
})

/** 路由在跳转之前拦截
 *  token不存在时
 *    若将要跳转登录页面,则继续跳转
 *    若不是跳转登录页面，则使用跳转到登录页面
 *  token存在
 *    若将要跳转登录页面,则跳转到系统默认的页面
 *    若不是跳转登录页面，则继续跳转
*/
// router.beforeEach((to, from, next) => {
//   const token = localStorage.getItem('token') || ''
//   if (!token || !/\S/.test(token)) {
//     if (to.name === 'login') {
//       next()
//     } else {
//       next({name: 'login'})
//     }
//   } else {
//     if (to.name === 'login') {
//       next({path: '/'})
//     } else {
//       next()
//     }
//   }
// })

export default router

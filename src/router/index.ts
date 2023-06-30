/*
 * @Descripttion:
 * @version:
 * @Author: 陶帅星
 * @Date: 2022-11-17 17:21:33
 * @LastEditors: 陶帅星
 * @LastEditTime: 2023-06-30 18:05:24
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

export const constantRoutes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue'),
    meta: { title: '登录页面' }
  },

  {
    path: '/',
    component: () => import('@/layout/index.vue'),
    redirect: '/home',
    children: [
      {
        path: '/home',
        component: () => import('@/views/home/index.vue'),
        name: 'Home',
        meta: { title: '首页', icon: 'Platform', affix: true }
      },
      {
        path: '/setting',
        component: () => import('@/views/setting/index.vue'),
        name: 'Setting',
        meta: { title: '权限管理', icon: 'Tools', roles: ['admin'] }
      },
      {
        path: '/menu',
        name: 'Menu',
        component: () => import('@/views/menu/index.vue'),
        meta: { title: '菜单嵌套', icon: 'Menu', roles: ['admin', 'editor'] },
        redirect: '/menu2',
        children: [
          {
            path: '/menu1',
            name: 'Menu1',
            component: () => import('@/views/menu/menu10.vue'),
            meta: { title: '菜单1', roles: ['admin', 'editor'] },
            redirect: '/menu1-2',
            children: [
              {
                path: '/menu1-1',
                component: () => import('@/views/menu/menu11.vue'),
                name: 'Menu1-1',
                meta: { title: '菜单1-1', roles: ['admin'] }
              },
              {
                path: '/menu1-2',
                component: () => import('@/views/menu/menu12.vue'),
                name: 'Menu1-2',
                meta: { title: '菜单1-2', roles: ['admin', 'editor'] }
              }
            ]
          },
          {
            path: '/menu2',
            component: () => import('@/views/menu/menu2.vue'),
            name: 'Menu2',
            meta: { title: '菜单2', roles: ['admin', 'editor'] }
          }
        ]
      },
      {
        path: '/chart',
        component: () => import('@/views/chart/index.vue'),
        name: 'Chart',
        meta: { title: '图表', icon: 'Histogram', roles: ['admin', 'editor'] }
      },
      {
        path: '/erro-page',
        name: 'ErroPage',
        component: () => import('@/views/erro-page/index.vue'),
        meta: { title: '错误页面', icon: 'WarningFilled', roles: ['admin', 'editor'] },
        redirect: '/404',
        children: [
          {
            path: '/404',
            component: () => import('@/views/erro-page/404.vue'),
            name: '404',
            meta: {
              title: '404',
              icon: 'QuestionFilled'
            }
          },
          {
            path: '/401',
            component: () => import('@/views/erro-page/401.vue'),
            name: '401',
            meta: {
              title: '401',
              icon: 'QuestionFilled'
            }
          }
        ]
      }
    ]
  }
]

export const asyncRoutes = []
export const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes
})
export default router

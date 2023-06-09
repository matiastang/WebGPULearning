/*
 * @Author: matiastang
 * @Date: 2021-12-28 19:31:46
 * @LastEditors: tangdaoyong
 * @LastEditTime: 2023-05-15 23:07:31
 * @FilePath: /datumwealth-front-scaffold/src/router/index.ts
 * @Description: 路由
 */
import { createRouter, createWebHashHistory, createWebHistory, RouteRecordRaw } from 'vue-router'
// layout
import Layout from '@/components/layout/Layout.vue'
// web
import Home from '@/views/home/Home.vue'
import HelloWebGPU from '@/views/WebGPU/WebGPU.vue'
import TriangleWebGPU from '@/views/WebGPU/Triangle.vue'
import colorTriangleWebGPU from '@/views/WebGPU/ColorTriangle.vue'
// NotFound
import NotFound from '@/views/NotFound.vue'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'layout',
        component: Layout,
        children: [
            {
                path: '',
                name: 'home',
                component: Home,
            },
        ],
        beforeEnter: (to, from) => {
            console.log(`web路由卫士：即将从${from.path}跳转到${to.path}`)
            return true
        },
    },
    {
        path: '/helloWebGPU',
        name: 'helloWebGPU',
        component: HelloWebGPU,
    },
    {
        path: '/triangleWebGPU',
        name: 'triangleWebGPU',
        component: TriangleWebGPU,
    },
    {
        path: '/colorTriangleWebGPU',
        name: 'colorTriangleWebGPU',
        component: colorTriangleWebGPU,
    },
    {
        path: '/:pathMatch(.*)*', // 将匹配所有内容并将其放在 `$route.params.pathMatch` 下
        name: 'NotFound',
        // redirect: '/',
        component: NotFound,
    },
]
/**
 * 创建Router
 */
const router = createRouter({
    history: import.meta.env.DEV ? createWebHashHistory() : createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
        // 平滑滚动
        if (to.hash) {
            return {
                selector: to.hash,
                behavior: 'smooth',
            }
        }
        return { x: 0, y: 0 }
    },
})

/**
 * 全局前置守卫
 */
router.beforeEach((to, from, next) => {
    // TODO: - 登录校验
    // import { localStorageKey, localStorageRead } from 'utils/storage/localStorage'
    // if (to.matched.some((record) => record.meta.requiresAuth)) {
    //     // 用户token
    //     const userToken = localStorageRead<string>(localStorageKey.userTokenKey)
    //     if (!userToken || userToken.trim() === '') {
    //         // 未登录
    //         next({
    //             path: '/login',
    //             replace: true,
    //         })
    //         return
    //     }
    // }
    next()
})

/**
 * 全局解析守卫
 */
router.beforeResolve((to) => {
    console.log(`将要跳转到${to.path}`)
})

/**
 * 全局后置钩子
 */
router.beforeEach((to, from) => {
    console.log(`从${from.path}跳转到${to.path}`)
})

export default router

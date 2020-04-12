import Home from '../views/Home.vue'
const routes = [
    {
        path: '/',
        alias: '/homepage', // 别名
        name: 'Home',
        component: Home,
        props: route => ({
            food: route.query.food
        }),
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
        props: {
            food: ''
        },
    },
    {
        path: '/arg/:name',
        name: 'Arg',
        props: true,
        component: () => import(/* webpackChunkName: "arg" */ '../views/Arg.vue')
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue'),
        meta: {
            title: '登录'
        }
    },
    {
        path: '/table',
        component: () => import(/* webpackChunkName: "table" */ '../views/Table.vue')
    },
    {
        path: '/main',
        name: 'main',
        component: () => import(/* webpackChunkName: "main" */ '../views/Main.vue'),
        redirect: "/"
    },
    {
        path: '/parent',
        name: 'Parent',
        component: () => import(/* webpackChunkName: "parent" */ '../views/Parent.vue'),
        children: [
            {
                path: 'child',
                name: 'Child',
                component: () => import(/* webpackChunkName: "child" */ '../views/Child.vue')
            }
        ]
    },
    {
        path: '/view-name',
        components: {
            default: () => import(/* webpackChunkName: "arg" */ '../views/Arg.vue'),
            tel: () => import(/* webpackChunkName: "arg" */ '../views/Tel.vue'),
            email: () => import(/* webpackChunkName: "arg" */ '../views/email.vue'),
        }
    },
    {
        path: '/store',
        name: 'store',
        component: () => import('../views/store'),
        meta: {
            title: 'vuex状态管理'
        }
    },
    {
        path: '/count',
        name: 'count',
        component: () => import('@/views/count-to.vue')
    },
    {
        path: '*',
        name: '404',
        component: () => import('@/views/404.vue')
    }
]

export default routes
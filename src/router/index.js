import Vue from 'vue'
import VueRouter from 'vue-router'
import tupian from '@/components/tupian'
import dizhi from '@/components/dizhi'
import lx from '@/components/lx'
import zh from '@/components/zh'
import xgzl from '@/components/xgzl'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [{
            path: '/dizhi',
            component: dizhi, //当访问这个路径'/'时，访问的组件就是first,也就是FirstPage.vue
        },
        {
            path: '/tupian',
            component: tupian, //当访问这个路径'/second'时，访问的组件就是second,也就是SecondPage.vue
        },
        {
            path: '/lx',
            component: lx, //当访问这个路径'/second'时，访问的组件就是second,也就是SecondPage.vue
        },
        {
            path: '/zh',
            component: zh, //当访问这个路径'/second'时，访问的组件就是second,也就是SecondPage.vue
        },
        {
            path: '/xgzl',
            component: xgzl, //当访问这个路径'/second'时，访问的组件就是second,也就是SecondPage.vue
        },
    ]
})
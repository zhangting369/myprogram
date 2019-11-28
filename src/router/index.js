import Vue from 'vue'
import Router from 'vue-router'
import footer_index from '@/components/footer_index'
import hearder_index from '@/components/hearder_index'
import login from '@/components/login'
import detail from '@/view/detail'
import mycourse from '@/view/mycourse'
import progress from '@/view/progress'
import index from '@/view/index'
import xiangqingye from '@/view/xiangqingye'
import order from '@/view/order'
import goodsche from '@/view/goodsche'
import quanxuan from '@/view/quanxuan'
import account from '@/view/account'
import ziliao from '@/view/ziliao'
Vue.use(Router)

export default new Router({
    mode: "history",
    routes: [{
            path: '/footer_index',
            name: 'footer_index',
            component: footer_index
        },
        {
            path: '/hearder_index/123',
            name: 'hearder_index',
            component: hearder_index
        },
        {
            path: '/detail',
            name: 'detail',
            component: detail
        },
        {
            path: '/',
            name: 'login',
            component: login
        },
        {
            path: '/mycourse',
            name: 'mycourse',
            component: mycourse
        },
        {
            path: '/progress',
            name: 'progress',
            component: progress
        },
        {
            path: '/index',
            name: 'index',
            component: index
        },
        {
            path: '/xiangqingye',
            name: 'xiangqingye',
            component: xiangqingye
        },
        {
            path: '/order',
            name: 'order',
            component: order
        },
        {
            path: '/goodsche',
            name: 'goodsche',
            component: goodsche
        },
        {
            path: '/quanxuan',
            name: 'quanxuan',
            component: quanxuan
        },
        {
            path: '/account',
            name: 'account',
            component: account
        },
        {
            path: '/ziliao',
            name: 'ziliao',
            component: ziliao
        },
    ]
})
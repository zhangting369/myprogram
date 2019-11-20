import Vue from 'vue'
import Router from 'vue-router'
import footer_index from '@/components/footer_index'
import hearder_index from '@/components/hearder_index'
import detail from '@/view/detail'
Vue.use(Router)

export default new Router({
    mode: "history",
    routes: [{
            path: '/footer_index',
            name: 'footer_index',
            component: footer_index
        },
        {
            path: '/hearder_index',
            name: 'hearder_index',
            component: hearder_index
        },
        {
            path: '/',
            name: 'detail',
            component: detail
        },
    ]
})
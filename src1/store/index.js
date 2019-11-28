import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state: {
        num: 105,
        name: 'zhangsan'
    },
    getters: {
        count: state => {
            return state.num > 120 ? 120 : state.num;
        }
    },
    mutations: {
        increment(state, pload) {
            state.num += pload.n;

        },
        mincrement(state, pload) {
            state.num -= pload;
        }
    },
    actions: {
        Addaction(context) {
            console.log(context);
            setTimeout(() => {
                context.commit('increment', { n: 5 })
            }, 1000);
            context.dispatch('textAction')
        },
        textAction() {
            console.log("我是action里面的另一个函数");
        }
    }
})
export default store
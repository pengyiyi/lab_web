import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'

Vue.use(Vuex)

// 应用初始状态
const state = {
  //  username:"",
  //  taskid:'',
  //  index:0,
  //  Sir:"赵振华"
}

// 定义所需的 mutations
const mutations = {
    INCREMENT(state) {
        state.count++
    },
    showUserName(state){
            alert(state.username);
    },
    DECREMENT(state) {
        state.count--
    },
    setTaskId: (state, name) => {
        state.taskid = name
    }
}

// 创建 store 实例
export default new Vuex.Store({
    actions,
    getters,
    state,
    mutations
})

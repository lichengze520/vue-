import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getters from './getters'
import mutations from './mutation'
import actions from './action'
import user from './module/user'

Vue.use(Vuex)

export default new Vuex.Store({
  // strict: true,
  strict: process.env.NODE_ENV === 'development',
  state,
  getters,
  mutations,
  actions,
  modules: {
    user
  }
})

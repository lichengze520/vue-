const state = {
    userName: 'zhangruyue'
}
const getters = {
    firstLetter(state) {
        return state.userName.substring(0, 1)
    }
}
const mutations = {
    SET_USER_NAME(state, params) {
        state.userName = params
    }
}
const actions = {
    updateUserName({ commit, state, rootState, dispatch }) {
    }
}
export default {
    state,
    getters,
    mutations,
    actions
}
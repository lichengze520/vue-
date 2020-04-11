const state = {
    userName: 'zhangruyue'
}
const getters = {
    firstLetter(state) {
        return state.userName.substring(0, 1)
    }
}
export default {
    state,
    getters
}
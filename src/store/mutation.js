import vue from 'vue'
const mutations = {
    SET_APP_NAME(state, param = "李成泽") {
        state.appName = param
    },
    SET_APP_VERSION(state) {
        // state.appVersion = "1.0000"
        vue.set(state, 'appVersion', '1.0000')
    },
    UPDATE_INPUT_VALUE(state, param) {
        state.inputValue = param
    }
}
export default mutations
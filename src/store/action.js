import { getName } from "@/api/app"
const actions = {
    // upDateAppName({ commit }) {
    //     getName().then(res => {
    //        if(res.code===200){
    //            commit('SET_APP_NAME',res.info.appName)
    //        }
    //     })
    // }
    async upDateAppName({ commit }) {
        try {
            const res = await getName()
            if (res.code === 200) commit('SET_APP_NAME', res.info.appName)
        } catch (error) {
            throw (error)
        }
    }
}
export default actions
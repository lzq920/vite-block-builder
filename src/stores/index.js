import { createStore } from "vuex";
export default createStore({
    state() {
        return {
            userToken: "",
        };
    },
    modules: {},
    mutations: {
        setUserToken(state, value) {
            state.userToken = value;
        },
    },
    actions: {
        setUserToken({ commit }, value) {
            commit("setUserToken", value);
        },
    },
});

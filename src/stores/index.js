import { createStore } from "vuex";
export default createStore({
    state() {
        return {
            userToken:
                window.localStorage.getItem("vite-block-builder-usertoken") ||
                null,
        };
    },
    modules: {},
    mutations: {
        setUserToken(state, value) {
            state.userToken = value;
            window.localStorage.setItem("vite-block-builder-usertoken", value);
        },
    },
    actions: {
        setUserToken({ commit }, value) {
            commit("setUserToken", value);
        },
    },
});

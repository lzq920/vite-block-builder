import { createStore } from "vuex";
export default createStore({
    state() {
        return {
            count: 1,
        };
    },
    modules: {},
    mutations: {
        addCount(state, value) {
            state.count = value;
        },
    },
    actions: {
        addCount({ commit }, value) {
            commit("addCount", value);
        },
    },
});

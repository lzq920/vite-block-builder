const state = () => {
  return {
    role: []
  }
}
const actions = {
  setRole: ({ commit }, payload) => {
    commit('setRole', payload)
  }
}
const mutations = {
  setRole: (state, payload) => {
    state.role = payload
  }
}
const getters = {
  role: (state) => {
    return state.role
  }
}
export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}

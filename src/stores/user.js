const state = () => {
  return {
    token: '',
    avatar: '',
    username: ''
  }
}
const actions = {
  setUser: ({ commit }, payload) => {
    commit('setUser', payload)
  }
}
const mutations = {
  setUser: (state, payload) => {
    const {
      token,
      avatar,
      username
    } = payload
    state.token = token
    state.avatar = avatar
    state.username = username
  }
}
const getters = {
  token: (state) => {
    return state.token
  }
}
export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}

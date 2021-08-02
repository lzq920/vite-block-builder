import { getToken, setToken } from '../utils/token'

const state = () => {
  return {
    token: getToken(),
    avatar: '',
    username: ''
  }
}
const actions = {
  setUser: ({ commit }, payload) => {
    commit('setUser', payload)
  },
  setToken: ({ commit }, payload) => {
    commit('setToken', payload)
    setToken(payload)
  }
}
const mutations = {
  setUser: (state, payload) => {
    const {
      avatar,
      username
    } = payload
    state.avatar = avatar
    state.username = username
  },
  setToken: (state, payload) => {
    state.token = payload
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

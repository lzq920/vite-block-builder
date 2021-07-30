import { createStore } from 'vuex'
import role from './role'
import user from './user'

export default createStore({
  state () {
    return {}
  },
  modules: {
    role,
    user
  },
  getters: {},
  mutations: {},
  actions: {}
})

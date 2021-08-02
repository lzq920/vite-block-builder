import { createStore } from 'vuex'
import role from './role'
import user from './user'
import router from './router'

export default createStore({
  state () {
    return {}
  },
  modules: {
    role,
    user,
    router
  },
  getters: {},
  mutations: {},
  actions: {}
})

import asyncRoutes from '../routers/asyncRoutes'

const state = () => {
  return {}
}
const actions = {
  getRoutes: () => {
    return new Promise((resolve, reject) => {
      resolve(asyncRoutes)
    })
  }
}
const mutations = {}
const getters = {}
export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}

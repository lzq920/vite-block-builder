import axios from '../plugins/axios'

/**
 * @description 用户登录
 * @param {String} params.username 用户名
 * @param {String} params.password 密码
 * @returns {Promise}
 */
export function login (params) {
  return axios.post('/user/login', params)
}

/**
 * @description 用户注销
 * @returns {Promise}
 */
export function logout () {
  return axios.post('/logout')
}

/**
 * @description 获取用户信息
 * @param {Object} params 用户信息
 * @returns {Promise}
 */
export function getUserInfo (params) {
  return axios.get('/user/info', { params })
}

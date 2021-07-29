import axios from 'axios'
import { baseURL, accessKey, secretKey, digestMessage } from '../config'

const instance = axios.create({
  baseURL: baseURL,
  timeout: 10000,
  timeoutErrorMessage: '请求超时',
  withCredentials: false
})
instance.interceptors.request.use(
  async (config) => {
    const tempString = Object.entries(config.params).reduce((total, curr) => {
      total.push(`${curr[0]}=${curr[1]}`)
      return total
    }, [`secret=${secretKey}`])
    tempString.push(...[`accecckey=${accessKey}`, `nonce=${Math.random().toString(36).slice(-8)}`])
    tempString.sort()
    const signString = await digestMessage(tempString.join('&')).then(result => window.btoa(result))
    config.headers.sigture = signString.toUpperCase()
    config.headers.timestamp = new Date().getTime()
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)
instance.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)
export default instance

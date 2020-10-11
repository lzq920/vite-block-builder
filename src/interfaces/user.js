import axios from "../plugins/axios";
/**
 * @description 用户登录
 * @param {String} params.username 用户名
 * @param {String} params.password 密码
 */
export function login(params) {
    return axios.post("/login", params);
}
/**
 * @description 用户注销
 */
export function logout() {
    return axios.post("/logout");
}

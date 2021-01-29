import axios from 'axios'
const api = axios.create({
    timeout: 10000,
    withCredentials: true,
    // headers:{'X-Agent': 'Juejin/Web','content-type': 'application/json'}
})

/**
 * 请求前
 */
api.interceptors.request.use(
    request => {
       // todo
        return request
    }
)
/**
 * 请求后处理
 */
api.interceptors.response.use(
    response => {
        if (response.data.error != '') {
            // 如果接口请求时发现 token 失效，则立马跳转到登录页
            if (response.data.status == 0) {
               // todo
            }
            return Promise.resolve(response.data)
        }
        return Promise.resolve(response.data)
    },
    error => {
        return Promise.reject(error)
    }
)
export default api

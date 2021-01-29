const axios= require('axios');
const { text } = require('express');
const api = axios.create({
    baseURL:'https://api.juejin.cn',
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
            return Promise.reject(response.data)
        }
        return Promise.resolve(response.data)
    },
    error => {
        return Promise.reject(error)
    }
)

async function  httpRequest(method,path,query={}){
   
    try {

         return await api[method](path,query);
       
    }
    catch(e){
        console.log(e);
        return e;

    }
}

module.exports=httpRequest;

// 1. axios封装
import axios from "axios";

// 产生实例
const httpInstance = axios.create({
    baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
    timeout: 5000
})

// 3. 请求拦截器
httpInstance.interceptors.request.use(config => {
    return config;
}, e => PromiseRejectionEvent.reject(e))

// 响应拦截器
httpInstance.interceptors.response.use(res => res.data, e => {
    return PromiseRejectionEvent.reject(e);
})

// 2. 暴露
export default httpInstance
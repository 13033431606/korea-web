import axios from 'axios'
axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'

const request = axios.create({
  baseURL: import.meta.env.VITE_API_URL + '/',
  // baseURL: location.origin + '/',
  timeout: 10 * 60 * 1000 // 超时时间为十分钟
})

// 请求拦截
request.interceptors.request.use(config => {
  return new Promise((resolve, reject) => {
    if (localStorage.getItem('token') !== '') {
      config.headers['Authorization'] = 'Bearer ' + localStorage.getItem('token') // 让每个请求携带自定义token 请根据实际情况自行修改
      resolve(config);
    } else {
      reject('')
    }
  })
}, error => {
  Promise.reject(error)
})

// 响应拦截
request.interceptors.response.use(res => {
    return res.data
  },
  error => {
    console.log('err' + error)
    return Promise.reject(error)
  }
)
export default request

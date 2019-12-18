import axios from 'axios'

import { Message } from 'element-ui'

import config from './config'

// let loadingInstance = null

// 创建axios实例
const service = axios.create({
  baseURL: config.BASE_URL, // url = base url + request url
  timeout: 7000, // 请求超时时间
  headers: {
    'Content-Type': 'application/json;charset=UTF-8'
  }
})

// 添加请求拦截器
service.interceptors.request.use(
  config => {
    // do something before request is sent
    // loadingInstance = Loading.service({
    //   lock: true
    // })
    return config
  },
  error => {
    // do something with request error
    // eslint-disable-next-line
    console.log(error)
    return Promise.reject(error)
  }
)

// 添加相应拦截器
service.interceptors.response.use(
  response => {
    // loadingInstance.close()
    const res = response.data
    // do something ...
    return res
  },
  error => {
    // eslint-disable-next-line
    console.log('err: ' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service

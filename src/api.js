import axios from 'axios'

import { Message } from 'element-ui'
import md5 from 'md5'
import { UnauthorizedException } from './exceptions'

let interRefreshToken = null

export default class API {
  static baseURL = process.env.NODE_ENV === 'production' ? 'http://172.26.36.233:8088/api/' : 'http://182.168.10.42:8081/api/'
  // static baseURL = 'https://10.242.191.26:8080/api/';

  static get token () {
    return localStorage.getItem('token')
  }

  static set token (token) {
    localStorage.setItem('token', token)
  }

  // '310104197212032035'
  static login (user, password) {
    return API.post(`account/login_yh?usercode=${user}&userpwd=${md5(password)}`)
      .then(({ data }) => {
        API.token = data.data.token
        API.setInterRefreshToken()
        // this.$store.commit('setInver', data.data.inver)
      })
  }

  static setInterRefreshToken () {
    console.log('RefreshToken-1111')
    // 定时刷新token，避免token过期跳转登录页面
    if (interRefreshToken) {
      clearInterval(interRefreshToken)
    }
    interRefreshToken = setInterval(API.refreshToken, 10 * 60e3)
  }

  static refreshToken () {
    API.post('account/refresh_token')
      .then(({ data }) => {
        API.token = data.data.token
      })
  }

  static post (url, data, config) {
    return axios.post(`${API.baseURL}${url}`, data, {
      ...config,
      headers: {
        ...config?.headers,
        authorization: `Bearer ${API.token}`,
      },
    }).then((result) => {
      if (result.data.code === 401) {
        Message.closeAll()
        Message.error(result.data.msg || '登录信息失效，请重新登录！')
        throw UnauthorizedException
      } else if (result.data.code === 500) {
        Message.closeAll()
        Message.error(result.data.msg || '请求失败！')
      }
      return Promise.resolve(result)
    })
  }

  static get () {

  }
}

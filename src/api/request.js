import Config from './config'

const axios = require('axios')

const http = {
  request: (options) => {
    const {
      url,
      data,
      method,
      headers,
      success,
      error,
      authError
    } = options
    axios({
      method: method || 'POST',
      url: Config.BASE_URL + url,
      data,
      headers: headers || {}
    })
      .then(res => {
        let response = res.data
        if (response.code === Config.SUCCESS_CODE) {
          success(response)
        } else if (response.code === Config.ERR_AUTH_CODE) {
          authError(response)
        } else {
          error(response)
        }
      })
  }
}

export default http

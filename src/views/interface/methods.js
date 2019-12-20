export default {
  getData () {
    let that = this
    that.$http.post('v1.home/getRichText', {
      id: 2
    })
      .then(res => {
        if (res.code === that.$config.SUCCESS_CODE) {
          let content = res.data
          content = content.replace(/<img src="(.*?)"/g, '<img src="http://api.w50f.cn$1"')
          that.content = content
        } else {
          that.$message.error(res.msg)
        }
      })
  }
}

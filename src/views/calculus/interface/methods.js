export default {
  getData () {
    let that = this
    that.$http.post('v1.home/getRichText', {
      id: 4
    })
      .then(res => {
        if (res.code === that.$config.SUCCESS_CODE) {
          that.content = res.data
        } else {
          that.$message.error(res.msg)
        }
      })
  }
}

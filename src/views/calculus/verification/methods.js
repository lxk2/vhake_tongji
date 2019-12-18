export default {
  onSubmit () {
    let that = this
    that.$http.post('v1.home/validateResult', this.form)
      .then(res => {
        if (res.code === that.$config.SUCCESS_CODE) {
          that.$message.success('验证成功')
          that.netData = res.data
        } else {
          that.$message.error(res.msg)
        }
      })
  }
}

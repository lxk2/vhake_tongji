import { mapMutations } from 'vuex'
export default {
  ...mapMutations([
    'SET_NAVINDEX'
  ]),
  tableRowClassName ({ row, rowIndex }) {
    let className = 'x-center'
    if (rowIndex % 2 !== 0) {
      className += ' shadow-row'
    }
    return className
  },
  getList () {
    let that = this
    that.$http.post('v1.home/resultList2', {
      page: that.page,
      list_rows: that.list_rows
    })
      .then(res => {
        if (res.code === that.$config.SUCCESS_CODE) {
          let { list, count } = res.data
          that.list = list
          that.count = count
        } else {
          that.$message.error(res.msg)
        }
      })
  },
  handlePageChange (page) {
    this.page = page
    this.getList()
  },
  handleClick (row, index) {
    this.$router.push({
      path: '/calculus/verification',
      query: {
        opentime: row.opentime,
        resultnum: row.resultnum,
        sum: row.sum,
        inputValue: row.inputValue
      }
    })
    this.SET_NAVINDEX(1)
  }
}

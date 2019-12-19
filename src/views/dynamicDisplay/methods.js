import echarts from 'echarts'
export default {
  initEchart (options) {
    this.chart = echarts.init(this.$refs.echart)
    this.chart.setOption(options)
  },
  getOptions () {
    let that = this
    that.$http.post('v1.home/getChartData')
      .then(res => {
        if (res.code === that.$config.SUCCESS_CODE) {
          let data = res.data
          this.temp = data.temp
          let options = {
            title: {
              text: ''
            },
            tooltip: {
              trigger: 'axis'
            },
            legend: data.legend,
            grid: {
              left: '3%',
              right: '4%',
              bottom: '3%',
              containLabel: true
            },
            xAxis: data.xAxis,
            yAxis: {
              type: 'value'
            },
            series: data.series
          }
          that.initEchart(options)
        } else {
          that.$message.error(res.msg)
        }
      })
  }
}

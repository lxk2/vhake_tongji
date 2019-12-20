<template>
  <div id="app">
    <Layout></Layout>
    <div class="div"></div>
  </div>
</template>

<script>
import Layout from '@/layout/index.vue'
export default {
  name: 'App',
  data () {
    return {

    }
  },
  methods: {

  },
  created () {
    let mobildDomain = 'http://m.w50f.cn/'
    if (/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
      window.location.replace(mobildDomain)
    }
  },
  mounted () {

  },
  components: {
    Layout
  }
}
</script>

<style lang="scss">
  @import '~@/style/reset.scss';
  .x-table {
    border-left: 1px solid #EBEEF5!important;
    border-right: 0.005208rem solid #EBEEF5!important;
    .el-table__header-wrapper {
      .el-table__header {
        .has-gutter {
          tr {
            th {
              background-color: #99a2bc;
              color: #0e1730;
              text-align: center;
            }
          }
        }
      }
    }
    .el-table__body-wrapper {
      .el-table__body {
        .el-table__row {

        }
      }
    }
  }

  .el-table .shadow-row {
    td {
      background-color: #f7f7f7!important;
    }
  }

  .el-table .success-row {
    background: #f0f9eb;
  }

  .el-table .warning-row {
    background: oldlace;
  }

  .x-center {
    td {
      text-align: center!important;
    }
    &:hover {
      td {
        background-color: rgb(253, 255, 213)!important;
      }
    }
  }

  .x-btn {
    span {
      color: #0e1730!important;
    }
    &:hover {
      span {
        color: #0e5090!important;
      }
    }
  }

  .el-pagination.is-background .el-pager li:not(.disabled).active {
    background-color: #99a2bc!important;
  }
  .el-pagination.is-background .btn-next, .el-pagination.is-background .btn-prev, .el-pagination.is-background .el-pager li:hover {
    color: #0e1730!important;
  }

  /*.content-x {*/
  /*  img {*/
  /*    width: 100%;*/
  /*  }*/
  /*}*/
</style>

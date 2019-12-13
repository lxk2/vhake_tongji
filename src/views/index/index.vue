<template>
    <div>
      <el-table
        :data="list"
        border
        :stripe="true"
        style="width: 100%;"
        class="x-table"
        :row-class-name="tableRowClassName"
        >
        <el-table-column
          prop="id"
          label="ID"
          >
        </el-table-column>
        <el-table-column
          prop="create_time"
          label="统计时间"
          >
        </el-table-column>
        <el-table-column
          prop="online_users"
          label="在线人数"
          >
        </el-table-column>
        <el-table-column
          prop="volatility"
          label="波动值">
        </el-table-column>
      </el-table>
      <div class="x-pagination">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="total">
        </el-pagination>
      </div>
    </div>
</template>

<script>
import data from './data'
import methods from './methods'
export default {
  name: 'index',
  data,
  methods,
  created () {
  },
  mounted () {
  }
}
</script>

<style scoped lang="scss">
  @import "~@/style/index/index.scss";
</style>

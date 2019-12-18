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
          prop="opentime"
          label="统计时间"
          >
        </el-table-column>
        <el-table-column
          label="在线人数"
          >
          <template slot-scope="scope">
            {{ scope.row.resultnum | toThousandFilter }}
          </template>
        </el-table-column>
        <el-table-column
          label="波动值">
          <template slot-scope="scope">
            {{ scope.row.f_value | toThousandFilter }}
          </template>
        </el-table-column>
      </el-table>
      <div class="x-pagination">
        <el-pagination
          background
          layout="prev, pager, next"
          :page-size="list_rows"
          @current-change="handlePageChange"
          :total="count">
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
    this.getList()
  },
  mounted () {
  }
}
</script>

<style scoped lang="scss">
  @import "~@/style/index/index.scss";
</style>

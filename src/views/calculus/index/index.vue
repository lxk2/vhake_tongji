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
        width="60"
      >
      </el-table-column>
      <el-table-column
        prop="opentime"
        label="统计时间"
        width="161"
      >
      </el-table-column>
      <el-table-column
        label="在线人数"
        width="111"
      >
        <template slot-scope="scope">
          {{ scope.row.resultnum | toThousandFilter }}
        </template>
      </el-table-column>
      <el-table-column
        prop="algorithm"
        label="哈希算法"
        width="81"
        >
      </el-table-column>
      <el-table-column
        prop="hash"
        label="哈希值"
        width="374">
      </el-table-column>
      <el-table-column
        prop="result"
        label="演算结果">
      </el-table-column>
      <el-table-column
        label="操作"
        width="80">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row, scope.$index)" type="text" size="small" class="x-btn">验证</el-button>
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
@import "~@/style/calculus/index.scss";
</style>

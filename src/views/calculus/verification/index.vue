<template>
    <div class="x-main">
      <el-form ref="form" :model="form" label-width="150px">
        <el-form-item label="统计时间">
          <el-input v-model="form.opentime"></el-input>
        </el-form-item>
        <el-form-item label="在线人数">
          <el-input v-model="form.resultnum" type="number"></el-input>
        </el-form-item>
        <el-form-item label="在线人数数字总和">
          <el-input v-model="form.sum" type="number"></el-input>
        </el-form-item>
        <el-form-item label="输入值">
          <el-input type="textarea" v-model="form.inputValue"></el-input>
        </el-form-item>
        <el-form-item label="哈希算法">
          SHA512
        </el-form-item>
        <el-form-item label="哈希值">
          <el-input type="textarea" :value="netData.hash" :autosize="{ minRows: 4, maxRows: 6 }"></el-input>
        </el-form-item>
        <el-form-item label="演算结果">
          <el-input type="textarea" :value="netData.result"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" style="background: #0e1730;border-color: #0e1730" @click="onSubmit">验证</el-button>
        </el-form-item>
      </el-form>
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
    let query = this.$route.query
    this.form = {
      opentime: query.opentime || '',
      resultnum: query.resultnum || '',
      sum: query.sum || '',
      inputValue: query.inputValue || ''
    }
  },
  mounted () {
  }
}
</script>

<style scoped lang="scss">
@import "~@/style/calculus/verification.scss";
</style>

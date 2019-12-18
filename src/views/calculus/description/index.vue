<template>
    <div>
      <div class="content-x" v-html="content">

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
    this.getData()
  },
  mounted () {
  }
}
</script>

<style scoped lang="scss">
@import "~@/style/calculus/description.scss";
</style>

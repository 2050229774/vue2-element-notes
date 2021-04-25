<template>
    <!-- 搜索按钮，输入建议 -->
    <el-row>
      <el-col :span="20">
        <el-input
          v-model="input"
          placeholder="html、css、js、es6、vue、git"
          clearable>
          <i slot="suffix"></i>
          <i slot="prefix" class="el-input__icon el-icon-search"></i>
          </el-input>
      </el-col>
    </el-row>
</template>

<script>
  export default {
    name: 'SearchBox',
    data() {
      return {
        input: ''
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>

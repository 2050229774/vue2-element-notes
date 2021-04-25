<template>
  <div id="notequery-bar1"  >
    <!-- 当发生点击实际上是进行数据的跳转， -->
    <el-menu mode="horizontal" background-color="#e8e8e8" active-text-color="#55557f" :default-active="activeItem" @select="skip">
      <el-menu-item :index="bar" v-for="bar in bardata">{{bar}}</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
  export default {
    name: 'NotequeryBar1',
    data() {
      return {
        activeItem: '1'
      }
    },
    props: ['bardata'],
    methods: {
      skip(key){
        this.$emit('skip',key);
      }
    },
    mounted() {
      this.activeItem = this.bardata[0]
    }
  }
</script>

<style lang="scss" scoped>
  #notequery-bar1 {
    width: 1160px;
    margin: 0 auto;
  }

  .el-menu-item {
    height: 30px;
    line-height: 30px;
  }
</style>

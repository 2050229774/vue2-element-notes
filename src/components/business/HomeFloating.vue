<template>
  <div id="home-floating">
    <!-- 这里管理有几个floating-link-->
    <floating-link :linkary="floatingary" v-for="floatingary in floating" ></floating-link>
  </div>
</template>

<script>
  import FloatingLink from '../common/FloatingLink.vue'

  export default {
    name: 'HomeFloating',
    props:['floating'],
    components: {
      FloatingLink
    }
  }
</script>

<style lang="scss" scoped>
  #home-floating {
    width: 1200px;
    margin: 0 auto;
  }
</style>

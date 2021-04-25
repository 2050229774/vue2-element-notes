<template>
  <div id="home">
    <carousel></carousel>
    <home-floating :floating="flatingObj"></home-floating>
    <home-footer></home-footer>
  </div>
</template>

<script>
  import HomeFloating from '../../components/business/HomeFloating.vue'

  import Carousel from './home-child/carousel.vue'
  import HomeFooter from './home-child/HomeFooter.vue'

  import {flatingObj} from './data/homeData.js'

  export default {
    name: "Home",
    data(){
      return {
        flatingObj
      }
    },
    components:{
      Carousel,
      HomeFloating,
      HomeFooter
    }

  }
</script>

<style lang="scss" scoped>
  #home {
    background-color: #f5f5f5;
  }
</style>

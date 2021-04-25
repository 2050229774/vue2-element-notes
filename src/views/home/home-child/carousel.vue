<template>
  <div id="carousel">
    <div id="carousel-conter">
      <el-carousel :interval="4000" type="card" height="300px" arrow="never">
        <el-carousel-item v-for="(item,index) in imgs" :key="index">
          <el-image style="width: 100%;height: 100%;" :src="item.url" fit="contain"></el-image>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'Carousel',
    data() {
      return {
        imgs: [{
            url: require('../../../assets/img/home/0ad95c6358d745059b502e386fab7749.png')
          },
          {
            url: require('../../../assets/img/home/2c0ace6eeda743dfac08951d98712a04.jpg')
          },
          {
            url: require('../../../assets/img/home/411dfb5d8cdb4dd99f1269f30094ab43.png')
          },
          {
            url: require('../../../assets/img/home/4ed3fb87482e4531a05093ef0b15e16f.png')
          },
          {
            url: require('../../../assets/img/home/7ec1ddcc8b6746539abb3c57c27341f9.png')
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  #carousel {
    background-color: #e8e8e8;
  }

  #carousel-conter {
    width: 1200px;
    margin: 0 auto;
  }

  .el-carousel {
    padding: 5px 0;
  }
</style>

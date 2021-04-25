<template>
  <!-- 要实现效果浮于item上图片方法item上移添加阴影 -->
  <!-- 这里管理具体元素如何展示 -->
  <div class="floating-link">
    <div :style="{height: heightx}" class="floating-link-item" v-for="ob in linkary">
      <div class="floating-link-item-box">
        <img :src="ob.flatImg">
      </div>
      <p>{{ob.flatText}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'FloatingLink',
    props: {
      linkary: {
        type: Array
      },
      heightx: {
        type: String,
        default: '250px'
      }
    },

    mounted() {
      // console.log(this.linkary)
    }
  }
</script>

<style lang="scss" scoped>
  .floating-link {
    display: flex;
    justify-content: space-around;
    margin: 15px 0;
  }

  .floating-link-item {
    margin: 0 20px;
    border-radius: 10px;
    background-color: #ffffff;


    .floating-link-item-box {
      width: 80%;
      margin: 0 auto;
      height: 75%;
      margin-top: 5%;
      overflow: hidden;

      img {
        width: 100%;
        height: 100%;
      }
    }

    p {
      width: 90%;
      margin: 3% auto;
      color: #767676;
      font-size: 14px;
      text-align: center;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
    }

    &:hover {
      transform: translateY(-10px);
      -moz-box-shadow: 10px 10px 15px #888888;
      /* 老的 Firefox */
      box-shadow: 10px 10px 15px #888888;

      img {
        transform: scale(1.2);
      }
    }
  }
</style>

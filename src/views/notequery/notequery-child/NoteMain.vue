<template>
  <div id="note-main">
    <el-backtop>
      <i class="el-icon-top"></i>
    </el-backtop>
    <h1>{{mainData.title}}</h1>
    <el-divider></el-divider>
    <div class="note-main-item" v-for="obj in mainData.data">
      <h2><span>#</span> {{obj.titleContent}}</h2>
      <p v-for="content in obj.content">{{content}}</p>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'NoteMain',
    data() {
      return {
        activeNames: ['1']
      };
    },
    props:['mainData']
  }
</script>

<style lang="scss" scoped>
  .note-main-item {
    margin-bottom: 80px;
    margin-left: 50px;
    h2 {
      font-weight: 400;
    }

    p {
      text-indent: 2em;
    }
    span {
      color: #13CE66;
    }
  }

  .el-icon-top {
    color: #0000FF;
  }
</style>

<template>
  <div id="tab-bar1">
    <div id="tab-bar1-conter">
      <el-row>
        <el-menu default-active="/" mode="horizontal" background-color="#6f6f6f" text-color="#d1d1d1" active-text-color="#cef7bc"
          :router="true">
          <el-col :span="2">
            <img id="tab-bar1-img" src="../../assets/img/home/fdad.png">
          </el-col>
          <el-col :span="2">
            <el-menu-item index="/">首页</el-menu-item>
          </el-col>
          <el-col :span="2">
            <el-menu-item index="/notequery">笔记查询</el-menu-item>
          </el-col>
          <el-col :span="2">
            <el-menu-item index="/proportionaldistribution">BUG查询</el-menu-item>
          </el-col>
          <el-col :span="8" :offset="3">
            <search-box class="search-box"></search-box>
          </el-col>
          <el-col :span="3" :offset="2">
            <el-menu-item index="/addnotes"><i class="el-icon-edit"></i><span>添加笔记</span></el-menu-item>
          </el-col>
        </el-menu>
      </el-row>
    </div>
  </div>
</template>

<script>
  import SearchBox from '../common/SearchBox.vue'


  export default {
    name: "TabBar1",
    components:{
      SearchBox
    }
  }
</script>

<style lang="scss" scoped>
  #tab-bar1 {
    width: 100%;
    height: 60px;
    background-color: #6f6f6f;
  }
  #tab-bar1-conter {
    width: 1200px;
    margin: 0 auto;
  }
  #tab-bar1-img{
    height: 50px;
    margin-top: 4px;
  }

  .search-box {
    margin-top: 10px;
  }
  .el-menu-item {
    font-size: 16px;
    text-align: center;
    height: 60px;
    line-height: 60px;
  }
</style>

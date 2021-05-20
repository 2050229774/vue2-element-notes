<template>
  <div id="proportional">
    <div id="proportional-content">
      <h1>常见bug</h1>
      <el-collapse v-model="activeNames" :accordion="true">
        <el-collapse-item :title="content.title" :name="id" v-for="(content,id) in prdata">
          <p v-for="tent in content.content">
            {{tent}}
          </p>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>

<script>
  import {prdata} from './data/prdata.js'

  export default {
    name: "ProportionalDistribution",
    data(){
      return {
          activeNames: [0],
          prdata
      }
    },
    methods:{

    },
    mounted() {

    }
  }
</script>

<style lang="scss" scoped>
  #proportional {
    background-color: #e8e8e8;
  }
  #proportional-content {
    width: 1000px;
    padding: 0 100px;
    background-color: #FFFFFF;
    margin: 0 auto;
    h1 {
      margin: 0;
      padding: 50px 0;
    }
  }
  #calendar {
    position: fixed;
    right: 0;
    top: 50%;
  }
  .el-calendar {
    width: 200px;
  }
</style>

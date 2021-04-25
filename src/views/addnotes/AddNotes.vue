<template>
  <!-- 添加笔记实际是操作对象，
  1选中对应对象，2写内容，3添加到对象-->
  <div id="add-notes">
    <h1>关于笔记写点什么好</h1>

      <el-form ref="from" :model="fromt" label-width="auto" :hide-required-asterisk="true">
        <div id="add-notes-content">
        <el-form-item label="科目" :required="true">
          <el-select v-model="fromt.selectValue" placeholder="请选择" @change="selectChange">
            <el-option :value="opValue" v-for="opValue in fromt.titleData"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="一级标题" :required="true">
          <el-input v-model="fromt.titleInput" placeholder="请输入标题" clearable @change="inputChange"></el-input>
        </el-form-item>
        <el-form-item label="二级标题">
          <el-input v-model="fromt.contentTitleInput" placeholder="请输入内容标题" clearable @change="inputChangeConten"></el-input>
        </el-form-item>
        <el-form-item label="内容" :required="true">
          <el-input type="textarea" autosize placeholder="请输入内容" v-model="fromt.textarea1" @change="inputChangeTextarea1">
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click.native="adfak">立即创建</el-button>
          <el-button>清空</el-button>
        </el-form-item>
        </div>
      </el-form>

  </div>

</template>

<script>
  import {
    titleData
  } from '../notequery/noteData/notedata.js'

  export default {
    name: "AddNotes",
    data() {
      return {
        titleData,
        fromt: {
          selectValue: "",
          titleInput: "",
          contentTitleInput: "",
          textarea1: "",
          titleData: null
        }
      };
    },
    methods: {
      selectChange(str) {
        console.log(str)
      },
      inputChange(str) {
        console.log(str)
      },
      inputChangeConten(str) {
        console.log(str)
      },
      inputChangeTextarea1(str) {
        console.log(str)
      },
      adfak() {
        console.log(this.fromt)
      }
    },
    created() {
      this.fromt.titleData = this.titleData;
    }
  }
</script>

<style lang="scss" scoped>
  #add-notes {
    width: 1000px;
    margin: 0 auto;
    >h1 {
      margin-bottom: 50px;
      font-weight: 500;
      font-family: 楷体;
    }
  }

  .el-form {
    border: solid 2px #dcdfe6;
    border-radius: 20px;
  }

  #add-notes-content {
    width: 800px;
    margin: 20px auto;
  }

  .el-select {
    width: 100%;
  }
</style>

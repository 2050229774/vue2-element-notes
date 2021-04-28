<!-- 添加笔记实际是操作对象，
  1选中对应对象，2写内容，3添加到对象-->
<template>
  <div id="add-notes">
    <h1>关于笔记写点什么好</h1>
    <el-form ref="ruleForm"
      label-width="100px"
      label-position="left"
      :model="fromt"
      :hide-required-asterisk="true">
      <div id="add-notes-content">
        <el-form-item
          label="技术栈"
          prop="selectValue"
          :rules="rules.selectValue">
          <el-select
            v-model="fromt.selectValue"
            placeholder="请选择技术栈">
            <el-option :value="opValue" v-for="opValue in titleData"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item
          label="一级标题"
          prop="titleInput"
          :rules="rules.titleInput">
          <el-input
            v-model="fromt.titleInput"
            placeholder="请输入标题"
            clearable></el-input>
        </el-form-item>
        <el-row
          class="add-content"
          v-for="(ct,index) in fromt.concreteContent">
          <el-col :span="20">
            <el-form-item
              :label="'二级标题'+index"
              :prop="'concreteContent.'+index+'.areasvalue'"
              :rules="rules.contentTitleInput"
              :key="ct.areaskey">
              <el-input v-model="ct.areasvalue" placeholder="请输入内容标题" clearable></el-input>
            </el-form-item>
            <el-form-item
              :label="'文本内容'+index"
              :prop="'concreteContent.'+index+'.contentvalue'"
              :rules="rules.npmmm"
              :key="ct.contentvaluekey">
              <el-input type="textarea" v-model="ct.contentvalue" placeholder="请输入内容" autosize></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="4">
            <el-button type="danger" @click.prevent="removeDomain(ct)">删除</el-button>
          </el-col>
        </el-row>
        <div class="button-set">
          <el-button type="primary" @click="submitForm('ruleForm')">立即创建</el-button>
          <el-button type="info" @click="addDomain">增加具体内容</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
          </div>
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
      let onePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入一级标题'));
        } else if (value.search(/[//,\,(,),%]/) != -1) {
          callback(new Error('一级标题中不能输入/、\\ 、（、）、%'));
        } else {
          callback();
        }
      };
      let towPass = (rule, value, callback) => {
        callback();
      };
      return {
        titleData,
        fromt: {
          selectValue: "",
          titleInput: "",
          concreteContent: [{
            contentvalue: '',
            areasvalue: ''
          }]
        },
        rules: {
          selectValue: [{
            required: true,
            message: '请选择技术栈',
            trigger: 'change'
          }],
          titleInput: [{
            validator: onePass,
            trigger: 'blur'
          }],
          contentTitleInput: [{
            validator: towPass,
            trigger: 'blur'
          }],
          npmmm: [{
            required: true,
            message: '请输入内容',
            trigger: 'blur'
          }]
        }
      };
    },
    methods: {
      open2() {
        this.$message({
          message: '提交成功，点击立即查看',
          type: 'success',
          showClose: true,
        });
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log(this.fromt)
            this.open2()
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      addDomain() {
        this.fromt.concreteContent.push({
          contentvalue: '',
          areasvalue: '',
          areaskey: Date.now(),
          contentvaluekey: Date.now()+2
        });
      },
      open4(){
        this.$notify.error({
          title: '至少保留一个具体内容'
        });
      },
       removeDomain(item) {
         var index = this.fromt.concreteContent.indexOf(item)
         if (index !== -1 && this.fromt.concreteContent.length !== 1) {
         this.fromt.concreteContent.splice(index, 1)
         }else if(this.fromt.concreteContent.length === 1) {
           this.open4()
         }
       }
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

  .add-content {
    border: solid 2px #dcdfe6;
    padding: 20px;
    margin-top: 20px;
    border-radius: 20px;
    .el-button {
      width: 75%;
      margin: 30% 25%;
    }
  }
  .button-set {
    display: flex;
    justify-content: center;
    margin-top: 20px;
    .el-button {
      margin-left: 100px;
    }
  }
</style>

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
              :prop="'concreteContent.'+index+'.titleContent'"
              :rules="rules.contentTitleInput"
              :key="ct.areaskey">
              <el-input v-model="ct.titleContent" placeholder="请输入内容标题" clearable></el-input>
            </el-form-item>
            <el-form-item
              :label="'文本内容'+index"
              :prop="'concreteContent.'+index+'.content[0]'"
              :rules="rules.npmmm"
              :key="ct.titleContentkey">
              <el-input type="textarea" v-model="ct.content[0]" placeholder="请输入内容" autosize></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="4">
           <el-popconfirm
              title="删除后不可恢复,确定删除吗？"
              icon="el-icon-info"
              icon-color="red"
              @confirm = "removeDomain(ct)"
            >
            <el-button  slot="reference" type="danger">删除</el-button>
            </el-popconfirm>
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
    titleData,
    noteData,
    noteContenData
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
        titleData,  //顶部导航内容
        noteData,  //侧边导航内容
        noteContenData,  //具体内容
        fromt: {
          selectValue: "",
          titleInput: "",
          concreteContent: [{
            titleContent: '',
            content: ['']
          }]
        },
        fromtcopy: {
          selectValue: "",
          titleInput: "",
          concreteContent: [{
            titleContent: '',
            content: ['']
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
         this.$confirm('是否立即查看添加内容?', '提示', {
           confirmButtonText: '确定',
           cancelButtonText: '继续添加',
           type: 'warning'
           }).then(() => {
             // 做一个跳转
              this.$router.push('notequery')
              // 做一个事件总线


           }).catch(() => {
              // 做一个清空
              this.fromt = this.fromtcopy;
              this.$message({
              type: 'success',
              showClose: true,
              center: true,
              message: '已清空内容可继续添加'
          });
          });
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // 提交成功，操作对象
            this.open2()
            const selectValue = this.fromt.selectValue;
            const titleInput = this.fromt.titleInput.split(' ');
            const cct = this.fromt.concreteContent
            const noteContenDataObj= eval('this.noteContenData.'+selectValue);
            // 添加侧边导航栏内容
            eval('this.noteData.'+selectValue+'.data.push(titleInput)')
            //添加内容
            noteContenDataObj[titleInput] = {
              title: titleInput[0],
              data: cct
              }

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
          titleContent: '',
          content: [''],
          areaskey: Date.now(),
          titleContentkey: Date.now()+2
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

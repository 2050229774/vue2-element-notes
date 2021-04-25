<template>
  <el-container id="notequery">
    <el-header height="30px">
      <notequery-bar1 :bardata="titleData" @skip="skipyes($event)"></notequery-bar1>
    </el-header>
    <el-container id="notequery-conter">
      <el-aside width="200px" ref="elAside">
        <note-aside :noteData="noteDataid"
          @asideThis="asideThisyes($event)"></note-aside>
      </el-aside>
      <el-main>
        <note-main :mainData="mainData"></note-main>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
  import NotequeryBar1 from "./notequery-child/header-bar1.vue"
  import NoteAside from "./notequery-child/NoteAside.vue"
  import NoteMain from "./notequery-child/NoteMain.vue"

  import {
    noteData,
    titleData,
    noteContenData
  } from "./noteData/notedata.js"

  export default {
    name: "NoteQuery",
    data() {
      return {
        noteData,
        titleData,
        noteDataid: null,
        asideid: 'html',
        noteContenData,
        mainData: null
      }
    },
    components: {
      NotequeryBar1,
      NoteAside,
      NoteMain
    },
    methods: {
      idintro(obj){
        for(let i in obj){
          return obj[i]
        }
      },
      skipyes(id) {
        this.asideid = id
        this.mainData = this.idintro(eval('this.noteContenData'+'.'+this.asideid))
        this.noteDataid = eval('this.noteData' + '.' + id)
      },
      asideThisyes(id) {
        this.mainData = eval('this.noteContenData'+'.'+this.asideid+'.'+id)
      }
    },
    created() {
      this.noteDataid = this.idintro(this.noteData)
      this.mainData = this.idintro(this.idintro(this.noteContenData))
    },
    mounted() {
      this.$refs.elAside.$el.style.height = window.innerHeight - 92 + "px"
    }
  }
</script>

<style lang="scss" scoped>
  #notequery {
    background-color: #f5f5f5;
  }

  #notequery-conter {
    width: 1200px;
    margin: 0 auto;

  }

  .el-header {
    background-color: #e8e8e8;
  }

  .el-aside {
    background-color: #FFFFFF;
    position: sticky;
    top: 0px;
    overflow-x: hidden;
    overflow-y: auto;
  }

  .el-main {
    // height: 1000px;
  }
</style>

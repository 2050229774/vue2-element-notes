<template>
  <div id="note-aside">
    <h1>{{noteData.title}}</h1>
    <el-menu
    text-color="#868686"
    active-text-color="#0fa81a"
    @select="asideThis"
	>
      <div v-for="content in noteData.data">
        <el-menu-item  v-if="content.length == 1"  :index="content[0]">{{content[0]}}</el-menu-item>
        <el-submenu v-else-if="content.length > 1" :index="content[0]">
          <template slot="title">
            <span>{{content[0]}}</span>
          </template>
          <el-menu-item :index="contentin" v-for="contentin in content.slice(1)">{{contentin}}</el-menu-item>
        </el-submenu>
      </div>
    </el-menu>
  </div>
</template>

<script>
  export default {
    name: 'NoteAside',
    data(){
      return {
        asideActive: ""
      }
    },
    props: ['noteData'],
    methods:{
      asideThis(key){
        this.$emit('asideThis',key)
      }
    }
  }
</script>

<style lang="scss" scoped>
  #note-aside {
    h1 {
      text-align: center;
    }
  }
</style>

<template>
  <div id="app">
    <tab-bar1></tab-bar1>
    <router-view/>
  </div>
</template>

<script>


	import TabBar1 from './components/business/TabBar1.vue'


	export default {
		name: "App",
		components: {
			TabBar1
		}
	}
</script>

<style lang="scss">
	@import './assets/scss/base.scss';
</style>

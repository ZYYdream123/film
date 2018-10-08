<template>
  <div id="app">
  	<myheader/>
  </div>
</template>

<script>

import myheader from '@/components/pages/myheader/myheader'
export default {
  name: 'App',
  components:{
  	myheader
  }
}
</script>

<style>
@import "./style/reset.scss";
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #ddd;
}
</style>

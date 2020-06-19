<template>
  <div id="app">
    <Header/>
   <router-view></router-view>
  </div>
</template>

<script>

import Header from './components/Header.vue';
export default {
  
  name: 'App',
  components: {
    Header
  }
}
</script>

<style>
body {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  line-height: 1.6;
  background: white;
  
}
.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}
</style>

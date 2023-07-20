<template>
  <div id="app">
    <h1 class="text-#ff0000">标题</h1>
    <div class="color1">使用sass全局变量</div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.color1{
  color: $color1;
}
</style>

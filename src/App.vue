<template>
  <div id="app">
    <main-container/>
  </div>
</template>

<script>
import DemoContainer from './components/DemoContainer'
import MainContainer from './components/MainContainer'

export default {
  name: 'App',
  components: {
    DemoContainer,
    MainContainer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

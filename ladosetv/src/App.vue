<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/ladose.jpg">
    <HelloWorld msg="Stream Title"/>
    <TwitchPlayer stream="froggedtv"/>

  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import TwitchPlayer from './components/TwitchPlayer.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    TwitchPlayer
  },
  mounted(){

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

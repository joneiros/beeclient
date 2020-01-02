<template>
  <div id="app">
    <img class="bee_logo" alt="CC Bee 1" src="./assets/bee.svg" height="15%" width="15%">
    <img class="bee_logo" alt="CC Bee 2" src="./assets/bee.svg" height="15%" width="15%">
    <h1>
      Bee Twogether
    </h1>
    <router-view/>
    <img alt="CC Bee 2" src="./assets/beehive.svg" height="10%" width="10%">
    <!-- Example of adding vue directly:
      <HelloWorld msg="Add message for div class here"/>

      Also needs this in the script: <script>
      import HelloWorld from './components/HelloWorld.vue'

      export default {
        name: 'app',
        components: {
          HelloWorld
        }
      }
      </script>
    -->
  </div>
</template>

<script>
  export default {
    name: 'app',
  }
</script>

<style>
  h1 {
    color: #fcd615
  }
  body {
    background-color: #273237;
  }
  .bee_logo {
    margin: 5px;
    padding-top: 2%;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #fcb43a;
  }
</style>

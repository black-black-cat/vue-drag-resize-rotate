<template>
  <div id="app">
    <h1>Demo for vue-drag-resize-rotate component</h1>
    <p></p>
    <p></p>

    <drr
        :x="300"
        :y="300"
        :w="400"
        :h="100"
        :aspectRatio="true"
    >
      <img src="./assets/img/8s.jpg" class="image"/>
    </drr>

    <drr
        :x="700"
        :y="400"
        :w="300"
        :h="200"
    >
      <img src="./assets/img/placeholder.png" class="image"/>
    </drr>

    <drr
        :x="400"
        :y="600"
        :w="200"
        :h="100"
        :hasActiveContent="true"
    >
      <TextBox/>
    </drr>
  </div>
</template>

<script>
  import TextBox from './components/TextBox.vue'

  export default {
    name: 'app',
    components: {
      TextBox
    },
    methods: {}
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }

  .image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
</style>

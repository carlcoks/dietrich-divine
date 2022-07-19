<template>
  <div id="app">
    <header-block />
    <list-items />
    <cart-block />
  </div>
</template>

<script>
import HeaderBlock from './components/HeaderBlock.vue';
import ListItems from './components/ListItems.vue';
import CartBlock from './components/CartBlock.vue';

export default {
  name: 'App',
  components: {
    HeaderBlock,
    ListItems,
    CartBlock,
  },
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
}
</style>

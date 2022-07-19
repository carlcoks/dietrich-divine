<template>
  <div class="header">
    <h3>Товаров в корзине на: {{ getTotalCartPrice }} {{ $getConst('MAIN_CURRENCY') }}</h3>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'HeaderBlock',
  computed: {
    ...mapGetters(['getTotalCartPrice'])
  }
}
</script>

<style scoped>
  .header {
    padding: 10px;
    background: #e5e5e5;
  }
</style>

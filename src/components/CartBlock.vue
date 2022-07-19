<template>
  <div class="cart-list">
    <div v-for="(item, i) in getCart" :key="i">
      {{ item }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "CartBlock",
  computed: {
    ...mapGetters(["getCart"]),
  },
};
</script>

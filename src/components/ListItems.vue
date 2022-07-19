<template>
  <div class="product-list">
    <item-card
      v-for="product in products"
      :key="product.id"
      :item="product"
    />
  </div>
</template>

<script>
import ItemCard from './ItemCard'
import { getProductsList } from "../../api/mock/index";

export default {
  name: 'ListItems',
  components: {
    ItemCard
  },
  data() {
    return {
      products: [],
      interval: null
    };
  },
  methods: {
    startPricesMonitoring() {
      this.interval = setInterval(this.getList, 2000);
    },

    async getList() {
      const data = await getProductsList();

      this.products = data;
    }
  },
  created() {
    this.getList()
    this.startPricesMonitoring();
  },
  beforeDestroy() {
    clearInterval(this.interval)
  }
};
</script>

<style scoped>
  .product-list {
    padding: 10px;
  }
</style>

<template>
  <div class="card">
    <p class="card-title">{{ item.title }}</p>
    <img class="card-image" :src="item.image" alt="" />
    <p class="card-price">Цена: {{ item.price }} {{ $getConst('MAIN_CURRENCY') }}</p>

    <div>
      <input type="number" v-model="amount" />
      <span>кг</span>
    </div>

    <button @click="add()">В корзину</button>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: "ItemCard",
  props: {
    item: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      amount: 1,
    };
  },
  methods: {
    ...mapMutations(['addToCart']),

    add() {
      const data = {
        amount: this.amount,
        price: this.item.price,
        title: this.item.title,
      };

      this.addToCart(data)

      this.amount = 1
    },
  }
};
</script>

<style scoped>
.card {
  display: inline-block;
  width: calc(100% / 3);
  border: 1px solid #908888;
  border-radius: 5px;
  text-align: center;
  padding: 10px;
}
.card-image {
  width: 100%;
}
button {
  padding: 5px;
  margin: 5px;
}

@media (max-width: 840px) {
  .card {
    width: calc(100% / 2);
  }
}

@media (max-width: 420px) {
  .card {
    width: 100%;
  }
}
</style>

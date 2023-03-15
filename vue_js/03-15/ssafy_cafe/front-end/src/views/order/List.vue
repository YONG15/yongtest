<template>
  <div>
    <router-link to="/orders/register">
      <b-button class="order-button w-100" variant="outline-dark"
        >주문하기</b-button
      >
    </router-link>

    
    <div @click="moveDetail(order.id)" v-for="order in orders" :key="order.id">
      <div class="order-container">
        <div class="order-id">{{ order.id }}</div>

        <div class="order-info-wrapper">
          <h2 class="order-quantity">{{ order.quantity }}</h2>
          <p class="order-request_detail">{{ order.request_detail }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { api } from "@/utils/axios";

export default {
  data() {
    return {
      orders: [],
    };
  },
  async created() {
    this.$store.commit("SET_TITLE", "주문 목록");
    const result = await api.orders.findAll();
    console.log(result);
    this.orders = result.data;
  },

  methods: {
      moveDetail(id){
      this.$router.push(`/orders/${id}`)
    }
  },
};
</script>



<style>
.order-container {
  display: flex;
  align-items: center;
  border-bottom: 3px solid black;
}

.order-info-wrapper {
  margin: 0 auto;
  text-align: center;
}

.order-quantity {
  font-size: 25px;
  font-weight: bold;
}

.order-request_detail {
  padding-top: 10px;
}
.order-image {
  background-size: cover;
  background-position: center;
  width: 180px;
  height: 180px;
}
</style>



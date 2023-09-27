<template>
  <main>
    <h1>注文履歴</h1>
    <div class="order-card" v-for="order in orders" :key="order.id">
      <div class="order-image-wrapper">
        <img class="order-image" :src="order.url" :alt="order.alt" />
      </div>
      <div class="order-history-item">
        <h2 class="order-name">{{ order.name }}</h2>
        <p class="order-color">{{ order.color }} :</p>
        <p class="order-size">{{ order.size }} :</p>
        <p class="order-number">{{ order.number }} :</p>
        <p class="purchase-day">{{ order.day }} :</p>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      orders: [
        {
          id: 1,
          name: '商品名',
          color: 'カラー',
          size: 'サイズ',
          number: '商品番号',
          day: '購入日',
          url: '../assets/sample.jpg',
          alt: '商品の画像',
        },
      ],
    }
  }
}
</script>

<style>
.order-card {
  display: flex;
  justify-content: space-around;
  align-items: center; 
  padding: 40px;
  margin: 80px;
  border: solid 1px #000;
}
.order-image-wrapper {
  padding: 20px;
  border: solid 1px #000;
  width: 30%;
}
.order-history-item {
  font-size: 24px;
  text-align: left;
  border: solid 1px #000;
  width: 60%;
}
.order-number {
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
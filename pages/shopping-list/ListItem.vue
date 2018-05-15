<template>
  <div>
    <span class="product">{{item.product}}</span>
    <div class="quantity">
      <input type="number" v-model.number="item.quantity">
    </div>
    <div class="cost">{{item.cost * item.quantity}}</div>
  </div>
</template>

<script>
export default {
  name: 'ListItem',
  props: ['item']
}
</script>

<style lang="scss" scoped>
  .product {
    font-weight: bold;
  }

  .quantity {
    position: absolute;
    right: 80px;
  }

  .cost {
    position: absolute;
    right: 0;
    text-align: right;
  }
</style>


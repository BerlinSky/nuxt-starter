<template>
  <div class="listItem">
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
  .listItem {
    display: flex;
    justify-content: space-between;

    padding-left: 40px;
    padding-right: 40px;

    > * {
      flex: 1 100%;
    }
  }


  .product {
    font-weight: bold;
    text-align: left;

    flex: 1 50%;
  }

  .quantity {
    // position: absolute;
    // right: 80px;
    flex: 1 40%;

  }

  .cost {
    // position: absolute;
    // right: 0;
    text-align: right;
    flex: 1 10%;

  }
</style>


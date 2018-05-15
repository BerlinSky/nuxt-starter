<template>
  <div class="shoppingList">
    <div>
      <nuxt-link to="/">Home page</nuxt-link>
    </div>

    <div class="cart">
      <h2>Shopping List</h2>
      <ol class="list">
        <li v-for="(item, index) in cart" :key="index">
          <list-item :item="item" />
        </li>
      </ol>
      <div class="totals">
        Total = USD {{totals}}
      </div>
    </div>
  </div>
</template>

<script>
import ListItem from '~/components/listItem.vue'

const products = [
  {
    product: 'Ben & Jerry\'s Coconut Seven',
    cost: 30,
    quantity: 2
  },
  {
    product: 'Lipton Honey Lemon Green Tea',
    cost: 10,
    quantity: 6
  },
  {
    product: 'Lindt Lindor - Milk Truffles',
    cost: 100,
    quantity: 1
  },
  {
    product: 'Ferrero Rocher (24 Pieces)',
    cost: 12,
    quantity: 4
  },
  {
    product: 'Goodwyn Tea',
    cost: 20,
    quantity: 8
  },
  {
    product: 'Typhoo Treasures Green Tea',
    cost: 5,
    quantity: 10
  }
]
export default {
  name: 'Cart',
  data () {
    return {
      cart: products
    }
  },
  components: {
    ListItem
  },
  computed: {
    totals () {
      return this.cart.reduce(function (total, item) {
        return total + (item.cost * item.quantity)
      }, 0)
    }
  }
}
</script>

<style lang="scss" scoped>
  .shoppingList {
    width: 100%;
    height: 100%;

    padding: 50px;
  }
  .cart {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    border: 1px solid;
    padding: 10px;
    box-sizing: border-box;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.4);
    border-radius: 5px;

    h2 {
      height: 50px;
      padding: 0px;
      margin: 0px;
      font-weight: normal;
      font-size: 26px;
    }
  }

  .list {
    margin: 0px;
    padding: 10px;

    li {

      // position: relative;
      // width: 350px;
      margin-left: 30px;
      padding-bottom: 20px;
      font-size: 13px;
    }
  }

  .totals {
    // position: absolute;
    margin-top: 10px;
    height: 50x;
    border-top: 1px solid black;
    // bottom: 00px;
    // width: 377px;
    // text-align: right;
    line-height: 30px;
    font-size: 14px;
    font-weight: bold;
  }
</style>

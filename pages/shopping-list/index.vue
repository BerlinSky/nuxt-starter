<template>
  <div>
    <nuxt-link to="/">Home page</nuxt-link>

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
import ListItem from './listItem'

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
  .cart {
    position: absolute;
    border: 1px solid;
    width: 400px;
    height: 420px;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    overflow: hidden;
    padding: 10px;
    box-sizing: border-box;
    box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.4);
    border-radius: 5px;

    h2 {
    position: absolute;
    padding: 0px;
    margin: 0px;
    font-weight: normal;
    font-size: 26px;
    }
  }

  .list {
    position: absolute;
    top: 70px;
    margin: 0px;
    padding: 0px;
    left: 30px;

    li {
      position: relative;
      width: 350px;
      padding-bottom: 20px;
      font-size: 13px;
    }
  }

  .totals {
    position: absolute;
    border-top: 1px solid black;
    bottom: 00px;
    width: 377px;
    text-align: right;
    line-height: 30px;
    font-size: 14px;
    font-weight: bold;
  }
</style>

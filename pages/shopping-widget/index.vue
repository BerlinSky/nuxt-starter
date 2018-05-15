<template>
  <div class="shoppingList">
    <div>
      <nuxt-link to="/">Home page</nuxt-link>
    </div>

    <div class="cart">
      <h2>Shopping Widget</h2>
       <div class="add-products-container">
        <list-widget :cart="cart" />
        <ol class="products-list">
          <li v-for="(item, index) in cart" :key="index">
            {{item}}
          </li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script>
import ListWidget from "~/components/ListWidget.vue";

export default {
  name: 'app',
  components: {
    ListWidget
  },
  data() {
    return {
      cart: []
    }
  },
}
</script>

<style lang="scss" scoped>
.cart {
  font-family: sans-serif;

  .add-products-container {
    border: 1px solid #DCDCDC;
    background-color: #000;
    width: 500px;
    max-height: 624px;
    margin: auto;
    box-sizing: border-box;
    padding: 10px;

    .products-list {
      font-size: 12px;
      line-height: 20px;
      font-weight: bold;
    }
  }
}
</style>

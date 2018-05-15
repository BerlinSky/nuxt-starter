<template>
   <div class="add-products">
      <ul>
        <li class="product" v-for="(item, key) in products" :key="key">
          <span class="title">{{item}}</span>
          <a href="#" class="remove-btn" @click.prevent="removeItem(key)">X</a>
        </li>
        <li class="search-box">
          <input type="text" placeholder="Add Products..." v-model="product" @keyup.enter="addProduct">
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'list-widget',
  props: ['cart'],
  data() {
    return {
      product: '',
      products: this.cart
    }
  },
  methods: {
    addProduct() {
      if(this.product !== '') {
        this.products.push(this.product);
        this.product = '';
      }
    },
    removeItem(key) {
      this.products.splice(key, 1);
    }
  },
}
</script>

<style lang="scss" scoped>
.add-products {
  position: relative;
  // background-color: #003;
  // border: 1px solid;
  // overflow: hidden;
  margin-bottom: 2px;

  .add-products ul {
    margin: 0;
    padding: 0;
  }
}

.product {
  position: relative;
  list-style: none;
  padding: 8px;
  margin: 0px;
  background-color: #FAE200;
  display: inline-block;
  margin: 4px;
  border-radius: 5px;

  .product span {
    font-size: 12px;
  }

  .product a {
    font-size: 12px;
    font-weight: bold;
    color: black;
    text-decoration: none;
    padding-left: 10px;
  }
}

.search-box {
  position: relative;
  display: inline-block;

  .search-box input {
    padding: 8px;
    font-size: 12px;
    outline: none;
    border: none;
    margin: 4px;
    background-color: transparent;
  }
}
</style>

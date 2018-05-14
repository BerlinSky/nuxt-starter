<template>
  <div>
    <p class="title">Hi <span class="hightlight">Mr. Smith</span> {{ name }}</p>
    <nuxt-link to="/">Home page</nuxt-link>
  </div>
</template>

<script>
export default {
  layout: 'dark',
  asyncData({ req }) {
    return {
      name: req ? 'server' : 'client'
    }
  }
}
</script>

<style lang="scss">
.title {
  color: red;

  .hightlight {
    font-weight: 800;
    color: yellowgreen;
  }
}
</style>

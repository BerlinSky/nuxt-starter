<template>
   <div class="rangeSlider">
    <div>
      <nuxt-link to="/">Home page</nuxt-link>
    </div>

    <div class="container">
      <h2>Range Slider</h2>
      <input-field :value.sync="val" />
      <range-slider :value.sync="val" />
    </div>
  </div>
</template>

<script>
import InputField from "~/components/InputField.vue";
import RangeSlider from "~/components/RangeSlider.vue"

export default {
  name: 'app',
  data() {
    return {
      val: 0
    }
  },
  components: {
    InputField,
    RangeSlider
  }
}
</script>

<style lang="scss" scoped>
.container {
  font-family: sans-serif;
  position: absolute;
  width: 204px;
  height: 120px;
  border: 1px solid #ACACAC;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  margin: auto;
  overflow: hidden;
  padding: 5px;
}
</style>

<template>
  <input type="range" min="0" max="100" :value="value" @input="update">
</template>

<script>
export default {
  name: 'RangeSlider',
  props: ['value'],
  methods: {
    update(event) {
      this.$emit('update:value', Number(event.target.value));
    }
  }
}
</script>

<style lang="scss" scoped>
  input {
    position: relative;
    padding: 13px;
    width: 165px;
    margin: 5px;
    outline: none;
    border: 1px solid rgba(0, 0, 0, 0.7);
    font-size: 25px;
  }
</style>

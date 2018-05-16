<template>
  <div class="currencyConvertor">
    <div>
      <nuxt-link to="/">Home page</nuxt-link>
    </div>

    <div class="section">
      <div class="currency-symbol">
        <select v-model="symbols.first" @change="getRate()">
          <option v-for="(sym, index) in symbolsArray" :key="index">{{sym}}</option>
        </select>
      </div>
      <div class="currency-value">
        <input type="number" min="0" value="0"
            v-model.number="inputValue.first"
            @input="convert()"
            @focus="firstActive = true"
        >
      </div>
    </div>
    <div class="section">
      <div class="currency-symbol">
        <select v-model="symbols.second" @change="getRate()">
          <option v-for="(sym, index) in symbolsArray" :key="index">{{sym}}</option>
        </select>
      </div>
      <div class="currency-value">
        <input type="number" min="0" value="0"
            v-model.number="inputValue.second"
            @input="convert()"
            @focus="firstActive = false"
        >
      </div>
    </div>
    <div id="cover" v-if="isLoading"></div>
  </div>
</template>

<script>
export default {
  name: "CurrencyConvertor",
  data() {
    return {
      isLoading: true,
      symbolsArray: ['EUR', 'USD', 'GBP', 'INR', 'CAD'],
      symbols: {
        first: 'USD',
        second: 'EUR'
      },
      inputValue: {
        first: 1,
        second: 0
      },
      conversionRate: 0,
      firstActive: true
    }
  },
  created() {
    this.getRate();
  },
  methods: {
    async getRate() {
      this.isLoading = true;
      let {first, second} = this.symbols;

      const data = await this.$axios.$get('https://api.fixer.io/latest', {
        params: {
          base: first,
          symbols: second
        }
      })

      this.conversionRate = data.rates[second] || 1.0;
      this.convert();
      this.isLoading = false;
    },
    convert() {
      if(this.firstActive) {
        this.inputValue.second = (this.inputValue.first * this.conversionRate).toFixed(3);
      } else {
        this.inputValue.first = (this.inputValue.second / this.conversionRate).toFixed(3);
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.currencyConvertor {
  font-family: sans-serif;
  position: absolute;
  border: 1px solid rgba(0, 0, 0, 0.5);
  width: 640px;
  height: 200px;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
  margin: auto;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.3);
  overflow: hidden;

  .section {
    position: relative;
    background-color: rgba(0, 0, 0, 0.1);
    height: 92px;
    margin: 5px;
    border-radius: 8px;
  }
}

.currency-symbol {
    position: absolute;
    border-right: 1px solid;
    width: 155px;
    height: 92px;
    background-color: #FFFFFF;
    overflow: hidden;
}

.currency-symbol select {
    position: relative;
    font-size: 40px;
    width: 150px;
    height: 92px;
    display: inline-block;
    border: none;
    outline: none;
}

.currency-value {
    position: absolute;
    left: 156px;
}

.currency-value input {
    font-size: 40px;
    padding: 9px;
    height: 70px;
    width: 450px;
    background-color: transparent;
    border: none;
    outline: none;
    padding-left: 20px;
}

#cover {
    position: absolute;
    background-color: rgba(255, 255, 255, 0.5);
    top: 0px;
    width: 640px;
    height: 200px;
}

#cover:after {
    position: absolute;
    content: 'Please wait...';
    color: #5A5A5A;
    font-size: 20px;
    font-weight: normal;
    top: 90px;
    width: 640px;
    text-align: center;
}
</style>

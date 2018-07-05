<template>
  <div class="header--container">
    <div class="header--content">
      {{ ethAmount }} ETH
    </div>
  </div>
</template>

<script>
import { toNumber } from '@/utils/formatter'
export default {
  name: 'Header',
  data () {
    return {
      myEthAddress: '0x5e2edf59e19e4a6d85c4b44267258380445f87ee',
      ethAmount: 0
    }
  },
  created () {
    this.watchBalance()
  },
  methods: {
    async watchBalance () {
      const balance = await this.$web3.eth.getBalance(this.myEthAddress)
      this.ethAmount = toNumber(balance)
      console.log(balance, this.ethAmount)
    }
  }
}
</script>

<style scoped>
.header--container {
  float: left;
  width: 100%;
  height: 250px;
  background: #151524;
}
.header--content {
  font-weight: bold;
  font-size: 50px;
  color: #fff;
  text-align: center;
  line-height: 250px;
}
</style>

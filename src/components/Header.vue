<template>
  <div class="header--container">
    <div class="header--content">
      {{ ethAmount }} Ether
    </div>
    <div class="header--wallet" @click="goToEtherScan()">
      <svg-filler path="/static/svg/wallet.svg" fill="#fff" width="18px" class="mg-r-5px"/>
      {{ addr }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      addr: '0x736a376e4db6f1f52f746a75280774e91f9a2dfc',
      ethAmount: 0
    }
  },
  created () {
    this.watchBalance()
  },
  methods: {
    async watchBalance () {
      const balance = await this.$web3.eth.getBalance(this.addr)
      this.ethAmount = parseFloat(this.$web3.utils.fromWei(balance)).toFixed(3)
    },
    goToEtherScan () {
      window.location.href = `https://etherscan.io/address/${this.addr}`
    }
  }
}
</script>

<style scoped>
.header--container {
  float: left;
  width: 100%;
  height: 250px;
  background: #0facf3;
  position: relative;
}
.header--content {
  font-weight: bold;
  font-size: 50px;
  color: #fff;
  text-align: center;
  line-height: 250px;
}
.header--wallet {
  position: absolute;
  right: 5px;
  top: 5px;
  width: 200px;
  display: inline-block;
  white-space: nowrap;
  overflow: hidden !important;
  text-overflow: ellipsis;
  color: #fff;
  cursor: pointer;
}
</style>

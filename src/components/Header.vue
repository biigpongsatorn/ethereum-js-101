<template>
  <div class="header--container">
    <div class="header--content">
      {{ ethAmount }} Ether
    </div>
    <a class="header--wallet" :href="`https://etherscan.io/address/${this.addr}`" target="blank">
      <svg-filler path="/static/svg/external-link.svg" fill="#fff" width="18px" class="mg-r-5px"/>
      {{ addr }}
    </a>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Header',
  data () {
    return {
      ethAmount: 0
    }
  },
  created () {
    this.watchBalance()
  },
  watch: {
    addr () {
      this.watchBalance()
    }
  },
  computed: {
    ...mapState({
      addr: state => state.addressSelected
    })
  },
  methods: {
    ...mapActions([
      'setIsLoading'
    ]),
    async watchBalance () {
      this.setIsLoading(1)
      const balance = await this.$web3.eth.getBalance(this.addr)
      this.ethAmount = parseFloat(this.$web3.utils.fromWei(balance)).toFixed(3)
      this.setIsLoading(-1)
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

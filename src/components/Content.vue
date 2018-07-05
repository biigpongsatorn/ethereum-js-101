<template>
  <div class="f-left w-100pct">
    <div class="f-left w-100pct pd-30px">
      <b-tabs v-model="activeTab">
        <b-tab-item label="Balance">
          <div class="content--got-balance">
            {{ gotBalance | amount }} GOT
          </div>
        </b-tab-item>
        <!-- <b-tab-item label="Token Transfers">
          🚧 Work in progress
        </b-tab-item>
        <b-tab-item label="Transactions">
          🚧 Work in progress
        </b-tab-item> -->
      </b-tabs>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'Content',
  filters: {
    amount (value) {
      if (value) {
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
      } else {
        return value
      }
    }
  },
  data () {
    return {
      activeTab: 0,
      contractAddr: '0x423b5f62b328d0d6d44870f4eee316befa0b2df5',
      gotBalance: 0,
      gotContract: null
    }
  },
  created () {
    this.getGotBalance()
  },
  watch: {
    addr () {
      this.getGotBalance()
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
    async getGotBalance () {
      this.setIsLoading(1)
      // Get the address ready for the call, substring removes the '0x', as its not required
      const tknAddress = (this.addr).substring(2)

      // '0x70a08231' is the contract 'balanceOf()' ERC20 token function in hex. A zero buffer is required and then we add the previously defined address with tokens
      const contractData = '0x70a08231000000000000000000000000' + tknAddress

      const result = await this.$web3.eth.call({
        to: this.contractAddr, // Contract address, used call the token balance of the address in question
        data: contractData // Combination of contractData and tknAddress, required to call the balance of an address
      })
      this.gotBalance = parseInt(this.$web3.utils.fromWei(result))
      this.setIsLoading(-1)
    }
  }
}
</script>

<style scoped>
.content--got-balance {
  height: 300px;
  text-align: center;
  line-height: 300px;
  font-size: 70px;
  font-weight: bold;
}
</style>

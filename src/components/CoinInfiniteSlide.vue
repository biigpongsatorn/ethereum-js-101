<template>
  <infinite-slide-bar>
    <div class="columns">
      <div class="column" v-for="coin in coins" :key="coin.key">
        <div class="f-left pd-t-8px mg-r-10px">
          <img :src="'/static/image/crypto/' + coin.key + '.png'">
        </div>
        <div class="f-left">
          <div class="f-w-bold">{{coin.name}}</div>
          <div>
            {{coin.price}}
            <span :class="{ 'cl-success': coin.change > 0, 'cl-danger': coin.change < 0 }">({{coin.change}}%)</span>
          </div>
        </div>
      </div>
    </div>
  </infinite-slide-bar>
</template>

<script>
import InfiniteSlideBar from 'vue-infinite-slide-bar'

export default {
  name: 'CoinInfiniteSlide',
  data () {
    return {
      coins: [
        {
          key: 'btc',
          name: 'Bitcoin',
          price: '$7,704',
          change: 1.29
        },
        {
          key: 'eth',
          name: 'Ethereum',
          price: '$612',
          change: 1.04
        },
        {
          key: 'xrp',
          name: 'Ripple',
          price: '$0.67',
          change: -0.24
        },
        {
          key: 'eos',
          name: 'EOS',
          price: '$13.91',
          change: -0.83
        },
        {
          key: 'ltc',
          name: 'Litecoin',
          price: '$122.31',
          change: 1.07
        }
      ]
    }
  },
  components: {
    InfiniteSlideBar
  }
}
</script>

<template>
  <div id="app">
    <b-loading :is-full-page="true" :active="isLoading > 0"></b-loading>
    <div class="f-left w-20pct h-100vh pd-30px pst-relative app--sidebar-container" v-if="isShowSideBar">
      <div class="f-w-bold mg-bt-20px">Whales list</div>
      <div class="app--whales-item" v-for="(addr, i) in whales" :key="i" @click="selectWhale(addr)" :style="{ color: addrSelected === addr ? '#0facf3' : '#a4a4a4' }">
        <WalletAddress :address="addr"/>
      </div>
      <iframe class="pst-absolute bt-20px"
        src="https://ghbtns.com/github-btn.html?user=biigpongsatorn&repo=go-network-whales&type=star&count=true&size=large"
        frameborder="0"
        scrolling="0"
        width="160px"
        height="30px"/>
    </div>
    <div class="f-left w-80pct" :class="{ 'w-100pct': !isShowSideBar }">
      <div class="f-left w-100pct pst-relative">
        <svg-filler path="/static/svg/menu.svg" fill="#fff" width="24px" class="app--menu-icon" @click="isShowSideBar = !isShowSideBar"/>
        <Header/>
      </div>
      <div class="f-left w-100pct mn-h-300calc">
        <Content/>
      </div>
      <div class="f-left w-100pct">
        <Footer/>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Content from '@/components/Content'
import Footer from '@/components/Footer'
import WalletAddress from '@/components/WalletAddress'
import whales from './whales.js'
import { mapActions, mapState } from 'vuex'

export default {
  name: 'App',
  data () {
    return {
      whales,
      isShowSideBar: true
    }
  },
  computed: {
    ...mapState({
      addrSelected: state => state.addressSelected,
      isLoading: state => state.isLoading
    })
  },
  methods: {
    ...mapActions([
      'setAddressSelected'
    ]),
    selectWhale (addr) {
      this.setAddressSelected(addr)
    }
  },
  components: {
    Header,
    Content,
    Footer,
    WalletAddress
  }
}
</script>

<style scoped>
.app--sidebar-container {
  border-right: 1px solid #e6e6e6;
}
.app--menu-icon {
  position: absolute;
  z-index: 1;
  top: 10px;
  left: 10px;
  cursor: pointer;
}
.app--whales-item {
  padding: 5px;
}
.app--whales-item:hover {
  color: #0facf3;
}
</style>

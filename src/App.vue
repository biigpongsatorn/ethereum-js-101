<template>
  <div id="app">
    <b-loading :is-full-page="true" :active="isLoading > 0"></b-loading>
    <div class="f-left w-20pct h-100vh pd-30px app--sidebar-container" v-if="isShowSideBar">
      <div class="f-w-bold mg-bt-10px">Whales list</div>
      <div class="app--whales-item" v-for="(addr, i) in whales" :key="i" @click="selectWhale(addr)">
        <WalletAddress :address="addr"/>
      </div>
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
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'App',
  data () {
    return {
      whales: [
        '0xb21FD5878D1e1B5Dbe1b702781AD1C2B53CEEa57',
        '0xCA1767d9C960ff4Fb2C7BBA48DB354F7680102D0',
        '0x736a376e4db6f1f52f746a75280774e91f9a2dfc',
        '0x0d32cbf2b1d1458e61975f217afd03087e3340b2',
        '0x5b63863f60dc27a2dd0678644a1a7753fe1e334a',
        '0xe765825804182d16f2dfba8fc216f9abade567cb',
        '0x1fe9c577b9b82a31447267f40664581269e92886'
      ],
      isShowSideBar: true
    }
  },
  computed: {
    ...mapGetters([
      'isLoading'
    ])
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

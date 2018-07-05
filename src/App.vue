<template>
  <div id="app">
    <b-loading :is-full-page="true" :active="isLoading > 0"></b-loading>
    <div class="f-left w-100pct">
      <Header/>
    </div>
    <div class="f-left w-100pct mn-h-300calc">
      <Content/>
    </div>
    <div class="f-left w-100pct">
      <Footer/>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Content from '@/components/Content'
import Footer from '@/components/Footer'
import { mapGetters } from 'vuex'

export default {
  name: 'App',
  computed: {
    ...mapGetters([
      'isLoading'
    ])
  },
  components: {
    Header,
    Content,
    Footer
  }
}
</script>

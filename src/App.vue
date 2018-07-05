<template>
  <div id="app">
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

export default {
  name: 'App',
  components: {
    Header,
    Content,
    Footer
  }
}
</script>

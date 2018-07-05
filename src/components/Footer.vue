<template>
  <div class="h-50px t-al-center footer--container">
    <img src="/static/image/eth.png" width="21px" class="footer--img-eth"> Web3 Version {{ web3.version }}
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.footer--container {
  line-height: 50px;
}
.footer--img-eth {
  vertical-align: middle;
}
</style>

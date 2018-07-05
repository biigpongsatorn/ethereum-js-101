<template>
  <div class="wallet-address--container">
    <svg-filler path="/static/svg/wallet.svg" fill="#4a4a4a" width="18px" class="mg-r-5px"/>
    {{ address }}
  </div>
</template>

<script>
export default {
  name: 'WalletAddress',
  props: {
    address: {
      type: String,
      required: true
    }
  }
}
</script>

<style>
.wallet-address--container {
  width: 200px;
  display: inline-block;
  white-space: nowrap;
  overflow: hidden !important;
  text-overflow: ellipsis;
  cursor: pointer;
}
</style>

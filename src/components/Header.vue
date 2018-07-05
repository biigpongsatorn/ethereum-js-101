<template>
  <div class="header--container">
    <div class="header--content">
      $9,234.32
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
.header--container {
  float: left;
  width: 100%;
  height: 250px;
  background: #151524;
}
.header--content {
  font-weight: bold;
  font-size: 50px;
  color: #fff;
  text-align: center;
  line-height: 250px;
}
</style>

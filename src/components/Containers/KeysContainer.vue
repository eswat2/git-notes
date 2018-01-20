<template>
<div class="container keyContainer">
  <x-keys></x-keys>
</div>
</template>

<script>
import xKeys from '../Keys.vue'

export default {
  components: {
    xKeys
  }
}
</script>

<style scoped>
.keyContainer {
  margin-bottom: 10px;
  text-align: left;
}
</style>

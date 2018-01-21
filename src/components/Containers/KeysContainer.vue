<template>
<div class="container keyContainer">
  <x-keys :keys="keys"></x-keys>
</div>
</template>

<script>
import xKeys from '../Keys.vue'


export default {
  props: [ 'store' ],
  components: {
    xKeys
  },
  data() {
    return {
      keys: [],
    }
  },
  watch: {
    'store.keys': {
      handler( data ) {
        this.keys = data
      },
      deep: true
    }
  }
}
</script>

<style scoped>
.keyContainer {
  margin-bottom: 10px;
  text-align: left;
}
</style>

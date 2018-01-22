<template>
<div class="progress my-bar"
     style={}>
  <div role="progressbar"
       class="progress-bar"
       :style="style"></div>
</div>
</template>

<script>
export default {
  props: [ 'store' ],
  data() {
    return {
      kounter: 0
    }
  },
  computed: {
    style() {
      return {
        width: this.kounter + '%'
      }
    }
  },
  watch: {
    "store.kounter": {
      handler( data ) {
        this.kounter = data
      },
      deep: true
    }
  },
  created() {
    const vm = this
    setTimeout( () => {
      vm.kounter = 100
    }, 1000 )
  }
}
</script>

<style scoped>
.my-bar {
  height: 2px;
  border-radius: 0px;
}
</style>

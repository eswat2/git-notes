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
  data() {
    return {
      value: 60
    }
  },
  computed: {
    style() {
      return {
        width: this.value + '%'
      }
    }
  }
}
</script>

<style scoped>
.my-bar {
  height: 2px;
  border-radius: 0px;
}
</style>

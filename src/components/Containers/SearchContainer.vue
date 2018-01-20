<template>
<nav class="navbar navbar-default my-nav">
  <div class="col-sm-7 col-sm-offset-2 my-wrap">
    <x-search-github></x-search-github>
  </div>
</nav>
</template>

<script>
import xSearchGithub from '../SearchGithub.vue'

export default {
  components: {
    xSearchGithub
  }
}
</script>

<style scoped>
.my-nav {
  margin-bottom: 0;
  border-radius: 0;
}

.my-wrap {
  margin-top: 15px;
}
</style>

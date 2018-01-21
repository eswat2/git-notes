<template>
<div class="container">
  <transition enter-active-class="animated fadeIn"
              leave-active-class="fadeOut">
    <x-danger salute="Error"
              message="user does not exist..."
              v-if="store.error"></x-danger>
  </transition>
</div>
</template>

<script>
import xDanger from '../Alerts/Danger.vue'

export default {
  props: [ 'store' ],
  components: {
    xDanger
  },
  data() {
    return {
      error: false
    }
  },
  watch: {
    'store.error': {
      handler( data ) {
        this.error = data
      },
      deep: true
    }
  }
}
</script>

<style>

</style>

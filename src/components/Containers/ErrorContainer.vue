<template>
<div class="container">
  <x-danger salute="Error"
            message="user does not exist..."
            v-if="error"></x-danger>
</div>
</template>

<script>
import xDanger from '../Alerts/Danger.vue'

export default {
  components: {
    xDanger
  },
  data() {
    return {
      error: false
    }
  }
}
</script>

<style>

</style>

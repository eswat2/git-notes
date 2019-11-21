<template>
  <div class="container">
    <transition enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
      <x-danger salute="Error" message="user does not exist..." v-if="error"></x-danger>
    </transition>
  </div>
</template>

<script>
import xDanger from "../Alerts/Danger.vue"
import eventBus from "../../utils/eventBus"

export default {
  components: {
    xDanger
  },
  data() {
    return {
      error: false
    }
  },
  methods: {
    updateError(data) {
      this.error = data
    }
  },
  created() {
    eventBus.$on("store.error", this.updateError)
    eventBus.$emit("get:error")
  }
}
</script>

<style scoped>
</style>

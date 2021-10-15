<template>
  <div class="progress my-bar" style="{}">
    <div role="progressbar" class="progress-bar progress-bar-info" :style="style"></div>
  </div>
</template>

<script>
import eventBus from "../../utils/eventBus"

export default {
  data() {
    return {
      bus: {},
      offline: true,
    }
  },
  computed: {
    style() {
      return {
        width: (this.offline ? 0 : 100) + "%"
      }
    }
  },
  methods: {
    updateOffline() {
      this.offline = true;
    },
    updateTicker() {
      if (this.offline) {
        this.offline = false;
      }
    },
  },
  created() {
    this.bus = eventBus

    eventBus.$on("tick:toc", this.updateTicker)
    eventBus.$on("tick:offline", this.updateOffline)
  }
}
</script>

<style scoped>
.my-bar {
  height: 2px;
  border-radius: 0px;
}
</style>

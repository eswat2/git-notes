<template>
  <div class="container">
    <x-success salute="Welcome" message="search for a Github user..."></x-success>
    <x-navigator :tags="tags"></x-navigator>
  </div>
</template>

<script>
import xNavigator from "../Navigator.vue"
import xSuccess from "../Alerts/Success.vue"
import eventBus from "../../utils/eventBus"

export default {
  components: {
    xNavigator,
    xSuccess
  },
  data() {
    return {
      tags: []
    }
  },
  methods: {
    updateTags(data) {
      this.tags = data
    }
  },
  created() {
    setTimeout(() => {
      eventBus.$emit("add-new-tag", "eswat2")
    }, 1000)

    eventBus.$on("store.tags", this.updateTags)
    eventBus.$emit("get:tags")
  }
}
</script>

<style scoped>
</style>

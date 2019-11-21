<template>
  <div class="container keyContainer">
    <x-keys :keys="keys"></x-keys>
  </div>
</template>

<script>
import xKeys from "../Keys.vue"
import eventBus from "../../utils/eventBus"

export default {
  components: {
    xKeys
  },
  data() {
    return {
      keys: []
    }
  },
  methods: {
    updateKeys(data) {
      this.keys = data
    }
  },
  created() {
    eventBus.$on("store.keys", this.updateKeys)
    eventBus.$emit("get:keys")
  }
}
</script>

<style scoped>
.keyContainer {
  margin-bottom: 10px;
  text-align: left;
}
</style>

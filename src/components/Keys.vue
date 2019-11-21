<template>
  <div>
    <transition-group enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
      <span
        class="label label-primary my-key"
        :key="tag"
        @click.prevent="keyClick(tag)"
        v-for="tag in keys"
      >{{tag}}</span>
    </transition-group>
  </div>
</template>

<script>
import eventBus from "../utils/eventBus"

export default {
  props: ["keys"],
  methods: {
    keyClick(tag) {
      eventBus.$emit("search-for", tag)
    }
  }
}
</script>

<style scoped>
.my-key {
  margin-right: 2px;
  margin-top: 2px;
  display: inline-block;
  padding: 5px;
  padding-right: 6px;
  padding-left: 6px;
  cursor: pointer;
}
</style>

<template>
  <div class="app">
    <div className="main-container">
      <x-search-container></x-search-container>
      <x-progress-container></x-progress-container>
      <x-keys-container></x-keys-container>
      <x-error-container></x-error-container>
      <x-navigator-container></x-navigator-container>
      <x-profile-container></x-profile-container>
    </div>
  </div>
</template>

<script>
import actions from "./utils/actions"
import eventBus from "./utils/eventBus"
import fireNotes from "./utils/fireNotes"
import xErrorContainer from "./components/Containers/ErrorContainer.vue"
import xKeysContainer from "./components/Containers/KeysContainer.vue"
import xNavigatorContainer from "./components/Containers/NavigatorContainer.vue"
import xProfileContainer from "./components/Containers/ProfileContainer.vue"
import xProgressContainer from "./components/Containers/ProgressContainer.vue"
import xSearchContainer from "./components/Containers/SearchContainer.vue"

export default {
  components: {
    xErrorContainer,
    xKeysContainer,
    xNavigatorContainer,
    xProfileContainer,
    xProgressContainer,
    xSearchContainer
  },
  data() {
    return {
      actions: [],
      fireNotes: [],
      eventBus: null
    }
  },
  created() {
    this.actions = actions
    this.fireNotes = fireNotes
    this.eventBus = eventBus
  }
}
</script>

<style scoped>
.app {
  font-family: "Roboto", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

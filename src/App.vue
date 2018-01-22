<template>
<div class="app">
  <div className="main-container">
    <x-search-container :store="store"></x-search-container>
    <x-progress-container :store="store"></x-progress-container>
    <x-keys-container :store="store"></x-keys-container>
    <x-error-container :store="store"></x-error-container>
    <x-navigator-container :store="store"></x-navigator-container>
    <x-profile-container :store="store"></x-profile-container>
  </div>
</div>
</template>

<script>
import appStore from './utils/store'
import xErrorContainer from './components/Containers/ErrorContainer.vue'
import xKeysContainer from './components/Containers/KeysContainer.vue'
import xNavigatorContainer from './components/Containers/NavigatorContainer.vue'
import xProfileContainer from './components/Containers/ProfileContainer.vue'
import xProgressContainer from './components/Containers/ProgressContainer.vue'
import xSearchContainer from './components/Containers/SearchContainer.vue'

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
      store: null
    }
  },
  created() {
    this.store = appStore
  }
}
</script>

<style scoped>
.app {
  font-family: 'Roboto', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>

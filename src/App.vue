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
      msg: 'Welcome to Your Vue.js App'
    }
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

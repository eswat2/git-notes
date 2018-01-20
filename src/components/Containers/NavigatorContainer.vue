<template>
<div class="container">
  <x-success salute="Welcome"
             message="search for a Github user...">
  </x-success>
  <x-navigator></x-navigator>
</div>
</template>

<script>
import xNavigator from '../Navigator.vue'
import xSuccess from '../Alerts/Success.vue'

export default {
  components: {
    xNavigator,
    xSuccess
  }
}
</script>

<style>

</style>

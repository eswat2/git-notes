<template>
<div class="container">
  <x-success salute="Welcome"
             message="search for a Github user...">
  </x-success>
  <x-navigator :tags="tags"></x-navigator>
</div>
</template>

<script>
import eventBus from '../../utils/eventBus'
import xNavigator from '../Navigator.vue'
import xSuccess from '../Alerts/Success.vue'

export default {
  props: [ 'store' ],
  components: {
    xNavigator,
    xSuccess
  },
  data() {
    return {
      tags: []
    }
  },
  watch: {
    'store.tags': {
      handler( data ) {
        this.tags = data
      },
      deep: true
    }
  },
  created() {
    setTimeout( () => {
      eventBus.$emit( 'add-new-tag', 'eswat2' )
    }, 1000 )
  }
}
</script>

<style scoped>

</style>

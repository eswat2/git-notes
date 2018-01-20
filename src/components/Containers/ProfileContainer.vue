<template>
<div className="container">
  <x-profile v-if="hasBio"></x-profile>
</div>
</template>

<script>
import xProfile from '../Profile.vue'
import appStore from '../../utils/store'

export default {
  data() {
    return {
      bio: {},
      store: null
    }
  },
  components: {
    xProfile
  },
  computed: {
    hasBio() {
      return Object.keys( this.bio ).length > 0
    }
  },
  watch: {
    'store.bio': {
      handler( data ) {
        this.bio = data
      },
      deep: true
    }
  },
  created() {
    this.store = appStore
  }
}
</script>

<style>

</style>

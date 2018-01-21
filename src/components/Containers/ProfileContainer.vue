<template>
<div class="container">
  <transition enter-active-class="animated fadeIn"
              leave-active-class="animated fadeOutDownBig">
    <x-profile :bio="bio"
               :repos="repos"
               :notes="notes"
               v-if="hasBio"></x-profile>
  </transition>
</div>
</template>

<script>
import xProfile from '../Profile.vue'
import appStore from '../../utils/store'

export default {
  props: [ 'store' ],
  data() {
    return {
      bio: {},
      repos: [],
      notes: []
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
    },
    'store.repos': {
      handler( data ) {
        this.repos = data
      },
      deep: true
    },
    'store.notes': {
      handler( data ) {
        this.notes = data
      },
      deep: true
    }
  }
}
</script>

<style>

</style>

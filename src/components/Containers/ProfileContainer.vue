<template>
<div class="container">
  <transition enter-active-class="animated fadeIn"
              leave-active-class="animated fadeOutDownBig"
              mode="out-in">
    <x-profile :bio="bio"
               :repos="repos"
               :notes="notes"
               :user="user"
               v-if="hasBio"></x-profile>
  </transition>
</div>
</template>

<script>
import xProfile from '../Profile.vue'

export default {
  props: [ 'store' ],
  data() {
    return {
      bio: {},
      repos: [],
      notes: [],
      user: ''
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
    },
    'store.bio.name': {
      handler( data ) {
        this.user = data
      },
      deep: true
    }
  }
}
</script>

<style scoped>

</style>

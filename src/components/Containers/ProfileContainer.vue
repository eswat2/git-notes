<template>
<div class="container">
  <transition enter-active-class="animated fadeIn"
              leave-active-class="animated fadeOutDownBig"
              mode="out-in">
    <x-profile :bio="bio"
               :repos="repos"
               :notes="notes"
               :user="user"
               :key="keyFor"
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
      user: '',
      kount: 0
    }
  },
  components: {
    xProfile
  },
  computed: {
    hasBio() {
      return Object.keys( this.bio ).length > 0
    },
    keyFor() {
      return this.user + this.kount
    }
  },
  watch: {
    'store.bio': {
      handler( data ) {
        this.kount += 1
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
    'store.username': {
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

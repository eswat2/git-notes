<template>
<div class="container">
  <transition enter-active-class="animated fadeInUpBig"
              leave-active-class="animated fadeOutDownBig"
              mode="out-in">
    <x-profile :bio="bio"
               :repos="repos"
               :notes="notes"
               :user="user"
               :key="keyFor"
               v-if="load"></x-profile>
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
      kount: 0,
      load: false
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
    hasBio( flag ) {
      // NOTE:  add a small dwell so that the hide-show animation works...
      const vm = this
      setTimeout( () => {
        vm.load = flag
      }, 50 )
    },
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

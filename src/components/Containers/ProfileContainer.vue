<template>
  <div class="container">
    <transition
      enter-active-class="animated fadeInUpBig"
      leave-active-class="animated fadeOutDownBig"
      mode="out-in"
    >
      <x-profile :bio="bio" :repos="repos" :notes="notes" :user="user" :key="keyFor" v-if="load"></x-profile>
    </transition>
  </div>
</template>

<script>
import xProfile from "../Profile.vue"
import eventBus from "../../utils/eventBus"

export default {
  data() {
    return {
      bio: {},
      repos: [],
      notes: [],
      user: "",
      kount: 0,
      load: false
    }
  },
  components: {
    xProfile
  },
  computed: {
    hasBio() {
      return Object.keys(this.bio).length > 0
    },
    keyFor() {
      return this.user + this.kount
    }
  },
  methods: {
    updateBio(data) {
      this.kount += 1
      this.bio = data
    },
    updateKeys(data) {
      if (!data.includes(this.user)) {
        this.notes = []
      }
    },
    updateRepos(data) {
      this.repos = data
    },
    updateNotes(data) {
      this.notes = data
    },
    updateUser(data) {
      this.user = data
    }
  },
  watch: {
    hasBio(flag) {
      // NOTE:  add a small dwell so that the hide-show animation works...
      const vm = this
      setTimeout(() => {
        vm.load = flag
      }, 50)
    }
  },
  created() {
    eventBus.$on("store.bio", this.updateBio)
    eventBus.$on("store.keys", this.updateKeys)
    eventBus.$on("store.repos", this.updateRepos)
    eventBus.$on("store.notes", this.updateNotes)
    eventBus.$on("store.username", this.updateUser)

    eventBus.$emit("get:bio")
    eventBus.$emit("get:repos")
    eventBus.$emit("get:notes")
    eventBus.$emit("get:username")
  }
}
</script>

<style scoped>
</style>

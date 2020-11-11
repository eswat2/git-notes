<template>
  <div class="row app-profile">
    <div class="col-md-4">
      <x-user-profile :bio="bio"></x-user-profile>
    </div>
    <div class="col-md-4">
      <x-repos :bio="bio" :repos="repos"></x-repos>
    </div>
    <div class="col-md-4">
      <x-notes :notes="notes" :user="user"></x-notes>
    </div>
  </div>
</template>

<script>
import xUserProfile from "./Github/UserProfile.vue"
import xRepos from "./Github/Repos.vue"
import xNotes from "./Notes/Notes.vue"

export default {
  props: ["bio", "repos", "notes", "user"],
  components: {
    xUserProfile,
    xRepos,
    xNotes
  }
}
</script>

<style scoped>
.app-profile {
  text-align: left;
}
</style>

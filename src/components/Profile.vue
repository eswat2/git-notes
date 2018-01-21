<template>
<div class="row">
  <div class="col-md-4">
    <x-user-profile :bio="bio"></x-user-profile>
  </div>
  <div class="col-md-4">
    <x-repos :repos="repos"></x-repos>
  </div>
  <div class="col-md-4">
    <x-notes :notes="notes"></x-notes>
  </div>
</div>
</template>

<script>
import xUserProfile from './Github/UserProfile.vue'
import xRepos from './Github/Repos.vue'
import xNotes from './Notes/Notes.vue'

export default {
  props: [ 'bio', 'repos', 'notes' ],
  components: {
    xUserProfile,
    xRepos,
    xNotes
  }
}
</script>

<style>

</style>

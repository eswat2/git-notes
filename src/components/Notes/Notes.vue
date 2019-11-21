<template>
  <div>
    <h3>Notes for {{ user }}</h3>
    <x-add-note :user="user"></x-add-note>
    <x-notes-list :notes="notes"></x-notes-list>
  </div>
</template>

<script>
import xAddNote from "./AddNote.vue"
import xNotesList from "./NotesList.vue"

export default {
  props: ["notes", "user"],
  components: {
    xAddNote,
    xNotesList
  }
}
</script>

<style scoped>
</style>

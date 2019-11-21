<template>
  <ul class="list-group">
    <li class="list-group-item" :key="indx" v-for="(note, indx) in notes">{{ note }}</li>
  </ul>
</template>

<script>
export default {
  props: ["notes"]
}
</script>

<style scoped>
</style>

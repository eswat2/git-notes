<template>
<div>
  <h3>User Repos</h3>
  <ul class="list-group">
    <li class="list-group-item"
        :key="indx"
        v-for="(repo, indx) in repos">
      <h4 v-if="repo.html_url"><a :href="repo.html_url">{{repo.name}}</a></h4>
      <h4 v-else>{{ repo.name }}></h4>
      <p v-if="repo.description">{{repo.description}}</p>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  props: [ 'repos' ]
}
</script>

<style scoped>

</style>

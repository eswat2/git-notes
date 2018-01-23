<template>
<div>
  <h3>User Repos</h3>
  <ul class="list-group">
    <li class="list-group-item"
        :key="indx"
        v-for="(repo, indx) in repos">
      <h4 v-if="repo.html_url">
        <a :href="repo.html_url" target="_blank" >{{repo.name}}</a>
        <a :href="repo.homepage" target="_blank" v-if="hasValue(repo.homepage)">
          <i class="fa fa-home my-site"></i>
        </a>
      </h4>
      <h4 v-else>{{ repo.name }}></h4>
      <p v-if="repo.description"
         class="my-grey">{{repo.description}}</p>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  props: [ 'repos' ],
  methods: {
    hasValue( val ) {
      return ( val !== null ) && ( val !== '' )
    }
  }
}
</script>

<style scoped>
.my-grey {
  color: grey;
}

.my-site {
  margin-left: 5px;
  cursor: pointer;
}

.my-site:hover {
  color: red;
}
</style>

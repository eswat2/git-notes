<template>
  <div class="app-profile">
    <h3>User Profile</h3>
    <li class="list-group-item" v-if="chk4('avatar_url')">
      <img alt :src="bio.avatar_url" class="img-rounded img-responsive" />
    </li>
    <li class="list-group-item" v-if="chk4('name')">Name: {{bio.name}}</li>
    <li class="list-group-item" v-if="chk4('login')">Username: {{bio.login}}</li>
    <li class="list-group-item" v-if="chk4('email')">Email: {{bio.email}}</li>
    <li class="list-group-item" v-if="chk4('location')">Location: {{bio.location}}</li>
    <li class="list-group-item" v-if="chk4('company')">Company: {{bio.company}}</li>
    <li class="list-group-item" v-if="chk4num('followers')">Followers: {{bio.followers}}</li>
    <li class="list-group-item" v-if="chk4num('following')">Following: {{bio.following}}</li>
    <li class="list-group-item" v-if="chk4num('public_repos')">Public Repos: {{bio.public_repos}}</li>
    <li class="list-group-item" v-if="chk4('blog')">
      Blog:
      <a :href="bio.blog" target="_blank">{{bio.blog}}</a>
    </li>
  </div>
</template>

<script>
export default {
  props: ["bio"],
  methods: {
    chk4num(key) {
      return this.bio[key] !== null && this.bio[key] > 0
    },
    chk4(key) {
      return this.bio[key] && this.bio[key] != null
    }
  }
}
</script>

<style scoped>
.app-profile {
  text-align: left;
}
</style>

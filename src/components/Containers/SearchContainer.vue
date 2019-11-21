<template>
  <nav class="navbar navbar-default my-nav">
    <div class="col-sm-7 col-sm-offset-2 my-wrap">
      <x-search-github :username="user"></x-search-github>
    </div>
  </nav>
</template>

<script>
import xSearchGithub from "../SearchGithub.vue"
import eventBus from "../../utils/eventBus"

export default {
  components: {
    xSearchGithub
  },
  data() {
    return {
      user: ""
    }
  },
  methods: {
    updateUser(data) {
      this.user = data
    }
  },
  created() {
    eventBus.$on("store.username", this.updateUser)
    eventBus.$emit("get:username")
  }
}
</script>

<style scoped>
.my-nav {
  margin-bottom: 0;
  border-radius: 0;
}

.my-wrap {
  margin-top: 15px;
}
</style>

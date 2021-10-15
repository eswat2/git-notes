<template>
  <div class="col-sm-12">
    <form>
      <div class="form-group col-sm-12">
        <a href="https://github.com/eswat2/git-notes" target="_blank">
          <i class="fa fa-github-square my-repo"></i>
        </a>
        <div class="input-group">
          <div class="input-group-addon">
            <i class="fa fa-search" />
          </div>
          <input
            type="text"
            class="form-control lower"
            placeholder="Profile..."
            ref="input"
            v-model.trim="user"
          />
          <span class="input-group-btn">
            <button
              class="btn btn-primary"
              :disabled="user === ''"
              @click.prevent="doSubmit"
            >Search Github</button>
          </span>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import eventBus from "../utils/eventBus"

export default {
  props: ["username"],
  data() {
    return {
      user: ""
    }
  },
  methods: {
    doSubmit() {
      if (this.user !== "") {
        // console.log( '-- doSubmit: ', this.user )
        eventBus.$emit("search-for", this.user)
      }
    }
  },
  watch: {
    username(name) {
      // console.log( '-- watch: ', name, name.length )
      // NOTE:  we do this to force the update in the input field...
      this.$refs.input.value = name
      this.user = name
    }
  }
}
</script>

<style scoped>
.lower {
  text-transform: lowercase;
}

.my-repo {
  float: right;
  font-size: 40px;
  margin-top: -3px;
  margin-left: 10px;
  color: grey;
  cursor: pointer;
}

.my-repo:hover {
  color: red;
}
</style>

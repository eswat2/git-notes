import Vue from 'vue'
import helpers from './helpers'

const appStore = new Vue({
  data: {
    error: false,
    username: null,
    bio: {},
    repos: [],
    notes: [],
    tags: [],
    kounter: 100,
    ktype: 'warning',
    keys: [],
    popState: null
  },
  watch: {
    username: function(user) {
      const vm = this
      if (user !== null | user !== '') {
        helpers.getGithubInfo(user).then((data) => {
          vm.repos = data.repos
          vm.bio = data.bio
          vm.notes = data.notes.values
          vm.keys = data.keys
          vm.error = data.error
        })
      }
    }
  }
})

export default appStore

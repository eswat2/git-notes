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
    username: function(name) {
      const vm = this
      const user = name ? name.trim() : null
      const kount = user ? user.length : 0
      console.log('-- user: ', user, kount)
      if (user !== null && user !== '') {
        vm.repos = [],
        vm.bio = {}
        vm.notes = []
        vm.error = false
        helpers.getGithubInfo(user).then((data) => {
          vm.repos = data.repos
          vm.bio = data.bio
          vm.error = data.error
        })
        helpers.getGithubNotes(user).then((data) => {
          vm.keys = data.keys
          vm.notes = data.notes.values
        })
      }
    }
  }
})

export default appStore

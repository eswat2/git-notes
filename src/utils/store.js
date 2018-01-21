import Vue from 'vue'
import helpers from './helpers'
import eventBus from './eventBus'

const appStore = new Vue({
  data: {
    bio: {},
    repos: [],
    notes: [],
    keys: [],
    tags: [],
    error: false,
    kounter: 100,
    ktype: 'warning',
    username: null,
    popState: null
  },
  methods: {
    addNewNote( data ) {
      console.log( '-- addNewNote: ', data )
    },
    searchFor( name ) {
      // NOTE:  we are now going to process the search-for request...
      const vm = this
      const user = name ? name.trim() : ''
      const kount = user ? user.length : 0
      console.log('-- searchFor: ', user, kount)
      this.username = user
      if (user !== '') {
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
  },
  created() {
    eventBus.$on( 'search-for', this.searchFor )
    eventBus.$on( 'add-new-note', this.addNewNote )
  }
})

export default appStore

import Vue from 'vue'

const appStore = new Vue({
  data: {
    bio: {},
    repos: [],
    notes: [],
    keys: [],
    tags: [],
    error: false,
    kounter: 0,
    ktype: 'warning',
    username: null,
    popState: null
  }
})

export default appStore

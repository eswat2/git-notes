import Vue from 'vue'
import App from './App.vue'
import actions from './utils/actions'

const handlePopState = (event) => {
  const username = (event.state && event.state.username ? event.state.username : null)
  console.log(`-- popstate:  ${username}`)

  actions.setPopState({ username })
}

window.addEventListener( 'popstate', handlePopState )

new Vue({
  el: '#app',
  render: h => h(App)
})

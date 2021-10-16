import { createApp } from "vue"
import App from "./App.vue"
import eventBus from "./utils/eventBus"

const handleHashChange = (event) => {
  const url = event.newURL
  const list = url.split("#")
  const username = list && list.length === 2 ? list[1] : undefined
  if (username) {
    eventBus.$emit("set-pop-state", {
      username,
    })
  }
}

const handlePopState = (event) => {
  const username =
    event.state && event.state.username ? event.state.username : null
  if (username) {
    console.log(`-- popstate:  ${username}`)

    eventBus.$emit("set-pop-state", {
      username,
    })
  }
}

window.addEventListener("hashchange", handleHashChange, false)
window.addEventListener("popstate", handlePopState)

createApp(App).mount("#app")

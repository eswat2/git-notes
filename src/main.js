import { createApp } from "vue"
import App from "./App.vue"
import eventBus from "./utils/eventBus"

const handlePopState = (event) => {
  const username =
    event.state && event.state.username ? event.state.username : null
  console.log(`-- popstate:  ${username}`)

  eventBus.$emit("set-pop-state", {
    username,
  })
}

window.addEventListener("popstate", handlePopState)

createApp(App).mount("#app")

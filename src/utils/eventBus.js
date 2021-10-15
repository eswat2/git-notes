// eventBus.js
import emitter from "tiny-emitter/instance"

const eventBus = {
  data: {
    what: "the EventBus for this app...",
    kounter: 0,
  },
  $on: (...args) => emitter.on(...args),
  $once: (...args) => emitter.once(...args),
  $off: (...args) => emitter.off(...args),
  $emit: (...args) => emitter.emit(...args),
}

export default eventBus

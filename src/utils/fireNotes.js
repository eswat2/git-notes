import eventBus from "./eventBus"
import { ping } from "./actions"

const WSS_URI = "wss://fire-notes.herokuapp.com"
let wss = null

const getData = (id) => {
  console.log("-- wss: GET ", id)
  wss.send(
    JSON.stringify({
      type: "GET",
      id,
    })
  )
}

const getKeys = () => {
  console.log("-- wss: KEYS")
  wss.send(
    JSON.stringify({
      type: "KEYS",
    })
  )
}

const updateData = (id, value) => {
  console.log("-- wss: POST")
  wss.send(
    JSON.stringify({
      type: "POST",
      id,
      value,
    })
  )
}

const onOpen = () => {
  // (evt)
  console.log("-- wss: Open")
  eventBus.$emit("init-store") // actions.initStore()
  eventBus.$emit("start-klock") // actions.startKlock()
  getKeys()
}

const onClose = () => {
  // (evt)
  console.log("-- wss: Close")
  eventBus.$emit("offline") // actions.offline()
}

const onMessage = (evt) => {
  if (evt.data === "ping") {
    console.log(evt.data)
    ping()
  } else {
    console.log("-- wss: " + evt.data)
    const data = JSON.parse(evt.data)
    console.log(data)
    eventBus.$emit("new-data", data) // actions.newData(data)
  }
}

const onError = () => {
  // (evt)
  console.log("-- wss: Error")
}

const initWebSocket = () => {
  wss = new WebSocket(WSS_URI)

  wss.onopen = (evt) => {
    onOpen(evt)
  }
  wss.onclose = (evt) => {
    onClose(evt)
  }
  wss.onmessage = (evt) => {
    onMessage(evt)
  }
  wss.onerror = (evt) => {
    onError(evt)
  }
}

initWebSocket()

const fireNotes = {
  get: getData,
  keys: getKeys,
  update: updateData,
}

const keys = Object.keys(fireNotes)

keys.forEach((key) => {
  eventBus.$on("fire-notes:" + key, fireNotes[key])
})

const events = {
  api: keys.map((key) => {
    return "fire-notes:" + key
  }),
}

export default events

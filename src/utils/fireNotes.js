import actions from './actions'

const WSS_URI = 'wss://fire-notes.herokuapp.com'
let wss = null

const getData = (id) => {
  wss.send(JSON.stringify({ type: 'GET', id }))
}

const getKeys = () => {
  wss.send(JSON.stringify({ type: 'KEYS' }))
}

const updateData = (id, value) => {
  wss.send(JSON.stringify({ type: 'POST', id, value }))
}

const onOpen = () => {
  // (evt)
  console.log('-- wss: Open')
  actions.initStore()
  actions.startKlock()
  getKeys()
}

const onClose = () => {
  // (evt)
  console.log('-- wss: Close')
  actions.offline()
}

const onMessage = (evt) => {
  if (evt.data === 'ping') {
    // console.log(evt.data);
    actions.ping()
  } else {
    console.log('-- wss: ' + evt.data)
    const data = JSON.parse(evt.data)
    // console.log(data);
    actions.newData(data)
  }
}

const onError = () => {
  // (evt)
  console.log('-- wss: Error')
}

const initWebSocket = () => {
  wss = new WebSocket(WSS_URI)

  wss.onopen    = (evt) => { onOpen(evt)    }
  wss.onclose   = (evt) => { onClose(evt)   }
  wss.onmessage = (evt) => { onMessage(evt) }
  wss.onerror   = (evt) => { onError(evt)   }
}

initWebSocket()

const fireNotes = {
  get: getData,
  keys: getKeys,
  update: updateData
}

export default fireNotes

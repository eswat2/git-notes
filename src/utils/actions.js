import eventBus from './eventBus'
import helpers from './helpers'

const store = {
  bio: {},
  repos: [],
  notes: [],
  keys: [],
  tags: [],
  error: false,
  ktype: 'warning',
  username: '',
  popState: null
}

const USER_KEY   = 'AppStore.username'
const truncPath = (str, pattern) => {
  return (str.indexOf(pattern) !== -1) ? str.slice(str.indexOf(pattern) + pattern.length) : null
}

const _updateStore = (key, value) => {
  store[key] = value
  const name = 'store.' + key
  eventBus.$emit(name, value)
}

const updateUser = (username) => {
  const user = username.toLowerCase()
  _updateStore( 'username', user )
}

const addNote = (data) => {
  // update firebase with the new notes
  eventBus.$emit( 'fire-notes:update', data.user, data.note )
}

const addTag = (data) => {
  if (!store.tags.includes(data)) {
    const list = [ ...store.tags, data ].sort()
    _updateStore( 'tags', list )
  }
}

const getWho = (user, parm) => {
  if (!user) return null
  return (parm && parm !== user ? parm : user)
}

const initStore = () => {
  const user = localStorage.getItem(USER_KEY)
  const parm = truncPath(location.pathname, '/profile/')
  const who  = getWho( user, parm )
  console.log(`-- initStore:  ${who}`)
  // console.log(location);
  // console.log(parm);
  _updateStore( 'username', (who ? who.toLowerCase() : null))

  eventBus.kounter = 0
  _updateStore( 'ktype', 'info' )

  if (store.username !== null) {
    _fetchGithub(store.username)
    _fetchNotes(store.username)
  }
}

let ticker = 0
let ticks  = 0
let klock  = null
//
// NOTE:  export ping to minimize the events thrown...
//
//
export const ping = () => {
  const kount = eventBus.kounter
  if (ticker === 5) {
    ticker = 0
    eventBus.kounter = (kount === 100) ? 0 : kount + 1
  } else {
    ticker++
  }
  ticks++
}

const offline = () => {
  eventBus.kounter = 100
  _updateStore( 'ktype', 'danger' )
}

const newData = (data) => {
  if (data.type === 'KEYS') {
    _updateStore( 'keys', data.keys )
  }
  if (data.type === 'DATA') {
    if (data.id === store.username) {
      _updateStore( 'notes', data.values )
    }
  }
}

let lastKount = 0

const _verifyWSS = () => {
  // console.log('-- verifyWSS:  ' + ticks + ', ' + last_kount);
  if (ticks > 0 && ticks !== lastKount) {
    lastKount = ticks
  } else {
    clearInterval(klock)
    offline()
  }
}

const startKlock = () => {
  klock = setInterval(() => {
    _verifyWSS()
  }, 10000)
}

const _saveUser = (username) => {
  if (username !== null) {
    console.log(`-- saveUser:  ${username}`)
    localStorage.setItem(USER_KEY, username)
  }
}

const _pushState = (username) => {
  if (store.popState === null) {
    history.pushState({ username }, username, `/profile/${username}`)
  } else {
    setPopState(null)
  }
}

const _fetchNotes = (username) => {
  console.log(`-- fetchNotes:  ${username}`)
  _updateStore( 'notes', [] )
  if (username) {
    eventBus.$emit('fire-notes:get', username)
  }
}

const newUserInfo = (username, data) => {
  _updateStore( 'bio', data.bio )
  _updateStore( 'repos', data.repos )
  _updateStore( 'error', data.error )

  if (!store.error) {
    _saveUser(username)
    _pushState(username)

    addTag(username)
  }
}

const _fetchGithub = (username) => {
  console.log(`-- fetchGithub:  ${username}`)
  _updateStore( 'bio', {} )
  _updateStore( 'repos', [] )
  if (username) {
    helpers.getGithubInfo(username).then((data) => { newUserInfo(username, data) })
  } else {
    setPopState(null)
  }
}

const _popHandler = (pop) => {
  if (pop) {
    updateUser(pop.username)
  }
}

const setPopState = (data) => {
  _updateStore('popState', data )
  _popHandler(data)
}

const searchFor = (user) => {
  _updateStore( 'username', user )
  _fetchGithub( user )
  _fetchNotes( user )
}

const actions = {
  'init-store': initStore,
  'start-klock': startKlock,
  'offline': offline,
  'search-for': searchFor,
  'add-new-note': addNote,
  'add-new-tag': addTag,
  'new-data': newData,
  'set-pop-state': setPopState
}

const keys = Object.keys( actions )
// NOTE:  we define listeners for all of the exposed apis...
keys.forEach((key) => {
  eventBus.$on( key, actions[key] )
})

const tags = Object.keys( store )
// NOTE:  we setup get listeners for all the tags in the store...
tags.forEach((tag) => {
  eventBus.$on( 'get:' + tag, function() {
    eventBus.$emit('store.' + tag, store[tag])
  })
})

const events = {
  api: keys.map((key) => { return key }),
  data: tags.map((tag) => { return 'store.' + tag }),
  get: tags.map((tag) => { return 'get:' + tag })
}

export default events

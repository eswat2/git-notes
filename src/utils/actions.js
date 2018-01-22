import eventBus from './eventBus'
import fireNotes from './fireNotes'
import helpers from './helpers'
import store from './store'

const USER_KEY   = 'AppStore.username'
const truncPath = (str, pattern) => {
  return (str.indexOf(pattern) !== -1) ? str.slice(str.indexOf(pattern) + pattern.length) : null
}

const updateUser = (username) => {
  const user = username.toLowerCase()
  console.log(`-- updateUser:  ${user}`)
  store.username = user
}

const addNote = (data) => {
  // update firebase with the new notes
  fireNotes.update(data.user, data.note)
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
  store.username = (who ? who.toLowerCase() : null)

  store.kounter = 0
  store.ktype   = 'info'

  if (store.username !== null) {
    _fetchGithub(store.username)
    _fetchNotes(store.username)
  }
}

let ticker = 0
let ticks  = 0
let klock  = null

const ping = () => {
  const kount = store.kounter
  if (ticker === 5) {
    ticker = 0
    store.kounter = (kount === 100) ? 0 : kount + 1
  } else {
    ticker++
  }
  ticks++
}

const offline = () => {
  store.kounter = 100
  store.ktype   = 'danger'
}

const newData = (data) => {
  if (data.type === 'KEYS') {
    store.keys = data.keys
  }
  if (data.type === 'DATA') {
    if (data.id === store.username) {
      store.notes = data.values
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
  // NOTE:  this is not an action since it doesn't manipulate the store...
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
  store.notes = []
  if (username) {
    fireNotes.get(username)
  }
}

const newUserInfo = (username, data) => {
  store.bio   = data.bio
  store.repos = data.repos
  store.error = data.error

  if (!store.error) {
    _saveUser(username)
    _pushState(username)

    if (!store.tags.includes(username)) {
      const list = [ ...store.tags, username ].sort()
      store.tags = list
    }
  }
}

const _fetchGithub = (username) => {
  console.log(`-- fetchGithub:  ${username}`)
  store.bio   = {}
  store.repos = []
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
  store.popState = data
  _popHandler(data)
}

eventBus.$on('search-for', function(user) {
  store.username = user
  _fetchGithub(user)
  _fetchNotes(user)
})

eventBus.$on('add-new-note', function(data) {
  addNote(data)
})

const actions = {
  addNote,
  initStore,
  newData,
  newUserInfo,
  offline,
  ping,
  setPopState,
  startKlock,
  updateUser
}

export default actions

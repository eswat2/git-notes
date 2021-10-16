import eventBus from "./eventBus"
import helpers from "./helpers"

const store = {
  bio: {},
  repos: [],
  notes: [],
  keys: [],
  tags: [],
  error: false,
  username: "",
  popState: null,
}

const USER_KEY = "AppStore.username"
const stripHash = (str) => {
  const pattern = "#"
  return str.indexOf(pattern) !== -1
    ? str.slice(str.indexOf(pattern) + pattern.length)
    : null
}

const _updateStore = (key, value) => {
  store[key] = value
  const name = "store." + key
  eventBus.$emit(name, value)
}

const _updateUser = (username) => {
  const user = username.toLowerCase()
  _updateStore("username", user)
}

const addNote = (data) => {
  // update firebase with the new notes
  eventBus.$emit("fire-notes:update", data.user, data.note)
}

const addTag = (data) => {
  if (!store.tags.includes(data)) {
    const list = [...store.tags, data].sort()
    _updateStore("tags", list)
  }
}

const getWho = (user, parm) => {
  if (!user) return null
  return parm && parm !== user ? parm : user
}

const initStore = () => {
  const user = localStorage.getItem(USER_KEY)
  const parm = stripHash(location.hash)
  const who = getWho(user, parm)
  console.log(`-- initStore:  ${who}`)
  // console.log(location);
  // console.log(parm);
  _updateStore("username", who ? who.toLowerCase() : null)

  if (store.username !== null) {
    _fetchGithub(store.username)
    _fetchNotes(store.username)
  }
}

let ticks = 0
let klock = null
//
// NOTE:  export ping to minimize the events thrown...
//
//
export const ping = () => {
  if (ticks % 5 === 0) {
    eventBus.$emit("tick:toc")
  }
  ticks++
}

const offline = () => {
  eventBus.$emit("tick:offline")
}

const newData = (data) => {
  if (data.type === "KEYS") {
    _updateStore("keys", data.keys)
  }
  if (data.type === "DATA") {
    if (data.id === store.username) {
      _updateStore("notes", data.values)
    }
  }
}

let lastKount = 0

const _verifyWSS = () => {
  // console.log("-- verifyWSS:  " + ticks + ", " + lastKount)
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

const _pushState = (username) => {
  if (store.popState === null) {
    history.pushState(
      {
        username,
      },
      username,
      `#${username}`
    )
  } else {
    setPopState(null)
  }
}

const _saveUser = (username) => {
  if (username !== null) {
    console.log(`-- saveUser:  ${username}`)
    localStorage.setItem(USER_KEY, username)
  }
}

const _fetchNotes = (username) => {
  console.log(`-- fetchNotes:  ${username}`)
  _updateStore("notes", [])
  if (username) {
    eventBus.$emit("fire-notes:get", username)
  }
}

const newUserInfo = (username, data) => {
  _updateStore("bio", data.bio)
  _updateStore("repos", data.repos)
  _updateStore("error", data.error)

  if (!store.error) {
    _saveUser(username)
    _pushState(username)

    addTag(username)
  }
}

const _fetchGithub = (username) => {
  console.log(`-- fetchGithub:  ${username}`)
  _updateStore("bio", {})
  _updateStore("repos", [])
  if (username) {
    helpers.getGithubInfo(username).then((data) => {
      newUserInfo(username, data)
    })
  } else {
    setPopState(null)
  }
}

const searchFor = (user) => {
  _updateUser(user)
  _fetchGithub(user)
  _fetchNotes(user)
}

const _popHandler = (pop) => {
  if (pop) {
    searchFor(pop.username)
  }
}

const setPopState = (data) => {
  console.log("-- setPopState: ", data)
  _updateStore("popState", data)
  _popHandler(data)
}

const actions = {
  "init-store": initStore,
  "start-klock": startKlock,
  offline: offline,
  "search-for": searchFor,
  "add-new-note": addNote,
  "add-new-tag": addTag,
  "new-data": newData,
  "set-pop-state": setPopState,
}

const keys = Object.keys(actions)
// NOTE:  we define listeners for all of the exposed apis...
keys.forEach((key) => {
  eventBus.$on(key, actions[key])
})

const tags = Object.keys(store)
// NOTE:  we setup get listeners for all the tags in the store...
tags.forEach((tag) => {
  eventBus.$on("get:" + tag, function () {
    eventBus.$emit("store." + tag, store[tag])
  })
})

const events = {
  api: keys.map((key) => {
    return key
  }),
  data: tags.map((tag) => {
    return "store." + tag
  }),
  get: tags.map((tag) => {
    return "get:" + tag
  }),
}

export default events

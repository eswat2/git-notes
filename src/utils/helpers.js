import axios from "axios"

function getRepos(username) {
  return axios.get(`https://api.github.com/users/${username}/repos`)
}

function getUserInfo(username) {
  return axios.get(`https://api.github.com/users/${username}`)
}

function getUserNotes(username) {
  return axios.get(`https://fire-notes.herokuapp.com/notes/${username}`)
}

function getKeys() {
  return axios.get("https://fire-notes.herokuapp.com/keys")
}

function getGithubInfo(username) {
  return axios
    .all([getRepos(username), getUserInfo(username)])
    .then(arr => ({
      repos: arr[0].data,
      bio: arr[1].data,
      error: false
    }))
    .catch(err => ({
      repos: [],
      bio: {},
      error: true,
      fault: err
    }))
}

function getGithubNotes(username) {
  return axios
    .all([getKeys(), getUserNotes(username)])
    .then(arr => ({
      keys: arr[0].data,
      notes: arr[1].data
    }))
    .catch(err => ({
      keys: [],
      notes: []
    }))
}

const helpers = {
  getGithubInfo,
  getGithubNotes,
  getUserNotes,
  getUserInfo,
  getRepos
}

export default helpers

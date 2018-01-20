import axios from 'axios'

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
  return axios.get(`https://fire-notes.herokuapp.com/keys`)
}

function getGithubInfo(username) {
  return axios.all([
    getRepos(username),
    getUserInfo(username),
    getUserNotes(username),
    getKeys()
  ]).then((arr) => ({
      repos: arr[0].data,
      bio: arr[1].data,
      notes: arr[2].data,
      keys: arr[3].data,
      error: false
    })).catch((err) => ({
      repos: [],
      bio: {},
      notes: [],
      keys: [],
      error: true,
      fault: err
    }))
}

const helpers = {
  getGithubInfo,
  getUserNotes,
  getUserInfo,
  getRepos
}

export default helpers

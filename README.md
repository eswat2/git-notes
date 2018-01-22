# git-notes
[![Dependency Status](https://dependencyci.com/github/eswat2/git-notes/badge)](https://dependencyci.com/github/eswat2/git-notes)
[![Heroku](https://heroku-badge.herokuapp.com/?app=git-notes&style=flat&svg=1)](https://git-notes.herokuapp.com)

I am using a custom [**WebSockets**](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API) notes server, [**fire-notes.herokuapp.com**](https://fire-notes.herokuapp.com), to handle reading & writing notes.  The repo for that can be found here: [**fire-notes**](https://github.com/eswat2/fire-notes)

### Background:

I wanted to build a **Vue** version of my [**egghead-notes**](https://github.com/eswat2/egghead-notes) app and this is the result.

### Features:

- initialized the project with **vue-cli** (webpack-simple)
- refined UI elements
- a simple store which conceptually is only mutated via actions
- a simple eventBus which ties events to actions
- uses [**axios**](https://github.com/mzabriskie/axios) for all api calls
- uses [**WebSockets**](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API) to talk to a custom notes server, [**fire-notes**](https://fire-notes.herokuapp.com)
- a simple html5 pushstate mechanism
- saves last valid username to local storage
- initializes app from URL if it matches /profile/:username
- otherwise it reloads last username from local storage
- a simple navigator for visited usernames

### Deployed:

This app is running on [**git-notes.herokuapp.com**](https://git-notes.herokuapp.com)

The following files are part of the deployment:

```
dist/       - pre-built vue app, ready to deploy
app.js      - the node server which will host the react app
demon       - a script to run the node server locally
Procfile    - required for the heroku deployment
```
Running the app locally is as simple as executing the following:

```
npm run dev
```


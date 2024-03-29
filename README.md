# git-notes

[![Heroku](https://heroku-badge.herokuapp.com/?app=git-notes&style=flat&svg=1)](https://git-notes.herokuapp.com)

I wanted to build a **Vue** version of my [**egghead-notes**](https://github.com/eswat2/egghead-notes) app and this is the result.

### Background:

I am using a custom [**WebSockets**](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API) notes server, [**fire-notes.herokuapp.com**](https://fire-notes.herokuapp.com), to handle reading & writing notes.  The repo for that can be found here: [**fire-notes**](https://github.com/eswat2/fire-notes)

### Features:

- using the latest version of **Vue3**
- converted the project to use [**Vite**](https://vitejs.dev) - _NextGen Frontend Tooling_
- refined UI elements
- mobile friendly layout
- an isolated store mutated only by actions
- a simple [**eventBus**](https://github.com/scottcorgan/tiny-emitter) which controls the flow of data thru the app
- uses [**axios**](https://github.com/mzabriskie/axios) for all api calls
- uses [**WebSockets**](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API) to talk to a custom notes server, [**fire-notes**](https://fire-notes.herokuapp.com)
- a simple html5 pushstate mechanism
- saves last valid username to local storage
- initializes app from URL if it matches `#:username`
- otherwise it reloads last username from local storage
- a simple navigator for visited usernames

### Deployed:

This app is running on [**git-notes-eswat2.vercel.app**](https://git-notes-eswat2.vercel.app)

Running the app locally is as simple as executing the following:

```
yarn install
yarn build
yarn serve
```

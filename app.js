/* eslint no-console: "off" */
/* eslint    new-cap: "off" */
const express  = require('express')
const enforce  = require('express-sslify')
const fallback = require('express-history-api-fallback')

const port = process.env.PORT ? JSON.parse(process.env.PORT) : 8080

console.log('-- port:  ' + port)

const app  = express()
const root = __dirname + '/'

// Use enforce.HTTPS({ trustProtoHeader: true }) in case you are behind
// a load balancer (e.g. Heroku). See further comments below
if (process.env.PORT) {
  console.log('-- enforce SSL')
  app.use(enforce.HTTPS({ trustProtoHeader: true }))
}

app.use(express.static(root))
app.use(fallback('index.html', { root: root }))

const onRunning = () => {
  console.log('App Server is running on port ' + port + '!')
}

app.listen( port, onRunning )

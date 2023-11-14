const express = require('express')
const cors = require('cors')
const logger = require('morgan')

const animeRoutes = require('./routers/animeSeries')

const app = express()

app.use(express.json())
app.use(logger('dev'))
app.use(cors())

app.use('/animeSeries', animeRoutes)

app.get('/', (req, res) => {
  res.send({
    message: "Welcome to the Anime Series API",
    endpoints: [
      "GET    /                  200",
      "GET    /animeSeries       200",
      "GET    /animeSeries/:id   200",
      "POST   /animeSeries       201",
      "PATCH  /animeSeries/:id   200",
      "DELETE /animeSeries/:id   204",
    ]
  })
})

module.exports = app

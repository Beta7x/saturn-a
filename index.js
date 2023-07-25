require('module-alias/register')
require('dotenv').config()
const express = require('express')
const { json, urlencoded } = require('express')
const morgan = require('morgan')
const app = express()
const port = process.env.PORT || 8080
const path = require('path')
const apiCache = require('apicache')
// const cache = apiCache.middleware

const { HTTP_STATUS } = require('@http_status')
const { SUCCESS, ERROR } = require('@message')

app.use(morgan('dev'))
// cache all route
// app.use(cache('5 minutes'))
app.use(json())
app.use(urlencoded({ extended: false }))

apiCache.options({ debug: true })

global.HTTP_STATUS = HTTP_STATUS
global.SUCCESS = SUCCESS
global.ERROR = ERROR
global.MSG = require(path.join(__dirname, '/app/helpers/response'))

app.use('/api', require('./app/routes/api'))

app.use((_req, res, next) => {
  res.header('Content-Type', 'application/json')
  res.header('Content-Type', 'text/html')
  next()
})

app.use((_req, _res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})

app.use((err, req, res, _next) => {
  if (req.accepts('html')) {
    res.status(err.status || 500)
    res.send(`<h1>${err.message}</h1>`)
  } else {
    res.status(err.status || 500)
    res.json({
      error: {
        code: err.status || 500,
        message: err.message || 'Internal server error'
      }
    })
  }
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})

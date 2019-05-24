require('dotenv').config()

const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const express = require('express')
const favicon = require('serve-favicon')
const hbs = require('hbs')
const mongoose = require('mongoose')
const logger = require('morgan')
const path = require('path')
const cors = require('cors')

mongoose
  .connect(
    process.env.DB,
    { useNewUrlParser: true }
  )
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  })

const app_name = require('./package.json').name
const debug = require('debug')(
  `${app_name}:${path.basename(__filename).split('.')[0]}`
)

const app = express()

// Middleware Setup
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())

// Express View engine setup

app.use(
  require('node-sass-middleware')({
    src: path.join(__dirname, 'public'),
    dest: path.join(__dirname, 'public'),
    sourceMap: true,
  })
)

app.use(
  cors({
    origin: ['http://localhost:3001', 'https://proyecto-m3.herokuapp.com'],
  })
)

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')
app.use(express.static(path.join(__dirname, 'public')))
// app.use(favicon(path.join(__dirname, "public", "images", "favicon.ico")));

// default value for title local
app.locals.title = 'Express - Generated with IronGenerator'

const index = require('./routes/index')
const todo = require('./routes/todos')
const auth = require('./routes/auth')
app.use('/api', index)
app.use('/api/todos', todo)
app.use('/api/auth', auth)

app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, public, 'index.html'))
})

module.exports = app

require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')

const port = process.env.PORT || 3001
const app = express()

// api security
// app.use(helmet())

// handle cors error
app.use(cors())

// mongoDB Connection Setup
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true,
})

if (process.env.NODE_ENV !== 'production') {
  const mDb = mongoose.connection

  mDb.on('open', () => {
    console.log('MongoDB is conneted')
  })

  mDb.on('error', (error) => {
    console.log(error)
  })

  //Logger
  app.use(morgan('tiny'))
}

// set bodyParser
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// load routers
const userRouter = require('./src/routers/user.router')
const ticketRouter = require('./src/routers/ticket.router')
const tokensRouter = require('./src/routers/tokens.router')

// use routes
app.use('/v1/user', userRouter)
app.use('/v1/ticket', ticketRouter)
app.use('/v1/tokens', tokensRouter)

// error handling
const handleError = require('./src/utils/errorHandler')

app.use((req, res, next) => {
  const error = new Error('Resources not found!')
  error.status = 404
  next(error)
})

app.use((error, req, res, next) => {
  handleError(error, res)
})

app.listen(port, () => {
  console.log(`API is ready on http://localhost:${port}`)
})

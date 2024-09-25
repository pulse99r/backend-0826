const express = require("express")
const app = express()
const cors = require('cors')

// const records = require('./data.js')
app.use(express.json())
app.use(cors())

// Record routes
const recordsController = require("./controllers/recordsController.js")
app.use("/records", recordsController)

// users routes
const userController = require("./controllers/usersController.js")
app.use('/users', userController)

// Default routes
app.get('/',(req, res) => {
  res.send('Welcome to your basic backend server!')
})

app.get('*',(req, res) => {
  res.status(400).send('Requested page was not found!')
})

module.exports = app;
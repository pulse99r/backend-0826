const express = require('express')
const users = express.Router()

const db = require('../db/dbConfig.sql')

users.get('/', async (__, res) =>{
  try {
    const users = await db.any('SELECT * FROM sample_0826')
    res.status(200).send(users) 
  } catch {
    res.status(400).send(error)
  }
})

module.exports = users;
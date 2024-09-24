
const express = require("express")
const records = express.Router()

const recordsData = require("../data")


records.get("/",(req,res) => {
  try {    
    res.status(200).send(recordsData)
  } catch (error) {
    res.status(400).send(error)
  }
})

records.get("/:id",(req,res) => {
  const id = req.params.id
  console.log("id entered: ", id)
  const record = recordsData.map((rec)=>{
    if( Number(rec.id) == Number(id)){
      console.log("found record: ", {rec})
      return rec
    }
  })
  try {    
    res.status(200).send(record)
  } catch (error) {
    res.status(400).send({error: error})
  }
})

module.exports = records;
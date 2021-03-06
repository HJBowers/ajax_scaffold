const express = require('express')
const bodyParser = require('body-parser')
const { getPetsAndSpecies, updatePetName } = require('./db/db.js')

const app = express()

app.set('view engine', 'pug')
app.use(express.static('public'))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  getPetsAndSpecies()
    .then((pets) => {
      res.render('pets', {pets} )
    })
    .catch(console.error)
})

// RESTful API is often structured where petId is in the params
app.put('/pets/:petId/update_name', (req, res) => {
  const { petId } = req.params
  const { newName } = req.body

  updatePetName(Number(petId), newName)
  .then(response => res.json(response))
})

app.listen(3000, () =>
  console.log('Example app listening on port 3000!')
)

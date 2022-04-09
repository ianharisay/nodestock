'use strict'

const express = require('express')
const app = express()
const path = require('path')
const { engine } = require('express-handlebars')
const PORT = process.env.PORT || 5000

// Set handlebars middleware
app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', './views')

// Set handlebar routes
app.get('/', (req, res) => {
  res.render('home');
});

// Set static folder
app.use(express.static(path.join(__dirname, 'public')))
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`)
})
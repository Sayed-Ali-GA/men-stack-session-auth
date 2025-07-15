require('dotenv').config()
const express = require('express')
const app = express()
const methodOverride = require('method-override')

const mongoose = require('mongoose')
const morgan = require('morgan')

//DATABASE CONNECTION
mongoose.connect(process.env.MONGODB_URI)
mongoose.connection.on('connected', () => {
    console.log(`connected to MongiDB ${mongoose.connection.name} . `)
})
//MIDLEWRE
app.use(express.urlencoded({extended: false}))
app.use(methodOverride('_method'))
app.use(morgan('dev'))


// true ? console.log('it is true') : console.log('it is false')
const port = process.env.PORT ? process.env.PORT : "3003"

app.get('/', (req, res) => {
    res.render('index.ejs', {title: 'my App'})
})

app.listen(port, () => {
    console.log(`The express app is the ready on port ${port}`)
})

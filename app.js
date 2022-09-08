const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const app = express()
const router = express.Router()
const port = process.env.PORT || 3000
const user = require('./routes/user.js')

app.set('view engine', 'ejs')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', user)


app.listen(port, () => console.log('server is running'))
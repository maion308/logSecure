const express = require('express')
const app = express()
const port = process.env.PORT || 3000


app.set('view engine', 'ejs')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.render('home', {heading: 'Home'})
})

app.get('/login', (req, res) => {
    res.render('login', {heading: 'Login'})
})

app.get('/register', (req, res) => {
    res.render('register', {heading: 'Register'})
})



app.listen(port, () => console.log('server is running'))
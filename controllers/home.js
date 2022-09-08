const express = require('express')
const router = express.Router()

exports.homePage = (req, res) => {
    res.render('home', { heading: 'Home' })
}
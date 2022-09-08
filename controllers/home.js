const express = require('express')
const router = express.Router()

exports.homePage = async (req, res) => {
    await res.render('home', { header: 'Home' })
}
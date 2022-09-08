const express = require('express')
const router = express.Router()


exports.loginUser = (req, res) => {
    res.render('login', {heading: 'login'})
}
const express = require('express')
const router = express.Router()
const {registerUser, getRegisterForm}= require('../controllers/registerUser.js')
const { loginView, userLogin } = require('../controllers/loginUser')
const { homePage } = require('../controllers/home.js')

router.get('/', homePage)

router.get('/register', getRegisterForm)
router.post('/register', registerUser)

router.get('/login', loginView)
router.post('/login', userLogin)

module.exports = router
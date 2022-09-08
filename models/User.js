const dotenv = require('dotenv')
dotenv.config()
const mongoose = require('mongoose')
const db = process.env.MONGODB_URI

mongoose.connect(db)

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

exports.User = new mongoose.model('User', userSchema)
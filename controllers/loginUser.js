const express = require('express')
const router = express.Router()
const { User } = require('../models/User')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const session = require('express-session')


exports.loginView = async (req, res) => {
    await res.render('login', {msglg: '', header: 'Login'})
}


exports.userLogin = async (req, res) => {
    const { email, password } = req.body
    if(!email || !password) {
        await res.render('login', {
            msglg: 'required fields missing', 
            header: 'login'})
    } 
    try {
        const user = await User.findOne({email: email})
        if(user) {
            const cmp = await bcrypt.compare(password, user.password)
            if(cmp) {
                // sessions
                await res.render('login', {
                    msglg: 'loggin success',
                    header: 'login'
                })
            } else {
                await res.render('login', {
                    msglg: 'login failed!',
                    header: 'login'
                })
            }
        } else {
            await res.render('login', {
                msglg: 'user not found',
                header: 'login'
            })
        }
    } catch (error) {
        console.error(err)
    }
}
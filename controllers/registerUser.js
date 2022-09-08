const express = require('express')
const mongoose = require('mongoose')
const { User } = require('../models/User')
const bcrypt = require('bcrypt')

exports.getRegisterForm = async (req, res) => {
    await res.render('register', {msg: ''})
}

exports.registerUser = async (req, res) => {
    const { firstName, lastName, email, password, confirm } = req.body
    const saltRounds = 10
    if(!firstName || !lastName || !email || !password || !confirm) {
        await res.render('register', {msg: 'required fields missing'})
    }
    if(password != confirm) {
        await res.render('register', {msg: 'passwords do not match'})
    } else {
        try {
            User.findOne({email: email}, async (err, foundUser) => {
    
    
                if(!err) {
                    if(foundUser) {
                        await res.render('register', {msg: `An account associated with ${foundUser.email}  already exists`})
                    } else {
                        bcrypt.hash(password, saltRounds, (err, hash) => {
                            if(!err) {
                                const newUser = new User({
                                    firstName: firstName,
                                    lastName: lastName,
                                    email: email,
                                    password: hash
                                })
                                newUser.save( async (err) => {
                                    if(!err) {
                                        await res.redirect('login')
                                    } else {
                                        await res.send(err)
                                    }
                                })
                            } else {
                                console.error(err)
                            }
    
                        })
                    }
                } else {
                    console.error(err)
                }
            })
    
    
        } catch (error) {
            console.error(error)
        }
    }

}
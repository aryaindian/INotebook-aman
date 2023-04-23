const express = require('express');
const router = express.Router()
const User = require('../models/User')

//Create a user using: POST "/auth"
router.get('/', (req, res) => {
    // res.send("We are Current on the auth page see terminal to watch `req.body`")
    res.send(req.body)  //Or we can write this to see in responce that what we send in body 
    console.log(req.body); //This will log in terminal which we will send to body

    const user = User(req.body) //Get body data accoding User Schema
    user.save() //Save req.body data in MongoDB server
})
module.exports = router;
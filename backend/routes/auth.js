const express = require('express');
const router = express.Router()
const User = require('../models/User')
const { body, validationResult } = require('express-validator');

//Create a user using: POST "/auth"
router.post('/',
    [
        body('name', 'Enter a valid name atleast 3 characters').isLength({ min: 3 }),
        body('email', 'Enter a valid and Unique E-Mail').isEmail(),
        body('password', 'Password must be atleast 5 characters').isLength({ min: 5 }),
    ],
    (req, res) => {
        /*
        // res.send("We are Current on the auth page see terminal to watch `req.body`")
        res.send(req.body)  //Or we can write this to see in responce that what we send in body 
        console.log(req.body); //This will log in terminal which we will send to body

        const user = User(req.body) //Get body data accoding User Schema
        user.save() //Save req.body data in MongoDB server
        */

        //Express Validator
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        User.create({
            name: req.body.name,
            password: req.body.password,
            email: req.body.email,
        }).then(user => res.json(user))
            .catch(err => {
                console.log(err)
                res.json({ error: 'Please enter a unique value for email', message: err.message })
            })
    })

module.exports = router;
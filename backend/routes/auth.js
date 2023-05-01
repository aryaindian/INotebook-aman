const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");

//Create a user using: POST "/auth"
router.post(
    "/createuser",
    [
        body("name", "Enter a valid name atleast 3 characters").isLength({
            min: 3,
        }),
        body("email", "Enter a valid and Unique E-Mail").isEmail(),
        body("password", "Password must be atleast 5 characters").isLength({
            min: 5,
        }),
    ],
    async (req, res) => {
        // Used Express Validator

        // if there are no error return bad request and the errors
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        //check whether the user with the email exists or not
        try {
            let user = await User.findOne({ email: req.body.email });
            if (user) {
                return res
                    .status(400)
                    .json({ error: "User with the same email already exists" });
            }
            user = await User.create({
                name: req.body.name,
                password: req.body.password,
                email: req.body.email,
            });

            res.json(user);
        } catch (error) {
            console.error(error.message);
            res.status(500).send("Some Error occured");
        }
    }
);

module.exports = router;
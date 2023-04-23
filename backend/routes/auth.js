const express = require('express');
const router = express.Router()

router.get('/', (req, res) => {
    res.send("We are Current on the auth page")
})
module.exports = router;
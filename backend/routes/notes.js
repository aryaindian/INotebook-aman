const express = require('express');
const router = express.Router()

router.get('/', (req, res) => {
    const notes = {
        title: "My Notes",
        description: "This is My First Notes by Notes Router"
    }
    res.json(notes);
})
module.exports = router;
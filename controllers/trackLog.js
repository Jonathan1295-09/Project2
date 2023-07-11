const express = require('express');
const TrackLog = require('../models/trackLog');

const router = express.Router();

router.get("/", (req,res) => {
    res.render("tracklogs/index.ejs")
})

module.exports = router
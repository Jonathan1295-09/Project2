const express = require('express');
const TrackLog = require('../models/trackLog');

const router = express.Router();

router.get("/", async (req,res) => {
    const allTracklog = await TrackLog.find({})
    res.render("tracklogs/index.ejs", {tracklogs: allTracklog})
})

module.exports = router
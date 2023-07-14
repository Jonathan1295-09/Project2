const express = require('express');
const TrackLog = require('../models/trackLog');

const router = express.Router();


//Controllers //
router.get("/", async (req,res) => {
    const allTracklog = await TrackLog.find({})
    res.render("tracklogs/index.ejs", {tracklogs: allTracklog})
});

router.get('/new', (req, res) => {
    res.render('tracklogs/new.ejs')
});

router.post('/', async(req, res) => {
    console.log(req.body)
    await TrackLog.create(req.body)
    res.redirect('/tracklog');
});

router.get('/:id', async (req,res) => {
    const id = req.params.id;
    const allTracklog = await TrackLog.findById(id);
    res.render('tracklogs/show.ejs', {allTracklog})
});

router.delete('/:id', async (req,res) => {
    const id = req.params.id;
     await TrackLog.findByIdAndDelete(id)
    res.redirect('/tracklog')
});

router.get('/:id/edit', async (req,res) => {
    const id = req.params.id;
    const allTracklog = await TrackLog.findById(id);
    res.render('tracklogs/edit.ejs', {allTracklog})
});

router.put('/:id', async (req,res) => {
    const id = req.params.id;
    await TrackLog.findByIdAndUpdate(id, req.body);
    res.redirect('/tracklog')
});

module.exports = router;
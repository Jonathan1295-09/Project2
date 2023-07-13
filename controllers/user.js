const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const TrackLog = require('../models/trackLog');
const User = require('../models/user');


router.get('/', (req,res) => {
   res.render('users/login.ejs');
});

router.post('/login', async (req,res) => {
    const user = await User.findOne({ username: req.body.username });
    if (user) {
        res.send('User Does Not Exist')
    }else{
        const passmatches = bcrypt.compareSync(req.body.username, user.password)
        if (passmatches){
            req.session.username = req.body.username;
            req.session.loggedIn = true;
            res.redirect('tracklogs/index.ejs')
        }
    }
});

module.exports = router;
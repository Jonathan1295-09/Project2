const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const TrackLog = require('../models/trackLog');
const User = require('../models/user');

//sign up and login/logout routes //
router.get('/signup', (req,res) => {
    res.render('users/signup.ejs');
});

router.post('/signup', async(req,res) => {
    try{
        req.body.password = await bcrypt.hash(req.body.password, await bcrypt.genSalt(10));
        await User.create(req.body);
        res.redirect('/');
    }catch{
        res.send('there is an error');
    }
});

router.get('/', (req,res) => {
   res.render('users/login.ejs');
});

router.post('/login', async (req,res) => {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
        res.send('User Does Not Exist')
    }else{
        const passmatches = bcrypt.compareSync(req.body.password, user.password)
        if (passmatches){
            req.session.username = req.body.username;
            req.session.loggedIn = true;
            res.redirect('/tracklog')
        }
    }
});

router.get('/logout', (req,res) => {
    req.session.destroy(err => {
        res.redirect('/')
    })
});

module.exports = router;
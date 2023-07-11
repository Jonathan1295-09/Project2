const express = require('express');
const bcrypt = require('bcrypt');

const router = express.Router();

router.get('/logout', (req,res) => {
    req.session.destroy(err => {
        res.redirect('/')
    })
})
module.exports = router;
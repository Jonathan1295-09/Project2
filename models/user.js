const mongoose = require('./connection');
const TrackLog = require('./trackLog')

const {Schema, model} = mongoose

const userSchema = new Schema ({
    username: { type: String, required: true, unique: true},
    password: { type: String, required: true},
});

const User = model('user', userSchema)

module.exports = User;
const mongoose = require('./connection');

const {Schema,model} = mongoose;

const trackLogSchema = new Schema({
    track: String,
    lapTime: Number,
    weather: String,
    tire: String,
    model: String
});

const TrackLog = model ("TrackLog", trackLogSchema);

console.log(TrackLog)

module.exports = TrackLog;
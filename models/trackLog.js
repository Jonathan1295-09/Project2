const mongoose = require('./connection');

const {Schema,model} = mongoose;

const trackLogSchema = new Schema({
    track: String,
    lapTime: String,
    weather: String,
    tire: String,
    model: String
});

const TrackLog = model ("trackLog", trackLogSchema);

console.log(TrackLog)

module.exports = TrackLog;
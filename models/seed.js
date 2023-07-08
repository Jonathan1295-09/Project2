const TrackLog = require('./trackLog');
const mongoose = require('./connection');

mongoose.connection.on('open', async () => {
    await TrackLog.deleteMany();
    const startTrackLogs = [
        {track:"Road America", lapTime: "2:31.6", weather: "sunny", tire:"RT660", model:"370z"}
    ];
    await TrackLog.create(startTrackLogs);
    mongoose.connection.close
});
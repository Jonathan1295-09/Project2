const TrackLog = require('./trackLog');
const mongoose = require('./connection');

mongoose.connection.on('open', async () => {
    await TrackLog.deleteMany();
    const startTrackLogs = [
        {track:"Road America", lapTime: "2:31.6", weather: "sunny", tire:"RT660", model:"370z"}// had issue here with laptime i passed as a number but guess it need to be a string in order for it to work
    ];
    await TrackLog.create(startTrackLogs);
    mongoose.connection.close();
});
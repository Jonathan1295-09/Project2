// import out dependencies
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const trackLog = require('./models/trackLog')
const methodOverride = require('method-override');
const TrackLogRouter = require('./controllers/trackLog');
const UserRouter = require('./controllers/user')
const session = require('express-session')
const MongoStore = require('connect-mongo')


// express application
const app = express()

// middleware 
app.use(morgan('dev')); // logging
app.use(express.urlencoded());
app.use(methodOverride('_method')); // override with post having ?_METHOD = delete or ?_method
app.use(express.static('public')); // serve static files from public folder

app.use(session ({
    secret: process.env.SECRET,
    store: MongoStore.create({mongoUrl: process.env.DATABASE_URL}),
    saveUninitialized: true,
    resave: false,
}));

app.use('/trackLog', TrackLogRouter);
app.use('/', UserRouter);

// routes
// app.get('/', (req,res) => {
//     res.render('views/tracklogs','index.ejs')
// });


const PORT = process.env.PORT
app.listen(PORT, () => console.log(`app listening on port ${PORT}`))
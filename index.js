const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/User');
require('./services/passport.js');

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI);

const app = express();
console.log('entering app.use zone');
app.use(
    cookieSession({
        maxAge: 1 * 60 * 60 * 1000,  //cookie lasts for 1 hour
        keys: [keys.cookieKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5001;
app.listen(PORT);

console.log('listening at port: ' + PORT);
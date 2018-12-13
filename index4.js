const express = require('express');
require('./services/passport.js');
const authRoutes = require('./routes/authRoutes.js');

// const mongoose = require('mongoose');
// mongoose.connect(keys.mongoURI);

const app = express();

authRoutes(app);

const PORT = process.env.PORT || 5001;
app.listen(PORT);

console.log('listening at port: ' + PORT);
const express = require('express');
const app = express();

// create route handler for greeting
app.get('/greeting', (req, res) => {
    res.send({hi: 'there'});
});

// create default route handler
app.get('/', (req, res) => {
    res.send({Welcome: 'Welcome to my simple server '});
});

// express is instructing node to wire up and listen to this 
// particular port
//
// in production mode, we will listen to the port dynamically
// allocated by our service processor
//
// In developemnt mode, we will listen to a 'hard' PORT (5001)
const PORT = process.env.PORT || 5001;
app.listen(PORT);


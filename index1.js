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

// listening to clients on port 5001
// express is instructing node to wire up and listen to this 
// particular port
app.listen(5001);


const express = require('express');
const routes = require('./routes/api');

// setup express app
const app = express();
// Initialize Routes
// Putting api as the first parameter puts /api in front of the route
app.use('/api', routes);

app.get('/', function(req, res){
    res.send('Hello');
});

// listen for requests
app.listen(process.env.port || 4000, function(){
    console.log('now listening for requests');
});

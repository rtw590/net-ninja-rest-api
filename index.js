const express = require('express');
const routes = require('./routes/api');
const bodyParser = require('body-parser');

// setup express app
const app = express();

//Set up mongoose connection
var mongoose = require('mongoose');
var mongoDB = 'mongodb://user1:password1@ds253918.mlab.com:53918/net-ninja-rest';
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json())


// Initialize Routes
// Putting api as the first parameter puts /api in front of the route
app.use('/api', routes);

// Error handling middleware
app.use(function(err, req, res, next){
    // console.log(err);
    res.status(422).send({error: err.message});
})

app.get('/', function(req, res){
    res.send('Hello');
});

// listen for requests
app.listen(process.env.port || 4000, function(){
    console.log('now listening for requests');
});

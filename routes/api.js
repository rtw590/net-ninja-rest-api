const express = require('express');
const router = express.Router();

// get a list of ninjas from database
router.get('/ninjas', function(req, res){
    res.send({type: 'GET'})
})

// add new ninja to database
router.post('/ninjas', function(req, res){
    res.send({type: 'POST'})
})

// update ninja already in database
router.put('/ninjas/:id', function(req, res){
    res.send({type: 'PUT'})
})

// delete ninja in database
router.delete('/ninjas/:id', function(req, res){
    res.send({type: 'DELETE'})
})

module.exports = router;
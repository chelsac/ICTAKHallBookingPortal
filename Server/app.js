const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const userRoute = require('./data/users.js');
const halls=require('./model/halls')

// MongoDB Databse url
var mongoDatabase = 'mongodb+srv://test:test@cluster0.ejygs4h.mongodb.net/ICTAKHallBookingPortal?retryWrites=true&w=majority';

// Created express server
const app = express();
mongoose.Promise = global.Promise;

// Connect Mongodb Database
mongoose.connect(mongoDatabase, { useNewUrlParser: true }).then(
 () => { console.log('Database is connected') },
 err => { console.log('There is problem while connecting database ' + err) }
);

// Convert incoming data to JSON format
app.use(bodyParser.json());

// Enabled CORS
app.use(cors());

// Setup for the server port number
const port = process.env.PORT || 4000;

// Routes Configuration
app.use('/api/users', userRoute);

//adding hall data
app.post('/addhall',function(req,res){
    var item={
        name:req.body.name,
        capacity:req.body.capacity,
        location:req.body.location,
        image:req.body.image,
        description:req.body.description
    };

    var data=halls(item);
    data.save();
    halls.find().then(function(data){
        res.send(data);
    })
})

//view halls
app.get('/halls', function(req,res){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods:GET,POST,PUT,DELETE");

    halls.find()
    .then(function(halls){
      res.send(halls);
    })
  })

// Staring our express server
const server = app.listen(port, function () {
 console.log('Server Lisening On Port : ' + port);
});
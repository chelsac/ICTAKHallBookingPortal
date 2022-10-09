const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const loginRoute = require('./data/login.js');
const authRoute = require('./data/auth.js');
const userRoute = require('./data/users.js');
const hallRoute = require('./data/hall.js');

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
app.use('/api/login', loginRoute);
app.use('/api/users', authRoute, userRoute);
app.use('/api/hall', authRoute, hallRoute);



// Staring our express server
const server = app.listen(port, function () {
 console.log('Server Lisening On Port : ' + port);
});
const express = require('express');
const bookingRoute = express.Router();
const bookingdetails = require('../model/booking');

//view bookings of user(week) 
bookingRoute.route('/getbookingweek/:userid').get(function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods:GET,POST,PUT,DELETE");
    const userid = req.params.userid;
    bookingdetails.findOne({ "userid": userid })
        .then(function (bookingweek) {
            console.log(bookingweek)
            res.send(bookingweek);
        })
})


// userRoute.route('/booking/:email').get(function (req, res) {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Methods:GET,POST,PUT,DELETE");
//     const email = req.params.email;
//     userModel.findOne({ "email": email }).then((_user) => {
//       console.log(_user);
//         res.json(_user);
//     })
  
//   })


module.exports = bookingRoute;
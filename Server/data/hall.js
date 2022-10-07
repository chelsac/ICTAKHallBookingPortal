const express = require('express');
const hallRoute = express.Router();
const halls = require('../model/halls');

//adding hall data
hallRoute.route('/addhall').post(function (req, res) {
    var item = {
        name: req.body.name,
        capacity: req.body.capacity,
        location: req.body.location,
        image: req.body.image,
        description: req.body.description
    };

    var data = halls(item);
    data.save();
    halls.find().then(function (data) {
        res.send(data);
    })
})


//view halls
hallRoute.route('/viewhall').get(function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods:GET,POST,PUT,DELETE");

    halls.find()
        .then(function (halls) {
            res.send(halls);
        })
})



hallRoute.route('/:id').get(function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods:GET,POST,PUT,DELETE");
    const id = req.params.id;
    hallData.findOne({ "_id": id }).then((_hall) => {
        res.send(_hall);
    })

})


//hall update
hallRoute.route('/editHall/:id').put(function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods:GET,POST,PUT,DELETE");
    console.log("inside update");
    id = req.body.hall._id;
    name = req.body.hall.name;
    capacity = req.body.hall.capacity;
    location = req.body.hall.location;
    image = req.body.hall.image;
    description = req.body.hall.description;
    hallData.findByIdAndUpdate({ "_id": id },
        {
            $set: {
                "name": name,
                "capacity": capacity,
                "location": location,
                "image": image,
                "description": description
            }
        })
        .then(function () {
            res.send();
        })

});


//delete hall
hallRoute.route('/deleteHall/:id').delete(function (req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods:GET,POST,PUT,DELETE");
    console.log(req.params.id);
    halls.findByIdAndDelete(req.params.id).then(() => {
        console.log('success')
        res.send();
    })

})


module.exports = hallRoute;
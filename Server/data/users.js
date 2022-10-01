const express = require('express');
const app = express();
const userRoute = express.Router();
const userModel = require('../Model/Users');

// To Get List Of Users
userRoute.route('/getUsers').get(function (req, res) {
    userModel.find(function (err, user) {
        if (err) {
            console.log(err);
        }
        else {
            res.json(user);
        }
    });
});



// To Add New User
userRoute.route('/addUser').post(function (req, res) {
    let user = new userModel(req.body);
    user.save()
        .then(data => {
            res.status(200).json({ 'user': 'User Added Successfully' });
        })
        .catch(err => {
            res.status(400).send("Something Went Wrong");
        });
});



// To replace The User Details
userRoute.route('/updateUser/:id').post(function (req, res) {
    userModel.findById(req.params.id, function (err, user) {
        if (!user)
            return next(new Error('Unable To Find User With This Id'));
        else {
            user.firstName = req.body.firstName;
            user.lastName = req.body.lastName;
            user.email = req.body.email;
            user.jobTitle = req.body.jobTitle;

            user.save().then(usr => {
                res.json('User Updated Successfully');
            })
            .catch(err => {
                res.status(400).send("Unable To Update User");
            });
        }
    });
});




//To edit User
userRoute.route('/editUser/:id').put(function (req, res) {
if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  userModel.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found!`
        });
      } 
      else {
        res.send({ message: "Tutorial was updated successfully." });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Tutorial with id=" + id
      });
    });
});



// To Delete The User
userRoute.route('/deleteUser/:id').delete(function (req, res) {
    userModel.findByIdAndRemove({ _id: req.params.id }, function (err, user) {
        if (err) res.json(err);
        else res.json('User Deleted Successfully');
    });
});

module.exports = userRoute;
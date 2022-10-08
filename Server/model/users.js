const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// List of columns for User schema
let User = new Schema ({
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String },
    password: { type: String },
    jobTitle: { type: String}
  },
  {
    collection: 'users'
  }
);

module.exports = mongoose.model('User', User);

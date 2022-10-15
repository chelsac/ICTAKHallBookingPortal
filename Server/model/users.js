const mongoose = require('mongoose');
const jwt = require("jsonwebtoken");
const Schema = mongoose.Schema;

// List of columns for User schema
let User = new Schema ({
    userid:{ type: String },
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String },
    password: { type: String },
    role: { type: String },
    jobTitle: { type: String}
  },
  {
    collection: 'users'
  }
);

User.methods.generateJwtToken = async (payload, secret, expires) => {
  return jwt.sign(payload, secret, expires)
}

module.exports = mongoose.model('User', User);

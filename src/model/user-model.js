const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const user = new Schema(
  {
    name: String,
    password: String,
    balance: Number
  }
);

const User = model('User', user);

module.exports = User
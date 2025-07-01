const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Username is required'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [6, 'Password length should be at least 6 characters'],
  },
  customerId: {
    type: String,
    default: '',
  },
  subscription: {
    type: String,
    default: '',
  },
});

module.exports = mongoose.model('User', userSchema);

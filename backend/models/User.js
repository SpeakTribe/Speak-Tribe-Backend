const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  userName: {
    type: String,
    // unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone: {
    type: Number
  },
  age: {
    type: Number,
  },
  password: {
    type: String,
    required: true
  },
  language:
  {
    type: String,
    default: null
  },
  progress:
  {
    type: Object,
    default: {}
  },
  otp: {
    type: String,
  },
  otpExpires: {
    type: Date,
  },
}, { timestamps: true }, { collection: 'userInfo' })

module.exports = mongoose.model('userInfo', UserSchema)
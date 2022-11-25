const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  applicantName: {
    type: String,
    required: true,
  },
  firURL: {
    type: String,
    required: true,
  },
  applicationDate: {
    type: Date,
    required: true,
  },
  category:{
    type: String,
    enum : ['cognizable','non-cognizable'],
    default: 'non-cognizable'
  }
})

const User = mongoose.model("User", userSchema)

module.exports = User

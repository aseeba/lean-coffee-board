const mongoose = require('mongoose')

const userSchema = new mongoose.Schema(
  {
    name: String,
    role: String,
  },
  { versionKey: false }
)

module.exports = mongoose.model('User', userSchema)

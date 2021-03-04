const mongoose = require('mongoose')

const schema = new mongoose.Schema(
  {
    text: String,
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  { timestamps: true, versionKey: false }
)

module.exports = mongoose.model('Card', schema)

const mongoose = require('mongoose')

const schema = new mongoose.Schema(
  {
    text: String,
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    // Hier fügen wir das Voting hinzu
    votes: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true, versionKey: false }
)

module.exports = mongoose.model('Card', schema)

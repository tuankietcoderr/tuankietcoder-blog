const mongoose = require('mongoose')

const MessageSchema = new mongoose.Schema(
  {
    message: {
      type: String,
    },
    send_to: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'trainees',
    },
    send_from: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'trainees',
    },
  },
  { timestamps: true }
)

module.exports = mongoose.models.messages || mongoose.model('messages', MessageSchema)

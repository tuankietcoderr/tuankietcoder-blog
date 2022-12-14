const mongoose = require('mongoose')

const TraineeSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      unique: true,
    },
    id: {
      type: String,
      required: true,
    },
    function: {
      type: String,
    },
    group: {
      type: Number,
    },
    messages: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'messages',
      },
    ],
  },
  { timestamps: true }
)

module.exports = mongoose.models.trainees || mongoose.model('trainees', TraineeSchema)

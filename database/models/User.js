const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    saved_posts: {
      type: [String],
      default: [],
    },
    additional_info: {
      type: Object,
      default: {
        fullName: '',
        school: '',
        company: '',
        hobies: [],
      },
    },
  },
  { timestamps: true }
)

module.exports = mongoose.models.users || mongoose.model('users', UserSchema)

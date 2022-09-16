import dbConnect from 'database'
import User from 'database/models/User'
const jwt = require('jsonwebtoken')

dbConnect()

export default async function handler(req, res) {
  const { method } = req
  if (method === 'POST') {
    try {
      const { username, password, confirmPassword } = req.body
      if (!username || !password || !confirmPassword)
        return res.status(400).json({ success: false, message: 'Bạn phải nhập đầy đủ thông tin' })
      const user = await User.findOne({ username })
      if (user) {
        return res.status(400).json({ success: false, message: 'Người dùng đã tồn tại' })
      }
      if (password !== confirmPassword) {
        return res.status(400).json({ success: false, message: 'Mật khẩu không trùng nhau' })
      }
      const newUser = new User({
        username,
        password,
      })
      await newUser.save()
      const accessToken = jwt.sign({ userId: newUser._id }, process.env.ACCESS_TOKEN_SECRET)
      res
        .status(200)
        .json({ success: true, data: newUser, message: 'Đã tạo người dùng', accessToken })
    } catch (error) {
      return res.status(500).json({ success: false, message: error.message })
    }
  } else {
    return res.status(404).json({ success: false, message: 'Lỗi yêu cầu' })
  }
}

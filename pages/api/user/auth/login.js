import dbConnect from 'database'
import User from 'database/models/User'
const jwt = require('jsonwebtoken')

dbConnect()

export default async function handler(req, res) {
  const { method } = req
  switch (method) {
    case 'POST':
      try {
        const { username, password } = req.body
        if (!username || !password)
          return res.status(400).json({ success: false, message: 'Bạn phải nhập đầy đủ thông tin' })
        const user = await User.findOne({ username })

        if (!user) {
          return res.status(400).json({ success: false, message: 'Người dùng không tồn tại' })
        }
        if (user.password !== password) {
          return res.status(400).json({ success: false, message: 'Sai mật khẩu' })
        }
        const accessToken = jwt.sign({ userId: user._id }, process.env.ACCESS_TOKEN_SECRET)
        return res.json({ success: true, message: 'Đã đăng nhập', accessToken, user })
      } catch (error) {
        return res.status(500).json({ success: false, message: error.message })
      }

    default:
      return res.status(404).json({ success: false, message: 'Lỗi yêu cầu' })
  }
}

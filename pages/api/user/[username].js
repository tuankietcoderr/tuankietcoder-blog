import dbConnect from 'database'
import User from 'database/models/User'

dbConnect()

export default async function handler(req, res) {
  const { method } = req
  try {
    const { username } = req.query
    const formData = req.body
    switch (method) {
      case 'GET':
        try {
          const user = await User.findOne({ username }).select('-password')
          if (user) res.status(200).json({ success: true, user })
          else res.status(400).json({ success: false, message: 'Người dùng không tồn tại' })
        } catch {
          res.status(500).json({ success: false, message: 'Lỗi máy chủ' })
        }
        break
      case 'PUT':
        try {
          const user = await User.findOne({ username })
          if (user.password === req.body.newPassword) {
            return res
              .status(400)
              .json({ success: false, message: 'Mật khẩu phải khác với mật khẩu hiện tại' })
          }
          const newData = {
            ...user['_doc'],
            password: req.body.newPassword,
            ...formData,
          }
          const newUser = (await User.findOneAndUpdate({ username }, newData, { new: true })) || []
          return res
            .status(200)
            .json({ success: true, newUser, message: 'Cập nhật người dùng thành công!' })
        } catch {
          return res.status(500).json({ success: false, message: 'Lỗi máy chủ' })
        }
      case 'DELETE':
        try {
          await User.findOneAndDelete({ username })
          res.status(200).json({ success: true, message: 'Đã xóa người dùng' })
        } catch {
          res.status(500).json({ success: false, message: 'Lỗi máy chủ' })
        }
        break
      default:
        res.status(400).json({ success: false })
        break
    }
  } catch (err) {
    res.status(500).json({ success: false, message: err.message })
  }
}

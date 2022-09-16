import dbConnect from 'database'
import User from 'database/models/User'
const jwt = require('jsonwebtoken')

dbConnect()

export default async function handler(req, res) {
  const { method } = req

  switch (method) {
    case 'GET':
      try {
        const token = req.headers.authorization
        if (!token)
          return res
            .status(401)
            .json({ success: false, message: 'Access denied. No token provided.' })
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
        req.userId = decoded.userId
        const user = await User.findById(req.userId).select('-password')
        if (!user)
          return res.status(400).json({ success: false, message: 'Không tìm thấy người dùng' })
        res.json({ success: true, user })
      } catch (error) {
        console.log(error)
        res.status(500).json({ success: false, message: 'Lỗi máy chủ' })
      }
      break

    default:
      return res.status(404).json({ success: false, message: 'Lỗi yêu cầu' })
  }
}

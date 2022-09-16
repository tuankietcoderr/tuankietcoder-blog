import dbConnect from 'database'
import User from 'database/models/User'

dbConnect()

export default async function handler(req, res) {
  const { method } = req
  switch (method) {
    case 'GET':
      try {
        const users = await User.find({}).select('-password')
        res.status(200).json({ success: true, data: users })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}

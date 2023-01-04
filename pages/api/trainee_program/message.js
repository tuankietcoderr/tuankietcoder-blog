import Message from 'database/models/Message'
import dbConnect from 'database'
import mongoose from 'mongoose'
import Trainee from 'database/models/Trainee'
import NextCors from 'nextjs-cors'

dbConnect()
export default async function handler(req, res) {
  await NextCors(req, res, {
    origin: '*',
  })
  const { method } = req
  const toId = mongoose.Types.ObjectId

  switch (method) {
    case 'GET':
      try {
        const { send_from, send_to } = req.query
        const sender = await Trainee.findOne({ id: send_from })
        const receiver = await Trainee.findOne({ id: send_to })
        let temp = []

        if (send_from && !send_to) {
          const toId_send_from = toId(sender._id)
          const message = await Message.find({ send_from: toId_send_from }).populate({
            path: 'send_to',
            model: Trainee,
            select: 'fullName id function group',
          })
          temp = message
        } else if (!send_from && send_to) {
          const toId_send_to = toId(receiver._id)
          const message = await Message.find({ send_to: toId_send_to }).populate({
            path: 'send_from',
            model: Trainee,
            select: 'fullName id function group',
          })
          temp = message
        } else if (send_from && send_to) {
          const toId_send_from = toId(sender._id)
          const toId_send_to = toId(receiver._id)
          const message = await Message.find({
            send_from: toId_send_from,
            send_to: toId_send_to,
          }).populate({
            path: 'send_from send_to',
            model: Trainee,
            select: 'fullName id function group',
          })
          temp = message
        } else {
          const message = await Message.find({}).populate({
            path: 'send_from send_to',
            model: Trainee,
            select: 'fullName id function group',
          })
          res
            .status(200)
            .json({ success: true, data: message, message: 'Get message successfully' })
          return
        }
        res.status(200).json({ success: true, data: temp, message: 'Get message successfully' })
      } catch (error) {
        res.status(400).json({ success: false, message: error.message })
      }
      break
    case 'POST':
      try {
        const { send_from, send_to, message } = req.body
        const sender = await Trainee.findOne({ id: send_from })
        const receiver = await Trainee.findOne({ id: send_to })
        const toId_send_from = toId(sender._id)
        const toId_send_to = toId(receiver._id)

        const newMessage = new Message({
          send_from: toId_send_from,
          send_to: toId_send_to,
          message,
        })
        await newMessage.save()
        console.log(newMessage)
        await Trainee.findOneAndUpdate(
          { id: send_to },
          {
            $push: {
              messages: newMessage._id,
            },
          }
        )
        res
          .status(200)
          .json({ success: true, data: newMessage, message: 'Send message successfully' })
      } catch (error) {
        res.status(400).json({ success: false, message: error.message })
      }
      break
    case 'DELETE':
      try {
        const { id } = req.query
        const message = await Message.findByIdAndDelete(id).populate({
          path: 'send_from send_to',
          model: Trainee,
          select: 'fullName id function group',
        })
        await Trainee.findOneAndUpdate(
          { id: message.send_to.id },
          {
            $pull: {
              messages: message._id,
            },
          }
        )
        res
          .status(200)
          .json({ success: true, data: message, message: 'Delete message successfully' })
      } catch (error) {
        res.status(400).json({ success: false, message: error.message })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}

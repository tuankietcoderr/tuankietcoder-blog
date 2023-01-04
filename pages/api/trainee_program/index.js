import dbConnect from 'database'
import Message from 'database/models/Message'
import Trainee from 'database/models/Trainee'
import NextCors from 'nextjs-cors'

dbConnect()

export default async function handle(req, res) {
  await NextCors(req, res, {
    origin: '*',
  })
  const { method } = req
  switch (method) {
    case 'GET':
      try {
        const trainees = await Trainee.find({})
        res.status(200).json({ success: true, data: trainees })
      } catch (error) {
        res.status(400).json({ success: false, message: error.message })
      }
      break
    case 'POST':
      try {
        const { json } = req.body
        const json_object = JSON.parse(json)
        json_object.map(async (item) => {
          const trainee = await Trainee.findOne({ id: item.id })
          if (trainee) {
            await Trainee.findOneAndUpdate(
              { id: item.id },
              {
                $set: {
                  fullName: item.fullName,
                  function: item.function,
                  group: item.group,
                  ...item,
                },
              }
            )
          } else {
            const newTrainee = new Trainee({
              id: item.id,
              fullName: item.fullName,
              function: item.function,
              group: item.group,
              ...item,
            })
            await newTrainee.save()
          }
        })
        res.status(200).json({ success: true, message: 'Data updated successfully' })
      } catch (error) {
        res.status(400).json({ success: false, message: error.message })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}

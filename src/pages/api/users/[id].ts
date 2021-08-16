import { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '../../../lib/dbConnect'
import User, { UserResponse } from '../../../models/User'

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<UserResponse>,
) => {
  const {
    query: { id },
    method,
  } = req

  await dbConnect()

  switch (method) {
    case 'GET' /* Get a model by its ID */:
      try {
        const user = await User.findById(id)
        if (!user) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: user })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break

    case 'PUT' /* Edit a model by its ID */:
      try {
        const user = await User.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true,
        })
        if (!user) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true, data: user })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break

    case 'DELETE':
      try {
        const deletedUser = await User.deleteOne({ _id: id })
        if (!deletedUser) {
          return res.status(400).json({ success: false })
        }
        res.status(200).json({ success: true })
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break

    default:
      res.status(400).json({ success: false })
      break
  }
}

export default handler

import mongoose from 'mongoose'

export interface UserData {
  _id: string
  name: string
  description: string
}

export interface UserResponse {
  success: boolean
  data?: UserData | UserData[]
}

/* MessageSchema will correspond to a collection in your MongoDB database. */
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
    maxLength: 20,
  },
})

export default mongoose.models.User || mongoose.model('User', UserSchema)

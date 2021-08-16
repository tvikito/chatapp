import { Document, models, Schema, model, Model } from 'mongoose'

export interface UserData extends Document {
  name: string
  description: string
}

export interface UserResponse {
  success: boolean
  data?: UserData | UserData[]
}

/* MessageSchema will correspond to a collection in your MongoDB database. */
const UserSchema = new Schema<UserData, Model<UserData>, UserData>({
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

export default models.User || model('User', UserSchema)

import { Schema } from 'mongoose'
import { setLastUpdated, sameLastName } from './users.methods'
import { findOneOrCreate, findByAge } from './users.statics'
import { IUserDocument, IUserModel } from './users.types'

/* MessageSchema will correspond to a collection in your MongoDB database. */
const UserSchema = new Schema<IUserDocument, IUserModel>({
  name: {
    type: String,
    required: true,
  },
})

UserSchema.statics.findOneOrCreate = findOneOrCreate
UserSchema.statics.findByAge = findByAge

UserSchema.methods.setLastUpdated = setLastUpdated
UserSchema.methods.sameLastName = sameLastName

// export default models.User || model('User', UserSchema)
export default UserSchema

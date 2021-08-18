import { model, models } from 'mongoose'
import { IUserModel } from './users.types'
import UserSchema from './users.schema'

export const User = models.User || model<IUserModel>('User', UserSchema)

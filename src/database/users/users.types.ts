import { Document, Model } from 'mongoose'

export class IUser {
  name: string
  image: string
  createdAt?: Date
  updatedAt?: Date
}

export interface IUserDocument extends IUser, Document<string> {
  setLastUpdated: (this: IUserDocument) => Promise<void>
  sameLastName: (this: IUserDocument) => Promise<Document[]>
}

export interface IUserModel extends Model<IUserDocument> {
  findOneOrCreate: ({ name, image }: IUserDocument) => Promise<IUserDocument>
  findByAge: (min?: number, max?: number) => Promise<IUserDocument[]>
}

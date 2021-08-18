import { IUserDocument } from './users.types'

export async function findOneOrCreate(userId: string): Promise<IUserDocument> {
  const record = await this.findOne({ userId })

  if (record) {
    return record
  } else {
    return this.create({ userId })
  }
}

export async function findByAge(
  min?: number,
  max?: number,
): Promise<IUserDocument[]> {
  return this.find({ age: { $gte: min || 0, $lte: max || Infinity } })
}

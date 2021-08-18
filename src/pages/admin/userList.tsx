import { User } from 'src/database/users/users.model'
import { GetServerSideProps } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { IUserDocument } from '@database/users/users.types'
import { dbConnect } from '@database/dbConnect'
import { signIn, signOut, useSession } from 'next-auth/client'
import Header from '@components/Header'

interface Props {
  users: IUserDocument[]
}

const UserList: React.FC<Props> = ({ users }) => {
  return (
    <>
      {users.map((user) => (
        <div key={user._id}>
          <div className="card">
            <h5 className="pet-name">{user.name}</h5>
            <Image
              src={user.image}
              alt={`${user.name} avatar`}
              width={50}
              height={50}
            />

            <div className="btn-container">
              <Link href="/[id]/edit" as={`/${user._id}/edit`}>
                Edit
              </Link>
              <Link href="/[id]" as={`/${user._id}`}>
                View
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

/* Retrieves pet(s) data from mongodb database */
export const getServerSideProps: GetServerSideProps = async () => {
  await dbConnect()

  /* find all the data in our database */
  const result = await User.find({})
  const users = result.map((doc) => {
    console.log('result', result)

    const user = doc.toObject()
    user._id = user._id.toString()
    user.createdAt = user.createdAt.toString()
    user.updatedAt = user.updatedAt.toString()

    return user
  })

  return { props: { users } }
}

export default UserList

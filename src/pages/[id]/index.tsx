import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'
import { dbConnect } from '../../database/dbConnect'
import { User } from '../../database/users/users.model'
import { GetServerSideProps } from 'next'
import { IUserDocument } from '@database/users/users.types'

interface Props {
  user: IUserDocument
}

/* Allows you to view user card info and delete user card*/
const UserPage: React.FC<Props> = ({ user }) => {
  const router = useRouter()
  const [message, setMessage] = useState('')
  const handleDelete = async () => {
    const userId = router.query.id

    try {
      await fetch(`/api/users/${userId}`, {
        method: 'Delete',
      })
      router.push('/')
    } catch (error) {
      setMessage('Failed to delete the user.')
    }
  }

  return (
    <div key={user._id}>
      <div className="card">
        {/* <img src={user.image_url} /> */}
        <h5 className="pet-name">{user.name}</h5>
        <div className="main-content">
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
            <button className="btn delete" onClick={handleDelete}>
              Delete
            </button>
          </div>
        </div>
      </div>
      {message && <p>{message}</p>}
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  await dbConnect()

  const user = await User.findById(params.id).lean()
  user._id = user._id.toString()
  user.createdAt = user.createdAt.toString()
  user.updatedAt = user.updatedAt.toString()

  return { props: { user } }
}

export default UserPage

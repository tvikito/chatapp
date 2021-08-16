import { useState } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import dbConnect from '../../lib/dbConnect'
import User, { UserData } from '../../models/User'
import { GetServerSideProps } from 'next'

interface Props {
  user: UserData
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
          <p className="pet-name">{user.name}</p>
          {/* <p className="owner">Owner: {user.owner_name}</p> */}

          {/* Extra Pet Info: Likes and Dislikes */}
          {/* <div className="likes info">
            <p className="label">Likes</p>
            <ul>
              {user.likes.map((data, index) => (
                <li key={index}>{data} </li>
              ))}
            </ul>
          </div>
          <div className="dislikes info">
            <p className="label">Dislikes</p>
            <ul>
              {user.dislikes.map((data, index) => (
                <li key={index}>{data} </li>
              ))}
            </ul>
          </div> */}

          <div className="btn-container">
            <Link href="/[id]/edit" as={`/${user._id}/edit`}>
              <button className="btn edit">Edit</button>
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

  console.log('param', params)

  const user = await User.findById(params.id).lean()
  user._id = user._id.toString()

  return { props: { user } }
}

export default UserPage

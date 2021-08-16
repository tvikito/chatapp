import { GetServerSideProps } from 'next'
import Link from 'next/link'
import dbConnect from '../lib/dbConnect'
import User from '../models/User'

const Index = ({ users }) => (
  <>
    {/* Create a card for each pet */}
    {users.map((user) => (
      <div key={user._id}>
        <div className="card">
          {/* <img src={pet.image_url} /> */}
          <h5 className="pet-name">{user.name}</h5>
          <div className="main-content">
            <p className="pet-name">{user.name}</p>
            {/* <p className="owner">Owner: {pet.owner_name}</p> */}

            {/* Extra Pet Info: Likes and Dislikes */}
            {/* <div className="likes info">
              <p className="label">Likes</p>
              <ul>
                {pet.likes.map((data, index) => (
                  <li key={index}>{data} </li>
                ))}
              </ul>
            </div>
            <div className="dislikes info">
              <p className="label">Dislikes</p>
              <ul>
                {pet.dislikes.map((data, index) => (
                  <li key={index}>{data} </li>
                ))}
              </ul>
            </div> */}

            <div className="btn-container">
              <Link href="/[id]/edit" as={`/${user._id}/edit`}>
                <button className="btn edit">Edit</button>
              </Link>
              <Link href="/[id]" as={`/${user._id}`}>
                <button className="btn view">View</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    ))}
  </>
)

/* Retrieves pet(s) data from mongodb database */
export const getServerSideProps: GetServerSideProps = async () => {
  await dbConnect()

  /* find all the data in our database */
  const result = await User.find({})
  const users = result.map((doc) => {
    const user = doc.toObject()
    user._id = user._id.toString()
    return user
  })

  return { props: { users } }
}

export default Index

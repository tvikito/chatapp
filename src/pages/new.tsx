import { IUser } from '@database/users/users.types'
import Form from '../components/Form'

const NewUser = () => {
  const user = new IUser()

  return <Form formId="add-pet-form" user={user} />
}

export default NewUser

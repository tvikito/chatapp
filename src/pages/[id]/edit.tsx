import { useRouter } from 'next/router'
import useSWR from 'swr'
import Form from '@components/Form'
import { IUserDocument } from '@database/users/users.types'

const fetcher = (url) =>
  fetch(url)
    .then((res) => res.json())
    .then((json) => json.data)

const EditUser = () => {
  const router = useRouter()
  const { id } = router.query
  const { data: user, error } = useSWR<IUserDocument>(
    id ? `/api/users/${id}` : null,
    fetcher,
  )

  if (error) return <p>Failed to load</p>
  if (!user) return <p>Loading...</p>

  return <Form formId="edit-pet-form" user={user} forNewUser={false} />
}

export default EditUser

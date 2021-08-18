import React from 'react'
import { Provider, signIn, signOut, useSession } from 'next-auth/client'
import { Session } from 'next-auth'

// export const SessionContext = React.createContext<Session>(null)

interface Props {
  pageSession: any
}

const ProtectedRoute: React.FC<Props> = ({ children, pageSession }) => {
  const [session, loading] = useSession()

  console.log('>>> session', session, pageSession)

  if (loading) {
    return <>loading...</>
  }

  return (
    <>
      {!session ? (
        <>
          Not signed in
          <button onClick={() => signIn()}>Sign in</button>
        </>
      ) : (
        children
      )}
    </>
  )
}

export default ProtectedRoute

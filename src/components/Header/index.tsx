import React from 'react'
import styled from 'styled-components'
import { signIn, signOut, useSession } from 'next-auth/client'
import Link from 'next/link'

const Header: React.FC = () => {
  const [session, loading] = useSession()

  return (
    <div className="bg-black text-white">
      <div className="flex justify-between">
        <div>
          <ul className="flex gap-3">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/admin">Admin</Link>
            </li>
            <li>
              <Link href="/signup">Register</Link>
            </li>
          </ul>
        </div>
        <div className="flex gap-3">
          {!session && (
            <>
              Not signed in <br />
              <button onClick={() => signIn()}>Sign in</button>
            </>
          )}
          {session && (
            <>
              Signed in as {session.user.name} <br />
              <button onClick={() => signOut()}>Sign out</button>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header

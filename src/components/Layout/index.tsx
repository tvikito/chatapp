import React from 'react'
import styled from 'styled-components'
import { signIn, signOut, useSession } from 'next-auth/client'
import Link from 'next/link'
import Header from '@components/Header'

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <div className="bg-fuchsia-200 text-black-light">{children}</div>
    </>
  )
}

export default Layout

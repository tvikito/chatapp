import React from 'react'
import styled from 'styled-components'
import { signIn, signOut, useSession } from 'next-auth/client'
import Link from 'next/link'
import Header from '@components/Header'
import AdminMenu from '@components/AdminMenu'

const LayoutAdmin: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <AdminMenu />
      <div className="bg-purple-200 text-black-light">{children}</div>
    </>
  )
}

export default LayoutAdmin

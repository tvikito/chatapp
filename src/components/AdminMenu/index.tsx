import React from 'react'
import styled from 'styled-components'
import { signIn, signOut, useSession } from 'next-auth/client'
import Link from 'next/link'
import Header from '@components/Header'

const AdminMenu: React.FC = () => {
  return (
    <div className="bg-fuchsia-500">
      <ul className="flex gap-3">
        <li>
          <Link href="/admin">Dashboard</Link>
        </li>
        <li>
          <Link href="/admin/userList">UserList</Link>
        </li>
      </ul>
    </div>
  )
}

export default AdminMenu

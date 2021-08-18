import Layout from '@components/Layout'
import LayoutAdmin from '@components/LayoutAdmin'
import { Provider } from 'next-auth/client'
import Head from 'next/head'
import React, { ReactElement } from 'react'
import 'tailwindcss/tailwind.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const isWithAdminLayout: boolean = Component.isWithAdminLayout

  console.log('>>> component', isWithAdminLayout, Component)

  const getLayout = (page: ReactElement) =>
    isWithAdminLayout ? (
      <LayoutAdmin>{page}</LayoutAdmin>
    ) : (
      <Layout>{page}</Layout>
    )

  return (
    <>
      <Head>
        <title>ChatApp</title>
      </Head>

      <Provider session={pageProps.session}>
        {getLayout(<Component {...pageProps} />)}
      </Provider>
    </>
  )
}

export default MyApp

import Head from 'next/head'
import '../styles/index.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Pet Care App</title>
      </Head>

      <Component {...pageProps} />
    </>
  )
}

export default MyApp

import '../styles/globals.css'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Ping Pong Tracker</title>
        <meta name="description" content="Webapp that tracks Ping Pong Scores." />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      </Head>

      <Component {...pageProps} />
    </div>
  )
}

export default MyApp

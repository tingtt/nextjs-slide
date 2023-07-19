import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>nextjs-slide</title>
        <meta name='description' content='Web slide on nextjs' />
        <link rel='icon' href='/favicon.svg' />
      </Head>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp

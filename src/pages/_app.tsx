import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { RecoilRoot } from 'recoil'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className='font-sans bg-base-200'>
      <Head>
        <title>nextjs-slide</title>
        <meta name='description' content='Web slide on nextjs' />
        <link rel='icon' href='/favicon.svg' />
      </Head>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </div>
  )
}

export default MyApp

import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { RecoilRoot } from 'recoil'
import { useLayoutUtil } from '../../domain/model/Theme/layout'
import { PropsWithChildren } from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>nextjs-slide</title>
        <meta name='description' content='Web slide on nextjs' />
        <link rel='icon' href='/favicon.svg' />
      </Head>
      <RecoilRoot>
        <ThemeProvider>
          <Component {...pageProps} />
        </ThemeProvider>
      </RecoilRoot>
    </div>
  )
}

const ThemeProvider = ({ children }: PropsWithChildren) => {
  const { isDark } = useLayoutUtil()

  return (
    <div
      data-theme={isDark() ? 'dark' : 'light'}
      className={`${isDark() ? 'dark' : 'light'} bg-base-200`}
    >
      {children}
    </div>
  )
}

export default MyApp

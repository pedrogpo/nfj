import 'bootstrap/dist/css/bootstrap.min.css'
import { AppProps } from 'next/app'
import { defaultTheme } from '../core/constants/theme'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/global'
import { ReactElement, ReactNode } from 'react'
import { NextPage } from 'next'

// TODO: px to rem

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function NFJ({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle theme={defaultTheme} />
      {getLayout(<Component {...pageProps} />)}
    </ThemeProvider>
  )
}

export default NFJ

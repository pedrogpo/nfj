import 'bootstrap/dist/css/bootstrap.min.css'
import { AppProps } from 'next/app'
import { defaultTheme } from '../core/constants/theme'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/global'
import { ReactElement, ReactNode } from 'react'
import { NextPage } from 'next'
import '~/styles/fonts.css'
import DeviceSizeContextProvider from '~/context/DeviceSizeContext'
import HttpRequestHandlerContextProvider from '~/context/HttpRequestHandlerContext'

import { ToastContainerStyled } from '~/components/molecules/toast'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function NFJ({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <DeviceSizeContextProvider>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle theme={defaultTheme} />
        <HttpRequestHandlerContextProvider>
          <ToastContainerStyled />
          {getLayout(<Component {...pageProps} />)}
        </HttpRequestHandlerContextProvider>
      </ThemeProvider>
    </DeviceSizeContextProvider>
  )
}

export default NFJ

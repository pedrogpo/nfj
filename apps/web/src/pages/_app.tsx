import 'bootstrap/dist/css/bootstrap.min.css'
import { AppProps } from 'next/app'
import { defaultTheme } from '../core/constants/theme'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/global'
import { ReactElement, ReactNode } from 'react'
import { NextPage } from 'next'
import DeviceSizeContextProvider from '~/context/DeviceSizeContext'
import HttpRequestHandlerContextProvider from '~/context/HttpRequestHandlerContext'

import { ToastContainerStyled } from '~/components/molecules/toast'

import { Poppins } from 'next/font/google'

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const poppinsFont = Poppins({
  subsets: ['latin-ext'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  style: 'normal',
})

function NFJ({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <DeviceSizeContextProvider>
      <ThemeProvider theme={defaultTheme}>
        <style jsx global>{`
          html {
            font-family: ${poppinsFont.style.fontFamily};
          }
        `}</style>
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

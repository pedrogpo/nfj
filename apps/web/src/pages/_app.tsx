import { AppProps } from 'next/app'
import '../styles/reset.css'
import '../styles/globals.css'
import { defaultTheme } from '../core/constants/theme'
import { ThemeProvider } from 'styled-components'

function NFJ({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme} >
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default NFJ

import 'bootstrap/dist/css/bootstrap.min.css'
import { AppProps } from 'next/app'
import { defaultTheme } from '../core/constants/theme'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/global'

// TODO: px to rem

function NFJ({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle theme={defaultTheme} />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default NFJ

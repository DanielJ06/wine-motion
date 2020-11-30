import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from '../styles/global';
import theme from '../styles/theme';

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <style jsx global>
          {`@import url('https://fonts.googleapis.com/css2?family=Thasadith:ital,wght@0,400;0,700;1,400;1,700&display=swap');`}
        </style>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
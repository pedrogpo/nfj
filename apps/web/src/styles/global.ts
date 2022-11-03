import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body{
    ${({ theme }) => `
      background-color: ${theme.colors.background};
    `}
    font-family: 'Poppins', sans-serif;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  a{ 
    text-decoration: none !important;
  }

  img {
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    user-select: none;
    pointer-events: none;
  }

  ::-webkit-scrollbar {
      width: 3px;
      background-color: ${({ theme }) => theme.colors.background};
  }
  ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.colors.gray_600};
      border-radius: 50px;
  }

  ::-webkit-scrollbar-track {
      background: rgba(0, 0, 0, 0.0);
  }
`

export default GlobalStyle
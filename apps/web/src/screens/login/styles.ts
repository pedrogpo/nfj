import styled from 'styled-components'

export const LoginScreenContainer = styled.main.attrs({
  className: 'wrapper',
})``

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  > * {
    width: 100%;
  }
  > span {
    text-align: center;
    a {
      font-weight: bold;
    }
  }
`
export const LoginTitleContainer = styled.div`
  margin-bottom: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
`

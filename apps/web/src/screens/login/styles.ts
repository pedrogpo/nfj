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

export const LoginFormContainer = styled.form`
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

  .input__email {
    margin-bottom: 0.75rem;
  }
  .forgot__password {
    margin-top: 0.75rem;
    margin-bottom: 2.5rem;
    font-size: ${({ theme }) => theme.typography.text.xs};
    font-weight: ${({ theme }) => theme.typography.weight.medium};
    color: ${({ theme }) => theme.colors.gray_500};
    transition: color 0.2s ease-in-out;
    :hover {
      color: ${({ theme }) => theme.colors.primary_400};
    }
  }
`

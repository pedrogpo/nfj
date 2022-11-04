import styled, { css } from 'styled-components'

export const RegisterScreenContainer = styled.main.attrs({
  className: 'wrapper',
})``

export const RegisterContainer = styled.div`
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
export const RegisterTitleContainer = styled.div`
  margin-bottom: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
`

export const RegisterFormContainer = styled.form`
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  .input {
    margin-bottom: 0.75rem;
  }

  .terms__and__conditions {
    margin-top: 1.5rem;
    margin-bottom: 2.5rem;
  }

  .checkbox {
    margin-top: 1.5rem;
    margin-bottom: 2.5rem;
  }
`

export const CheckTermAndConditions = styled.label``

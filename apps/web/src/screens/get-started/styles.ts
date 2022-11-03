import styled from 'styled-components'

export const GetStartedContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`

export const MethodContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  > h1 {
    margin-bottom: 2rem;
  }

  .register-button {
    margin-bottom: 1.5rem;
  }

  .social-buttons {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    margin: 1.5rem 0;
  }

  a {
    color: ${({ theme }) => theme.colors.primary_400};
    font-weight: ${({ theme }) => theme.typography.weight.bold};
    font-size: ${({ theme }) => theme.typography.text.s};
  }
`

export const ImageContainer = styled.div`
  @media (max-width: ${({ theme }) => theme.screens.m}) {
    display: none;
  }

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  img {
    max-width: 264px;
    width: 100%;
    height: auto;
    margin-bottom: 1.5rem;
  }
  h2 {
    margin-bottom: 0.75rem;
  }
`

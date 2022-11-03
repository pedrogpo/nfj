import styled from 'styled-components'

export const GetStartedContainer = styled.main`
  height: 100%;
`

export const MethodContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  .method__title {
    margin-bottom: 2.5rem;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
  }

  .register__buttons {
    margin-bottom: 1.5rem;
  }

  .social__buttons {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 1rem;
    margin: 1.5rem 0;
    > span {
      text-align: center;
    }
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

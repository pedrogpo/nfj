import styled from 'styled-components'

export const GetStartedContainer = styled.main.attrs({ className: 'wrapper' })``

export const MethodContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .register__buttons {
    margin-bottom: 1.5rem;
  }

  a {
    color: ${({ theme }) => theme.colors.primary_400};
    font-weight: ${({ theme }) => theme.typography.weight.bold};
    font-size: ${({ theme }) => theme.typography.text.s};
  }
`

export const MethodTitleContainer = styled.div`
  margin-bottom: 2.5rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
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

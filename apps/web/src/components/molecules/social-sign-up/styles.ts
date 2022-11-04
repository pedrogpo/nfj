import styled from 'styled-components'

export const SocialSignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

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
`

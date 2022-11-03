import styled from 'styled-components'

export const TemplateContainer = styled.div`
  position: relative;
  min-height: 100vh;
  height: 100vh;

  .wrapper {
    height: 100%;
    padding-top: calc(70px + 2rem + 1rem);
  }
`
export const LogoContainer = styled.header`
  position: absolute;
  margin-top: 2rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.75rem;

  img {
    max-width: 40px;
    width: 100%;
    height: auto;
  }
`

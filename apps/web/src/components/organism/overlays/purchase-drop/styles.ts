import styled, { css } from 'styled-components'

interface DropCardProductProps {
  background: string
}
export const DropCardNewTag = styled.div`
  position: absolute;
  bottom: 0;
  transform: translate(0, 50%);
  padding: 0.5rem 1.25rem;
  background: ${({ theme }) => theme.colors.secondary_700};
  border-radius: 5px;
  z-index: 2;
`
export const DropCardProduct = styled.div<DropCardProductProps>`
  ${({ background }) => {
    return css`
      position: relative;
      background: ${background};
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 2rem;
      border-radius: 0px 0px 32px 32px;

      img {
        max-width: 96px;
        width: 100%;
        aspect-ratio: 0.53;
        height: auto;
        transition: all 0.2s ease-in-out;
      }
    `
  }}
  cursor: pointer;
`

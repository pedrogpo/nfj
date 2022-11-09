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

export const DropCardContainer = styled.div`
  width: 100%;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.gray_700};
  border-radius: 16px;
  &:hover ${DropCardProduct} img {
    scale: 1.3;
  }
`

export const DropCardInfo = styled.div`
  background-color: ${({ theme }) => theme.colors.gray_700};
  padding: 1.5rem;
`

export const DropCardProductInfo = styled.div`
  margin-top: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const DropCardProductDescription = styled.div`
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
`
export const DropCardProductSupporters = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  > div {
    display: flex;
    align-items: center;
  }
  svg {
    color: ${({ theme }) => theme.colors.gray_500};
  }
`

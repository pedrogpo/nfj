import styled, { css } from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'
import { Row } from 'react-bootstrap'
interface DropCardProductProps {
  background: string
}
export const DropNewTag = styled.div`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 50%);
  padding: 0.5rem 1.25rem;
  background: ${({ theme }) => theme.colors.secondary_700};
  border-radius: 5px;
`

export const StyledRow = styled(Row)`
  @media (max-width: ${({ theme }) => theme.screens.s}) {
    overflow-y: scroll;
  }
`
export const PurchaseDropContainer = styled.div<DropCardProductProps>`
  ${({ theme, background }) => {
    return css`
      @media (max-width: ${theme.screens.s}) {
        justify-content: flex-start;
        border-radius: 0px;
      }
      @media (min-width: ${theme.screens.s}) {
        max-height: 80vh;
      }

      position: relative;
      background: ${background};
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      height: 100%;
      width: 100%;
      border-radius: 20px;
    `
  }}
`

export const PurchaseCardProduct = styled.div`
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin-top: 3rem;
  padding-bottom: 2rem;
  height: 30vh;

  img {
    max-height: 230px;
    width: auto;
    height: 100%;
    aspect-ratio: 0.53;
    transition: all 0.2s ease-in-out;
  }
`

export const PurchaseCardInfo = styled.div`
  ${({ theme }) => {
    return css`
      @media (min-width: ${theme.screens.s}) {
        max-height: 40vh;
        overflow-y: scroll;
      }
      border-radius: 32px 32px 0 0;
      height: 100%;
      padding: 2rem 1.5rem;
      padding-bottom: 6rem;
      background: ${theme.colors.gray_700};
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    `
  }}
`
export const PurchaseHeader = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 0.5rem;

  > svg {
    cursor: pointer;
    color: ${({ theme }) => theme.colors.gray_500};
    width: 1.25rem;
    height: 1.25rem;
  }
`

export const PurchaseHeaderCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25rem;
`
export const PurchaseDropViews = styled.div`
  margin-top: 0.5rem;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: ${({ theme }) => theme.colors.gray_500};
`
export const PurchaseFooter = styled.footer`
  ${({ theme }) => {
    return css`
      @media (max-width: ${theme.screens.s}) {
        position: fixed;
        bottom: 0;
        right: 0;
        left: 0;
      }
      position: absolute;
      bottom: 0;
      right: 0;
      left: 0;
      background: ${theme.colors.gray_900};
      padding: 1rem 1.5rem;
      display: flex;
      justify-content: space-between;
    `
  }}
`
export const PurchaseFooterPrice = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.5rem;

  .purchase__footer__price {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.5rem;
  }
`

export const ReleaseInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background: rgba(96, 96, 96, 35%);
  line-height: 0;
  top: 1.5rem;
  left: 1.5rem;
  border: 0;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.gray_100};
`

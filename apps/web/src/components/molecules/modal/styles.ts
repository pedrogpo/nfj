import * as Dialog from '@radix-ui/react-dialog'
import { RefAttributes } from 'react'

import styled from 'styled-components'

interface OverlayProps {
  $isCenter: boolean
  $topGap: string
}

export const Overlay = styled(Dialog.Overlay)<OverlayProps>`
  padding-top: ${({ $topGap }) => $topGap};

  position: fixed;
  z-index: 1000;
  width: 100vw;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
  display: flex;
  justify-content: center;
  align-items: ${({ $isCenter }) => ($isCenter ? 'center' : 'flex-start')};
`

export const Content = styled(Dialog.Content)`
  width: inherit;
  height: fit-content;
  border-radius: 6px;
  z-index: 1001;
`

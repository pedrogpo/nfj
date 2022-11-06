import * as Dialog from '@radix-ui/react-dialog'

import styled from 'styled-components'

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  z-index: 1000;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
`

export const Content = styled(Dialog.Content)`
  border-radius: 6px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999999;
`

import * as Dialog from '@radix-ui/react-dialog'
import styled, { keyframes } from 'styled-components'

const fadeIn = keyframes`
0%  {
    opacity:0;
} 
100% {
    opacity: 1;
}`

const fadeOut = keyframes`
0%  {
    opacity:1;
} 
100% {
    opacity: 0;
}`

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
  &[data-state='open'] {
    animation-name: ${fadeIn};
    animation-duration: 1s;
    animation-iteration-count: 1;
    /* animation: ${fadeIn} 150ms cubic-bezier(0.22, 1, 0.36, 1); */
  }
  &[data-state='closed'] {
    animation-name: ${fadeOut};
    animation-duration: 1s;
    animation-iteration-count: 1;
    animation: ${fadeOut} 150ms cubic-bezier(0.22, 1, 0.36, 1);
  }
`

const slideIn = keyframes`
0%{
    transform:  translate3d(0,100%,0);
}
    100% {
        transform: translate3d(0,0,0)
    }
`

const slideOut = keyframes`
    0% { 
        transform: translate3d(0, 0, 0)
    }
    100%{
        transform:  translate3d(0, 100%,0);
}
`
export const Content = styled(Dialog.Content)`
  position: fixed;
  z-index: 999;
  top: 0%;
  bottom: 0;
  width: 100%;

  &[data-state='open'] {
    animation: ${slideIn} 200ms ease-in;
  }
  &[data-state='closed'] {
    animation: ${slideOut} 200ms ease-in;
  }
`

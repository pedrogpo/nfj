import { ToastContainer } from 'react-toastify'
import styled from 'styled-components'

export const ToastContainerStyled = styled(ToastContainer)`
  .Toastify__toast-body {
    color: white;
    font-family: 'Poppins', sans-serif;
    font-size: 0.75rem;
  }
  .Toastify__toast--error {
    background: ${({ theme }) => theme.colors.gray_700};
    border-radius: 12px;
  }
  .Toastify__toast--success {
    background: ${({ theme }) => theme.colors.gray_700};
    border-radius: 12px;
  }
`

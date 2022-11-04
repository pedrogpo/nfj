import styled from 'styled-components'

export const DividerHorizontal = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  .divider {
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray_500};
    width: 100%;
  }

  .content {
    padding: 0 1.5rem 0 1.5rem;
    color: ${({ theme }) => theme.colors.gray_500};
  }
`

import styled from 'styled-components'

export const Card = styled.div`
  min-width: 280px;
  max-width: 350px;

  position: relative;

  padding: 1.75rem 1.75rem;
  border-radius: 1.25rem;
  background-color: ${({ theme }) => theme.colors.gray_900};

  .dots svg {
    fill: ${({ theme }) => theme.colors.gray_500} !important;
  }

  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`

export const CardImage = styled.div`
  background: ${({ theme }) => theme.colors.gray_800};
  width: 100%;
  height: auto;
  padding: 3rem 1rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    object-fit: contain;
  }
`

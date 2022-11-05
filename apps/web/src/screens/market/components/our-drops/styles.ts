import styled from 'styled-components'

export const OurDropsSection = styled.section`
  width: 100%;
  margin-top: 7.5rem;
`

export const FilterRow = styled.div`
  margin-top: 2rem;
  margin-bottom: 3rem;
  display: flex;
  gap: 1rem;
`

export const FilterButton = styled.button`
  border: 0;
  border-radius: 50px;
  background: ${({ theme }) => theme.colors.gray_700};
  font-size: ${({ theme }) => theme.typography.text.m};
  font-weight: ${({ theme }) => theme.typography.weight.medium};
  color: ${({ theme }) => theme.colors.gray_100};
  padding: 0.75rem 2rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: ${({ theme }) => theme.colors.gray_600};
  }

  &.selected {
    background: ${({ theme }) => theme.colors.primary_400};
  }
`

import styled, { css } from 'styled-components'
import * as Checkbox from '@radix-ui/react-checkbox'

export const CheckBoxContainer = styled.div.attrs({ className: 'checkbox' })`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  label {
    ${({ theme }) => css`
      font-size: ${theme.typography.text.s};
      color: ${theme.colors.gray_100};
    `};
    a {
      font-weight: bold;
    }
  }
`
export const CheckBoxRoot = styled(Checkbox.Root)`
  all: unset;
  background: transparent;
  border: 2px solid ${({ theme }) => theme.colors.gray_500};
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;

  &[data-state='checked'] {
    background: ${({ theme }) => theme.colors.primary_400};
    border: 2px solid transparent;
  }
`

export const CheckBoxIndicator = styled(Checkbox.Indicator)`
  color: ${({ theme }) => theme.colors.gray_100};
  svg {
    width: 1rem;
    height: 1rem;
  }
`

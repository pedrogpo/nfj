import styled, { css } from 'styled-components'
import { ColorThemeType } from '~/core/constants/theme'

interface ButtonProps {
  color: ColorThemeType
  size: 'm' | 'l'
  fill: 'contained' | 'outlined'
  hug: boolean
}

const sizeVariants = (size) => {
  return {
    m: css`
      padding: 0.75rem 2rem;
      font-size: ${({ theme }) => theme.typography.text.s};
      font-weight: ${({ theme }) => theme.typography.weight.medium};
    `,
    l: css`
      padding: 0.875rem 2.5rem;
      font-size: ${({ theme }) => theme.typography.text.m};
      font-weight: ${({ theme }) => theme.typography.weight.medium};
    `,
  }[size]
}

export const ButtonContainer = styled.button<ButtonProps>`
  ${({ hug }) =>
    css`
      width: ${hug ? 'fit-content' : '100%'};
    `}

  ${({ theme, color, fill }) => `
    background: ${fill === 'contained' ? theme.colors[color] : 'transparent'};
    border: ${
      fill === 'outlined' ? `1px solid ${theme.colors[color]}` : 'none'
    };
    color: ${theme.colors.gray_100};
  `}

  ${({ size }) => sizeVariants(size)}

  border-radius: 5px;
`

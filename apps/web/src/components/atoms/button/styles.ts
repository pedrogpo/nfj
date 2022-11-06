import styled, { css } from 'styled-components'
import { ColorThemeType } from '~/core/constants/theme'

interface ButtonProps {
  color: ColorThemeType
  size: 'm' | 'l'
  fill: 'contained' | 'outlined' | 'white'
  hug: boolean
  boxShadow: boolean
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
  transition: .3s ease all;

  ${({ hug }) =>
    css`
      width: ${hug ? 'fit-content' : '100%'};
    `}

  background: transparent;

  ${({ theme, color, fill }) => `
    color: ${theme.colors.gray_100};

    ${fill === 'contained' ? 
      `background: ${theme.colors.primary_500};` :
      fill === 'white' ? `
        background: ${theme.colors.gray_100};
        color: ${theme.colors.primary_500};
      ` : ''
    }
    border: ${
      fill === 'outlined' ? `1px solid ${theme.colors[color]}` : 'none'
    };
  `}

  ${({ size }) => sizeVariants(size)}

  ${({ boxShadow }) =>
    boxShadow &&
    css`
      box-shadow: 0px 3px 34px 3px rgba(88, 55, 221, 0.3);
      &:hover{
        box-shadow: 0px 0px 34px 30px rgba(88, 55, 221, 0);
      }
    `
  }

  border-radius: 5px;
`

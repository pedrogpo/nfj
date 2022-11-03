import styled, { css } from 'styled-components'
import { ColorThemeType } from '~/core/constants/theme'

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

interface InputProps {
  color?: ColorThemeType
  sizeOf?: 'm' | 'l'
  fill?: 'contained' | 'outlined'
  hug?: boolean
  iconPos?: 'left' | 'right'
  iconSize?: number
}

export const Input = styled.input<InputProps>`
  transition: 0.3s all ease;
  border-radius: 10px;
  max-width: 100%;
  width: 100%;

  outline: none;
  border: 0;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray_500 };
    font-weight: ${({ theme }) => theme.typography.weight.medium };;
  }

  ${({ sizeOf }) => sizeVariants(sizeOf)}

  ${({iconPos, iconSize}) => iconPos === 'left' && `padding-left: calc(1.5rem + ${iconSize}px);`}

  ${({ theme, color, fill }) => `
    background: ${fill === 'contained' ? theme.colors[color] : 'transparent'};
    border: ${
      fill === 'outlined' ? `1px solid ${theme.colors[color]}` : 'none'
    };
    color: ${theme.colors.gray_100};
  `}
`

export const InputBox = styled.div`
  position: relative;
`

export const InputIcon = styled.span<InputProps>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  line-height: 0;

  z-index: 1;

  left: 15px;
  ${(props) => props.iconPos === 'right' && 'right: 15px; left: initial;'}

  svg {
    ${({iconSize}) => iconSize && `width: ${iconSize}px;`}
    ${({iconSize}) => iconSize && `height: ${iconSize}px;`}
  }
`

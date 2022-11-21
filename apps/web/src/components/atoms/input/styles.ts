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
      padding: 0.875rem 1rem;
      font-size: ${({ theme }) => theme.typography.text.s};
      font-weight: ${({ theme }) => theme.typography.weight.regular};
    `,
  }[size]
}

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

interface InputProps extends InputIconProps {
  background: ColorThemeType
}

interface InputIconProps {
  sizeOf: 'm' | 'l'
  iconPos: 'left' | 'right'
  iconSize?: number
}

export const Input = styled.input<InputProps>`
  border-radius: 10px;
  width: 100%;
  outline: none;
  border: 1px solid transparent;

  &::placeholder {
    color: ${({ theme }) => theme.colors.gray_500};
    font-weight: ${({ theme }) => theme.typography.weight.medium};
  }

  ${({ sizeOf }) => sizeVariants(sizeOf)}

  ${({ iconPos, sizeOf, iconSize }) =>
    iconPos === 'left' &&
    `padding-left: calc(1.5rem + ${
      iconSize ? `${iconSize}px` : sizeOf === 'm' ? '22px' : '24px'
    });`}

  ${({ theme, background }) => css`
    background: ${theme.colors[background]};
    border: 1px solid transparent;
    color: ${theme.colors.gray_100};
  `}

 &:focus {
    border: 1px solid rgba(120, 93, 228, 0.4);
  }

  &:disabled {
    cursor: text;
  }

  transition: 0.3s ease all;
`

export const InputBox = styled.div`
  position: relative;
  width: 100%;
`

export const InputIcon = styled.span<InputIconProps>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  line-height: 0;
  z-index: 1;

  left: 15px;
  ${(props) => props.iconPos === 'right' && 'right: 15px; left: initial;'}

  svg {
    color: ${({ theme }) => theme.colors.gray_500};

    ${({ sizeOf, iconSize }) =>
      css`
        width: ${iconSize ? `${iconSize}px` : sizeOf === 'm' ? '22px' : '24px'};
        height: ${iconSize
          ? `${iconSize}px`
          : sizeOf === 'm'
          ? '22px'
          : '24px'};
      `}
  }
`
export const InputError = styled.span`
  margin-top: 0.5rem;
  color: ${({ theme }) => theme.colors.danger};
  font-size: 0.75rem;
`

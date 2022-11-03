import styled, { css } from 'styled-components'

const sizeVariants = (size) => {
  return {
    m: css`
      padding: 0.75rem 2rem;
      font-size: ${({ theme }) => theme.typography.text.s};
      font-weight: ${({ theme }) => theme.typography.weight.medium};
    `,
    l: css`
      padding: 0.875rem 1rem;
      font-size: ${({ theme }) => theme.typography.text.m};
      font-weight: ${({ theme }) => theme.typography.weight.regular};
    `,
  }[size]
}

interface InputProps {
  sizeOf: 'm' | 'l'
  iconPos: 'left' | 'right'
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
    color: ${({ theme }) => theme.colors.gray_500};
    font-weight: ${({ theme }) => theme.typography.weight.medium};
  }

  ${({ sizeOf }) => sizeVariants(sizeOf)}

  ${({ iconPos, sizeOf, iconSize }) =>
    iconPos === 'left' &&
    `padding-left: calc(1.5rem + ${
      iconSize ? `${iconSize}px` : sizeOf === 'm' ? '22px' : '24px'
    });`}

  ${({ theme }) => css`
    background: ${theme.colors.gray_700};
    border: 1px solid transparent;
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

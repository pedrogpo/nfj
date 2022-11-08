import styled, { css } from 'styled-components'
import { ColorThemeType } from '~/core/constants/theme'

interface UserCollectorBoxProps {
  outLineColor: ColorThemeType
  size: string
}
export const UserCollectorBox = styled.div<UserCollectorBoxProps>`
  ${({ size }) => css`
    width: ${size};
    height: ${size};
  `}
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary_400};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  color: ${({ theme }) => theme.colors.gray_100};
  font-weight: ${({ theme }) => theme.typography.weight.medium};
  font-size: ${({ theme }) => theme.typography.text.xs};

  outline: 3px solid ${({ theme, outLineColor }) => theme.colors[outLineColor]};
`

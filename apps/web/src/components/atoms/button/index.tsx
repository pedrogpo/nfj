import { ButtonHTMLAttributes } from 'react'
import { ColorThemeType } from '~/core/constants/theme'
import * as S from './styles'

interface ButtonAppProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: ColorThemeType
  size?: 'm' | 'l'
  fill?: 'contained' | 'outlined' | 'white'
  hug?: boolean
  boxShadow?: boolean
}

export default function Button({
  color = 'primary_500',
  size = 'm',
  fill = 'contained',
  hug = true,
  boxShadow = false,
  children,
  ...props
}: React.PropsWithChildren<ButtonAppProps>) {
  return (
    <S.ButtonContainer
      color={color}
      size={size}
      fill={fill}
      hug={hug}
      boxShadow={boxShadow}
      {...props}
    >
      {children}
    </S.ButtonContainer>
  )
}

import { InputHTMLAttributes } from 'react'
import { ColorThemeType } from '~/core/constants/theme'
import * as S from './styles'

interface InputAppProps extends InputHTMLAttributes<HTMLButtonElement> {
  sizeOf?: 'm' | 'l'
  color: ColorThemeType
  fill?: 'contained' | 'outlined'
  hug?: boolean,
  iconPos?: 'left' | 'right',
  iconSize?: number
  icon?: JSX.Element
}

export default function Input ({
  sizeOf = 'm',
  color = 'primary_500',
  fill = 'contained',
  hug = false,
  iconPos = 'left',
  iconSize = 24,
  icon,
  ...props
}: React.PropsWithChildren<InputAppProps>) {
  return (
    <S.InputBox>
      {icon && (
        <S.InputIcon
          iconSize={iconSize}
          iconPos={iconPos}
          className="icon__float"
        >
          {icon}
        </S.InputIcon>
      )}
      <S.Input
        iconSize={iconSize}
        iconPos={iconPos}
        sizeOf={sizeOf}
        fill={fill}
        color={color}
        type="text"
        className=""
        autoComplete="none"
        {...props}
      />
    </S.InputBox>
  )
}

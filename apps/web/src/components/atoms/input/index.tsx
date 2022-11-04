import { InputHTMLAttributes } from 'react'
import { ColorThemeType } from '~/core/constants/theme'
import * as S from './styles'

interface InputAppProps extends InputHTMLAttributes<HTMLButtonElement> {
  sizeOf?: 'm' | 'l'
  iconPos?: 'left' | 'right'
  icon?: JSX.Element
  iconSize?: number
  className?: string
  background?: ColorThemeType
}

export default function Input({
  sizeOf = 'm',
  iconPos = 'left',
  icon,
  iconSize,
  className,
  background = 'gray_800',
  ...props
}: React.PropsWithChildren<InputAppProps>) {
  return (
    <S.InputBox className={className}>
      {icon && (
        <S.InputIcon
          sizeOf={sizeOf}
          iconPos={iconPos}
          className="icon__float"
          iconSize={iconSize}
        >
          {icon}
        </S.InputIcon>
      )}
      <S.Input
        background={background}
        iconPos={iconPos}
        sizeOf={sizeOf}
        type="text"
        className=""
        autoComplete="none"
        {...props}
      />
    </S.InputBox>
  )
}

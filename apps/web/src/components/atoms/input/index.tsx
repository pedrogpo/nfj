import { InputHTMLAttributes } from 'react'
import { ColorThemeType } from '~/core/constants/theme'
import * as S from './styles'

interface InputAppProps extends InputHTMLAttributes<HTMLButtonElement> {
  sizeOf?: 'm' | 'l'
  iconPos?: 'left' | 'right'
  icon?: JSX.Element
  iconSize?: number
  className?: string
}

export default function Input({
  sizeOf = 'm',
  iconPos = 'left',
  icon,
  iconSize,
  className,
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

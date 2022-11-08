import { UserAvatar } from '~/components/atoms'
import { ColorThemeType } from '~/core/constants/theme'
import * as S from './styles'

interface UserCollectorProps {
  outLineColor?: ColorThemeType
}
export default function UserCollectorRow({ outLineColor }: UserCollectorProps) {
  return (
    <S.UserCollectorContainer>
      <UserAvatar outLineColor={outLineColor} />
      <UserAvatar outLineColor={outLineColor} />
      <UserAvatar outLineColor={outLineColor} />
      <UserAvatar outLineColor={outLineColor} />
    </S.UserCollectorContainer>
  )
}

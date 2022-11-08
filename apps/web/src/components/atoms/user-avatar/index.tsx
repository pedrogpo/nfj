import Image from 'next/image'
import { ColorThemeType } from '~/core/constants/theme'
import * as S from './styles'

interface UserCollectorProps {
  outLineColor?: ColorThemeType
  name?: string
  avatar?: string
  size?: string
}
export default function UserAvatar({
  outLineColor = 'gray_900',
  name = 'P',
  avatar,
  size = '1.55rem',
}: UserCollectorProps) {
  return (
    <S.UserCollectorBox size={size} outLineColor={outLineColor}>
      {avatar ? (
        <Image src={avatar} alt={`${name} avatar`} height={50} width={50} />
      ) : (
        name[0].toUpperCase()
      )}
    </S.UserCollectorBox>
  )
}

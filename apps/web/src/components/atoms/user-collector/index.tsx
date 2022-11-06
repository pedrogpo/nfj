import { ColorThemeType } from '~/core/constants/theme'
import * as S from './styles'

interface UserCollectorProps {
  outLineColor?: ColorThemeType
}
export default function UserCollector({
  outLineColor = 'gray_900',
}: UserCollectorProps) {
  return (
    <S.UserCollectorContainer>
      <S.UserCollectorBox outLineColor={outLineColor}>P</S.UserCollectorBox>
      <S.UserCollectorBox outLineColor={outLineColor}>P</S.UserCollectorBox>
      <S.UserCollectorBox outLineColor={outLineColor}>P</S.UserCollectorBox>
      <S.UserCollectorBox outLineColor={outLineColor}>P</S.UserCollectorBox>
    </S.UserCollectorContainer>
  )
}

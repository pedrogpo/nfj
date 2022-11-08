import { Text, UserAvatar } from '~/components/atoms'
import { formatterDistanceFromNow } from '~/core/utils/formatters'
import * as S from './styles'

export default function UserPurchaserTile() {
  return (
    <S.UserPurchaseContainer>
      <S.UserPurchaseInformationContainer>
        <UserAvatar size="2rem" />
        <S.UserPurchaseInformation>
          <Text color="gray_100" weight="medium" size="xs">
            Mano Brown
          </Text>
          <Text color="gray_500" weight="regular" size="xs">
            Purchase at $24.99
          </Text>
        </S.UserPurchaseInformation>
      </S.UserPurchaseInformationContainer>
      <Text color="gray_500" weight="regular" size="xs">
        {formatterDistanceFromNow(new Date())}
      </Text>
    </S.UserPurchaseContainer>
  )
}

import { BiHistory } from 'react-icons/bi'
import Accordion from '../accordion'
import UserPurchaserTile from '../user-purchaser-tile'
import * as S from './styles'

export default function LastPurchaseSection() {
  return (
    <S.LastPurchasersContainer>
      <Accordion title="Last Purchases" icon={<BiHistory />}>
        <S.LastPurchasersList>
          <UserPurchaserTile />
          <UserPurchaserTile />
        </S.LastPurchasersList>
      </Accordion>
    </S.LastPurchasersContainer>
  )
}

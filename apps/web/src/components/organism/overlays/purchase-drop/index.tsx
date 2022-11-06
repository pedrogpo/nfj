import { Text } from '~/components/atoms'
import BottomSheet from '~/components/molecules/bottom-sheet'
import useMobile from '~/hooks/use-mobile/hook'
import Modal from '../../../molecules/modal'
import * as S from './styles'

export default function DropPurchase() {
  const isMobile = useMobile()

  return (
    <>
      {isMobile ? (
        <BottomSheet>
          <DropPurchaseContent />
        </BottomSheet>
      ) : (
        <Modal>
          <DropPurchaseContent />
        </Modal>
      )}
    </>
  )
}

function DropPurchaseContent() {
  return (
    <>
      <S.DropCardProduct background="red">
        {/* <Image
          alt={drop.name}
          src={drop.product.img}
          width={300}
          height={300}
        /> */}
        <S.DropCardNewTag>
          <Text color="gray_100" weight="bold" size="xs">
            NEW
          </Text>
        </S.DropCardNewTag>
      </S.DropCardProduct>
    </>
  )
}

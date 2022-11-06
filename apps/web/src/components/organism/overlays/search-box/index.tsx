import * as S from './styles'
import BottomSheet from '~/components/molecules/bottom-sheet'
import useMobile from '~/hooks/use-mobile/hook'
import Modal from '../../../molecules/modal'

export default function SearchBox() {
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
      <h1>asddas</h1>
    </>
  )
}

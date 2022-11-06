import BottomSheet from '~/components/molecules/bottom-sheet'
import useMobile from '~/hooks/use-mobile/hook'
import Modal from '../modal'

export default function DropPurchase() {
  const isMobile = useMobile()
  return (
    <>
      {isMobile ? (
        <BottomSheet>
          <h1>Teste</h1>
        </BottomSheet>
      ) : (
        <Modal>
          <h1>Teste</h1>
        </Modal>
      )}
    </>
  )
}

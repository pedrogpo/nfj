import * as S from './styles'
import BottomSheet from '~/components/molecules/bottom-sheet'
import useMobile from '~/hooks/use-mobile/hook'
import Modal from '../../../molecules/modal'
import { Button, Input } from '~/components/atoms'

import { BiSearchAlt } from 'react-icons/bi'

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

function SearchProductBox() {
  return (
    <S.SearchProductBox>
      <Input
        background="gray_700"
        icon={<BiSearchAlt color="white" />}
        sizeOf="m"
        type="text"
        placeholder="Search for products"
      />
      <Button
        fill='contained'
        size='m'
      >Search</Button>
    </S.SearchProductBox>
  )
}

function DropPurchaseContent() {
  return (
    <>
      <SearchProductBox/>
    </>
  )
}

import * as Dialog from '@radix-ui/react-dialog'
import * as S from './styles'

interface BottomsheetProps {
  children: React.ReactNode
}
export default function BottomSheet({ children }: BottomsheetProps) {
  return (
    <Dialog.Portal>
      <S.Overlay />
      <S.Content>{children}</S.Content>
    </Dialog.Portal>
  )
}

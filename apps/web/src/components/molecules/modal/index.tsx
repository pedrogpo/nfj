import * as Dialog from '@radix-ui/react-dialog'
import * as S from './styles'

interface ModalProps {
  children: React.ReactNode
}
export default function Modal({ children }: ModalProps) {
  return (
    <Dialog.Portal>
      <S.Overlay />
      <S.Content>{children}</S.Content>
    </Dialog.Portal>
  )
}

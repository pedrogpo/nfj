import * as Dialog from '@radix-ui/react-dialog'
import * as S from './styles'

interface ModalProps {
  children: React.ReactNode
  isCenter?: boolean
}

export default function Modal({ children, isCenter = false }: ModalProps) {
  return (
    <Dialog.Portal>
      <S.Overlay isCenter={isCenter}>
        <S.Content className='container'>{children}</S.Content>
      </S.Overlay>
    </Dialog.Portal>
  )
}

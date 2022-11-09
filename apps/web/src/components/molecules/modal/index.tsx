import * as Dialog from '@radix-ui/react-dialog'
import * as S from './styles'

interface ModalProps {
  children: React.ReactNode
  isCenter?: boolean
  topGap?: string
}

export default function Modal({
  children,
  isCenter = false,
  topGap = '0',
}: ModalProps) {
  return (
    <Dialog.Portal>
      <S.Overlay $topGap={topGap} $isCenter={isCenter}>
        <S.Content className="container">{children}</S.Content>
      </S.Overlay>
    </Dialog.Portal>
  )
}

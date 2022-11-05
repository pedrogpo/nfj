import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'
import * as S from './styles'

interface SwiperControlProps {
  onClick: () => void
  direction: 'left' | 'right'
}

export default function SwiperControl({
  direction,
  onClick,
}: SwiperControlProps) {
  return (
    <S.SwiperControlContainer onClick={onClick}>
      {direction === 'left' ? (
        <BiChevronLeft size={30} />
      ) : (
        <BiChevronRight size={30} />
      )}
    </S.SwiperControlContainer>
  )
}

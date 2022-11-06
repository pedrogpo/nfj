import { MutableRefObject, useCallback } from 'react'
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'
import * as S from './styles'
import SwiperCore from 'swiper'

interface SwiperControlProps {
  //   onClick: () => void
  direction: 'left' | 'right'
  sliderRef: MutableRefObject<SwiperCore>
}

export default function SwiperControl({
  direction,
  sliderRef,
}: SwiperControlProps) {
  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return
    sliderRef.current.slidePrev()
  }, [sliderRef])

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return
    sliderRef.current.slideNext()
  }, [sliderRef])
  return (
    <S.SwiperControlContainer
      onClick={direction === 'left' ? handlePrev : handleNext}
    >
      {direction === 'left' ? (
        <BiChevronLeft size={30} />
      ) : (
        <BiChevronRight size={30} />
      )}
    </S.SwiperControlContainer>
  )
}

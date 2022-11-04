import * as S from './styles'
import { ProductCard } from '~/components/molecules'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'
import { EffectCoverflow, Pagination, Navigation } from 'swiper'

import { BiChevronLeft, BiChevronRight } from 'react-icons/bi'
import { useCallback, useRef } from 'react'

import SwiperCore from 'swiper'
import Image from 'next/image'

import overlayImg from 'public/overlays/showcase.svg'

export default function Jumbotron() {
  const sliderRef = useRef<SwiperCore>()

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return
    sliderRef.current.slidePrev()
  }, [])

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return
    sliderRef.current.slideNext()
  }, [])

  return (
    <S.Showcase>
      <div style={{position: 'relative'}}>
        <Swiper
          onInit={(core) => {
            sliderRef.current = core
          }}
          effect={'coverflow'}
          loop={true}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView="auto"
          spaceBetween={120}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 300,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={true}
          navigation={true}
          modules={[EffectCoverflow, Pagination, Navigation]}
        >
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
          <SwiperSlide>
            <ProductCard />
          </SwiperSlide>
        </Swiper>
        <div
          className="prev-arrow pagination__left pagination__icon"
          onClick={handlePrev}
        >
          <BiChevronLeft size={30} />
        </div>
        <div
          className="next-arrow pagination__right pagination__icon"
          onClick={handleNext}
        >
          <BiChevronRight size={30} />
        </div>
      </div>
    </S.Showcase>
  )
}

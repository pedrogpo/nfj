import * as S from './styles'
import { useRef } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Text, Title } from '~/components/atoms'
import AuthorCard from '~/components/organism/cards/author-card'

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Pagination } from 'swiper'
import SwiperCore from 'swiper'
import SwiperControl from '~/components/atoms/swiper-control'
import { Author } from '~/interfaces/author'

export const authors: Author[] = [
  {
    id: 1,
    name: 'Strawberry Magic',
    avatar: '/images/market/strawberry.png',
    collections: 3,
    isVerified: true,
  },
  {
    id: 2,
    name: 'Hasta La Mango',
    avatar: '/images/market/mango.png',
    collections: 5,
    isVerified: false,
  },
  {
    id: 3,
    name: 'Lil Apple',
    avatar: '/images/market/apple.png',
    collections: 6,
    isVerified: true,
  },
  {
    id: 4,
    name: 'Vegemon',
    avatar: '/images/market/lemon.png',
    collections: 5,
    isVerified: true,
  },
  {
    id: 5,
    name: 'Graperd',
    avatar: '/images/market/grape.png',
    collections: 5,
    isVerified: true,
  },
  {
    id: 6,
    name: 'Strawberry Magic',
    avatar: '/images/market/strawberry.png',
    collections: 3,
    isVerified: true,
  },
  {
    id: 7,
    name: 'Hasta La Mango',
    avatar: '/images/market/mango.png',
    collections: 5,
    isVerified: false,
  },
  {
    id: 10,
    name: 'Lil Apple',
    avatar: '/images/market/apple.png',
    collections: 6,
    isVerified: true,
  },
  {
    id: 8,
    name: 'Vegemon',
    avatar: '/images/market/lemon.png',
    collections: 5,
    isVerified: true,
  },
  {
    id: 9,
    name: 'Graperd',
    avatar: '/images/market/grape.png',
    collections: 5,
    isVerified: true,
  },
]
export default function TopAuthors() {
  const sliderRef = useRef<SwiperCore>()
  return (
    <S.TopAuthorsSection>
      <Row>
        <Col>
          <Row className="section__title">
            <Col>
              <Title size="l" weight="bold" color="gray_100">
                Top Authors
              </Title>
              <Text size="xl" weight="medium" color="gray_500">
                Check out the most famous collections
              </Text>
            </Col>
            <Col className="d-md-block d-none" md="2">
              <div className="swiper__controls">
                <SwiperControl direction="left" sliderRef={sliderRef} />
                <SwiperControl direction="right" sliderRef={sliderRef} />
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      <Swiper
        onInit={(core) => {
          sliderRef.current = core
        }}
        loop={true}
        navigation={true}
        freeMode={true}
        slidesPerView="auto"
        spaceBetween={20}
        modules={[FreeMode, Pagination]}
      >
        {authors.map((author) => (
          <SwiperSlide key={author.id}>
            <AuthorCard author={author} />
          </SwiperSlide>
        ))}
      </Swiper>
    </S.TopAuthorsSection>
  )
}

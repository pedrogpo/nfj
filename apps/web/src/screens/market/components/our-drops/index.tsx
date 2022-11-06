import * as S from './styles'
import { Col, Row } from 'react-bootstrap'
import { Text, Title } from '~/components/atoms'
import DropCard from '~/components/organism/drop-card'
import { authors } from '../top-authors-section'
import { Author } from '~/interfaces/author'
interface Product {
  img: string
  background: string
}
export interface Drop {
  id: number
  author: Author
  product: Product
  name: string
  description: string
  price: number
  createdAt: string
}

const drops: Drop[] = [
  {
    id: 1,
    author: authors[0],
    name: 'Peach Kappo',
    product: {
      img: '/juices/pink-light.png',
      background: '#EDB1AD',
    },
    description: 'bla',
    price: 24.9,
    createdAt: '2021-05-01T00:00:00.000Z',
  },
  {
    id: 2,
    author: authors[2],
    name: 'Orange Kappo',
    product: {
      img: '/juices/orange.png',
      background: '#EDD3AD',
    },
    description: 'bla',
    price: 24.9,
    createdAt: '2021-05-01T00:00:00.000Z',
  },
  {
    id: 3,
    author: authors[1],
    name: 'Mango Kappo',
    product: {
      img: '/juices/green.png',
      background: '#ADEDB3',
    },
    description: 'bla',
    price: 24.9,
    createdAt: '2021-05-01T00:00:00.000Z',
  },
  {
    id: 4,
    author: authors[4],
    name: 'Grape Kappo',
    product: {
      img: '/juices/purple.png',
      background: '#E0ADED',
    },
    description: 'bla',
    price: 24.9,
    createdAt: '2021-05-01T00:00:00.000Z',
  },
  {
    id: 5,
    author: authors[0],
    name: 'Strawberry Kappo',
    product: {
      img: '/juices/pink.png',
      background: '#EDADBC   ',
    },
    description: 'bla',
    price: 24.9,
    createdAt: '2021-05-01T00:00:00.000Z',
  },
]
export default function OurDrops() {
  return (
    <S.OurDropsSection>
      <Row>
        <Col>
          <Row className="section__title">
            <Col>
              <Title size="l" weight="bold" color="gray_100">
                Our drops
              </Title>
              <Text size="xl" weight="medium" color="gray_500">
                Check out our juicy drops
              </Text>
            </Col>
          </Row>
        </Col>
      </Row>
      <S.FilterRow>
        <S.FilterButton className="selected">All</S.FilterButton>
        <S.FilterButton>Popular</S.FilterButton>
        <S.FilterButton>Fresh</S.FilterButton>
      </S.FilterRow>
      <S.DropGrid>
        {drops.map((drop) => (
          <DropCard key={drop.id} drop={drop} />
        ))}
      </S.DropGrid>
    </S.OurDropsSection>
  )
}

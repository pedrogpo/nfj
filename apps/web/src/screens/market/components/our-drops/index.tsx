import * as S from './styles'
import { Col, Row } from 'react-bootstrap'
import { Text, Title } from '~/components/atoms'

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
    </S.OurDropsSection>
  )
}

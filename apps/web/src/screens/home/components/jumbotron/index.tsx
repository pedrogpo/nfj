import { Col, Container, Row } from 'react-bootstrap'
import { Title, Text, Button } from '~/components/atoms'
import { ProductCard } from '~/components/molecules'
import * as S from './styles'

function Content() {
  return (
    <S.Content>
      <Title color="gray_100" size="xl" weight="bold">
        Start consuming <br />
        your favorite <S.TextGradient>Juice</S.TextGradient>
      </Title>
      <Text className='mb-4' color="gray_500" size="xl" weight="regular">
        Juices are a collection of virtual items that you can <br /> purchase through
        our website, enjoy.
      </Text>
      <div className="d-flex align-items-center gap-4 flex-wrap">
        <Button color="primary_500" size="l" fill="contained" hug={false}>
          Start juicing
        </Button>
        <Text color="gray_500" size="l" weight="medium">
          View our products
        </Text>
      </div>
    </S.Content>
  )
}

export default function Jumbotron() {
  return (
    <S.Jumbotron>
      <Container>
        <Row>
          <Col lg="6">
            <Content />
          </Col>
          <Col lg="6">
            <Row>
              <Col lg="6">
                <ProductCard/>
              </Col>
              <Col lg="6">
                <ProductCard/>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </S.Jumbotron>
  )
}
import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'
import { Button, Title } from '~/components/atoms'
import DividerWithText from './components/divider'
import * as S from './styles'

export default function GetStartedScreen() {
  return (
    <S.GetStartedContainer>
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col lg="4">
            <div className="method-side">
              <Title size="m" weight="medium" color="gray_100">
                Welcome to the NFJ
              </Title>
              <Button color="primary_500" size="l" fill="contained" hug={true}>
                Register with email
              </Button>
              <DividerWithText>or</DividerWithText>
            </div>
          </Col>
          <Col lg="5">
            <div className="image-side">
              <Image src="/images/vault.svg" alt="" height={500} width={500} />
            </div>
          </Col>
        </Row>
      </Container>
    </S.GetStartedContainer>
  )
}

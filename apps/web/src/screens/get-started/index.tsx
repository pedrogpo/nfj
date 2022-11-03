import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { Button, Text, Title } from '~/components/atoms'
import DividerWithText from './components/divider'
import * as S from './styles'

export default function GetStartedScreen() {
  return (
    <S.GetStartedContainer>
      <Container>
        <Row className="align-items-center justify-content-center">
          <Col lg="4">
            <S.MethodContainer>
              <Title size="m" weight="medium" color="gray_100">
                Welcome to the NFJ
              </Title>
              <Button
                color="primary_500"
                size="l"
                fill="contained"
                hug={false}
                className="register-button"
              >
                Register with email
              </Button>
              <DividerWithText>or</DividerWithText>
              <div className="social-buttons">
                <Button fill="outlined" hug={false}>
                  Continue with Google
                </Button>
                <Button fill="outlined" hug={false}>
                  Continue with Facebook
                </Button>
              </div>
              <Text size="s" weight="medium" color="gray_100" as="span">
                Do you already have an account? <Link href="#">Log in</Link>
              </Text>
            </S.MethodContainer>
          </Col>
          <Col lg="5">
            <S.ImageContainer>
              <Image src="/images/vault.svg" alt="" height={500} width={500} />
              <Title size="s" weight="medium" color="gray_100" as="h2">
                Buy and sell your juices
              </Title>
              <Text size="m" weight="regular" color="gray_500">
                Exchange your juices with the community with safe
              </Text>
            </S.ImageContainer>
          </Col>
        </Row>
      </Container>
    </S.GetStartedContainer>
  )
}

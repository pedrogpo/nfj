import * as S from './styles'
import { Col, Container, Row } from 'react-bootstrap'
import { Text, Title } from '~/components/atoms'
import Card from './card'

import { BiUser } from 'react-icons/bi'

// imgs
import overlayImg from 'public/overlays/get-started.svg'
import Image from 'next/image'

export default function GetStarted() {
  return (
    <>
      <S.GetStarted>
        <Container>
          <Row className="subject">
            <Col>
              <div>
                <Title as="h2" color="gray_100" size="xl" weight="bold">
                  Start juicing
                </Title>
                <Text color="gray_500" size="xl" weight="medium">
                  Why not getting a happy grape juice
                </Text>
              </div>
            </Col>
          </Row>
          <Row className="gy-5">
            <Col md="6" lg="3">
              <Card
                title="Join in community"
                description="Here is a good community based on people interested on the Juice NFT"
                icon={<BiUser size={30} />}
              />
            </Col>
            <Col md="6" lg="3">
              <Card
                title="Join in community"
                description="Here is a good community based on people interested on the Juice NFT"
                icon={<BiUser size={30} />}
              />
            </Col>
            <Col md="6" lg="3">
              <Card
                title="Join in community"
                description="Here is a good community based on people interested on the Juice NFT"
                icon={<BiUser size={30} />}
              />
            </Col>
            <Col md="6" lg="3">
              <Card
                title="Join in community"
                description="Here is a good community based on people interested on the Juice NFT"
                icon={<BiUser size={30} />}
                hasLines={false}
              />
            </Col>
          </Row>
          <div className="overlay">
            <Image src={overlayImg} alt="" width={110} />
          </div>
        </Container>
      </S.GetStarted>
    </>
  )
}

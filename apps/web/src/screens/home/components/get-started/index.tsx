import * as S from './styles'
import { Col, Container, Row } from 'react-bootstrap'
import { Text, Title } from '~/components/atoms'

import { BiUser } from 'react-icons/bi'

// imgs
import linesImg from 'public/overlays/progress.svg'
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
                <Title color="gray_100" size="xl" weight="bold">
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
              <div className="cards">
                <div className="card__box d-flex gap-3 align-items-center mb-3">
                  <div className="card__box__icon">
                    <BiUser size={30} />
                  </div>
                  <Image src={linesImg} alt="" width={200} />
                </div>
                <Title color="gray_100" size="s" weight="bold">
                  Join in community
                </Title>
                <Text color="gray_500" size="m" weight="medium">
                  Here is a good community based on people interested on the
                  Juice NFT
                </Text>
              </div>
            </Col>
            <Col md="6" lg="3">
              <div className="cards">
                <div className="card__box d-flex gap-3 align-items-center mb-3">
                  <div className="card__box__icon">
                    <BiUser size={30} />
                  </div>
                  <Image src={linesImg} alt="" width={200} />
                </div>
                <Title color="gray_100" size="s" weight="bold">
                  Join in community
                </Title>
                <Text color="gray_500" size="m" weight="medium">
                  Here is a good community based on people interested on the
                  Juice NFT
                </Text>
              </div>
            </Col>
            <Col md="6" lg="3">
              <div className="cards">
                <div className="card__box d-flex gap-3 align-items-center mb-3">
                  <div className="card__box__icon">
                    <BiUser size={30} />
                  </div>
                  <Image src={linesImg} alt="" width={200} />
                </div>
                <Title color="gray_100" size="s" weight="bold">
                  Join in community
                </Title>
                <Text color="gray_500" size="m" weight="medium">
                  Here is a good community based on people interested on the
                  Juice NFT
                </Text>
              </div>
            </Col>
            <Col md="6" lg="3">
              <div className="cards">
                <div className="card__box d-flex mb-3">
                  <div className="card__box__icon">
                    <BiUser size={30} />
                  </div>
                </div>
                <Title color="gray_100" size="s" weight="bold">
                  Join in community
                </Title>
                <Text color="gray_500" size="m" weight="medium">
                  Here is a good community based on people interested on the
                  Juice NFT
                </Text>
              </div>
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

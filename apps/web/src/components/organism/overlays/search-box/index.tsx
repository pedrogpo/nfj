import * as S from './styles'
import BottomSheet from '~/components/molecules/bottom-sheet'
import useMobile from '~/hooks/use-mobile/hook'
import Modal from '../../../molecules/modal'
import { Button, Input, Text } from '~/components/atoms'

import { BiSearchAlt } from 'react-icons/bi'
import { Col, Row } from 'react-bootstrap'
import Image from 'next/image'

export default function SearchBox() {
  const isMobile = useMobile()

  return (
    <>
      {isMobile ? (
        <BottomSheet>
          <DropPurchaseContent />
        </BottomSheet>
      ) : (
        <Modal topGap="5rem">
          <DropPurchaseContent />
        </Modal>
      )}
    </>
  )
}

function SearchProductBox() {
  return (
    <S.SearchProductBox>
      <Input
        background="gray_700"
        icon={<BiSearchAlt color="white" />}
        sizeOf="m"
        type="text"
        placeholder="Search for products"
      />
      <Button fill="contained" size="m">
        Search
      </Button>
    </S.SearchProductBox>
  )
}

function CardResult(){
  return (
    <S.CardBoxResult>
      <div className="head d-flex gap-3 align-items-center">
        <S.CardImage>
          <Image
            src="/juices/orange.png"
            alt=""
            width={60}
            height={60}
            quality={50}
          />
        </S.CardImage>
        <div>
          <Text color='gray_100' size="m" weight='medium'>Grape Fruit Juice</Text>
          <Text color='gray_500' size="xs" weight='regular'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
        </div>
      </div>
      <Row className='gy-3'>
        <Col xs={6}>
          <Text color='gray_500' size="xs" weight='regular'>Current price</Text>
          <Text color='gray_100' size="m" weight='medium'>$24.95</Text>
        </Col>
        <Col xs={6}>
          <Text color='gray_500' size="xs" weight='regular'>Current price</Text>
          <Text color='gray_100' size="m" weight='medium'>$24.95</Text>
        </Col>
        <Col xs={6}>
          <Text color='gray_500' size="xs" weight='regular'>Current price</Text>
          <Text color='gray_100' size="m" weight='medium'>$24.95</Text>
        </Col>
        <Col xs={6}>
          <Text color='gray_500' size="xs" weight='regular'>Current price</Text>
          <Text color='gray_100' size="m" weight='medium'>$24.95</Text>
        </Col>
      </Row>
      <Button fill="contained" hug={false} size="m">More info</Button>
    </S.CardBoxResult>
  )
}

function DropPurchaseContent() {
  return (
    <Row className="justify-content-center">
      <Col>
        <S.SearchContainer>
          <SearchProductBox />
          <S.SearchResult>
            <Text color='gray_200' size="l" weight='medium'>Results: (3)</Text>
            <div className="overflow__scroll">
              <Row className='gy-4'>
                <Col lg={4} md={6}>
                  <CardResult/>
                </Col>
                <Col lg={4} md={6}>
                  <CardResult/>
                </Col>
                <Col lg={4} md={6}>
                  <CardResult/>
                </Col>
                <Col lg={4} md={6}>
                  <CardResult/>
                </Col>
                <Col lg={4} md={6}>
                  <CardResult/>
                </Col>
                <Col lg={4} md={6}>
                  <CardResult/>
                </Col>
              </Row>
            </div>
          </S.SearchResult>
        </S.SearchContainer>
      </Col>
    </Row>
  )
}

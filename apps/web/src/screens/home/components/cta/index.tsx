import Image from 'next/image'
import { useEffect } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Button, Text, Title } from '~/components/atoms'
import { useNetwork } from '~/hooks/use-network/hook'
import { getMethod } from '~/network/authentication'
import * as S from './styles'

export default function CTA() {
  const { error, status, request } = useNetwork()

  const handleButtonClick = async () => {
    const response = await request(() => getMethod())
  }
  console.log(status)
  return (
    <S.CTA>
      <Row>
        <Col lg={8}>
          <div className="content__left">
            <Title as="h2" color="gray_100" size="l" weight="bold">
              Ready to grab a juice?
            </Title>
            <Text color="gray_200" size="m" weight="medium">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar
              imperdiet aliquet auctor nulla fermentum proin proin sed. Mattis
              vitae, leo, aenean vel elit et. Tortor duis sollicitudin augue
              ornare nec.
            </Text>
            <Button fill="white" size="l" onClick={handleButtonClick}>
              Start juicing
            </Button>
          </div>
        </Col>
        <Col lg={4}></Col>
      </Row>
    </S.CTA>
  )
}

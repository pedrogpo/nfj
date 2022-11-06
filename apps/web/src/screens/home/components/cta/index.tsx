import Image from 'next/image'
import { Col, Row } from 'react-bootstrap'
import { Button, Text, Title } from '~/components/atoms'
import * as S from './styles'

export default function CTA() {
  return (
    <S.CTA>
      <Row>
        <Col lg={8}>
          <div className='content__left'>
            <Title as="h2" color='gray_100' size='l' weight='bold' >Ready to grab a juice?</Title>
            <Text color='gray_200' size='m' weight='medium'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pulvinar imperdiet aliquet auctor nulla fermentum proin proin sed. Mattis vitae, leo, aenean vel elit et. Tortor duis sollicitudin augue ornare nec.</Text>
            <Button fill='white' size='l' >Start juicing</Button>
          </div>
        </Col>
        <Col lg={4}>
        </Col>
      </Row>
    </S.CTA>
  )
}

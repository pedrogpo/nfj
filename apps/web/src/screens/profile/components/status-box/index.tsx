import { Col, Row } from 'react-bootstrap'
import { Text, Title } from '~/components/atoms'
import * as S from './styles'

import { BiUser } from 'react-icons/bi'

export default function StatusBox() {
  return (
    <S.StatusBox>
      <Row className='align-items-center my-auto gap-md-0 gap-4'>
        <Col lg={4}>
          <S.StatusBoxItem>
            <Title
              className="mb-0"
              as="p"
              color="gray_100"
              weight="bold"
              size="m"
            >
              96 ETH
            </Title>
            <Text className='d-flex align-items-center gap-2' color="gray_500" weight="medium" size="m">
              <BiUser size={24} color='white'/> Total sales
            </Text>
          </S.StatusBoxItem>
        </Col>
        <Col lg={4}>
          <S.StatusBoxItem>
            <Title
              className="mb-0"
              as="p"
              color="gray_100"
              weight="bold"
              size="m"
            >
              96 ETH
            </Title>
            <Text className='d-flex align-items-center gap-2' color="gray_500" weight="medium" size="m">
              <BiUser size={24} color='white'/> Total sales
            </Text>
          </S.StatusBoxItem>
        </Col>
        <Col lg={4}>
          <S.StatusBoxItem>
            <Title
              className="mb-0"
              as="p"
              color="gray_100"
              weight="bold"
              size="m"
            >
              96 ETH
            </Title>
            <Text className='d-flex align-items-center gap-2' color="gray_500" weight="medium" size="m">
              <BiUser size={24} color='white'/> Total sales
            </Text>
          </S.StatusBoxItem>
        </Col>
      </Row>
    </S.StatusBox>
  )
}

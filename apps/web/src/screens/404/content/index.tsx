import * as S from './styles'
import { Col, Container, Row } from 'react-bootstrap'
import { Title, Text, TextGradient, Button } from '~/components/atoms'
import Link from 'next/link'

import img from 'public/404/img.svg'
import Image from 'next/image'

export default function Content() {
  return (
    <S.Content>
      <Container className="h-100">
        <Row className="h-100 align-items-center gap-lg-0 gap-md-5 gap-4">
          <Col lg="7" className='order-lg-1 order-2'>
            <div className="left__content">
              <Image src={img} alt="" width={650}/>
              <Image className='overlay' src={img} alt="" width={650}/>
            </div>
          </Col>
          <Col lg="5" className='order-lg-2 order-1'>
            <div className="right__content d-flex flex-column gap-3">
              <Title className="mb-0" color="gray_100" size="l" weight="bold">
                I think you are lost
              </Title>
              <Text className="mb-4" color="gray_400" size="l" weight="medium">
                Unfortunately we didn’t found the page that you are searching
                for...
              </Text>
              <Text color="gray_500" size="s" weight="bold">
                HOW CAN I HELP YOU?
              </Text>
              <div className="d-flex gap-4">
                <Link href="/">
                  <Button color="primary_500">Back to home</Button>
                </Link>
                {/* "https://www.youtube.com/watch?v=dQw4w9WgXcQ" */}
                <Button color="primary_500" fill="outlined">
                  Go to a special page
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </S.Content>
  )
}

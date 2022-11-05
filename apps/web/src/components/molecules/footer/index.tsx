import * as S from './styles'

import logoImage from 'public/icons/logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import { Col, Container, Row } from 'react-bootstrap'
import { Text } from '~/components/atoms'

export default function Footer(props: any) {
  return (
    <S.Footer>
      <Container>
        <Row>
          <Col className="mb-md-0 mb-5 mx-auto" md="3">
            <div>
              <Link href="/">
                <Image
                  src={logoImage}
                  alt="Logo NFJ"
                  width={55}
                  height={55}
                  quality={100}
                  priority
                />
              </Link>
              <Text className="mt-4" color="gray_500" size="m" weight="regular">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam
                omnis dignissimos a blanditiis.
              </Text>
            </div>
          </Col>
          <Col md="2" className="mx-auto">
            <Text color="gray_100" size="l" weight="semibold">
              Option 1
            </Text>
            <ul>
              <li>
                <Text color="gray_500" size="m" weight="regular">
                  Option 1
                </Text>
              </li>
              <li>
                <Text color="gray_500" size="m" weight="regular">
                  Option 1
                </Text>
              </li>
              <li>
                <Text color="gray_500" size="m" weight="regular">
                  Option 1
                </Text>
              </li>{' '}
              <li>
                <Text color="gray_500" size="m" weight="regular">
                  Option 1
                </Text>
              </li>
            </ul>
          </Col>
          <Col md="2" className="mx-auto">
            <Text color="gray_100" size="l" weight="semibold">
              Option 1
            </Text>
            <ul>
              <li>
                <Text color="gray_500" size="m" weight="regular">
                  Option 1
                </Text>
              </li>
              <li>
                <Text color="gray_500" size="m" weight="regular">
                  Option 1
                </Text>
              </li>
              <li>
                <Text color="gray_500" size="m" weight="regular">
                  Option 1
                </Text>
              </li>{' '}
              <li>
                <Text color="gray_500" size="m" weight="regular">
                  Option 1
                </Text>
              </li>
            </ul>
          </Col>
          <Col md="2" className="mx-auto">
            <Text color="gray_100" size="l" weight="semibold">
              Option 1
            </Text>
            <ul>
              <li>
                <Text color="gray_500" size="m" weight="regular">
                  Option 1
                </Text>
              </li>
              <li>
                <Text color="gray_500" size="m" weight="regular">
                  Option 1
                </Text>
              </li>
              <li>
                <Text color="gray_500" size="m" weight="regular">
                  Option 1
                </Text>
              </li>{' '}
              <li>
                <Text color="gray_500" size="m" weight="regular">
                  Option 1
                </Text>
              </li>
            </ul>
          </Col>
        </Row>
        <Text
          className="copyright__text text-center mt-5 mb-0"
          color="gray_400"
          size="s"
          weight="regular"
        >
          Copyright 2022. All rights reserved
        </Text>
      </Container>
    </S.Footer>
  )
}

import Link from 'next/link'
import { ReactElement } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Button, Text, Title } from '~/components/atoms'
import SocialSignUp from '~/components/molecules/social-sign-up'
import UserAccessTemplate from '~/components/templates/user-acess'
import { NextPageWithLayout } from '~/pages/_app'
import DividerWithText from '../../components/atoms/divider'
import * as S from './styles'

const GetStartedScreen: NextPageWithLayout = () => {
  return (
    <S.GetStartedContainer>
      <Row className="align-items-center justify-content-center h-100">
        <Col md="12" lg="4">
          <S.MethodContainer>
            <div className="method__title">
              <Title size="m" weight="medium" color="gray_100">
                Welcome to the NFJ
              </Title>
              <Text size="m" weight="medium" color="gray_500">
                Be part of the big juicy community
              </Text>
            </div>
            <Button
              color="primary_500"
              size="l"
              fill="contained"
              hug={false}
              className="register__buttons"
            >
              Register with email
            </Button>
            <SocialSignUp />
            <Text size="s" weight="medium" color="gray_100" as="span">
              Do you already have an account? <Link href="#">Log in</Link>
            </Text>
          </S.MethodContainer>
        </Col>
      </Row>
    </S.GetStartedContainer>
  )
}

GetStartedScreen.getLayout = (page: ReactElement) => {
  return <UserAccessTemplate>{page}</UserAccessTemplate>
}

export default GetStartedScreen

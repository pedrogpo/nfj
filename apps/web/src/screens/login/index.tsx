import { ReactElement } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Text, Title } from '~/components/atoms'
import UserAccessTemplate from '~/components/templates/user-acess'
import { NextPageWithLayout } from '~/pages/_app'

import * as S from './styles'
import Link from 'next/link'
import SocialSignUp from '~/components/molecules/social-sign-up'
import { routes } from '~/core/constants/routes'

import LoginForm from './components/login-form'

const LoginScreen: NextPageWithLayout = () => {
  return (
    <S.LoginScreenContainer>
      <Row className="align-items-center justify-content-center h-100">
        <Col md="8" lg="6" xl="4" className="align-items-center">
          <S.LoginContainer>
            <S.LoginTitleContainer>
              <Title size="m" weight="medium" color="gray_100">
                Login
              </Title>
              <Text size="m" weight="medium" color="gray_500">
                Continue selling and buying your juices
              </Text>
            </S.LoginTitleContainer>
            <LoginForm />
            <SocialSignUp />
            <Text
              size="s"
              weight="medium"
              color="gray_100"
              as="span"
              className="login__account"
            >
              Don&apos;t have an account?{' '}
              <Link href={routes.register}>Register</Link>
            </Text>
          </S.LoginContainer>
        </Col>
      </Row>
    </S.LoginScreenContainer>
  )
}

LoginScreen.getLayout = (page: ReactElement) => {
  return <UserAccessTemplate>{page}</UserAccessTemplate>
}

export default LoginScreen

import { ReactElement } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Text, Title } from '~/components/atoms'
import UserAccessTemplate from '~/components/templates/user-acess'
import { NextPageWithLayout } from '~/pages/_app'

import * as S from './styles'
import Link from 'next/link'
import SocialSignUp from '~/components/molecules/social-sign-up'
import { routes } from '~/core/constants/routes'
import RegisterForm from './register-form'

const RegisterScreen: NextPageWithLayout = () => {
  return (
    <S.RegisterScreenContainer>
      <Row className="align-items-center justify-content-center h-100">
        <Col md="8" lg="6" xl="4" className="align-items-center">
          <S.RegisterContainer>
            <S.RegisterTitleContainer>
              <Title size="m" weight="medium" color="gray_100">
                Register
              </Title>
              <Text size="m" weight="medium" color="gray_500">
                Be part of the biggest juicy community
              </Text>
            </S.RegisterTitleContainer>
            <RegisterForm />
            <SocialSignUp />
            <Text
              size="s"
              weight="medium"
              color="gray_100"
              as="span"
              className="Register__account"
            >
              Do you already have an account?{' '}
              <Link href={routes.login}>Log in</Link>
            </Text>
          </S.RegisterContainer>
        </Col>
      </Row>
    </S.RegisterScreenContainer>
  )
}

RegisterScreen.getLayout = (page: ReactElement) => {
  return <UserAccessTemplate>{page}</UserAccessTemplate>
}

export default RegisterScreen

/* eslint-disable react/no-unescaped-entities */
import { ReactElement } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Button, CheckBoxInput, Input, Text, Title } from '~/components/atoms'
import UserAccessTemplate from '~/components/templates/user-acess'
import { NextPageWithLayout } from '~/pages/_app'

import * as S from './styles'
import Link from 'next/link'
import SocialSignUp from '~/components/molecules/social-sign-up'
import { BiLock, BiUser } from 'react-icons/bi'
import { routes } from '~/core/constants/routes'

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
            <S.RegisterFormContainer>
              <Input
                placeholder="Inform your email"
                sizeOf="l"
                icon={<BiUser />}
                className="input"
              />
              <Input
                placeholder="Inform your password"
                sizeOf="l"
                icon={<BiLock />}
                className="input"
              />
              <Input
                placeholder="Confirm your password"
                sizeOf="l"
                icon={<BiLock />}
                className=""
              />
              <CheckBoxInput />
              <Button
                color="primary_500"
                size="l"
                fill="contained"
                hug={false}
                className="Register__button"
              >
                Create a personal account
              </Button>
            </S.RegisterFormContainer>
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

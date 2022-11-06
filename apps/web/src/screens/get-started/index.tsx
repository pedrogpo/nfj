import Link from 'next/link'
import { useRouter } from 'next/router'
import { ReactElement } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Button, Text, Title } from '~/components/atoms'
import { SocialSignUp } from '~/components/molecules/'
import UserAccessTemplate from '~/components/templates/user-acess'
import { routes } from '~/core/constants/routes'
import { NextPageWithLayout } from '~/pages/_app'
import * as S from './styles'

const GetStartedScreen: NextPageWithLayout = () => {
  const router = useRouter()
  return (
    <S.GetStartedContainer>
      <Row className="align-items-center justify-content-center h-100">
        <Col md="8" lg="6" xl="4">
          <S.MethodContainer>
            <S.MethodTitleContainer>
              <Title size="m" weight="medium" color="gray_100">
                Welcome to the NFJ
              </Title>
              <Text size="m" weight="medium" color="gray_500">
                Be part of the big juicy community
              </Text>
            </S.MethodTitleContainer>
            <Button
              color="primary_500"
              size="l"
              fill="contained"
              hug={false}
              className="register__buttons"
              onClick={() => router.push(routes.register)}
            >
              Register with email
            </Button>
            <SocialSignUp />
            <Text size="s" weight="medium" color="gray_100" as="span">
              Do you already have an account?{' '}
              <Link href={routes.login}>Log in</Link>
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

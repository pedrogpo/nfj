import * as S from './styles'
import DefaultLayout from '~/components/templates/default'
import { ReactElement } from 'react'
import { NextPageWithLayout } from '~/pages/_app'
import { Container, Row, Col } from 'react-bootstrap'

import ProfileBox from './components/profile-box'
import CredentialsBox from './components/credentials-box'
import StatusBox from './components/status-box'

const ProfileScreen: NextPageWithLayout = () => {
  return (
    <S.ProfileContainer>
      <Container>
        <Row className='gy-4'>
          <Col lg={6}>
            <ProfileBox />
          </Col>
          <Col lg={6} className="d-flex flex-column gap-4">
            <CredentialsBox />
            <StatusBox />
          </Col>
        </Row>
      </Container>
    </S.ProfileContainer>
  )
}

ProfileScreen.getLayout = (page: ReactElement) => {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default ProfileScreen

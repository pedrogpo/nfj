import { Col, Row } from 'react-bootstrap'
import { Text, Title } from '~/components/atoms'
import AuthorCard from '~/components/molecules/author-card'
import { TopAuthorsSection } from './styles'

export default function TopAuthors() {
  return (
    <TopAuthorsSection>
      <Row>
        <Col>
          <Row className="section__title">
            <Col>
              <Title size="l" weight="bold" color="gray_100">
                Top Authors
              </Title>
              <Text size="xl" weight="medium" color="gray_500">
                Check out the most famous collections
              </Text>
            </Col>
            <Col className="md-d-block d-none"></Col>
          </Row>
          <Row>
            <Col lg="2">
              <AuthorCard />
            </Col>
          </Row>
        </Col>
      </Row>
    </TopAuthorsSection>
  )
}

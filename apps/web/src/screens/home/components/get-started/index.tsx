import { Col, Container, Row } from "react-bootstrap"
import { Text, Title } from "~/components/atoms"
import * as S from "./styles"

export default function GetStarted() {
  return (
    <S.GetStarted>
      <Container>
        <Row>
          <Col>
            <div>
              <Title color="gray_100" size="xl" weight="bold">
                Start juicing
              </Title>
              <Text color="gray_500" size="xl" weight="medium">
                Why not getting a happy grape juice 
              </Text>
            </div>
          </Col>
        </Row>
      </Container>
    </S.GetStarted>
  )
}

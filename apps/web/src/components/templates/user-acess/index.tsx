import Image from 'next/image'
import { Col, Container, Row } from 'react-bootstrap'
import { Title } from '~/components/atoms'
import * as S from './styles'

interface UserAccessTemplateProps {
  children: React.ReactNode
}

export default function UserAccessTemplate({
  children,
}: UserAccessTemplateProps) {
  return (
    <S.TemplateContainer>
      <Container className="h-100">
        <S.LogoContainer>
          <Image
            src={'/icons/logo.svg'}
            alt="Logo NFJ"
            width={55}
            height={55}
          />
          <Title size="m" weight="semibold" color="gray_100">
            NFJ
          </Title>
        </S.LogoContainer>
        <div className="wrapper">{children}</div>
      </Container>
    </S.TemplateContainer>
  )
}

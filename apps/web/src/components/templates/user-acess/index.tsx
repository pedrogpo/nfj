import Image from 'next/image'
import Link from 'next/link'
import { Container } from 'react-bootstrap'
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
        <Link href="/">
          <S.LogoContainer>
            <Image
              src={'/icons/logo.svg'}
              alt="Logo NFJ"
              width={55}
              height={55}
            />
            <Title className="mb-0" size="m" weight="semibold" color="gray_100">
              NFJ
            </Title>
          </S.LogoContainer>
        </Link>
        {children}
      </Container>
    </S.TemplateContainer>
  )
}

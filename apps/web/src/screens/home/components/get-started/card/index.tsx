import * as S from './styles'
import { Text, Title } from '~/components/atoms'

import Image from 'next/image'

import linesImg from 'public/overlays/progress.svg'

interface CardProps {
  title: string
  description: string
  icon: JSX.Element
  hasLines?: boolean
}

export default function Card({ title, description, icon, hasLines = true} : CardProps) {
  return (
    <S.CardContainer>
      <div className="card__box d-flex gap-3 align-items-center mb-3">
        <div className="card__box__icon">
          {icon}
        </div>
        {hasLines && <Image src={linesImg} alt="" width={200} />}
      </div>
      <Title color="gray_100" size="s" weight="bold">{title}</Title>
      <Text color="gray_500" size="m" weight="medium">{description}</Text>
    </S.CardContainer>
  )
}
import Image from 'next/image'
import { Text } from '~/components/atoms'
import * as S from './styles'

export default function AuthorCard() {
  return (
    <S.AuthorCardContainer>
      <S.AuthorCardBackground img={'/images/market/strawberry.png'} />
      <div className="author_card__content">
        <div className="author__name">
          <Text color="gray_100" weight="bold" size="s">
            Strawberry Magic
          </Text>
          <Image
            src="/icons/verified.svg"
            alt="user verified"
            width={16}
            height={16}
          />
        </div>
        <Text color="gray_100" weight="regular" size="xs">
          6 collectibles
        </Text>
      </div>
    </S.AuthorCardContainer>
  )
}

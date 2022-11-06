import Image from 'next/image'
import { Text } from '~/components/atoms'
import { Author } from '~/interfaces/author'
import * as S from './styles'

interface AuthorCardProps {
  author: Author
}

export default function AuthorCard({ author }: AuthorCardProps) {
  return (
    <S.AuthorCardContainer>
      <S.AuthorCardBackground img={author.avatar} />
      <div className="author_card__content">
        <div className="author__name">
          <Text color="gray_100" weight="bold" size="s">
            {author.name}
          </Text>
          {author.isVerified && (
            <Image
              src="/icons/verified.svg"
              alt="user verified"
              width={12}
              height={12}
            />
          )}
        </div>
        <Text color="gray_100" weight="regular" size="xs">
          {`${author.collections} Collections`}
        </Text>
      </div>
    </S.AuthorCardContainer>
  )
}

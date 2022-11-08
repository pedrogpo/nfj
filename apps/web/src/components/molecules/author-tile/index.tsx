import Image from 'next/image'
import { Text } from '~/components/atoms'
import { Author } from '~/interfaces/author'
import * as S from './styles'
interface AuthorTileProps {
  author: Author
}

export default function AuthorTile({ author }: AuthorTileProps) {
  return (
    <S.DropCardAuthor>
      <Image
        src={author.avatar}
        height={50}
        width={50}
        alt={`${author.name} avatar`}
        className="author__avatar"
      />
      <Text color="gray_400" weight="regular" size="s">
        {author.name}
      </Text>
      {author.isVerified && (
        <Image
          src="/icons/verified.svg"
          alt="user verified symbol"
          width={12}
          height={12}
          className="author__verified"
        />
      )}
    </S.DropCardAuthor>
  )
}

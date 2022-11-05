import Image from 'next/image'
import { Text } from '~/components/atoms'
import * as S from './styles'

interface Author {
  id: number
  name: string
  avatar: string
  collections: number
  isVerified: boolean
}
interface AuthorCardProps {
  author: Author
}

export const authors: Author[] = [
  {
    id: 1,
    name: 'Strawberry Magic',
    avatar: '/images/market/strawberry.png',
    collections: 3,
    isVerified: true,
  },
  {
    id: 2,
    name: 'Hasta La Mango',
    avatar: '/images/market/mango.png',
    collections: 5,
    isVerified: false,
  },
  {
    id: 3,
    name: 'Lil Apple',
    avatar: '/images/market/apple.png',
    collections: 6,
    isVerified: true,
  },
  {
    id: 4,
    name: 'Vegemon',
    avatar: '/images/market/lemon.png',
    collections: 5,
    isVerified: true,
  },
  {
    id: 5,
    name: 'Graperd',
    avatar: '/images/market/grape.png',
    collections: 5,
    isVerified: true,
  },
  {
    id: 6,
    name: 'Strawberry Magic',
    avatar: '/images/market/strawberry.png',
    collections: 3,
    isVerified: true,
  },
  {
    id: 7,
    name: 'Hasta La Mango',
    avatar: '/images/market/mango.png',
    collections: 5,
    isVerified: false,
  },
  {
    id: 10,
    name: 'Lil Apple',
    avatar: '/images/market/apple.png',
    collections: 6,
    isVerified: true,
  },
  {
    id: 8,
    name: 'Vegemon',
    avatar: '/images/market/lemon.png',
    collections: 5,
    isVerified: true,
  },
  {
    id: 9,
    name: 'Graperd',
    avatar: '/images/market/grape.png',
    collections: 5,
    isVerified: true,
  },
]
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

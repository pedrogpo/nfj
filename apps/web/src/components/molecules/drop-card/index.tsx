import Image from 'next/image'
import { BiExpand } from 'react-icons/bi'
import { Text } from '~/components/atoms'
import UserCollector from '~/components/atoms/user-collector'
import { authors } from '~/screens/market/components/top-authors-section'
import * as S from './styles'

export default function DropCard() {
  const author = authors[0]
  return (
    <S.DropCardContainer>
      <S.DropCardProduct></S.DropCardProduct>
      <S.DropCardInfo>
        <S.DropCardAuthor>
          <S.DropCardAuthorAvatar img={author.avatar} />
          <Text color="gray_400" weight="regular" size="s">
            {author.name}
          </Text>
          <Image
            src="/icons/verified.svg"
            alt="user verified"
            width={12}
            height={12}
          />
        </S.DropCardAuthor>
        <S.DropCardProductInfo>
          <Text color="gray_100" weight="semibold" size="xl">
            Grape Fruit Juice
          </Text>
          <Text color="gray_100" weight="bold" size="xl">
            $24.90
          </Text>
        </S.DropCardProductInfo>
        <S.DropCardProductDescription>
          <Text color="gray_500" weight="regular" size="s">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            turpis sit mi consectetur integer. Facilisis sem porttitor cursus
            tortor, vestibulum dis laoreet viverra.
          </Text>
        </S.DropCardProductDescription>
        <S.DropCardProductSupporters>
          <div>
            <UserCollector />
            <Text color="gray_500" weight="regular" size="xs">
              and 6 others that purchased
            </Text>
          </div>
          <BiExpand size={18} />
        </S.DropCardProductSupporters>
      </S.DropCardInfo>
    </S.DropCardContainer>
  )
}

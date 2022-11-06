import Image from 'next/image'
import { BiExpand } from 'react-icons/bi'
import { Text } from '~/components/atoms'
import UserCollector from '~/components/atoms/user-collector'
import { priceFormatter } from '~/core/utils/formatters'
import { Drop } from '~/screens/market/components/our-drops'
import * as S from './styles'
interface DropCardProps {
  drop: Drop
}
export default function DropCard({ drop }: DropCardProps) {
  const author = drop.author
  return (
    <S.DropCardContainer>
      <S.DropCardProduct background={drop.product.background}>
        <Image
          alt={drop.name}
          src={drop.product.img}
          width={300}
          height={300}
        />
        <S.DropCardNewTag>
          <Text color="gray_100" weight="bold" size="xs">
            NEW
          </Text>
        </S.DropCardNewTag>
      </S.DropCardProduct>
      <S.DropCardInfo>
        <S.DropCardAuthor>
          <S.DropCardAuthorAvatar img={drop.author.avatar} />
          <Text color="gray_400" weight="regular" size="s">
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
        </S.DropCardAuthor>
        <S.DropCardProductInfo>
          <Text color="gray_100" weight="semibold" size="xl">
            {drop.name}
          </Text>
          <Text color="gray_100" weight="bold" size="xl">
            {priceFormatter.format(drop.price)}
          </Text>
        </S.DropCardProductInfo>
        <S.DropCardProductDescription>
          <Text color="gray_500" weight="regular" size="s">
            {drop.description}
          </Text>
        </S.DropCardProductDescription>
        <S.DropCardProductSupporters>
          <div>
            <UserCollector outLineColor="gray_700" />
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

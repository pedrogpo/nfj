import Image from 'next/image'
import { Col } from 'react-bootstrap'
import { BiExpand } from 'react-icons/bi'
import { Text } from '~/components/atoms'
import { priceFormatter } from '~/core/utils/formatters'
import { Drop } from '~/screens/market/components/our-drops'
import * as Dialog from '@radix-ui/react-dialog'
import * as S from './styles'
import DropPurchase from '../../overlays/purchase-drop'
import AuthorTile from '~/components/molecules/author-tile'
import { UserCollectorRow } from '~/components/molecules'
interface DropCardProps {
  drop: Drop
}
export default function DropCard({ drop }: DropCardProps) {
  const author = drop.author
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
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
            <AuthorTile author={drop.author} />
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
                <UserCollectorRow outLineColor="gray_700" />
                <Text color="gray_500" weight="regular" size="xs">
                  and 6 others that purchased
                </Text>
              </div>
              <BiExpand size={18} />
            </S.DropCardProductSupporters>
          </S.DropCardInfo>
        </S.DropCardContainer>
      </Dialog.Trigger>
      <DropPurchase drop={drop} />
    </Dialog.Root>
  )
}

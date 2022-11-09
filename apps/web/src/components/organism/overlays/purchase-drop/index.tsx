import Image from 'next/image'
import { BiShare, BiShareAlt, BiShow, BiX } from 'react-icons/bi'
import { Button, Text, Title, UserAvatar } from '~/components/atoms'
import AuthorTile from '~/components/molecules/author-tile'
import BottomSheet from '~/components/molecules/bottom-sheet'
import { priceFormatter } from '~/core/utils/formatters'
import useMobile from '~/hooks/use-mobile/hook'
import { Drop } from '~/screens/market/components/our-drops'
import Modal from '../../../molecules/modal'
import LastPurchaseSection from './components/last-purchases-section'
import PriceHistorySection from './components/price-history-section'
import * as S from './styles'

interface DropsPurchaseProps {
  drop: Drop
}
export default function DropPurchase({ drop }: DropsPurchaseProps) {
  const isMobile = useMobile()

  return (
    <>
      {isMobile ? (
        <BottomSheet>
          <DropPurchaseContent drop={drop} />
        </BottomSheet>
      ) : (
        <Modal isCenter>
          <DropPurchaseContent drop={drop} />
        </Modal>
      )}
    </>
  )
}

function DropPurchaseContent({ drop }: DropsPurchaseProps) {
  return (
    <S.PurchaseDropContainer background={drop.product.background}>
      <S.CloseButton>
        <BiX size={24} />
      </S.CloseButton>
      <S.PurchaseCardProduct>
        <Image
          alt={drop.name}
          src={drop.product.img}
          width={300}
          height={300}
        />
      </S.PurchaseCardProduct>
      <S.PurchaseCardInfo>
        <S.DropNewTag>
          <Text color="gray_100" weight="bold" size="xs">
            NEW
          </Text>
        </S.DropNewTag>
        <S.PurchaseHeader>
          <S.PurchaseHeaderCardInfo>
            <AuthorTile author={drop.author} />
            <Title color="gray_100" weight="semibold" size="m">
              {drop.name}
            </Title>
          </S.PurchaseHeaderCardInfo>
          <BiShareAlt />
        </S.PurchaseHeader>
        <Text color="gray_500" weight="regular" size="s">
          {drop.description ? drop.description : 'No description'}
        </Text>
        <S.PurchaseDropViews>
          <BiShow />
          <Text color="gray_500" weight="regular" size="xs">
            20 view
          </Text>
        </S.PurchaseDropViews>
        <PriceHistorySection />
        <LastPurchaseSection />
      </S.PurchaseCardInfo>
      <S.PurchaseFooter>
        <S.PurchaseFooterPrice>
          <Text color="gray_500" weight="medium" size="s">
            Current price
          </Text>
          <div className="purchase__footer__price">
            <Text color="gray_100" weight="medium" size="m">
              {priceFormatter.format(drop.price)}
            </Text>
            <Text color="gray_500" weight="regular" size="s">
              0.187 ETH
            </Text>
          </div>
        </S.PurchaseFooterPrice>
        <Button color="primary_500" size="l">
          Purchase Now
        </Button>
      </S.PurchaseFooter>
    </S.PurchaseDropContainer>
  )
}

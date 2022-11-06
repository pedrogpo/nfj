import DefaultLayout from '~/components/templates/default'
import * as S from './styles'
import { ReactElement } from 'react'
import { NextPageWithLayout } from '~/pages/_app'
import TopAuthors from './components/top-authors-section'
import OurDrops from './components/our-drops'

const MarketScreen: NextPageWithLayout = () => {
  return (
    <S.MarketContainer>
      <TopAuthors />
      <OurDrops />
    </S.MarketContainer>
  )
}

MarketScreen.getLayout = (page: ReactElement) => {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default MarketScreen

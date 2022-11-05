import DefaultLayout from '~/components/templates/default'
import * as S from './styles'
import { ReactElement } from 'react'
import { NextPageWithLayout } from '~/pages/_app'
import TopAuthors from './components/top-authors-section'

const MarketScreen: NextPageWithLayout = () => {
  return (
    <S.MarketContainer>
      <TopAuthors />
      <
    </S.MarketContainer>
  )
}

MarketScreen.getLayout = (page: ReactElement) => {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default MarketScreen

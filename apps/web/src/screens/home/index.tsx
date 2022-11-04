import { ReactElement } from 'react'
import DefaultLayout from '~/components/templates/default'
import { NextPageWithLayout } from '~/pages/_app'
import GetStarted from './components/get-started'
import Jumbotron from './components/jumbotron'

const HomeScreen: NextPageWithLayout = () => {
  return (
    <>
      <Jumbotron />
      <GetStarted />
    </>
  )
}

HomeScreen.getLayout = (page: ReactElement) => {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default HomeScreen

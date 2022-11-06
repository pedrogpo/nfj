import { ReactElement } from 'react'
import DefaultLayout from '~/components/templates/default'
import { NextPageWithLayout } from '~/pages/_app'
import CTA from './components/cta'
import GetStarted from './components/get-started'
import Jumbotron from './components/jumbotron'
import Showcase from './components/showcase/'

const HomeScreen: NextPageWithLayout = () => {
  return (
    <>
      <Jumbotron />
      <GetStarted />
      <Showcase />
      <CTA />
    </>
  )
}

HomeScreen.getLayout = (page: ReactElement) => {
  return <DefaultLayout>{page}</DefaultLayout>
}

export default HomeScreen

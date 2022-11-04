import DefaultLayout from '~/components/templates/default'
import GetStarted from './components/get-started'
import Jumbotron from './components/jumbotron'
import Showcase from './components/showcase/';

export default function HomeScreen() {
  return (
    <DefaultLayout>
      <Jumbotron />
      <GetStarted />
      <Showcase />
    </DefaultLayout>
  )
}

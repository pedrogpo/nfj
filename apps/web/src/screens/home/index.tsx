import { Navbar } from '~/components/molecules'
import GetStarted from './components/get-started'
import Jumbotron from './components/jumbotron'

export default function HomeScreen() {
  return (
    <>
      <Navbar />
      <main>
        <Jumbotron />
        <GetStarted />
      </main>
    </>
  )
}

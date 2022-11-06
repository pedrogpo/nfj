import { Navbar, Footer} from '~/components/organism'

interface DefaultLayoutTemplateProps {
  children: React.ReactNode
}

export default function DefaultLayout({
  children,
}: DefaultLayoutTemplateProps) {
  return (
    <>
      <Navbar/>
      <main>
        {children}
      </main>
      <Footer/>
    </>
  )
}

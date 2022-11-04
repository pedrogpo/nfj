import { Navbar } from '~/components/molecules'

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
      {/* Footer */}
    </>
  )
}

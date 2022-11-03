import * as S from './styles'
import { Container, Navbar, Nav } from 'react-bootstrap'

import logoImage from 'public/icons/logo.svg'
import Image from 'next/image'
import Link from 'next/link'

export default function Header(props: any) {
  return (
    <S.Header className="container">
      <Navbar bg="transparent" expand="lg" variant="dark">
        <Link href="/">
          <Image
            src={logoImage}
            alt="Logo NFJ"
            width={55}
            quality={100}
            priority
          />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="nav-collapse 1" className="justify-content-end mt-md-0 mt-4">
          <Nav>
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#about-us"> About us </Nav.Link>
            <Nav.Link href="#pricing"> Pricing </Nav.Link>
            <Nav.Link href="#contact"> Contact </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </S.Header>
  )
}

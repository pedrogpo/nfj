import * as S from './styles'
import { Navbar, Nav } from 'react-bootstrap'

import logoImage from 'public/icons/logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import { Button, Input } from '~/components/atoms'

import { BiSearchAlt } from 'react-icons/bi'
import { routes } from '~/core/constants/routes'

export default function Header(props: any) {
  return (
    <S.Header className="container">
      <Navbar bg="transparent" expand="lg" variant="dark">
        <div className="icons__top">
          <Link href="/">
            <Image
              src={logoImage}
              alt="Logo NFJ"
              width={55}
              height={55}
              quality={100}
              priority
            />
          </Link>
          <div className="d-flex gap-3">
            <div
              className="search__input"
              onClick={(e) => {
                alert('open modal')
              }}
            >
              <Input
                background="gray_700"
                icon={<BiSearchAlt color="white" />}
                sizeOf="m"
                type="text"
                placeholder="Search for products"
                onKeyDown={(e) => {
                  e.preventDefault()
                }}
              />
            </div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
          </div>
        </div>
        <Navbar.Collapse
          id="nav-collapse 1"
          className="justify-content-end mt-lg-0 mt-4"
        >
          <Nav className="gap-3">
            <Link passHref href={routes.home} className="nav-link">
              Home
            </Link>
            <Link passHref href={routes.market} className="nav-link">
              Market
            </Link>
            <Nav.Link href="#pricing">Community</Nav.Link>
            <Nav.Link href="#contact">FAQ</Nav.Link>
            <Link href={routes.getStated}>
              <Button>Get started</Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </S.Header>
  )
}

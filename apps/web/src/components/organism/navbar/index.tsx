import * as S from './styles'
import { Navbar, Nav } from 'react-bootstrap'

import logoImage from 'public/icons/logo.svg'
import Image from 'next/image'
import Link from 'next/link'
import { Button, Input } from '~/components/atoms'
import { SearchBox } from '~/components/organism'

import { BiSearchAlt } from 'react-icons/bi'
import { routes } from '~/core/constants/routes'

import * as Dialog from '@radix-ui/react-dialog'

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
            <Dialog.Root>
              <Dialog.Trigger asChild>
                <div className="search__input">
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
              </Dialog.Trigger>
              <SearchBox />
            </Dialog.Root>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
          </div>
        </div>
        <Navbar.Collapse
          id="nav-collapse 1"
          className="justify-content-end mt-lg-0 mt-4"
        >
          <Nav className="gap-3">
            <Link className="nav-link" href={routes.home}>
              Home
            </Link>
            <Link className="nav-link" href={routes.market}>
              Market
            </Link>
            <Link className="nav-link" href="/community">
              Community
            </Link>
            <Link className="nav-link" href="/faq">
              FAQ
            </Link>
            <Link href={routes.getStated}>
              <Button boxShadow={true} className="nav-btn">
                Get started
              </Button>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </S.Header>
  )
}

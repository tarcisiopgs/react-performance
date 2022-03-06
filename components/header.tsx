import Head from 'next/head';
import Link from 'next/link';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
  return (
    <>
      <Head>
        <title>Presentation project</title>
        <meta name='description' content='Presentation project' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navbar bg='light' expand='lg'>
        <Container>
          <Link href='/' passHref>
            <Navbar.Brand>React performance</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto'>
              <Link href='/memo' passHref>
                <Nav.Link>memo</Nav.Link>
              </Link>
              <Link href='/useMemo' passHref>
                <Nav.Link>useMemo</Nav.Link>
              </Link>
              <Link href='/useCallback' passHref>
                <Nav.Link>useCallback</Nav.Link>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;

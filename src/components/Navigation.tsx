import { FunctionComponent } from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';

export const Navigation: FunctionComponent = () => {
  return (
    <Navbar bg='primary' variant='dark'>
      <Container>
        <Navbar.Brand href='/'>Pipes Puzzle</Navbar.Brand>
        <Nav className='me-auto'>
          <Nav.Link href='/'>Home</Nav.Link>
          <Nav.Link href='/rules'>Rules</Nav.Link>
          <Nav.Link href='/about'>About Author</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

import { FunctionComponent } from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';

import { Brand, MenuItem } from './styles';

export const Navigation: FunctionComponent = () => {
  return (
    <Navbar bg='primary' variant='dark'>
      <Container>
        <Brand to='/'>Pipes Puzzle</Brand>
        <Nav className='me-auto'>
          <MenuItem to='/'>Home</MenuItem>
          <MenuItem to='rules'>Rules</MenuItem>
          <MenuItem to='about'>About Author</MenuItem>
        </Nav>
      </Container>
    </Navbar>
  );
};

import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';

const Header: React.FC = () => {
  return (
    <Navbar className='navBar' variant='dark'>
      <Container>
        <Navbar.Brand href='#home'>REACT-SCHOOL</Navbar.Brand>
        <Nav className=' justify-content-end'>
          <Nav.Link href='#home'>Home</Nav.Link>
          <Nav.Link href='#features'>Features</Nav.Link>
          <Nav.Link href='#'>Вход</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;

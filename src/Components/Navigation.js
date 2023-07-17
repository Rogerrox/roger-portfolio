import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


export default function Navigation({currentPage, handlePageChange}) {
return(
    <Navbar bg="primary" data-bs-theme="dark">
    <Container>
      <Navbar.Brand href="/">Roger Medellin</Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link href="#aboutme" onClick={()=>handlePageChange("About")}>About me</Nav.Link>
        <Nav.Link href="#work" onClick={()=>handlePageChange("Work")}>Work</Nav.Link>
        <Nav.Link href="#contactme"onClick={()=>handlePageChange("Contact")}>Contact Me</Nav.Link>
      </Nav>
    </Container>
  </Navbar>

)

}
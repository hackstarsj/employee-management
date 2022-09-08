import { React } from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom'

function Header() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>Employee Dashboard</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="me-auto">
            <Link className={window.location.pathname === "/addemployee"? 'nav-link active':'nav-link' } to="/addemployee">ADD EMPLOYEE</Link>
            <Link className={window.location.pathname === "/" || window.location.pathname === "/view" ? 'nav-link active':'nav-link' }  to="/">ALL EMPLOYEE</Link>
          </Nav>
          <Navbar.Text>
            Welcome User
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

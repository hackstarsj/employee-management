import { React } from "react";
import { Col,Container } from "react-bootstrap";

function Footer() {
  return (
    <Container fluid className="bg-dark text-white mt-5 p-2 text-center">
            <Col lg="12">
                <p>Employee Management CRUD</p>
            </Col>
    </Container>
  );
}

export default Footer;

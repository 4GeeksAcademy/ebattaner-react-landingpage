import { Navbar, Container, Nav } from "react-bootstrap";


const Menu = ({ currentPage, pageSetter }) => {
  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand
          className="me-auto p-2"
          onClick={() => pageSetter("landingPage")}
        >
          Reacts de Battaner
        </Navbar.Brand>
        <Nav className="justify-content-end" activeKey={currentPage}>
          <Nav.Item>
            <Nav.Link
              eventKey="landingPage"
              onClick={() => pageSetter("landingPage")}
            >
              Landing
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              eventKey="counterPage"
              onClick={() => pageSetter("counterPage")}
            >
              Counter
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default Menu;

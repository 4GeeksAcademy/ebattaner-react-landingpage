import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

const Pies = () => {
  return (
    <Navbar bg="dark" data-bs-theme="dark" className="mt-5">
      <Container className="justify-content-center p-3">
        <Navbar.Brand>Copyright 2024 MyWebsite</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Pies;

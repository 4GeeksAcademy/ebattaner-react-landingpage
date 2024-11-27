import Carta from "../components/card";
import Slider from "../components/jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Landing = () => {
  return (
    <Container className="p-5">
      <Slider
        sliderTitle={"A Warm Welcome!"}
        sliderText={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ut magna nulla. Fusce quis justo diam. Sed eget ante ac velit vestibulum porta. Cras scelerisque enim feugiat lacinia tempor. Sed vitae convallis tortor. "
        }
      />
      <Row fluid="md" className="p-5 ">
        <Col sm={3} className="pb-3">
          <Carta
            imgHolder={"https://picsum.photos/500/325"}
            cardTitle={"Una Carta"}
            cardText={"Buenos días"}
          />
        </Col>
        <Col sm={3} className="pb-3">
          <Carta
            imgHolder={"https://picsum.photos/500/325"}
            cardTitle={"Otra Carta"}
            cardText={"Buenas tardes"}
          />
        </Col>
        <Col sm={3} className="pb-3">
          <Carta
            imgHolder={"https://picsum.photos/500/325"}
            cardTitle={"Y otra Carta"}
            cardText={"Buenas noches"}
          />
        </Col>
        <Col sm={3} className="pb-3">
          <Carta
            imgHolder={"https://picsum.photos/500/325"}
            cardTitle={"Una Carta más"}
            cardText={"¿Sigues Aquí?"}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Landing;

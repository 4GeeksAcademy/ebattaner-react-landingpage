import Boton from "./button";
import Card from "react-bootstrap/Card";

const Carta = ({ imgHolder, cardTitle, cardText }) => {
  return (
    <Card /*style={{ width: '18rem' }}*/>
      <Card.Img variant="top" src={imgHolder} />
      <Card.Body>
        <Card.Title>{cardTitle}</Card.Title>
        <Card.Text>{cardText}</Card.Text>
        <Boton buttonText={"Find Out More!"} />
      </Card.Body>
    </Card>
  );
};

export default Carta;

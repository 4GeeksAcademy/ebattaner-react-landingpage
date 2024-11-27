import Boton from "./button";
import { Container } from "react-bootstrap";

const Slider = ({ sliderTitle, sliderText }) => {
  return (
    <Container className="p-5 bg-body-tertiary">
      <h1 className="mt-5 fs-1">{sliderTitle}</h1>
      <p className="mt-5">{sliderText}</p>
      <p className="mt-5">
        <Boton buttonText={"Call to Action!"} />
      </p>
    </Container>
  );
};

export default Slider;

import Button from "react-bootstrap/Button";

function siguienteColor(colorActual, colores) {
  const index = colores.indexOf(colorActual);
  return index !== -1 && index < colores.length - 1
    ? colores[index + 1]
    : colores[0];
}

const Boton = ({ buttonText, setColorActivo, colorActivo, colores }) => {
  return (
    <Button
      variant="primary"
      onClick={() => setColorActivo(siguienteColor(colorActivo, colores))}
    >
      {buttonText}
    </Button>
  );
};

export default Boton;
